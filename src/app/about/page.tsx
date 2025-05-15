'use client'

import { motion } from 'framer-motion'
import { 
  Lightbulb, 
  Users, 
  Target, 
  Heart, 
  Shield, 
  Zap,
  ArrowRight
} from 'lucide-react'
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

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and building strong partnerships with our clients."
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from code quality to user experience."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We&apos;re passionate about technology and creating solutions that make a difference."
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest standards of professional ethics and transparency."
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "We optimize processes and solutions to deliver maximum value efficiently."
  }
]

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0A0F14]">
      {/* Hero Section */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#39FF85]/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
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
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#4A90E2] via-[#39FF85] to-[#A8E4A0] bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[#A8E4A0]/70 mb-8"
            >
              We&apos;re a team of passionate developers and designers dedicated to creating
              innovative solutions that drive business growth and user satisfaction.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
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
              <h2 className="text-3xl font-bold text-[#E8ECEF] mb-6">Our Mission</h2>
              <p className="text-lg text-[#A8E4A0]/70">
                To empower businesses with innovative technology solutions that drive growth,
                efficiency, and success in the digital age. We believe in creating meaningful
                impact through code and design.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-center text-[#E8ECEF] mb-12"
            >
              Our Core Values
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-6 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-[#39FF85]/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#39FF85]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#E8ECEF] mb-3">{value.title}</h3>
                      <p className="text-[#A8E4A0]/70">{value.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-center text-[#E8ECEF] mb-12"
            >
              Our Approach
            </motion.h2>
            <div className="space-y-8">
              <motion.div
                variants={fadeInUp}
                className="relative p-6 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#E8ECEF] mb-4">1. Understanding Your Needs</h3>
                <p className="text-[#A8E4A0]/70">
                  We take the time to deeply understand your business goals, challenges, and
                  requirements to ensure our solutions align perfectly with your vision.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative p-6 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#E8ECEF] mb-4">2. Collaborative Development</h3>
                <p className="text-[#A8E4A0]/70">
                  We work closely with you throughout the development process, ensuring
                  transparency and incorporating your feedback at every stage.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative p-6 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#E8ECEF] mb-4">3. Quality & Innovation</h3>
                <p className="text-[#A8E4A0]/70">
                  We combine cutting-edge technologies with best practices to deliver
                  high-quality, innovative solutions that stand out in the market.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Vision Section */}
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
              <h2 className="text-3xl font-bold text-[#E8ECEF] mb-6">Our Vision</h2>
              <p className="text-lg text-[#A8E4A0]/70 mb-8">
                &ldquo;To be at the forefront of technological innovation, creating solutions
                that not only meet today&apos;s needs but anticipate tomorrow&apos;s challenges.&rdquo;
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/contact')}
                className="group px-8 py-3 bg-[#39FF85] text-[#0A0F14] rounded-lg font-medium hover:bg-[#39FF85]/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Join Us on This Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 