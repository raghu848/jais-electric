# Contact Form Integration Guide

Complete setup guide for the contact form with email notifications and Google Sheets integration.

## Overview

This contact form implementation includes:
- Frontend form with validation and loading states
- Backend API route for processing submissions
- Email notifications via Nodemailer
- Data storage in Google Sheets via Apps Script
- Comprehensive error handling and user feedback

## Files Created

### Frontend
- `components/pages/ContactPage.tsx` - Updated contact form with submission handling

### Backend
- `app/api/contact/route.ts` - API route for processing form submissions

### Configuration
- `.env.local` - Environment variables for credentials

### Documentation
- `docs/google-sheets-setup.md` - Google Sheets integration setup
- `docs/gmail-setup.md` - Gmail configuration guide

## Setup Instructions

### Step 1: Install Dependencies

Make sure you have the required dependencies installed:

```bash
npm install nodemailer
```

### Step 2: Configure Gmail (Email Notifications)

1. Follow the instructions in `docs/gmail-setup.md` to set up your Gmail account
2. Generate an App Password and update your `.env.local` file

### Step 3: Set up Google Sheets Integration

1. Follow the instructions in `docs/google-sheets-setup.md` to create the Google Sheet and Apps Script
2. Update the `GOOGLE_SHEET_WEBHOOK` in your `.env.local` file

### Step 4: Environment Variables

Ensure your `.env.local` file contains all required variables:

```env
# Gmail credentials for nodemailer
GMAIL_USER=your_email@gmail.com
GMAIL_APP_PASSWORD=your_app_password

# Admin email to receive notifications
ADMIN_EMAIL=info@jaiselectrical.ca

# Google Sheets webhook URL
GOOGLE_SHEET_WEBHOOK=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### Step 5: Test the Implementation

1. Start your Next.js development server:
```bash
npm run dev
```

2. Visit the contact page in your browser
3. Submit the form with test data
4. Verify:
   - Email notification arrives in your inbox
   - Entry appears in your Google Sheet
   - Success message displays on the form

## Features

### Frontend Features
- Form validation for required fields
- Email format validation
- Loading state during submission
- Success/error messaging
- Form disabling during submission
- Responsive design

### Backend Features
- Input validation and sanitization
- Email notification with form data
- Google Sheets data persistence
- Error handling and logging
- Proper HTTP status codes

## Error Handling

The system handles various error scenarios:

- **Client-side validation**: Prevents submission of invalid data
- **Network errors**: Graceful handling of connection issues
- **Server errors**: Proper error responses from API
- **Email delivery**: Captures and reports email sending failures
- **Google Sheets integration**: Handles webhook failures

## Security Considerations

- All sensitive credentials stored in environment variables
- Form data validated on both client and server
- Rate limiting considerations for production use
- Secure transmission via HTTPS

## Customization Options

### Changing Email Template
Modify the HTML template in `app/api/contact/route.ts` to customize the notification email.

### Adding Fields
1. Update the form state in `ContactPage.tsx`
2. Add new input fields to the JSX
3. Update the API route to handle new fields
4. Update the Google Sheets script to accommodate new columns

### Styling Changes
Update the Tailwind classes in `ContactPage.tsx` to match your design preferences.

## Production Deployment

### Environment Variables
Remember to set up your environment variables in your production environment:
- Vercel: Settings > Environment Variables
- Netlify: Site settings > Build & deploy > Environment
- Other platforms: Refer to platform-specific documentation

### Monitoring
Consider implementing monitoring for:
- Email delivery success/failure rates
- Google Sheets integration health
- Form submission analytics

## Troubleshooting

### Common Issues

1. **Emails not being sent**:
   - Check Gmail App Password configuration
   - Verify environment variables are correctly set
   - Check Gmail account sending limits

2. **Google Sheets not receiving data**:
   - Verify webhook URL is correct
   - Check Apps Script deployment status
   - Ensure Google Sheet permissions are properly set

3. **Form submission failing**:
   - Check browser console for errors
   - Verify API route is accessible
   - Confirm server-side validation requirements

### Debugging Tips

Enable logging in the API route for debugging:

```typescript
console.log('Form data received:', { name, email, phone, service, message });
```

Check server logs when deployed to identify issues with email sending or Google Sheets integration.

## Maintenance

### Credential Rotation
Regularly rotate your Gmail App Password and update environment variables accordingly.

### Monitoring Limits
Monitor your email provider's sending limits and Google Sheets API quotas to ensure continued operation.

### Security Updates
Keep dependencies updated, particularly `nodemailer`, to ensure security patches are applied.