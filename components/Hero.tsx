'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    { id: 1, image: '/images/1.png', title: 'Exquisite Elegance', subtitle: 'Discover our new collection' },
    { id: 2, image: '/images/2.png', title: 'Timeless Beauty', subtitle: 'Handcrafted with passion' },
    { id: 3, image: '/images/3.png', title: 'Luxury Defined', subtitle: 'Experience true craftsmanship' },
    { id: 4, image: '/images/4.png', title: 'Radiant Glamour', subtitle: 'Shine bright with our diamonds' },
  ]

  useEffect(() => {
    document.body.style.backgroundColor = 'white'
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      }
    }
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="relative w-full mx-auto h-[60vh] md:h-[80vh] overflow-hidden bg-gray-100">
      <AnimatePresence initial={false} custom={currentSlide}>
        <motion.div
          key={currentSlide}
          custom={currentSlide}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              nextSlide()
            } else if (swipe > swipeConfidenceThreshold) {
              prevSlide()
            }
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4 md:px-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 md:mb-4 text-white text-center">{slides[currentSlide].title}</h2>
            <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8 text-center">{slides[currentSlide].subtitle}</p>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors">
              Explore Collection
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-black hover:bg-opacity-75 transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
        <span className="sr-only">Previous slide</span>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-black hover:bg-opacity-75 transition-colors"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
        <span className="sr-only">Next slide</span>
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Hero