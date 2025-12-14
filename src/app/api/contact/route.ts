import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, businessName, contact, needs, language } = body;

    // Validate required fields
    if (!name || !contact || !needs) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if Resend is configured
    if (!resend) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Bomb City Studios <onboarding@resend.dev>', // Update with verified domain
      to: ['bryan.blankenburg@gmail.com'],
      subject: `New Quote Request from ${name}${businessName ? ` - ${businessName}` : ''}`,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        ${businessName ? `<p><strong>Business:</strong> ${businessName}</p>` : ''}
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Language Preference:</strong> ${language || 'Not specified'}</p>
        <p><strong>Project Details:</strong></p>
        <p>${needs.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted via BombCityStudios.com</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
