import { NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'
import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { ObjectId } from 'mongodb'

export async function GET() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('token')

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const decoded = verify(token.value, process.env.JWT_SECRET!) as { userId: string }
    const { db } = await connectToDatabase()

    const user = await db.collection('users').findOne({ _id: new ObjectId(decoded.userId) })

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user

    return NextResponse.json({ user: userWithoutPassword })
  } catch (error) {
    console.error('Error fetching user data:', error)
    return NextResponse.json({ error: 'Failed to fetch user data' }, { status: 500 })
  }
}