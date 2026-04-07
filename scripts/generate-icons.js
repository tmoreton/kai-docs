const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../src-tauri/icons');
const SOURCE_SVG = path.join(__dirname, '../public/logo.svg');

// Ensure icons directory exists
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// Generate PNG icons from SVG using ImageMagick
const sizes = [
  { name: '32x32.png', size: 32 },
  { name: '128x128.png', size: 128 },
  { name: '128x128@2x.png', size: 256 },
];

console.log('Generating Tauri app icons...');

sizes.forEach(({ name, size }) => {
  const outputPath = path.join(ICONS_DIR, name);
  try {
    execSync(`convert -background none -resize ${size}x${size} "${SOURCE_SVG}" "${outputPath}"`);
    console.log(`✓ Generated ${name}`);
  } catch (error) {
    console.error(`✗ Failed to generate ${name}:`, error.message);
    process.exit(1);
  }
});

// Generate icon.ico (Windows) - requires multiple sizes
const icoSizes = [16, 32, 48, 64, 128, 256];
const icoTempFiles = icoSizes.map(size => {
  const tempPath = path.join(ICONS_DIR, `temp_${size}.png`);
  execSync(`convert -background none -resize ${size}x${size} "${SOURCE_SVG}" "${tempPath}"`);
  return tempPath;
});

try {
  execSync(`convert ${icoTempFiles.join(' ')} "${path.join(ICONS_DIR, 'icon.ico')}"`);
  console.log('✓ Generated icon.ico');
  // Clean up temp files
  icoTempFiles.forEach(f => fs.unlinkSync(f));
} catch (error) {
  console.error('✗ Failed to generate icon.ico:', error.message);
  process.exit(1);
}

// Generate icon.icns (macOS) - requires iconutil or png2icns
// For now, create a high-res PNG that can be converted manually
const icnsPath = path.join(ICONS_DIR, 'icon.icns.png');
try {
  execSync(`convert -background none -resize 512x512 "${SOURCE_SVG}" "${icnsPath}"`);
  console.log('✓ Generated icon.icns.png (use this with iconutil to create .icns)');
  console.log('  To create .icns: iconutil -c icns icon.iconset');
} catch (error) {
  console.error('✗ Failed to generate icon.icns base:', error.message);
}

console.log('\nIcon generation complete!');
console.log(`Icons saved to: ${ICONS_DIR}`);
