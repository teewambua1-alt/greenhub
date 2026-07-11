import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email = body.email as string

    if (!email || !email.includes('@') || email.length < 5) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    await db.newsletterSubscriber.upsert({
      where: { email },
      update: {},
      create: { email },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter API error:', error)
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 })
  }
}
