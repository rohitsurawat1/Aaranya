'use client'

import React from 'react'
import Image from 'next/image'
import { useShop } from '@/context/ShopContext'
import { Button } from "@/components/ui/button"
import Footer from '@/components/Footer'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useShop()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = async () => {
    // In a real application, you would implement the checkout process here
    // This might involve creating an order in your database and integrating with a payment provider
    alert('Checkout functionality to be implemented')
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <div className="flex-grow container mx-auto px-4 py-16 pt-60">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="mr-4" />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                  </div>
                </div>
                <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
              </div>
            ))}
            <div className="mt-8">
              <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
              <div className="mt-4 space-x-4">
                <Button onClick={handleCheckout}>Checkout</Button>
                <Button variant="outline" onClick={clearCart}>Clear Cart</Button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}