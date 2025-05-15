'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error('Subscription failed')
      }

      toast.success('Successfully subscribed to newsletter!')
      setEmail('')
    } catch (error) {
      console.error('Subscription error:', error)
      toast.error('Failed to subscribe. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-400/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-400/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#E8ECEF] mb-2">Stay Updated</h3>
            <p className="text-[#A8E4A0] text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
          </div>

          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-[#2E353E]/50 border-[#39FF85]/20 text-[#E8ECEF] placeholder:text-[#A8E4A0]/50 focus:border-[#39FF85] focus:ring-[#39FF85]/20"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[#39FF85] text-[#1A1F26] font-bold hover:bg-[#A8E4A0] transition-all duration-300 hover:shadow-lg hover:shadow-[#39FF85]/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>

          <p className="text-[#A8E4A0]/70 text-xs text-center">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </form>
    </div>
  )
} 