'use client'

import React from 'react'
import Image from 'next/image'
import { useShop } from '@/context/ShopContext'
import { Button } from "@/components/ui/button"
import Footer from '@/components/Footer'

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart, clearWishlist } = useShop()

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <div className="flex-grow container mx-auto px-4 py-16 pt-60">
        <h1 className="text-3xl font-bold mb-8 text-black">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <>
            {wishlist.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="mr-4" />
                  <h2 className="font-semibold">{item.name}</h2>
                </div>
                <div>
                  <Button className="mr-2" onClick={() => addToCart(item)}>Add to Cart</Button>
                  <Button variant="destructive" onClick={() => removeFromWishlist(item.id)}>Remove</Button>
                </div>
              </div>
            ))}
            <div className="mt-8">
              <Button variant="outline" onClick={clearWishlist}>Clear Wishlist</Button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}