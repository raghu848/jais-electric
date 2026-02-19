import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Dynamically import nodemailer to avoid SSR issues
    const nodemailerModule = await import('nodemailer');
    const nodemailer = nodemailerModule.default || nodemailerModule;

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, '');
    const adminEmail = process.env.ADMIN_EMAIL || gmailUser;

    // Validate required env vars early (avoid confusing Gmail errors)
    if (!gmailUser || !gmailAppPassword) {
      return new Response(
        JSON.stringify({ error: 'Server email configuration is missing. Please set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local and restart the dev server.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Helpful diagnostics without leaking secrets
    if (gmailAppPassword.length !== 16) {
      console.warn(
        `GMAIL_APP_PASSWORD length is ${gmailAppPassword.length} (expected 16). Check for extra characters/spaces and restart the server.`
      );
    }

    // 1. Save data to Google Sheet via Apps Script Webhook (PRIORITY)
    // We do this BEFORE sending the email as requested.
    if (process.env.GOOGLE_SHEET_WEBHOOK) {
      try {
        const sheetData = {
          timestamp: new Date().toISOString(),
          name,
          email,
          phone: phone || '',
          service: service || '',
          message,
        };

        const sheetResponse = await fetch(process.env.GOOGLE_SHEET_WEBHOOK, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sheetData),
        });

        if (!sheetResponse.ok) {
          console.error('Google Sheet Webhook returned error:', sheetResponse.statusText);
          // We continue to send email even if sheet fails, unless strict Requirement otherwise. 
          // Usually better to have at least one notification succeed.
        }
      } catch (sheetError) {
        console.error('Error saving to Google Sheet:', sheetError);
      }
    }

    // 2. Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const mailOptions = {
      from: gmailUser,
      to: adminEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service Type:</strong> ${service || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This is an automated message from your website contact form.</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: 'Form submitted successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);

    // Provide more specific error messages
    let errorMessage = 'An error occurred while processing your request.';

    if (error instanceof Error) {
      if (error.message.includes('Invalid login') || error.message.includes('EAUTH')) {
        errorMessage = 'Email authentication failed. Please check your Gmail credentials and App Password.';
      } else if (error.message.includes('ENOTFOUND') || error.message.includes('network')) {
        errorMessage = 'Network error. Please check your internet connection.';
      }
    }

    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}