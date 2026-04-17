// app/api/send-mail/route.ts
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()

  // send email logic here

  return NextResponse.json({ success: true })
}
