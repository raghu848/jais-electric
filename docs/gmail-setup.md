# Gmail Setup for Contact Form Notifications

This document explains how to set up Gmail with App Passwords to send email notifications from your contact form.

## Prerequisites

- A Gmail account (or Google Workspace account)
- Access to your Google Account settings

## Step 1: Enable 2-Factor Authentication

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to **Security** > **2-Step Verification**
3. Follow the steps to enable 2-Step Verification if not already enabled

## Step 2: Generate an App Password

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to **Security** > **2-Step Verification** > **App passwords**
3. Sign in to your Google Account if prompted
4. Select **Mail** from the dropdown menu for app selection
5. Select the device you're using (or "Other" for custom name like "ContactForm")
6. Click **Generate**
7. Copy the 16-character password that appears

## Step 3: Configure Environment Variables

1. Open your `.env.local` file
2. Replace the placeholder values with your actual Gmail credentials:

```
GMAIL_USER=your_actual_email@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password
ADMIN_EMAIL=your_notification_email@gmail.com
```

## Step 4: Update Your Contact Form

The contact form is already configured to send emails using these environment variables. When someone submits the form:

1. The form data will be sent to your API route at `/api/contact`
2. The API route will send an email notification to the address specified in `ADMIN_EMAIL`
3. The email will contain the form data (name, email, phone, service type, and message)

## Alternative Email Providers

If you prefer to use a different email provider:

### Outlook/Hotmail
```
GMAIL_USER=your_email@outlook.com
GMAIL_APP_PASSWORD=your_app_password
# Change transporter config in route.ts to:
// {
//   host: 'smtp-mail.outlook.com',
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_APP_PASSWORD,
//   },
// }
```

### Other SMTP providers
Update the transporter configuration in `app/api/contact/route.ts` according to your provider's SMTP settings.

## Security Best Practices

⚠️ **Important Security Notes**:
- Never commit your `.env.local` file to version control
- Store the `.env.local` file in your `.gitignore` file
- Regularly review and rotate your App Passwords
- Monitor your email account for any unauthorized access

## Troubleshooting

1. **"Invalid credentials" error**:
   - Verify your App Password is correct
   - Ensure you're using the App Password, not your regular Gmail password
   - Check that 2FA is enabled on your account

2. **Emails not being sent**:
   - Verify the ADMIN_EMAIL is correct
   - Check your spam/junk folder
   - Ensure your Gmail account allows less secure apps (though this shouldn't be necessary with App Passwords)

3. **Rate limiting**:
   - Gmail has daily sending limits (typically 500 emails/day for regular accounts)
   - For higher volumes, consider upgrading to Google Workspace

## Testing the Setup

1. Start your Next.js application
2. Submit the contact form with test data
3. Check your inbox for the notification email
4. Verify the data matches what was entered in the form