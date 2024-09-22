'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import IMAGE from '../../public/images/3.png'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Footer from '@/components/Footer'

export default function ContactUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-black min-h-screen pt-24 sm:pt-32 md:pt-40 lg:pt-48">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-20">
          <motion.div
            className="w-full lg:w-1/2"
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={IMAGE}
                    alt="Aaranya Customer Service"
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <motion.div 
                    className="flex items-center space-x-3"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    <p className="text-xs sm:text-sm">info@aaranya.com</p>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    <p className="text-xs sm:text-sm">+91 123 456 7890</p>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-3"
                    variants={fadeIn}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    <p className="text-xs sm:text-sm">123 Luxury Lane, Mumbai, India 400001</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-4 sm:p-6">
                <form className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium">Name</label>
                    <Input type="text" id="name" name="name" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium">Email</label>
                    <Input type="email" id="email" name="email" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium">Subject</label>
                    <Input type="text" id="subject" name="subject" required className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1 sm:mb-2 text-xs sm:text-sm font-medium">Message</label>
                    <Textarea id="message" name="message" rows={4} required className="w-full" />
                  </div>
                  <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 transition-colors rounded-full text-sm sm:text-base py-2 sm:py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )

}