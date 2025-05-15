'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  Sparkles
} from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Mouse move effect for the background
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const handleMouseMove = (e: React.MouseEvent<HTMLFormElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
    }
    
    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setSubmitStatus('success')
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
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
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const InputField = ({ 
    name, 
    label, 
    type = 'text', 
    required = true,
    multiline = false
  }: { 
    name: keyof FormData
    label: string
    type?: string
    required?: boolean
    multiline?: boolean
  }) => {
    const isFocused = focusedField === name
    const hasValue = formData[name].length > 0
    const hasError = errors[name]

    return (
      <div className="relative mb-8">
        <div className="relative">
          {multiline ? (
            <textarea
              name={name}
              value={formData[name]}
              onChange={handleChange}
              onFocus={() => setFocusedField(name)}
              onBlur={() => setFocusedField(null)}
              rows={6}
              required={required}
              className={`w-full px-4 py-3 bg-[#1A1F26]/50 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 resize-none text-[#E8ECEF] placeholder-transparent ${
                hasError 
                  ? 'border-red-500 focus:ring-red-500/20' 
                  : 'border-[#39FF85]/10 focus:ring-[#39FF85]/20 focus:border-[#39FF85]/30'
              }`}
            />
          ) : (
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              onFocus={() => setFocusedField(name)}
              onBlur={() => setFocusedField(null)}
              required={required}
              className={`w-full px-4 py-3 bg-[#1A1F26]/50 backdrop-blur-sm border rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 text-[#E8ECEF] placeholder-transparent ${
                hasError 
                  ? 'border-red-500 focus:ring-red-500/20' 
                  : 'border-[#39FF85]/10 focus:ring-[#39FF85]/20 focus:border-[#39FF85]/30'
              }`}
            />
          )}
          <motion.label
            initial={false}
            animate={{
              y: (isFocused || hasValue) ? -30 : 0,
              scale: (isFocused || hasValue) ? 0.8 : 1,
              color: hasError ? '#ef4444' : (isFocused ? '#39FF85' : '#A8E4A0')
            }}
            className="absolute left-4 top-3 px-2 pointer-events-none origin-left bg-[#1A1F26] text-sm"
          >
            {label}
          </motion.label>
        </div>
        <AnimatePresence>
          {hasError && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -bottom-6 left-0 text-sm text-red-500 flex items-center gap-1"
            >
              <AlertCircle className="w-4 h-4" />
              {hasError}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="w-full max-w-4xl mx-auto"
    >
      <form 
        ref={formRef}
        onSubmit={handleSubmit} 
        className="relative"
        onMouseMove={handleMouseMove}
      >
        {/* Interactive Background */}
        <div 
          className="absolute inset-0 -z-10 rounded-2xl overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(57, 255, 133, 0.1) 0%, rgba(74, 144, 226, 0.05) 50%, transparent 100%)`
          }}
        />

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField name="name" label="Your Name" />
            <InputField name="email" label="Your Email" type="email" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField name="phone" label="Your Phone (Optional)" required={false} />
            <InputField name="subject" label="Subject" />
          </div>

          <InputField name="message" label="Your Message" multiline />

          {/* Submit Button */}
          <div className="relative">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-[#39FF85]/50 cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#39FF85] to-[#4A90E2] hover:from-[#39FF85]/90 hover:to-[#4A90E2]/90'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Status Messages */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2 text-[#39FF85]"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Message sent successfully!
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2 text-red-500"
                >
                  <AlertCircle className="w-5 h-5" />
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 -z-10">
          <Sparkles className="w-8 h-8 text-[#39FF85]/20 animate-pulse" />
        </div>
        <div className="absolute bottom-0 left-0 -z-10">
          <Sparkles className="w-8 h-8 text-[#4A90E2]/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </form>
    </motion.div>
  )
} 