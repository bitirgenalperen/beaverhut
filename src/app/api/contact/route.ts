import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Received contact form submission:', body)
    // TODO: Implement contact form submission logic
    return NextResponse.json({ message: 'Message sent successfully' })
  } catch (error) {
    console.error('Error in contact form submission:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
} 