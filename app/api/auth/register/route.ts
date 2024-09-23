import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import bcrypt from 'bcryptjs'

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Name, email, and password are required' }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    const existingUser = await db.collection('users').findOne({ email })

    if (existingUser) {
      return NextResponse.json({ error: 'User already exists' }, { status: 409 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await db.collection('users').insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date()
    })

    if (!result.insertedId) {
      return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
    }

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 })
  } catch (error) {
    console.error('Error during registration:', error)
    return NextResponse.json({ error: 'Failed to register user' }, { status: 500 })
  }
}