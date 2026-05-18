import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, subject, message } = await request.json();

    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email to Hassan
    const toHassanMail = {
      from: process.env.EMAIL_USER,
      to: 'muhassannaeem@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Confirmation email to user
    const toUserMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - Muhammad Hassan Naeem',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${fullName},</p>
        <p>I received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <p>Best regards,<br>Muhammad Hassan Naeem</p>
      `,
    };

    await transporter.sendMail(toHassanMail);
    await transporter.sendMail(toUserMail);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
