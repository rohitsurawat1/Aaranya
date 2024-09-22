'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Image01 from '../../public/images/2.png'
import { useInView } from 'react-intersection-observer'
import Footer from '@/components/Footer'

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (

    <div className="bg-white pt-24 md:pt-32"> {/* Adjusted padding top to account for header height */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-12 text-gray-900"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          About Aaranya
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            ref={ref}
          >
            <Image
              src="/images/about-us.webp"
              alt="Aaranya Jewelry"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Aaranya, by HastIndia, is a celebration of India's rich artisanal heritage. We craft exquisite jewelry that blends traditional techniques with contemporary designs, creating pieces that are both timeless and modern.
            </p>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Our mission is to preserve and promote the art of Indian jewelry making while providing sustainable livelihoods to skilled artisans across the country.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Each Aaranya piece tells a story - of ancient craftsmanship, of cultural richness, and of the hands that lovingly created it. When you wear Aaranya, you carry a piece of India's soul with you.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="mb-24"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center mb-12 text-gray-900">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Artisanal Excellence", description: "We honor traditional craftsmanship and support skilled artisans." },
              { title: "Sustainable Practices", description: "We are committed to ethical sourcing and eco-friendly production." },
              { title: "Cultural Heritage", description: "We celebrate and preserve India's rich jewelry-making traditions." }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
    
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}

          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center mb-12 text-gray-900">Our Commitment</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 leading-relaxed text-center italic">
              "At Aaranya, we believe that true luxury lies not just in the beauty of our jewelry, but in the stories they tell and the traditions they preserve. Our commitment is to create pieces that are not only stunning to behold, but also meaningful to wear."
            </p>
            <p className="text-right mt-4 text-gray-600">- Founder, Aaranya</p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )

}