import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import bcrypt from 'bcryptjs'
import { sign } from 'jsonwebtoken'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    const { db } = await connectToDatabase()

    const user = await db.collection('users').findOne({ email })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
    }

    const token = sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1h' })

    const response = NextResponse.json({ message: 'Login successful', token })
    response.cookies.set('token', token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600 // 1 hour
    })

    return response
  } catch (error) {
    console.error('Error during login:', error)
    return NextResponse.json({ error: 'Failed to login' }, { status: 500 })
  }
}