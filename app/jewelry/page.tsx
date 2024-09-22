import React from 'react'
import Image from 'next/image'
import Product from '../../components/Product'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Button } from "@/components/ui/button"
import jewelryImage from '../../public/images/hero3.png'
import Link from 'next/link'

const JewelryPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 md:mt-16 lg:mt-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-sans">
          Our Jewelry Collection
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-4 sm:space-y-6 flex flex-col items-center">
            <p className="text-base sm:text-lg text-center font-light leading-relaxed text-gray-700 mb-3 sm:mb-4 max-w-xl sm:max-w-2xl mx-auto">
              Discover our exquisite range of handcrafted jewelry, each piece telling a unique story of <span className="font-semibold text-gray-900">elegance and craftsmanship</span>.
            </p>
            <p className="text-base sm:text-lg text-center font-light leading-relaxed text-gray-700 pb-8 sm:pb-12 md:pb-16 lg:pb-20 max-w-xl sm:max-w-2xl mx-auto">
              From <span className="italic">timeless classics</span> to <span className="italic">modern designs</span>, our collection caters to every style and occasion, <span className="underline decoration-gray-400 decoration-2 underline-offset-4">elevating your personal expression</span>.
            </p>
            <Button asChild className="w-full sm:w-auto mx-auto my-2 sm:my-4">
              <Link href="/product">Explore Collection</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 mb-6 lg:mb-0">
            <div className="relative overflow-hidden rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <Image
                src={jewelryImage}
                alt="Jewelry Collection"
                width={600}
                height={400}
                layout="responsive"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 md:mb-10 text-center">Featured Pieces</h2>
          <Product />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default JewelryPage