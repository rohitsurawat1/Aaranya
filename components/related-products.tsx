import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

const relatedProducts = [
  { id: '3', name: 'Luxury Gold Bangle', price: 1599.99, image: '/images/hero3.png' },
  { id: '4', name: 'Sapphire and Diamond Ring', price: 3499.99, image: '/images/hero4.png' },
  // Add more related products as needed
]

export default function RelatedProducts() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
                <h3 className="font-semibold text-sm mb-1 truncate">{product.name}</h3>
                <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}