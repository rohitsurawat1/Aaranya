'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image01 from '@/public/images/hero1.png'
import Image2010 from '@/public/images/2.png'
import Image2015 from '@/public/images/4.png'
import Image2023 from '@/public/images/2.png'
import Footer from '@/components/Footer'

export default function OurStory() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen w-full bg-white text-black overflow-hidden pt-24">
      <div className="container mx-auto px-4 pt-20 sm:pt-24 lg:pt-32 pb-16 sm:pb-24">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-center mb-12 sm:mb-20 text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our Exquisite Journey
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12 sm:gap-20 items-center mb-20 sm:mb-32">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Image
              src={Image01}
              alt="Aaranya's Opulent Craftsmanship"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
          </motion.div>
          <div className="space-y-6 sm:space-y-10">
            {[
              "Aaranya's tale is one of unparalleled luxury, rooted in India's opulent jewelry-making legacy. Our journey began with an ambitious vision: to elevate timeless craftsmanship to new heights of sophistication.",
              "Founded by master artisans and visionary designers, we have cultivated a brand that not only honors our rich heritage but also redefines luxury for the discerning modern connoisseur.",
              "Our name, Aaranya, meaning 'forest' in Sanskrit, embodies our commitment to natural splendor and sustainable luxury, creating treasures as enduring as they are exquisite."
            ].map((text, index) => (
              <motion.p 
                key={index}
                className="text-lg sm:text-xl text-black leading-relaxed"
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.6 + index * 0.2 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mb-20 sm:mb-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6 sm:mb-10 text-black">A Legacy of Luxury</h2>
          <p className="text-lg sm:text-xl text-black max-w-4xl mx-auto leading-relaxed">
            From our inception in an intimate atelier to our current status as a paragon of artisanal luxury, our odyssey has been marked by unwavering dedication, boundless creativity, and a profound reverence for the art of jewelry-making.
          </p>
        </motion.div>

        <div ref={ref} className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>
          {[
            { year: "2010", description: "Aaranya emerges with a vision to elevate traditional jewelry-making to an art form.", image: Image2010 },
            { year: "2015", description: "We curate an elite network of master artisans, bringing India's finest craftsmanship under our aegis.", image: Image2015 },
            { year: "2023", description: "Aaranya ascends to global prominence, offering unparalleled luxury to discerning clientele worldwide.", image: Image2023 }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className={`flex items-center mb-24 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800">{item.year}</h3>
                  <p className="text-base sm:text-lg text-gray-600">{item.description}</p>
                </div>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-8 h-8 bg-gray-400 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div className="w-5/12">
                <Image
                  src={item.image}
                  alt={`Aaranya in ${item.year}`}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )

}