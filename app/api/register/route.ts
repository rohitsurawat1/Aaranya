import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  const { name, email, password } = await request.json()

  const client = await clientPromise
  const db = client.db("aaranya")

  const existingUser = await db.collection("users").findOne({ email })

  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 })
  }

  const hashedPassword = bcrypt.hashSync(password, 10)

  const result = await db.collection("users").insertOne({
    name,
    email,
    password: hashedPassword
  })

  const insertedId = result.insertedId
  const user = await db.collection('users').findOne({ _id: insertedId })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  const { password: _, ...userWithoutPassword } = user

  return NextResponse.json({ user: userWithoutPassword })
}