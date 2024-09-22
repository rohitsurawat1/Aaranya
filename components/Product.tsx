'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredProducts = [
  {
    id: 1,
    name: 'Exquisite Diamond Necklace',
    price: 2999.99,
    image: '/images/main.jpg'
  },
  {
    id: 2,
    name: 'Handcrafted Silver Earrings',
    price: 329.99,
    image: '/images/hero1.png'
  },
  {
    id: 3,
    name: 'Luxury Gold Bangle',
    price: 1599.99,
    image: '/images/hero3.png'
  },
  {
    id: 4,
    name: 'Sapphire and Diamond Ring',
    price: 3499.99,
    image: '/images/hero4.png'
  }
]

const FeaturedProducts: React.FC = () => {
  const router = useRouter()

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Featured Collections
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of exquisite jewelry pieces
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card
                className="overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg group"
                onClick={() => handleProductClick(product.id)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 truncate text-sm sm:text-base md:text-lg">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <Link href="/product">
          <Button
            className="bg-black text-white hover:bg-gray-800 transition-colors text-sm sm:text-base py-2 px-4 sm:py-3 sm:px-6 rounded-full"
          >
            View All Collections
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts