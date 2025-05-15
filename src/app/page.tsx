'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ArrowRight, Code, Server, Database, Shield, Sparkles, Package, Rocket, Clock, Target, Heart, Lightbulb } from 'lucide-react'

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

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices."
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust and scalable backend solutions using cutting-edge technologies."
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Efficient and secure database architectures for optimal performance."
  },
  {
    icon: Shield,
    title: "Security Implementation",
    description: "Comprehensive security measures to protect your applications and data."
  }
]

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

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in everything we do, delivering the highest quality solutions."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our passion for technology drives us to create innovative and impactful solutions."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and explore new possibilities in technology."
  }
]

export default function HomePage() {
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
                  <span className="text-[#39FF85] font-medium">Welcome to BeaverHut</span>
                </div>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              <span className="bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent">
                Building the Future of Technology
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[#A8E4A0]/70 mb-8"
            >
              We create innovative solutions that transform businesses and enhance user experiences.
              Let&apos;s build something amazing together.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/contact')}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#39FF85] to-[#4A90E2] hover:from-[#39FF85]/90 hover:to-[#4A90E2]/90 transition-all duration-300"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push('/about')}
                className="px-8 py-3 rounded-xl border border-[#39FF85]/20 hover:border-[#39FF85]/40 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-[#39FF85] to-[#4A90E2] bg-clip-text text-transparent">
                  Our Services
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[#A8E4A0]/70 max-w-2xl mx-auto"
              >
                Comprehensive technology solutions tailored to your needs
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    variants={fadeInUp}
                    className="relative group h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-8 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-lg bg-[#39FF85]/10 flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-[#39FF85]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#E8ECEF] mb-4">{service.title}</h3>
                      <p className="text-[#A8E4A0]/70 flex-grow">{service.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#39FF85]/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
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

              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-[#39FF85] to-[#4A90E2] bg-clip-text text-transparent">
                  Our Products
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[#A8E4A0]/70 max-w-2xl mx-auto"
              >
                Revolutionary solutions that will transform the industry
              </motion.p>
            </div>

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
            <div className="text-center mb-16">
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-[#39FF85] to-[#4A90E2] bg-clip-text text-transparent">
                  Our Values
                </span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-[#A8E4A0]/70 max-w-2xl mx-auto"
              >
                The principles that guide everything we do
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    variants={fadeInUp}
                    className="relative group h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-8 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300 h-full flex flex-col">
                      <div className="w-12 h-12 rounded-lg bg-[#39FF85]/10 flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-[#39FF85]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#E8ECEF] mb-4">{value.title}</h3>
                      <p className="text-[#A8E4A0]/70 flex-grow">{value.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-[#A8E4A0]/70 mb-8">
                  Let&apos;s work together to create innovative solutions that drive your success.
                  Get in touch to start your journey with us.
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
