'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Code, Globe} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Cutting-edge artificial intelligence for smarter solutions',
  },
  {
    icon: Code,
    title: 'Modern Tech',
    description: 'Built with the latest technologies and frameworks',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Solutions that scale across borders and platforms',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-32 border border-[#39FF85]/10 animate-pulse-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#39FF85]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A8E4A0]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center w-full"
        >
          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-6 w-full">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent">
                Transforming Ideas into
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#4A90E2] via-[#39FF85] to-[#A8E4A0] bg-clip-text text-transparent">
                Intelligent Solutions
              </span>
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl text-[#A8E4A0]/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We build cutting-edge AI applications that revolutionize how businesses and individuals interact with technology.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center w-full"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-[#0A0F14] bg-[#39FF85] rounded-lg hover:bg-[#39FF85]/90 transition-all duration-300"
            >
              <span className="relative z-10">Get Started</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#39FF85] to-[#4A90E2] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
            <Link
              href="/products"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-[#E8ECEF] border border-[#39FF85]/20 rounded-lg hover:border-[#39FF85]/40 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>
          </motion.div>

          {/* Feature Cards */}
          <motion.div 
            variants={containerVariants}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
          >
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="relative group"
                  whileHover={{ y: -5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-[#39FF85]/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#39FF85]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#E8ECEF] mb-2">{feature.title}</h3>
                    <p className="text-[#A8E4A0]/70">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
} 