'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Heart, ShoppingCart, ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'
import { useParams } from 'next/navigation'

// This would typically come from an API or database
const products = [
  {
    id: '1',
    name: "Celestial Harmony Necklace",
    price: 2999.99,
    description: "A stunning necklace featuring ethically sourced diamonds set in 18k gold, inspired by the cosmic dance of stars.",
    details: [
      "Ethically sourced diamonds, total carat weight: 2.5ct",
      "18k gold setting, handcrafted using traditional techniques",
      "Adjustable chain length: 16-18 inches",
      "Comes with a certificate of authenticity"
    ],
    images: [
      "/images/main.jpg",
      "/images/1.png",
      "/images/2.png",
      "/images/3.png"
    ]
  },
  {
    id: '2',
    name: "Handcrafted Silver Earrings",
    price: 329.99,
    description: "Elegant silver earrings with intricate floral designs, handcrafted by skilled artisans.",
    details: [
      "925 Sterling Silver",
      "Handcrafted by skilled artisans",
      "Intricate floral design",
      "Suitable for sensitive ears"
    ],
    images: [
      "/images/hero1.png",
      "/images/hero2.png",
      "/images/hero3.png",
      "/images/hero4.png"
    ]
  },
  {
    id: '3',
    name: 'Luxury Gold Bangle',
    price: 1599.99,
    description: "Elegant silver earrings with intricate floral designs, handcrafted by skilled artisans.",
    details: [
      "925 Sterling Silver",
      "Handcrafted by skilled artisans",
      "Intricate floral design",
      "Suitable for sensitive ears"
    ],
    images: [
        "/images/hero3.png",
        "/images/hero2.png",
        "/images/hero1.png",
        "/images/hero4.png"
      ]
     
  },
  {
    id: '4',
    name: 'Sapphire and Diamond Ring',
    price: 3499.99,
    description: "A stunning ring featuring a brilliant sapphire surrounded by diamonds.",
    details: [
      "925 Sterling Silver",
      "Handcrafted by skilled artisans",
      "Intricate floral design",
      "Suitable for sensitive ears"
    ],
    images: [
        "/images/hero4.png",
        "/images/hero2.png",
        "/images/hero1.png",
        "/images/hero3.png"
      ]
  }
  // Add more products as needed
]

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  images: string[];
}

export default function ProductPage() {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [mainImage, setMainImage] = useState<string>('')

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const fetchedProduct = products.find(p => p.id === id)
    if (fetchedProduct) {
      setProduct(fetchedProduct)
      setMainImage(fetchedProduct.images[0])
    }
  }, [id])

  if (!product) {
    return <div className="text-center py-20">Loading...</div>
  }

  return (
    <div className="bg-white pt-24 md:pt-32 ">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">

          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <span className="text-sm font-medium text-gray-500">/</span>
              </li>
              <li>
                <Link href="/jewelry" className="text-sm font-medium text-gray-500 hover:text-gray-900">Jewelry</Link>
              </li>
              <li>
                <span className="text-sm font-medium text-gray-500">/</span>
              </li>
              <li>
                <span className="text-sm font-medium text-gray-900">{product.name}</span>
              </li>
            </ol>
          </nav>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Image gallery */}
            <div className="flex flex-col-reverse">
              <div className="mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                <div className="grid grid-cols-4 gap-6">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                      onClick={() => setMainImage(image)}
                    >
                      <span className="sr-only">View {product.name} image {index + 1}</span>
                      <span className="absolute inset-0 rounded-md overflow-hidden">
                        <Image src={image} alt="" fill className="object-cover object-center" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full aspect-w-1 aspect-h-1 mb-6">
                <Image
                  src={mainImage}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="object-cover object-center rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">{product.name}</h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <p className="text-base text-gray-700">{product.description}</p>
              </div>

              <div className="mt-10 flex space-x-4">
                <Button className="flex-1 bg-black text-white hover:bg-gray-800">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
                <Button variant="outline" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" /> Wishlist
                </Button>
              </div>

              <div className="mt-10">
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="care">Care</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details">
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                      {product.details.map((detail, index) => (
                        <li key={index} className="text-sm text-gray-700">{detail}</li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="care">
                    <p className="text-sm text-gray-700 mt-4">
                      To keep your jewelry looking its best, store it in a cool, dry place and clean it gently with a soft cloth. Avoid exposure to harsh chemicals and remove before swimming or bathing.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Our Story Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/artisan-workshop.jpg"
                alt="Artisan in workshop"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                In the heart of Jaipur, where the air is thick with the scent of spices and the streets pulse with vibrant energy, our journey began. For generations, our family has been crafting exquisite jewelry, passing down secrets and techniques from mother to daughter, father to son.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Each piece we create is a testament to this rich heritage, a blend of age-old craftsmanship and contemporary design. Our artisans, with their skilled hands and discerning eyes, transform raw precious metals and gemstones into wearable works of art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Master Artisan Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Meet Our Master Artisan</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Amira: The Soul Behind Our Creations</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Amira's journey in jewelry making began at the tender age of seven, watching her grandmother's deft fingers weave magic with gold and gems. Today, with over three decades of experience, Amira leads our team of artisans, infusing each piece with passion and precision.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                "Every jewel has a story," Amira often says, "and it's our privilege to bring that story to life." Her innovative designs, rooted in tradition yet reaching for the stars, have garnered international acclaim and adorned celebrities and royalty alike.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/images/master-artisan.jpg"
                alt="Master Artisan Amira"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 italic mb-4">
            &ldquo;The jewelry you wear is a reflection of your personality.&rdquo; - Coco Chanel
          </p>
          <p className="text-center text-gray-600 mb-8">
            Don't see what you're looking for? <Link href="/contact" className="text-black underline">Contact us</Link> for custom orders.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-gray-800 font-semibold">
              &ldquo;I couldn't be happier with my purchase! The quality is outstanding.&rdquo; - Sarah M.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}