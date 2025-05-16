'use client'

import { motion } from 'framer-motion'
import { Sparkles, Package, Rocket, Clock, Brain, Cloud, Zap, Shield } from 'lucide-react'
import { useRouter } from 'next/navigation'

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

const features = [
  {
    icon: Package,
    title: "Innovative Solutions",
    description: "Cutting-edge products designed to solve real-world problems and enhance user experiences."
  },
  {
    icon: Rocket,
    title: "Future-Ready",
    description: "Our products are built with scalability and future technologies in mind."
  },
  {
    icon: Clock,
    title: "Coming Soon",
    description: "We're working on exciting new products that will revolutionize the industry."
  }
]

export default function ProductsPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        {/* Background Elements */}
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
            className="max-w-6xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#39FF85]/5 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#4A90E2]/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
              
              {/* Main Content */}
              <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#39FF85]/5 to-[#4A90E2]/5 border border-[#39FF85]/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-3xl blur-xl" />
                
                {/* Content Grid */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left Column - Product Introduction */}
                  <div className="space-y-6">
                    <motion.div
                      variants={fadeInUp}
                      className="inline-block"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/20 to-[#4A90E2]/20 rounded-full blur-xl" />
                        <div className="relative px-6 py-2 rounded-full border border-[#39FF85]/20 bg-[#1A1F26]/50 backdrop-blur-sm">
                          <span className="text-[#39FF85] font-medium">Coming Soon</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.h1
                      variants={fadeInUp}
                      className="text-3xl sm:text-4xl font-bold text-[#E8ECEF]"
                    >
                      Revolutionary
                      <span className="block mt-2 bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent">
                        AI-Powered Solutions
                      </span>
                    </motion.h1>

                    <motion.p
                      variants={fadeInUp}
                      className="text-lg text-[#A8E4A0]/70"
                    >
                      We&apos;re crafting innovative solutions that will transform the way you work and live.
                      Stay tuned for our upcoming product releases.
                    </motion.p>

                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push('/contact')}
                        className="group px-8 py-4 bg-[#39FF85] text-[#0A0F14] rounded-xl font-medium hover:bg-[#39FF85]/90 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Get in Touch
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push('/services')}
                        className="group px-8 py-4 bg-transparent border-2 border-[#39FF85]/20 text-[#E8ECEF] rounded-xl font-medium hover:border-[#39FF85]/40 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Explore Services
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Right Column - Product Features */}
                  <motion.div
                    variants={fadeInUp}
                    className="relative grid grid-cols-2 gap-4"
                  >
                    {[
                      { title: "AI Integration", icon: Brain },
                      { title: "Cloud Native", icon: Cloud },
                      { title: "Real-time", icon: Zap },
                      { title: "Secure", icon: Shield }
                    ].map((item) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={item.title}
                          whileHover={{ scale: 1.05 }}
                          className="relative group"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative p-6 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                            <div className="w-12 h-12 rounded-lg bg-[#39FF85]/10 flex items-center justify-center mb-4">
                              <Icon className="w-6 h-6 text-[#39FF85]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[#E8ECEF]">{item.title}</h3>
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeInUp}
                    className="relative group h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-8 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-lg bg-[#39FF85]/10 flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-[#39FF85]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#E8ECEF] mb-4">{feature.title}</h3>
                      <p className="text-[#A8E4A0]/70 flex-grow">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#39FF85]/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#39FF85]/10 to-[#4A90E2]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#39FF85]/5 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#4A90E2]/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
              
              {/* Main Content */}
              <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#39FF85]/5 to-[#4A90E2]/5 border border-[#39FF85]/10 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-3xl blur-xl" />
                
                {/* Content Grid */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left Column - Text Content */}
                  <div className="space-y-6 text-center lg:text-left">
                    <motion.div
                      variants={fadeInUp}
                      className="inline-block"
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/20 to-[#4A90E2]/20 rounded-full blur-xl" />
                        <div className="relative px-6 py-2 rounded-full border border-[#39FF85]/20 bg-[#1A1F26]/50 backdrop-blur-sm">
                          <span className="text-[#39FF85] font-medium">Coming Soon</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.h2
                      variants={fadeInUp}
                      className="text-3xl sm:text-4xl font-bold text-[#E8ECEF]"
                    >
                      Something
                      <span className="block mt-2 bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent">
                        Amazing is Coming
                      </span>
                    </motion.h2>

                    <motion.p
                      variants={fadeInUp}
                      className="text-lg text-[#A8E4A0]/70"
                    >
                      We&apos;re working on revolutionary products that will change the game.
                      Get in touch to learn more about our upcoming releases.
                    </motion.p>

                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push('/contact')}
                        className="group px-8 py-4 bg-[#39FF85] text-[#0A0F14] rounded-xl font-medium hover:bg-[#39FF85]/90 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Get in Touch
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push('/services')}
                        className="group px-8 py-4 bg-transparent border-2 border-[#39FF85]/20 text-[#E8ECEF] rounded-xl font-medium hover:border-[#39FF85]/40 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Explore Services
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Right Column - Animated Icon */}
                  <motion.div
                    variants={fadeInUp}
                    className="relative flex items-center justify-center"
                  >
                    <div className="relative w-64 h-64">
                      {/* Outer Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#39FF85]/20 animate-spin-slow" />
                      <div className="absolute inset-4 rounded-full border-2 border-[#4A90E2]/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                      
                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/20 to-[#4A90E2]/20 rounded-full blur-xl animate-pulse-slow" />
                          <div className="relative w-32 h-32 rounded-full bg-[#1A1F26]/50 backdrop-blur-sm flex items-center justify-center">
                            <Sparkles className="w-16 h-16 text-[#39FF85] animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 