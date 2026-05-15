import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import { PERSONAL_INFO } from '@/constants'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 },
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: PERSONAL_INFO.email,
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    })

    if (error) {
      return Response.json(
        { success: false, error: error.message },
        { status: 400 },
      )
    }

    return NextResponse.json({
      success: true,
      data,
      message: 'Message sent successfully',
    })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
