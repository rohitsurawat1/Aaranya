'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface CartItem extends Product {
  quantity: number
}

interface User {
  id: string
  email: string
  name: string
}

interface ShopContextType {
  cart: CartItem[]
  wishlist: Product[]
  user: User | null
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  clearCart: () => void
  clearWishlist: () => void
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
}

const ShopContext = createContext<ShopContextType | undefined>(undefined)

export const useShop = () => {
  const context = useContext(ShopContext)
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider')
  }
  return context
}

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<Product[]>([])
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    const savedWishlist = localStorage.getItem('wishlist')
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
    
    // Check if user is logged in
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        if (data.user) setUser(data.user)
      })
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [cart, wishlist])

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const addToWishlist = (product: Product) => {
    setWishlist(prevWishlist => {
      if (!prevWishlist.some(item => item.id === product.id)) {
        return [...prevWishlist, product]
      }
      return prevWishlist
    })
  }

  const removeFromWishlist = (productId: string) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  const clearWishlist = () => {
    setWishlist([])
  }

  const login = async (email: string, password: string) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await response.json()
    if (response.ok) {
      setUser(data.user)
    } else {
      throw new Error(data.message)
    }
  }

  const logout = async () => {
    const response = await fetch('/api/logout', { method: 'POST' })
    if (response.ok) {
      setUser(null)
    } else {
      throw new Error('Logout failed')
    }
  }

  const register = async (name: string, email: string, password: string) => {
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })
    const data = await response.json()
    if (response.ok) {
      setUser(data.user)
    } else {
      throw new Error(data.message)
    }
  }

  return (
    <ShopContext.Provider value={{
      cart,
      wishlist,
      user,
      addToCart,
      removeFromCart,
      addToWishlist,
      removeFromWishlist,
      clearCart,
      clearWishlist,
      login,
      logout,
      register
    }}>
      {children}
    </ShopContext.Provider>
  )
}