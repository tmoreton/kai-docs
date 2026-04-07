---
title: Google Sheets Skill
description: Create spreadsheets, export data, share reports
category: skills
---

# Google Sheets Skill

Google Sheets — create spreadsheets, export data, share reports.

## Configuration

### Service Account (Recommended for server-side)

| Variable | Description |
|----------|-------------|
| `GOOGLE_SERVICE_ACCOUNT_JSON` | Service account JSON key (full content as string) |

### OAuth 2.0 (User-level access)

| Variable | Description |
|----------|-------------|
| `GOOGLE_CLIENT_ID` | OAuth 2.0 Client ID |
| `GOOGLE_CLIENT_SECRET` | OAuth 2.0 Client Secret |
| `GOOGLE_REFRESH_TOKEN` | OAuth 2.0 Refresh Token |
| `GOOGLE_ACCESS_TOKEN` | OAuth 2.0 Access Token (short-lived) |
| `GOOGLE_REDIRECT_URI` | OAuth redirect URI (default: http://localhost) |

### Sheet Options

| Variable | Description |
|----------|-------------|
| `default_spreadsheet_id` | Default spreadsheet ID |

## Tools

| Tool | Description |
|------|-------------|
| `setup` | Set up credentials via OAuth or Service Account |
| `create_spreadsheet` | Create a new spreadsheet with optional sheets |
| `append_rows` | Append rows of data to a spreadsheet |
| `update_cell` | Update a specific cell or range |
| `get_values` | Read values from a spreadsheet range |
| `share_spreadsheet` | Share with users or make public |

## Setup

### Service Account (Easiest)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. IAM & Admin → Service Accounts → Create Key
3. Download JSON key
4. Use full JSON content as `GOOGLE_SERVICE_ACCOUNT_JSON`

### OAuth 2.0

1. Create OAuth credentials in Google Cloud Console
2. Complete OAuth consent flow
3. Get refresh token

## Usage Examples

```
Create a new spreadsheet called "Analytics Report"
```

```
Append these rows to my spreadsheet: [["Date", "Views"], ["2024-01-01", 1000]]
```

```
Update cell A1 in Sheet1 to "Total Revenue"
```

```
Get all values from Sheet1
```

```
Share my spreadsheet with team@company.com
```

## Dependencies

- `googleapis`

## License

MIT
