import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f9fafb", // gray-50
        foreground: "#111827", // gray-900
        primary: {
          DEFAULT: "#14b8a6", // teal-500
          foreground: "#ffffff",
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#111827",
        },
        border: "#e5e7eb", // gray-200
        input: "#e5e7eb",
        ring: "#14b8a6",
        featured: "#f0fdfa", // mint background
        muted: {
          DEFAULT: "#f3f4f6", // gray-100
          foreground: "#6b7280", // gray-500
        },
        accent: {
          DEFAULT: "#f0fdfa", // mint
          foreground: "#0d9488",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "1rem", // 16px
        md: "0.75rem", // 12px
        sm: "0.5rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
