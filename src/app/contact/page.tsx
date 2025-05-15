'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Hero Section */}
      <section className="relative pt-48 pb-10 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#39FF85]/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#39FF85]/10 to-[#4A90E2]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
            >
              <span className="bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent">
                Let&apos;s Create Something Amazing Together
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[#A8E4A0]/70 mb-4"
            >
              Have a project in mind? We&apos;d love to hear about it. Fill out the form below and let&apos;s start building something extraordinary.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[#39FF85]/5 to-[#4A90E2]/5 border border-[#39FF85]/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-2xl blur-xl" />
              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 