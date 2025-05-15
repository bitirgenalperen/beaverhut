'use client'

import { motion } from 'framer-motion'
import { Sparkles, Package, Rocket, Clock, ArrowRight } from 'lucide-react'
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
            <motion.div
              variants={fadeInUp}
              className="inline-block mb-6"
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
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent">
                Our Products
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[#A8E4A0]/70 mb-8"
            >
              We&apos;re crafting innovative solutions that will transform the way you work and live.
              Stay tuned for our upcoming product releases.
            </motion.p>
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
      <section className="py-20">
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
              <div className="relative text-center">
                <div className="inline-block mb-6">
                  <Sparkles className="w-12 h-12 text-[#39FF85] animate-pulse" />
                </div>
                <h2 className="text-3xl font-bold text-[#E8ECEF] mb-4">
                  Something Amazing is Coming
                </h2>
                <p className="text-lg text-[#A8E4A0]/70 mb-8">
                  We&apos;re working on revolutionary products that will change the game.
                  Get in touch to learn more about our upcoming releases.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#39FF85] to-[#4A90E2] hover:from-[#39FF85]/90 hover:to-[#4A90E2]/90 transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 