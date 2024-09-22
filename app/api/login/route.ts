import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  const { email, password } = await request.json()

  const client = await clientPromise
  const db = client.db("aaranya")

  const user = await db.collection("users").findOne({ email })

  if (user && bcrypt.compareSync(password, user.password)) {
    const { password, ...userWithoutPassword } = user
    return NextResponse.json({ user: userWithoutPassword })
  } else {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 })
  }
}