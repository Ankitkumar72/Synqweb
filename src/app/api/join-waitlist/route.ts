import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

// Initialize Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Valid email address is required' },
        { status: 400 }
      );
    }

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { message: 'Database is not configured properly.' },
        { status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Save to Supabase
    const { error: supabaseError } = await supabase
      .from('waitlist')
      .insert([{ email }]);

    if (supabaseError) {
      if (supabaseError.code === '23505') { // postgres unique constraint violation code
        return NextResponse.json(
          { message: "You're already on the list!" },
          { status: 409 }
        );
      }
      console.error('Supabase Error:', supabaseError);
      return NextResponse.json(
        { message: 'Something went wrong, please try again' },
        { status: 500 }
      );
    }

    // 2. Send Confirmation Email via Gmail SMTP
    try {
      if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
        await transporter.sendMail({
          from: `"Synq" <${process.env.GMAIL_USER}>`,
          to: email,
          subject: "You're on the waitlist! 🎉",
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; text-align: center;">
              <h1 style="color: #111; font-weight: 900; letter-spacing: -0.05em; font-size: 32px; margin-bottom: 24px;">Welcome to the Synq Waitlist!</h1>
              <p style="color: #555; font-size: 16px; line-height: 1.6; font-weight: 500; margin-bottom: 16px;">Hi there,</p>
              <p style="color: #555; font-size: 16px; line-height: 1.6; font-weight: 500; margin-bottom: 32px;">Thanks for joining the waitlist for Synq. We're excited to have you on board and can't wait to show you what we've been building.</p>
              <div style="background-color: #f8f9fa; border-radius: 16px; padding: 24px; margin-bottom: 32px;">
                <p style="color: #333; font-size: 14px; font-weight: 600; margin: 0;">We'll let you know as soon as we're ready for you to try it out! Keep an eye on your inbox.</p>
              </div>
              <p style="color: #777; font-size: 14px; font-weight: 500;">Best,<br/>The Synq Team</p>
            </div>
          `,
        });
      } else {
        console.warn("Gmail SMTP credentials are not set, skipping confirmation email.");
      }
    } catch (emailError) {
      console.error('Email Error:', emailError);
      // We don't return an error here so the user still gets a success message
      // for being added to the waitlist even if the email failed to send.
    }

    return NextResponse.json(
      { message: "You're on the list!" },
      { status: 200 }
    );
  } catch (err) {
    console.error('Server Error:', err);
    return NextResponse.json(
      { message: 'Something went wrong, please try again' },
      { status: 500 }
    );
  }
}
