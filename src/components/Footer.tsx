'use client'

import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail, ArrowRight, Sparkles, Brain, Globe, LucideIcon, BadgeInfo, TabletSmartphone, Webhook, MonitorPlay } from 'lucide-react'
import Newsletter from './Newsletter'
import { motion } from 'framer-motion'

interface FooterLink {
  name: string
  href: string
  icon?: LucideIcon
}

const footerLinks: Record<string, FooterLink[]> = {
  Company: [
    { name: 'Services', href: '/services', icon: BadgeInfo },
    { name: 'Tutorials', href: '/tutorials', icon: MonitorPlay },
    { name: 'About Us', href: '/about', icon: Sparkles },
    { name: 'Contact', href: '/contact', icon: Mail },
  ],
  Products: [
    { name: 'Web Apps', href: '/products/web', icon: Globe },
    { name: 'Mobile Apps', href: '/products/mobile', icon: TabletSmartphone },
    { name: 'Extensions ', href: '/products/extensions', icon: Webhook },
    { name: 'AI Solutions', href: '/products/ai', icon: Brain }
  ]
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com', color: '#4A90E2' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com', color: '#39FF85' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com', color: '#A8E4A0' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@beaverhut.com', color: '#E8ECEF' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0A0F14] text-[#E8ECEF] overflow-hidden">
      {/* Decorative Top Line */}
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/20 via-[#4A90E2]/20 to-[#39FF85]/20 h-[1px] blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/10 via-[#4A90E2]/10 to-[#39FF85]/10 h-[1px]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Neural Network Grid */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(30)].map((_, i) => (
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

        {/* AI-inspired Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#39FF85]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A8E4A0]/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative w-full flex justify-center">
        <div className="w-2/3 px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full"
          >
            {/* Top Section with Logo and Social Links */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-10 pb-6 border-b border-[#1A1F26]"
            >
              <motion.div variants={itemVariants} className="mb-6 md:mb-0 w-full md:w-auto">
                <Link href="/" className="inline-block group">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#39FF85] via-[#A8E4A0] to-[#4A90E2] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    BeaverHut
                  </h2>
                </Link>
                <p className="text-[#A8E4A0]/70 text-sm sm:text-base leading-relaxed mt-3 max-w-md">
                  Redefining seamless technology experiences.
                  <br />
                  AI-powered innovation meets sleek design.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4 sm:gap-6 w-full md:w-auto justify-center md:justify-end">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85] to-[#4A90E2] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E8ECEF]/70 group-hover:text-[#39FF85] transition-colors duration-300" />
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Main Content Grid */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col 2xl:flex-row gap-6 sm:gap-8"
            >
              {/* Quick Links - 7 columns */}
              <motion.div variants={itemVariants} className="w-full 2xl:w-7/12">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                  {Object.entries(footerLinks).map(([category, links], index) => (
                    <div 
                      key={category} 
                      className={`space-y-3 ${index === 2 ? 'col-span-2 md:col-span-1' : ''}`}
                    >
                      <h3 className="text-sm sm:text-base font-semibold bg-gradient-to-r from-[#39FF85] to-[#4A90E2] bg-clip-text text-transparent">
                        {category}
                      </h3>
                      <ul className="space-y-2">
                        {links.map((link) => {
                          const Icon = link.icon
                          return (
                            <motion.li
                              key={link.name}
                              whileHover={{ x: 5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <Link
                                href={link.href}
                                className="group flex items-center text-[#A8E4A0]/70 hover:text-[#39FF85] transition-colors duration-300 text-sm sm:text-base"
                              >
                                {Icon && (
                                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-[#39FF85]/50 group-hover:text-[#39FF85] transition-colors duration-300" />
                                )}
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                                {link.name}
                              </Link>
                            </motion.li>
                          )
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter - 5 columns */}
              <motion.div variants={itemVariants} className="w-full 2xl:w-7/12">
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#39FF85]/5 to-[#4A90E2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-5 sm:p-6 rounded-xl border border-[#39FF85]/10 h-full flex flex-col justify-center backdrop-blur-sm">
                    <Newsletter />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              variants={itemVariants}
              className="mt-8 sm:mt-10 pt-6 border-t border-[#1A1F26] text-center relative"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4A90E2]/20 to-transparent" />
              <p className="text-[#A8E4A0]/50 text-sm sm:text-base">
                © {new Date().getFullYear()} BeaverHut. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 