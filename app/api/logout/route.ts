import { NextResponse } from 'next/server'

export async function POST() {
  // In a real application, you would destroy the session here
  return NextResponse.json({ message: "Logged out successfully" })
}