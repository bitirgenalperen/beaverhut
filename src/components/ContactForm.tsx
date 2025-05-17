'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, User, MessageSquare, Phone, Building } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

interface FormData {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      })
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative w-full max-w-4xl mx-auto"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#39FF85]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#39FF85]/5 to-[#4A90E2]/5 border border-[#39FF85]/10 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-3xl blur-xl" />

        {/* Form Header */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="inline-block mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/20 to-[#4A90E2]/20 rounded-full blur-xl" />
              <div className="relative px-6 py-2 rounded-full border border-[#39FF85]/20 bg-[#1A1F26]/50 backdrop-blur-sm">
                <span className="text-[#39FF85] font-medium">Get in Touch</span>
              </div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E8ECEF] mb-4">
            Let&apos;s Start a
            <span className="block mt-2 bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          <p className="text-lg text-[#A8E4A0]/70">
            Tell us about your project and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="relative space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-[#A8E4A0]/70 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#39FF85]" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A1F26]/50 border border-[#39FF85]/10 text-[#E8ECEF] placeholder-[#A8E4A0]/30 focus:outline-none focus:border-[#39FF85]/30 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-[#A8E4A0]/70 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#39FF85]" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A1F26]/50 border border-[#39FF85]/10 text-[#E8ECEF] placeholder-[#A8E4A0]/30 focus:outline-none focus:border-[#39FF85]/30 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </motion.div>

            {/* Company Field */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <label htmlFor="company" className="block text-sm font-medium text-[#A8E4A0]/70 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#39FF85]" />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A1F26]/50 border border-[#39FF85]/10 text-[#E8ECEF] placeholder-[#A8E4A0]/30 focus:outline-none focus:border-[#39FF85]/30 transition-all duration-300"
                    placeholder="Your Company"
                  />
                </div>
              </div>
            </motion.div>

            {/* Phone Field */}
            <motion.div variants={fadeInUp} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-[#A8E4A0]/70 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#39FF85]" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A1F26]/50 border border-[#39FF85]/10 text-[#E8ECEF] placeholder-[#A8E4A0]/30 focus:outline-none focus:border-[#39FF85]/30 transition-all duration-300"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Message Field */}
          <motion.div variants={fadeInUp} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-[#A8E4A0]/70 mb-2">
                Your Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#39FF85]" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A1F26]/50 border border-[#39FF85]/10 text-[#E8ECEF] placeholder-[#A8E4A0]/30 focus:outline-none focus:border-[#39FF85]/30 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fadeInUp} className="flex justify-center pt-6">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85] to-[#4A90E2] transition-transform duration-300 group-hover:scale-110" />
              <span className="relative flex items-center gap-2 text-[#0A0F14] font-medium">
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-[#39FF85] mt-4"
            >
              Thank you for your message! We&apos;ll get back to you soon.
            </motion.div>
          )}
          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-red-500 mt-4"
            >
              Something went wrong. Please try again later.
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  )
}
