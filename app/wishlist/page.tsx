'use client'

import React from 'react'
import Image from 'next/image'
import { useShop } from '@/context/ShopContext'
import { Button } from "@/components/ui/button"
import Footer from '@/components/Footer'

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart, clearWishlist } = useShop()

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <div className="flex-grow container mx-auto px-4 py-16 pt-60">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="text-center text-lg">Your wishlist is empty.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlist.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                  <Image src={item.image} alt={item.name} width={150} height={150} className="rounded-lg mb-4" />
                  <h2 className="font-semibold text-xl mb-2">{item.name}</h2>
                  <div className="flex space-x-2 mt-auto">
                    <Button className="mr-2" onClick={() => addToCart(item)}>Add to Cart</Button>
                    <Button variant="destructive" onClick={() => removeFromWishlist(item.id)}>Remove</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" onClick={clearWishlist}>Clear Wishlist</Button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  )
}