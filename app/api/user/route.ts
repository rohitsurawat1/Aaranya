import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import clientPromise from '@/lib/mongodb'

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  if (!token) {
    return NextResponse.json({ user: null })
  }

  // In a real application, you would verify the token here
  // For this example, we'll just assume it's valid and contains the user's email

  const client = await clientPromise
  const db = client.db("aaranya")

  const user = await db.collection("users").findOne({ email: token.value })

  if (user) {
    const { password, ...userWithoutPassword } = user
    return NextResponse.json({ user: userWithoutPassword })
  } else {
    return NextResponse.json({ user: null })
  }
}