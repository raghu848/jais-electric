# Google Sheets Integration Setup

This document explains how to set up Google Sheets integration to save form submissions.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Contact Form Submissions"
4. Add the following headers in row 1:
   - Column A: Timestamp
   - Column B: Name
   - Column C: Email
   - Column D: Phone
   - Column E: Service Type
   - Column F: Message

## Step 2: Set up Google Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Replace the default code with the following:

```javascript
function doPost(e) {
  try {
    const sheetId = 'YOUR_SHEET_ID'; // Replace with your actual Google Sheet ID
    const sheetName = 'Sheet1'; // Replace with your sheet name if different
    
    const sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
    
    // Parse the request data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(), // Timestamp
      data.name || '', // Name
      data.email || '', // Email
      data.phone || '', // Phone
      data.service || '', // Service Type
      data.message || '' // Message
    ];
    
    // Append the row to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({result: 'success', message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    console.error('Error in doPost:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({result: 'error', message: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: doGet function for testing
function doGet(e) {
  return HtmlService.createHtmlOutput("Apps Script is running. Use POST method to submit data.");
}
```

3. **Important**: Replace `YOUR_SHEET_ID` with your actual Google Sheet ID.
   - Your Google Sheet ID is the long string in your sheet URL: `https://docs.google.com/spreadsheets/d/[YOUR_SHEET_ID]/edit`
   - Also verify the sheet name if it's different from "Sheet1"

## Step 3: Deploy the Script

1. Click the **Deploy** button in the top menu
2. Select **New Deployment**
3. Fill in the deployment information:
   - Description: "Contact Form Handler"
   - Type: "Web app"
4. For "Execute as", select: "Me"
5. For "Who has access", select: "Anyone" (this allows your Next.js app to send data)
6. Click **Deploy**
7. Copy the **Web App URL** that appears after deployment

## Step 4: Configure Environment Variables

1. In your `.env.local` file, replace the `GOOGLE_SHEET_WEBHOOK` value with your copied Web App URL:
   ```
   GOOGLE_SHEET_WEBHOOK=https://script.google.com/macros/s/[YOUR_ACTUAL_SCRIPT_ID]/exec
   ```

## Step 5: Test the Integration

1. Make sure your Next.js app is running
2. Submit the contact form
3. Check your Google Sheet to see if the new entry appears

## Security Notes

⚠️ **Important Security Warning**:
- The script is configured to allow access by "Anyone" so your Next.js app can submit data
- This is necessary for the integration to work
- Monitor your sheet for any unusual activity
- Consider adding validation or rate limiting if needed

## Troubleshooting

1. **Form submits but data doesn't appear in sheet**:
   - Double-check that your sheet ID is correct
   - Verify the sheet name matches what's in the script
   - Check that the script deployment is active

2. **Permission errors**:
   - Ensure the script deployment allows access to "Anyone"
   - Check that your Google account has proper permissions

3. **Webhook returns error**:
   - Check the script execution logs in the Apps Script dashboard
   - Verify the sheet exists and is accessible

## Updating the Script

If you need to make changes to the script:
1. Edit the code in Apps Script
2. Click **Deploy** > **Manage deployments**
3. Update the existing deployment or create a new one
4. Copy the new Web App URL if it changed