'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DialogTitle } from '@/components/ui/dialog'

const navLinks = [
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div 
        className={cn(
          "w-full lg:w-[45%] px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4 transition-all duration-500",
          isHovered && "lg:w-[50%]"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <nav
          className={cn(
            'flex items-center justify-between rounded-2xl border border-white/10 transition-all duration-500',
            scrolled
              ? 'bg-gray-900/40 backdrop-blur-xl shadow-lg py-4'
              : 'bg-gray-900/30 backdrop-blur-md shadow-md py-5',
            isHovered && 'border-green-400/20 shadow-lg shadow-green-400/5'
          )}
        >
          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center justify-between w-full px-6">
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                'text-2xl font-bold text-green-400 transition-all duration-500',
                scrolled && 'text-shadow-md',
                'hover:text-green-300 hover:text-shadow-lg hover:scale-105',
                isHovered && 'text-shadow-lg'
              )}
            >
              BeaverHut
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center justify-center flex-1">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  asChild
                  variant="ghost"
                  className={cn(
                    'relative px-3 py-2 text-base transition-all duration-300',
                    pathname === link.href
                      ? 'text-green-400'
                      : 'text-gray-200 hover:text-green-400',
                    'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-400 after:transition-transform after:duration-300',
                    pathname === link.href
                      ? 'after:scale-x-100'
                      : 'after:scale-x-0 hover:after:scale-x-100',
                    'hover:scale-105 hover:bg-green-400/5'
                  )}
                >
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              ))}
            </div>

            {/* Contact Button */}
            <Button
              asChild
              className={cn(
                "bg-green-400 text-gray-900 font-bold hover:bg-green-300 rounded-lg px-3 py-2 transition-all duration-300",
                "hover:shadow-lg hover:shadow-green-400/30 hover:scale-105",
                "hover:bg-gradient-to-r hover:from-green-400 hover:to-green-300"
              )}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex xl:hidden items-center justify-between w-full px-4">
            <Link
              href="/"
              className={cn(
                'text-2xl sm:text-3xl font-bold text-green-400 transition-all duration-300',
                scrolled && 'text-shadow-md',
                'hover:text-green-300 hover:text-shadow-lg hover:scale-105'
              )}
            >
              BeaverHut
            </Link>

            <Drawer open={mobileOpen} onOpenChange={setMobileOpen}>
              <DrawerTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleDrawerToggle}
                  className="hover:bg-green-400/10 hover:scale-110 transition-all duration-300"
                >
                  <Menu className="h-7 w-7 text-gray-200" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-gray-900 text-gray-200 h-screen border-none rounded-none fixed top-0 left-0 right-0 bottom-0">
                <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                <div className="relative h-full overflow-hidden">
                  {/* Background Decorations */}
                  <div className="absolute inset-0 z-0">
                    {/* Top right hexagon */}
                    <div
                      className="absolute top-[-5%] right-[-5%] w-[35vw] h-[35vw] bg-green-400/5 border border-green-400/20 animate-spin-slow"
                      style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                    >
                      <div className="absolute inset-0 bg-gradient-radial from-green-400/10 to-transparent" />
                    </div>
                    {/* Bottom left hexagon */}
                    <div
                      className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-500/5 border border-blue-500/20 animate-spin-slow-reverse"
                      style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
                    >
                      <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent" />
                    </div>
                    {/* Center glow */}
                    <div
                      className="absolute top-[40%] left-1/2 w-[40vw] h-[40vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/10 blur-3xl animate-pulse-slow"
                    />
                    {/* Small hexagons */}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={cn(
                          'absolute w-2.5 h-2.5 animate-breathe',
                          i % 2 === 0 ? 'bg-green-400/30' : 'bg-blue-500/30'
                        )}
                        style={{
                          top: `${15 + i * 15}%`,
                          left: `${70 + (i % 3) * 10}%`,
                          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                          animationDelay: `${i}s`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Top: Logo and Close */}
                  <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-6 py-4 z-10">
                    <Link
                      href="/"
                      className="text-3xl font-bold text-green-400 hover:text-green-300 text-shadow-md hover:scale-105 transition-all duration-300"
                      onClick={handleDrawerToggle}
                    >
                      BeaverHut
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleDrawerToggle}
                      className="text-green-400 hover:text-gray-200 bg-green-400/10 border border-green-400/30 hover:bg-green-400/30 hover:rotate-90 transition-all duration-300"
                    >
                      <X className="h-7 w-7" />
                    </Button>
                  </div>

                  {/* Main Content */}
                  <div className="flex flex-col items-center justify-center h-full px-6 pt-20 pb-24 z-10">
                    <div className="flex flex-col items-center gap-4 w-full max-w-md">
                      {navLinks.map((link, idx) => (
                        <Button
                          key={link.name}
                          asChild
                          variant="ghost"
                          className={cn(
                            'w-full py-6 text-xl font-bold rounded-lg transition-all duration-300',
                            pathname === link.href
                              ? 'text-green-400 bg-green-400/15 border-green-400/30'
                              : 'text-gray-200 border-gray-200/10 hover:bg-green-400/10',
                            'border hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20',
                            'hover:bg-gradient-to-r hover:from-green-400/10 hover:to-transparent',
                            'animate-fade-slide-in'
                          )}
                          style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
                        >
                          <Link href={link.href} onClick={handleDrawerToggle}>
                            {link.name}
                          </Link>
                        </Button>
                      ))}
                      <Button
                        asChild
                        className={cn(
                          "w-full py-6 text-xl font-bold mt-4 rounded-lg transition-all duration-300",
                          "bg-gradient-to-r from-green-400 to-green-200 text-gray-900",
                          "hover:from-green-400 hover:to-blue-500 hover:-translate-y-0.5",
                          "hover:shadow-lg hover:shadow-green-400/30",
                          "animate-fade-slide-in"
                        )}
                        style={{ animationDelay: `${0.1 + navLinks.length * 0.1}s` }}
                      >
                        <Link href="/contact" onClick={handleDrawerToggle}>
                          Contact Us
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Bottom: Social & Copyright */}
                  <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-4 px-6 py-4 bg-gradient-to-t from-gray-800/80 to-transparent backdrop-blur-md z-10">
                    <div className="flex gap-4">
                      {/* Social links can be added here */}
                    </div>
                    <p className="text-sm text-gray-400">
                      © {new Date().getFullYear()} BeaverHut. All rights reserved.
                    </p>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </div>
    </header>
  )
}