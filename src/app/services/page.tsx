'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { 
  Globe, 
  Smartphone, 
  Brain, 
  FileText, 
  Database,
  Puzzle,
  ArrowRight
} from 'lucide-react'

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
    icon: Globe,
    title: "Web Applications",
    description: "Modern, responsive web applications built with cutting-edge technologies. From single-page applications to complex enterprise solutions.",
    features: [
      "React/Next.js Development",
      "Progressive Web Apps (PWA)",
      "Real-time Applications",
      "Enterprise Solutions",
      "E-commerce Platforms",
      "Custom Web Portals"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
    features: [
      "React Native Development",
      "iOS & Android Apps",
      "Cross-platform Solutions",
      "Mobile-First Design",
      "Offline Capabilities",
      "Push Notifications"
    ]
  },
  {
    icon: Puzzle,
    title: "Browser Extensions",
    description: "Powerful browser extensions that enhance productivity and user experience across Chrome, Firefox, and Safari.",
    features: [
      "Chrome Extensions",
      "Firefox Add-ons",
      "Safari Extensions",
      "Cross-browser Compatibility",
      "Custom Functionality",
      "Seamless Integration"
    ]
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description: "End-to-end AI development and integration services that bring intelligence to your applications and workflows.",
    features: [
      "Custom AI Model Development",
      "Machine Learning Solutions",
      "Natural Language Processing",
      "AI Model Integration",
      "Chatbot Development",
      "Predictive Analytics"
    ]
  },
  {
    icon: Database,
    title: "API Development",
    description: "Robust and scalable API services that power your applications and enable seamless integration.",
    features: [
      "RESTful APIs",
      "GraphQL Services",
      "API Documentation",
      "Authentication & Security",
      "Rate Limiting",
      "Webhook Integration"
    ]
  },
  {
    icon: FileText,
    title: "Software Documentation",
    description: "Comprehensive documentation services that make your software accessible and maintainable.",
    features: [
      "API Documentation",
      "Technical Writing",
      "User Guides",
      "Developer Documentation",
      "Architecture Documentation",
      "Code Documentation"
    ]
  }
]

export default function ServicesPage() {
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
                Comprehensive Technology
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#4A90E2] via-[#39FF85] to-[#A8E4A0] bg-clip-text text-transparent">
                Solutions
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-[#A8E4A0]/70 mb-8"
            >
              From web applications to AI services, we deliver end-to-end technology solutions
              that drive innovation and growth for your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    variants={fadeInUp}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-6 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300 h-full">
                      <div className="w-12 h-12 rounded-lg bg-[#39FF85]/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#39FF85]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#E8ECEF] mb-3">{service.title}</h3>
                      <p className="text-[#A8E4A0]/70 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-[#A8E4A0]/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#39FF85] mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Development Process
            </motion.h2>
            <div className="space-y-8">
              <motion.div
                variants={fadeInUp}
                className="relative p-6 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#E8ECEF] mb-4">1. Discovery & Planning</h3>
                <p className="text-[#A8E4A0]/70">
                  We begin with a thorough analysis of your requirements, goals, and challenges.
                  This phase includes architecture planning, technology selection, and project roadmap creation.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative p-6 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#E8ECEF] mb-4">2. Design & Prototyping</h3>
                <p className="text-[#A8E4A0]/70">
                  Our design process focuses on creating intuitive user experiences and efficient system architectures.
                  We create prototypes and wireframes to validate concepts before development.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative p-6 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#E8ECEF] mb-4">3. Development & Testing</h3>
                <p className="text-[#A8E4A0]/70">
                  We follow agile development practices with continuous integration and testing.
                  Regular updates and feedback sessions ensure alignment with your vision.
                </p>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="relative p-6 rounded-xl border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#E8ECEF] mb-4">4. Deployment & Support</h3>
                <p className="text-[#A8E4A0]/70">
                  We handle the deployment process and provide ongoing support and maintenance.
                  Our team ensures your solution remains up-to-date and performs optimally.
                </p>
              </motion.div>
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
            className="max-w-6xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="relative overflow-hidden rounded-3xl"
            >
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#39FF85]/10 to-[#4A90E2]/10" />
              <div className="absolute inset-0 bg-[#0A0F14]/80 backdrop-blur-xl" />
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#39FF85]/5 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
              </div>

              {/* Content */}
              <div className="relative px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column */}
                  <div className="space-y-8">
                    <motion.h2 
                      variants={fadeInUp}
                      className="text-4xl sm:text-5xl font-bold"
                    >
                      <span className="bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent">
                        Let&apos;s Build Something
                      </span>
                      <br />
                      <span className="text-[#E8ECEF]">
                        Amazing Together
                      </span>
                    </motion.h2>
                    <motion.p 
                      variants={fadeInUp}
                      className="text-lg text-[#A8E4A0]/70"
                    >
                      Ready to transform your ideas into reality? Our team of experts is here to help you create innovative solutions that drive your business forward.
                    </motion.p>
                    <motion.div 
                      variants={fadeInUp}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push('/contact')}
                        className="group px-8 py-4 bg-[#39FF85] text-[#0A0F14] rounded-xl font-medium hover:bg-[#39FF85]/90 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        Get in Touch
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push('/about')}
                        className="px-8 py-4 bg-transparent border-2 border-[#39FF85]/20 text-[#E8ECEF] rounded-xl font-medium hover:border-[#39FF85]/40 transition-all duration-300"
                      >
                        Learn More About Us
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Right Column */}
                  <motion.div 
                    variants={fadeInUp}
                    className="relative"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: Globe, text: "Web Development" },
                        { icon: Brain, text: "AI Solutions" },
                        { icon: Smartphone, text: "Mobile Apps" },
                        { icon: Database, text: "API Services" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 rounded-xl bg-[#39FF85]/5 border border-[#39FF85]/10 hover:border-[#39FF85]/20 transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#39FF85]/10 flex items-center justify-center">
                              <item.icon className="w-5 h-5 text-[#39FF85]" />
                            </div>
                            <span className="text-[#E8ECEF] font-medium">{item.text}</span>
                          </div>
                        </motion.div>
                      ))}
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