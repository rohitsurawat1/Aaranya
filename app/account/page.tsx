'use client'

import React, { useState } from 'react'
import { useShop } from '@/context/ShopContext'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Footer from '@/components/Footer'

export default function AccountPage() {
  const { user, login, logout, register } = useShop()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      if (isRegistering) {
        await register(name, email, password)
      } else {
        await login(email, password)
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('An unknown error occurred')
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          {user ? (
            <>
              <h1 className="text-3xl font-bold mb-8">Your Account</h1>
              <p>Welcome, {user.name}!</p>
              <Button className="mt-4 w-full" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-8 text-black text-center">{isRegistering ? 'Register' : 'Login'}</h1>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <form onSubmit={handleSubmit} className="space-y-4">
                {isRegistering && (
                  <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="text-black"
                  />
                )}
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-black"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="text-black"
                />
                <Button type="submit" className="w-full">{isRegistering ? 'Register' : 'Login'}</Button>
              </form>
              <Button
                variant="link"
                className="mt-4 w-full text-center"
                onClick={() => setIsRegistering(!isRegistering)}
              >
                {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
              </Button>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}