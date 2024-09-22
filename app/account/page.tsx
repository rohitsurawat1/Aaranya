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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isRegistering) {
        await register(name, email, password)
      } else {
        await login(email, password)
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('An unknown error occurred')
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow container mx-auto px-4 py-16 pt-60">
        {user ? (
          <>
            <h1 className="text-3xl font-bold mb-8">Your Account</h1>
            <p>Welcome, {user.name}!</p>
            <Button className="mt-4" onClick={logout}>Logout</Button>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-8 text-black">{isRegistering ? 'Register' : 'Login'}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {isRegistering && (
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              )}
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Button type="submit">{isRegistering ? 'Register' : 'Login'}</Button>
            </form>
            <Button
              variant="link"
              className="mt-4"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering ? 'Already have an account? Login' : 'Need an account? Register'}
            </Button>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}