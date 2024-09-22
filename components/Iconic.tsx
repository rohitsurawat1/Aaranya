
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Iconic = () => {
  const iconicPieces = [
    {
      id: 1,
      name: 'Diamond Lotus Necklace',
      description: 'Intricate lotus design crafted with ethically sourced diamonds',
      image: '/images/hero1.png'
    },
    {
      id: 2,
      name: 'Emerald Peacock Earrings',
      description: 'Stunning peacock motif featuring vibrant emeralds and gold filigree',
      image: '/images/hero2.png'
    },
    {
      id: 3,
      name: 'Ruby Elephant Bangle',
      description: 'Majestic elephant bangle adorned with rubies and traditional engravings',
      image: '/images/hero3.png'
    }
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Iconic Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {iconicPieces.map((piece) => (
            <div key={piece.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={piece.image}
                  alt={piece.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{piece.name}</h3>
                <p className="text-gray-600 mb-4">{piece.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/collection" passHref>
            <button className="bg-black text-white text-lg py-3 px-8 rounded-full hover:bg-gray-800 transition duration-300 shadow-lg">
              Discover More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Iconic