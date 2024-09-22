'use client'
import React, { useState } from 'react'

export const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Stay Connected</h2>
          <p className="text-xl text-gray-600 mb-8">Subscribe to our newsletter for exclusive updates and offers.</p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full md:w-2/3 p-3 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black font-sans"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-black text-white px-8 py-3 rounded-full text-lg font-sans font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
