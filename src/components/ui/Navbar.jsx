'use client'

import Image from 'next/image'
import ThemeToggle from "./ThemeToggle";
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  Code,
  Cloud,
  Globe,
  Cpu,
  Brain,
  Palette,
  Menu,
  X,
  Headset,
  Cable
} from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Services data for cleaner code
  const services = [
    { href: "/services/staff-augmentation", icon: Globe, label: "IT Staff Augmentation" },
    { href: "/services/software-consulting-services", icon: Headset, label: "Software Consulting Services" },
    { href: "/services/software-development", icon: Code, label: "Software Development" },
    { href: "/services/ux-ui-designing", icon: Palette, label: "UI/UX Designing" },
    { href: "/services/iot-systems", icon: Cpu, label: "IoT Systems" },
    { href: "/services/ai-machine-learning", icon: Brain, label: "AI / ML Development" },
    { href: "/services/cloud-services", icon: Cloud, label: "Cloud Services" },
    { href: "/services/system-integration", icon: Cable, label: "System Integration" },
  ]

  // Navigation items
 const navItems = [
  { href: "/services", label: "Services", dropdown: true },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" }, // 👈 Added
  { href: "/contact", label: "Contact" },
]

  // Check if a link is active
  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const closeTimeout = useRef(null)

  return (
    <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between backdrop-blur-3xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 z-50 sticky top-0 transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/">
          <div className="relative w-40 h-10 md:w-52 md:h-12">
            {/* Replace with your actual logo */}
           <Image 
              src="/logo.png"
              alt="Houston Systems IT"
              fill
              className="object-contain"
            />
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8 text-[#0F2F4E] dark:text-gray-200 font-medium text-lg relative">
        {navItems.map((item) => (
          <div key={item.href} className="relative group">
            {item.dropdown ? (
              <div
                className="relative"
                onMouseEnter={() => {
                  if (closeTimeout.current) clearTimeout(closeTimeout.current)
                  setOpen(true)
                }}
                onMouseLeave={() => {
                  closeTimeout.current = setTimeout(() => {
                    setOpen(false)
                  }, 300) // delay in ms (300–500 feels nice)
                }}
              >
                <button className={`flex items-center gap-1 transition ${isActive('/services') ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}>
                  Services <ChevronDown size={18} />
                </button>

                {open && (
                  <div className="absolute left-0 mt-2 w-72 bg-white dark:bg-gray-900 shadow-lg rounded-xl border border-gray-100 dark:border-gray-700 py-3 text-base z-50">
                    {services.map((service) => {
                      const Icon = service.icon
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`flex items-center gap-3 px-4 py-2 transition ${isActive(service.href) ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                        >
                          <Icon className="text-blue-600" size={20} />
                          {service.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                className={`transition ${isActive(item.href) ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center space-x-4">
  <ThemeToggle />

  <Link
    href="mailto:sk@houstonsystem.com"
    className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition font-medium"
  >
    Email: sk@houstonsystem.com
  </Link>
</div>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 lg:hidden z-50">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <div className="py-2">
                    <button
                      className={`flex items-center gap-1 text-lg ${isActive('/services') ? 'text-blue-600 font-semibold' : ''}`}
                      onClick={() => setOpen(!open)}
                    >
                      Services <ChevronDown size={18} className={open ? 'rotate-180 transition' : ''} />
                    </button>

                    {open && (
                      <div className="pl-6 mt-2 space-y-3">
                        {services.map((service) => {
                          const Icon = service.icon
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={`flex items-center gap-3 py-2 ${isActive(service.href) ? 'text-blue-600 font-medium' : ''}`}
                            >
                              <Icon className="text-blue-600" size={18} />
                              {service.label}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-2 text-lg ${isActive(item.href) ? 'text-blue-600 font-semibold' : ''}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-3">
              <Link
                href="mailto:sk@houstonsystem.com"
                className="block text-center px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition font-medium"
                aria-label="Contact Us via Email"
              >
                sk@houstonsystem.com
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
