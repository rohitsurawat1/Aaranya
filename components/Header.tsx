'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FaUser, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa'
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useShop } from '@/context/ShopContext'

interface HeaderProps {
  // className?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const { cart, wishlist, user } = useShop()

  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerClass = isHomePage ? (isScrolled ? 'text-black' : 'text-white') : 'text-black'
  const linkClass = `${headerClass} hover:text-gray-700 transition duration-300`

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
    // Reset search state
    setSearchQuery('')
    setIsSearchOpen(false)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const MobileHeader = () => (
    <div className="md:hidden">
      <div className="flex items-center justify-between py-4 ">
        <FaBars size={20} className={`${headerClass} cursor-pointer`} onClick={toggleMobileMenu} />
        <Link href="/" className="text-center ml-8">
          <span className={`text-3xl font-serif font-bold ${headerClass}`}>AARANYA</span>
          <p className={`text-xs mt-1 ${headerClass}`}>by HastIndia</p>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/cart" className={linkClass}>
            <FaShoppingCart size={20} />
          </Link>
          <button onClick={toggleSearch} className={linkClass}>
            <IoSearchOutline size={22} />
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="py-4">
          <Link href="/jewelry" className={`block py-2 ${linkClass}`}>Jewelry</Link>
          <Link href="/aboutus" className={`block py-2 ${linkClass}`}>About Us</Link>
          <Link href="/ourstory" className={`block py-2 ${linkClass}`}>Our Story</Link>
          <Link href="/contactus" className={`block py-2 ${linkClass}`}>Contact Us</Link>
          <Link href="/account" className={`block py-2 ${linkClass}`}>Account</Link>
          <Link href="/wishlist" className={`block py-2 ${linkClass}`}>Wishlist</Link>
        </nav>
      )}
      <div className={`fixed inset-0 bg-white z-50 transition-opacity duration-300 ease-in-out ${isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex items-center justify-between p-4">
          <span className={`text-2xl font-serif font-bold ${headerClass}`}>Search</span>
          <button onClick={toggleSearch} className={linkClass}>
            <IoCloseOutline size={24} />
          </button>
        </div>
        <form onSubmit={handleSearchSubmit} className="px-4 mt-4">
          <div className="relative">
            <input

              ref={searchRef}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pr-10 pl-4 text-black border-b border-gray-300 focus:outline-none focus:border-current transition-all duration-300 ease-in-out text-lg bg-transparent"
            />
            <button 
              type="submit"
              className={`${linkClass} absolute right-2 top-1/2 transform -translate-y-1/2`}
            >
              <IoSearchOutline size={22} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  const TabletAndDesktopHeader = () => (
    <div className="hidden md:block">
      <div className="flex items-center justify-between mb-5">
        <div className="flex-1"></div>
        <Link href="/" className="text-center">
          <span className={`text-4xl lg:text-5xl font-serif font-bold ${headerClass}`}>AARANYA</span>
          <p className={`text-sm mt-1 ${headerClass}`}>by HastIndia</p>
        </Link>
        <div className="flex items-center space-x-6 flex-1 justify-end">
          <Link href="/account" className={linkClass}>
            {user ? (
              <span className="text-sm">{user.name}</span>
            ) : (
              <FaUser size={20} />
            )}
          </Link>
          <Link href="/wishlist" className={`${linkClass} relative`}>
            <FaHeart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link href="/cart" className={`${linkClass} relative`}>
            <FaShoppingCart size={20} />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </div>
      
      <nav ref={navRef} className="flex justify-center items-center space-x-8 lg:space-x-16 w-full mb-6 relative">
        <Link href="/jewelry" className={`text-sm uppercase ${linkClass} ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}>Jewelry</Link>
        <Link href="/aboutus" className={`text-sm uppercase ${linkClass} ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}>About Us</Link>
        <Link href="/ourstory" className={`text-sm uppercase ${linkClass} ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}>Our Story</Link>
        <Link href="/contactus" className={`text-sm uppercase ${linkClass} ${isSearchOpen ? 'opacity-0' : 'opacity-100'}`}>Contact Us</Link>
        <div className="relative flex items-center ml-auto">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              ref={searchRef}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`absolute right-0 py-2 px-6 border-b ${headerClass} focus:outline-none focus:border-current transition-all duration-300 ease-in-out text-lg bg-transparent ${
                isSearchOpen ? 'w-[calc(100%+40rem)] opacity-100' : 'w-0 opacity-0'
              }`}
            />
            <button 
              type="button"
              onClick={toggleSearch}
              className={`${linkClass} z-10`}
            >
              <IoSearchOutline size={22} />
            </button>
          </form>
        </div>
      </nav>
    </div>
  )

  const HomeHeader = () => (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${headerClass}`}
      initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
      animate={{ 
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)',
        boxShadow: isScrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 py-6">
        <MobileHeader />
        <TabletAndDesktopHeader />
      </div>
    </motion.header>
  )

  const OtherPagesHeader = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <MobileHeader />
        <TabletAndDesktopHeader />
      </div>
    </header>
  )

  return isHomePage ? <HomeHeader /> : <OtherPagesHeader />
}

export default Header