'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Code, Server, Database, Sparkles, Package, Rocket, Clock, Target, Heart, Lightbulb, Shield } from 'lucide-react'

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Main Gradient Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/10 via-[#A8E4A0]/10 to-[#4A90E2]/10 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 via-[#A8E4A0]/5 to-[#4A90E2]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#39FF85] to-[#4A90E2]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div
                variants={fadeInUp}
                className="space-y-8 text-center lg:text-left"
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-block"
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
                  className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight"
                >
                  <span className="block mb-4 text-[#E8ECEF]">Crafting</span>
                  <span className="bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent">
                    Digital Excellence
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-[#A8E4A0]/70 max-w-xl mx-auto lg:mx-0"
                >
                  We create innovative solutions that transform businesses and enhance user experiences.
                  Let&apos;s build something amazing together.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push('/contact')}
                    className="group relative px-8 py-4 rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85] to-[#4A90E2] transition-transform duration-300 group-hover:scale-110" />
                    <span className="relative text-[#0A0F14] font-medium">Get Started</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push('/about')}
                    className="group relative px-8 py-4 rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/10 to-[#4A90E2]/10 transition-transform duration-300 group-hover:scale-110" />
                    <span className="relative text-[#E8ECEF] font-medium">Learn More</span>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Column - Animated Visual */}
              <motion.div
                variants={fadeInUp}
                className="relative hidden lg:block"
              >
                <div className="relative w-full aspect-square">
                  {/* Animated Rings */}
                  <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-[#39FF85]/20"
                        style={{
                          transform: `scale(${1 + i * 0.2})`,
                        }}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20 + i * 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    ))}
                  </div>

                  {/* Center Element */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative w-64 h-64"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/20 to-[#4A90E2]/20 rounded-full blur-xl" />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/10 to-[#4A90E2]/10 rounded-full" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-[#1A1F26]/50 backdrop-blur-sm flex items-center justify-center">
                          <Sparkles className="w-16 h-16 text-[#39FF85] animate-pulse" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
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
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#39FF85]/5 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#39FF85]/10 to-[#4A90E2]/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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
                          <span className="text-[#39FF85] font-medium">Let&apos;s Build Together</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.h2
                      variants={fadeInUp}
                      className="text-3xl sm:text-4xl font-bold text-[#E8ECEF]"
                    >
                      Ready to
                      <span className="block mt-2 bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent">
                        Transform Your Business?
                      </span>
                    </motion.h2>

                    <motion.p
                      variants={fadeInUp}
                      className="text-lg text-[#A8E4A0]/70"
                    >
                      Let&apos;s work together to create innovative solutions that drive your success.
                      Get in touch to start your journey with us.
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

                  {/* Right Column - Animated Elements */}
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

                      {/* Floating Elements */}
                      <div className="absolute inset-0">
                        {[...Array(6)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-[#39FF85] to-[#4A90E2]"
                            animate={{
                              x: [0, Math.cos(i * Math.PI / 3) * 100],
                              y: [0, Math.sin(i * Math.PI / 3) * 100],
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: i * 0.5
                            }}
                          />
                        ))}
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
