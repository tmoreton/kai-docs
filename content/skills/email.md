---
title: Email Skill
description: Send and read emails via SMTP/IMAP
category: skills
---

# Email Skill

Send and read emails via SMTP/IMAP using Nodemailer. Supports any SMTP provider (Gmail, Outlook, custom servers).

## Installation

```bash
kai skill install email
```

Or manually:

```bash
cd skills/email
npm install
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `KAI_SKILL_EMAIL_SMTP_HOST` | SMTP server hostname | - |
| `KAI_SKILL_EMAIL_SMTP_PORT` | SMTP server port | 587 |
| `KAI_SKILL_EMAIL_SMTP_USER` | SMTP username / email | - |
| `KAI_SKILL_EMAIL_SMTP_PASS` | SMTP password or app password | - |
| `KAI_SKILL_EMAIL_SMTP_SECURE` | Use SSL/TLS | false |
| `KAI_SKILL_EMAIL_IMAP_HOST` | IMAP server hostname | (auto from SMTP) |
| `KAI_SKILL_EMAIL_IMAP_PORT` | IMAP server port | 993 |
| `KAI_SKILL_EMAIL_IMAP_USER` | IMAP username | (same as SMTP_USER) |
| `KAI_SKILL_EMAIL_IMAP_PASS` | IMAP password | (same as SMTP_PASS) |

### Gmail Setup

1. Enable 2-Factor Authentication on your Google account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password (not your regular password) for `SMTP_PASS`

```bash
export KAI_SKILL_EMAIL_SMTP_HOST=smtp.gmail.com
export KAI_SKILL_EMAIL_SMTP_PORT=587
export KAI_SKILL_EMAIL_SMTP_USER=your.email@gmail.com
export KAI_SKILL_EMAIL_SMTP_PASS=xxxx xxxx xxxx xxxx
export KAI_SKILL_EMAIL_SMTP_SECURE=false
```

### Outlook/Office 365 Setup

```bash
export KAI_SKILL_EMAIL_SMTP_HOST=smtp.office365.com
export KAI_SKILL_EMAIL_SMTP_PORT=587
export KAI_SKILL_EMAIL_SMTP_USER=your.email@outlook.com
export KAI_SKILL_EMAIL_SMTP_PASS=your_password
export KAI_SKILL_EMAIL_SMTP_SECURE=false
```

## Tools

### send

Send an email to one or more recipients.

**Parameters:**
- `to` (required) - Recipient email address(es), comma-separated for multiple
- `subject` (required) - Email subject line
- `body` (required) - Email body (plain text)
- `html` - HTML email body (optional)
- `cc` - CC recipients
- `bcc` - BCC recipients
- `reply_to` - Reply-To address
- `from_name` - Display name for sender

### read

Read recent emails from inbox via IMAP.

**Parameters:**
- `folder` - Mailbox folder (default: INBOX)
- `limit` - Number of emails to fetch (default: 10, max: 50)
- `unseen_only` - Only fetch unread emails

### search

Search emails by criteria.

**Parameters:**
- `from` - Filter by sender
- `subject` - Filter by subject
- `since` - Emails since date (YYYY-MM-DD)
- `before` - Emails before date (YYYY-MM-DD)
- `unseen_only` - Only return unread
- `limit` - Max results

### verify

Test the SMTP connection.

## Usage Examples

```
Send email to team@company.com with subject "Report Ready" and body "The report is attached."
```

```
Read last 5 unread emails from inbox
```

```
Search for emails from boss@company.com since 2024-01-01
```

## Dependencies

- `nodemailer` - SMTP email sending
- Node.js built-in `tls` - IMAP client

## License

MIT
