import { NextRequest, NextResponse } from 'next/server'

// TODO: Connect to a real email/backend service.
// Options: Resend (resend.com), EmailJS, Nodemailer via SMTP, or a CRM webhook.
// Add your provider's SDK here and send a notification email to booking@ridecoretravel.co.uk
// and a confirmation email to the customer.

export async function POST(req: NextRequest) {
  const data = await req.json()

  // Validate required fields
  const required = ['name', 'email', 'phone', 'passengers', 'pickup', 'dropoff', 'date', 'time']
  for (const field of required) {
    if (!data[field]) {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 })
    }
  }

  // TODO: Replace this stub with your email/notification logic.
  console.log('New quote request:', data)

  return NextResponse.json({ ok: true })
}
