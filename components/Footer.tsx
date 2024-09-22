import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-600">AARANYA by HastIndia brings you handcrafted elegance from the heart of India.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/jewelry" className="text-sm text-gray-600 hover:text-black">Jewelry</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-black">About Us</Link></li>
              <li><Link href="/story" className="text-sm text-gray-600 hover:text-black">Our Story</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-black">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm text-gray-600 hover:text-black">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm text-gray-600 hover:text-black">Shipping & Returns</Link></li>
              <li><Link href="/privacy" className="text-sm text-gray-600 hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-600 hover:text-black">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black"><FaFacebookF /></a>
              <a href="#" className="text-gray-600 hover:text-black"><FaTwitter /></a>
              <a href="#" className="text-gray-600 hover:text-black"><FaInstagram /></a>
              <a href="#" className="text-gray-600 hover:text-black"><FaPinterest /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} AARANYA by HastIndia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer