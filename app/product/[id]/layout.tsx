import { Metadata } from 'next'

async function getProduct(id: string) {
  // Implement your product fetching logic here
  // This is a placeholder implementation
  return {
    name: 'Product Name',
    description: 'Product Description',
    image: '/images/product.jpg',
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProduct(params.id)

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

export default function Layout({ children, params: { id } }: { children: React.ReactNode; params: { id: string } }) {
  // Remove the 'id' parameter if it's not being used
  return <>{children}</>;
}