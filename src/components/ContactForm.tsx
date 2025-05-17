'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, User, MessageSquare, Globe, TabletSmartphone, Puzzle, Brain, Database, FileText } from 'lucide-react'

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

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

interface FormData {
  name: string
  email: string
  reason: string
  message: string
}

const contactReasons = [
  { value: 'web', label: 'Web Applications', icon: Globe, description: 'Modern, responsive web applications built with cutting-edge technologies' },
  { value: 'mobile', label: 'Mobile Applications', icon: TabletSmartphone, description: 'Native iOS applications that deliver exceptional user experiences' },
  { value: 'extensions', label: 'Browser Extensions', icon: Puzzle, description: 'Powerful browser extensions that enhance productivity' },
  { value: 'ai', label: 'AI Solutions', icon: Brain, description: 'End-to-end AI development and integration services' },
  { value: 'api', label: 'API Development', icon: Database, description: 'Robust and scalable API services' },
  { value: 'documentation', label: 'Software Documentation', icon: FileText, description: 'Comprehensive documentation services' }
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    reason: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        reason: '',
        message: ''
      })
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      className="relative w-full max-w-3xl mx-auto"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-0 right-0 w-96 h-96 bg-[#39FF85]/5 rounded-full blur-3xl"
        />
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl"
          style={{ animationDelay: '1s' }}
        />
        <motion.div
          variants={pulseAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A8E4A0]/5 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#39FF85]/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 - 50 + '%',
              y: Math.random() * 100 - 50 + '%',
              scale: 0
            }}
            animate={{
              x: [null, Math.random() * 100 - 50 + '%'],
              y: [null, Math.random() * 100 - 50 + '%'],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="relative p-8 sm:p-12 rounded-3xl bg-[#1A1F26]/50 backdrop-blur-sm">
        {/* Form Header */}
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <motion.div
            variants={pulseAnimation}
            initial="initial"
            animate="animate"
            className="inline-block mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#39FF85]/10 rounded-full blur-xl" />
              <div className="relative px-6 py-2 rounded-full border border-[#39FF85]/20 bg-[#1A1F26]/50 backdrop-blur-sm">
                <span className="text-[#39FF85] font-medium">Get in Touch</span>
              </div>
            </div>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#E8ECEF] mb-4">
            Let&apos;s Start a
            <motion.span
              variants={pulseAnimation}
              initial="initial"
              animate="animate"
              className="block mt-2 text-[#39FF85]"
            >
              Conversation
            </motion.span>
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
              <motion.div 
                className="absolute inset-0 rounded-xl bg-[#39FF85]/5"
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-[#A8E4A0]/70 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#39FF85] transition-transform duration-300 group-hover:scale-110" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A1F26]/50 border border-[#39FF85]/10 text-[#E8ECEF] placeholder-[#A8E4A0]/30 focus:outline-none focus:border-[#39FF85]/30 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(57,255,133,0.1)]"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div variants={fadeInUp} className="relative group">
              <motion.div 
                className="absolute inset-0 rounded-xl bg-[#39FF85]/5"
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={{ opacity: 1, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-[#A8E4A0]/70 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#39FF85] transition-transform duration-300 group-hover:scale-110" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A1F26]/50 border border-[#39FF85]/10 text-[#E8ECEF] placeholder-[#A8E4A0]/30 focus:outline-none focus:border-[#39FF85]/30 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(57,255,133,0.1)]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Reason Field */}
          <motion.div variants={fadeInUp} className="relative group">
            <motion.div 
              className="absolute inset-0 rounded-xl bg-[#39FF85]/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ opacity: 1, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <div className="relative">
              <label htmlFor="reason" className="block text-sm font-medium text-[#A8E4A0]/70 mb-2">
                Service Interest
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {contactReasons.map((reason) => {
                  const Icon = reason.icon
                  return (
                    <motion.div
                      key={reason.value}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative h-full"
                    >
                      <input
                        type="radio"
                        id={reason.value}
                        name="reason"
                        value={reason.value}
                        checked={formData.reason === reason.value}
                        onChange={handleChange}
                        className="peer sr-only"
                        required
                      />
                      <label
                        htmlFor={reason.value}
                        className="flex flex-col items-center justify-between h-full p-4 rounded-xl border border-[#39FF85]/10 bg-[#1A1F26]/50 cursor-pointer peer-checked:border-[#39FF85]/30 peer-checked:bg-[#39FF85]/5 transition-all duration-300 hover:shadow-[0_0_15px_rgba(57,255,133,0.1)]"
                      >
                        <div className="flex flex-col items-center">
                          <Icon className="w-6 h-6 text-[#39FF85] mb-2 transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-[#E8ECEF] font-medium text-sm text-center">{reason.label}</span>
                        </div>
                        <span className="text-[#A8E4A0]/50 text-xs text-center mt-2">{reason.description}</span>
                      </label>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Message Field */}
          <motion.div variants={fadeInUp} className="relative group">
            <motion.div 
              className="absolute inset-0 rounded-xl bg-[#39FF85]/5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ opacity: 1, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-[#A8E4A0]/70 mb-2">
                Your Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#39FF85] transition-transform duration-300 group-hover:scale-110" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A1F26]/50 border border-[#39FF85]/10 text-[#E8ECEF] placeholder-[#A8E4A0]/30 focus:outline-none focus:border-[#39FF85]/30 transition-all duration-300 resize-none group-hover:shadow-[0_0_15px_rgba(57,255,133,0.1)]"
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
              <div className="absolute inset-0 bg-[#39FF85]" />
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
