import { Metadata } from 'next'
import React from 'react'

async function getProduct() {
  // Implement your product fetching logic here
  // This is a placeholder implementation
  return {
    name: 'Product Name',
    description: 'Product Description',
    image: '/images/product.jpg',
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const product = await getProduct()

  return {
    title: `${product.name} | Your Jewelry Store`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
  }
}

// Update ./app/product/[id]/layout.tsx

// Remove the 'params' parameter if it's not being used
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto px-4 py-8">
      {children}
    </div>
  )
}