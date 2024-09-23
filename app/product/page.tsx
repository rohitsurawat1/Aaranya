import React from 'react'
import Product  from '../../components/Product'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-white">
        <Product />
        {/* <h1 className="text-4xl font-bold text-center my-8">Product Details</h1> */}
        {/* Add more product-specific content here */}
      </main>
      <Footer />
    </div>
  )
}

export default ProductPage
