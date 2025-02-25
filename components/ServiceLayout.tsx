"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, ChevronDown, Menu, ChevronUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useCallback, useState } from "react"

const serviceItems = [
  {
    label: "Business",
    items: [
      { label: "Network Solutions", href: "/business/network-solutions" },
      { label: "Managed IT Services", href: "/business/managed-it" },
      { label: "Backup & Recovery", href: "/business/backup-recovery" },
      { label: "Cloud Services", href: "/business/cloud-services" },
      { label: "Virtual Desktop Infrastructure", href: "/business/vdi" },
      { label: "IT Consulting", href: "/business/it-consulting" },
      { label: "Hardware & Software Procurement", href: "/business/procurement" },
      { label: "Cybersecurity Solutions", href: "/business/cybersecurity" },
      { label: "Email & Collaboration", href: "/business/email-collaboration" },
      { label: "CCTV & Alarm Systems", href: "/business/security-systems" },
      { label: "Business Desktop Repair", href: "/services/desktop-repair" },
    ],
  },
  {
    label: "Personal",
    items: [
      { label: "Laptop Repair", href: "/services/laptop-repair" },
      { label: "Desktop Repair", href: "/services/desktop-repair" },
      { label: "Mac Repair", href: "/services/mac-repair" },
      { label: "Tablet and Smartphone Repair", href: "/services/mobile-repair" },
      { label: "Virus Removal", href: "/services/virus-removal" },
      { label: "Data Recovery", href: "/services/data-recovery" },
      { label: "Hardware Upgrades", href: "/services/hardware-upgrades" },
      { label: "Software Troubleshooting", href: "/services/software-troubleshooting" },
    ],
  },
]

interface ServiceLayoutProps {
  children: ReactNode
  renderHeaderAndFooter?: boolean
}

const ScrollToTopButton = () => {
  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <button
      onClick={handleScrollToTop}
      className="fixed bottom-6 sm:bottom-8 right-4 sm:right-6 bg-primary text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 hover:scale-110 min-w-[44px] min-h-[44px] flex items-center justify-center z-[100]"
      aria-label="Back to top"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  )
}

export default function ServiceLayout({ children, renderHeaderAndFooter = true }: ServiceLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <div className="md:hidden bg-primary p-3 text-center sticky top-0 z-[120]">
        <Button
          size="lg"
          className="w-full bg-white text-primary hover:bg-blue-100 text-base sm:text-lg font-bold transition-all duration-300 hover:shadow-md py-3 sm:py-4 min-h-[44px]"
          asChild
        >
          <a href="tel:416-300-1006" className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            <span>Call Now: 416-300-1006</span>
          </a>
        </Button>
      </div>

      {renderHeaderAndFooter && (
        <>
          <header className="sticky top-0 z-[100] bg-white shadow-lg">
            <div className="container mx-auto px-2 sm:px-4">
              <nav className="flex items-center justify-between py-2 relative">
                <Link href="/" className="flex items-center pl-0 sm:pl-4 lg:pl-16 transition-transform duration-300 hover:scale-105">
                  <div className="relative w-[150px] sm:w-[200px] h-[40px] sm:h-[50px]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Email-FsOiS0VHhSaGbkk2xFdAqUX2RxxvUG.png"
                      alt="PC Mechanix - Your Exclusive IT Service"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>
                
                <div className="hidden md:flex items-center space-x-2 lg:space-x-6 bg-[#E4EDEF] px-2 lg:px-4 py-2 rounded-lg max-w-[600px] overflow-x-auto">
                  <Link
                    href="/"
                    className="text-[#1D4D84] hover:text-[#4B6E97] font-semibold text-sm uppercase tracking-wide transition-all duration-300 ease-in-out hover:bg-blue-50 px-4 py-2 rounded bg-[#1D4D84] text-white"
                  >
                    Home
                  </Link>
                  {serviceItems.map((category, index) => (
                    <DropdownMenu key={index}>
                      <DropdownMenuTrigger className="flex items-center text-[#1D4D84] hover:text-[#4B6E97] font-semibold text-sm uppercase tracking-wide transition-all duration-300 ease-in-out hover:bg-blue-50 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-200">
                        {category.label}{" "}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="relative mt-2 bg-white rounded-md shadow-lg border border-gray-100">
                        {category.items.map((item, itemIndex) => (
                          <DropdownMenuItem
                            className="hover:bg-[#E4EDEF] focus:bg-[#E4EDEF] rounded-sm transition-colors duration-150"
                            key={itemIndex}
                          >
                            <Link
                              href={item.href}
                              className="w-full text-sm font-medium transition-colors duration-300 hover:text-[#1D4D84]"
                            >
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ))}
                  <Link
                    href="/about"
                    className="text-[#1D4D84] hover:text-[#4B6E97] font-semibold text-sm uppercase tracking-wide transition-all duration-300 ease-in-out hover:bg-blue-50 px-4 py-2 rounded"
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[#1D4D84] hover:text-[#4B6E97] font-semibold text-sm uppercase tracking-wide transition-all duration-300 ease-in-out hover:bg-blue-50 px-4 py-2 rounded"
                  >
                    Contact
                  </Link>
                </div>
                
                <div className="hidden md:flex items-center flex-col">
                  <div className="text-[#1D4D84] font-semibold text-sm lg:text-base">
                    <div className="transition-all duration-300 hover:text-blue-500">Contact Sales & Support:</div>
                    <div className="transition-all duration-300 hover:text-blue-500 hover:scale-105">416-300-1006</div>
                  </div>
                </div>
                
                <button
                  className="md:hidden text-[#1D4D84] p-2 transition-transform duration-300 hover:scale-110"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </nav>
            </div>
          </header>

          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-[110] overflow-y-auto bg-white">
              <div className="container mx-auto px-4 py-4">
                <div className="flex justify-end mb-4">
                  <button
                    className="text-[#1D4D84] p-2 transition-transform duration-300 hover:scale-110"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <nav className="flex flex-col space-y-3">
                  <Link
                    href="/"
                    className="text-lg font-semibold text-[#1D4D84] hover:text-[#4B6E97] uppercase tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-100 px-2 py-1 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  {serviceItems.map((category, index) => (
                    <details key={index} className="group">
                      <summary className="text-lg font-semibold cursor-pointer list-none flex items-center justify-between text-[#1D4D84] hover:text-[#4B6E97] uppercase tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-100 px-4 py-3 rounded min-h-[44px]">
                        {category.label}{" "}
                        <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open:rotate-180" />
                      </summary>
                      <ul className="mt-2 space-y-2 pl-4">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <Link
                              href={item.href}
                              className="text-[#1D4D84] hover:text-[#4B6E97] font-medium text-base transition-all duration-300 ease-in-out hover:bg-gray-100 px-3 py-2 rounded block min-h-[44px] flex items-center"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ))}
                  <Link
                    href="/about"
                    className="text-lg font-semibold text-[#1D4D84] hover:text-[#4B6E97] uppercase tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-100 px-2 py-1 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-semibold text-[#1D4D84] hover:text-[#4B6E97] uppercase tracking-wide transition-all duration-300 ease-in-out hover:bg-gray-100 px-2 py-1 rounded"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <div className="flex flex-col space-y-2 mt-4">
                    <Button
                      variant="outline"
                      className="w-full border-[#1D4D84] text-[#1D4D84] hover:bg-[#1D4D84] hover:text-white transition-all duration-300 text-lg font-bold py-4"
                      asChild
                    >
                      <a href="tel:416-300-1006">Call Now: 416-300-1006</a>
                    </Button>
                    <Button className="w-full bg-[#1D4D84] text-white hover:bg-[#4B6E97] font-semibold transition-all duration-300 hover:shadow-md">
                      Get a Free Quote
                    </Button>
                  </div>
                </nav>
              </div>
            </div>
          )}
        </>
      )}

      <main className="flex-grow flex flex-col min-h-screen">
        {children}
      </main>

      {renderHeaderAndFooter && (
        <footer className="bg-gray-900 text-white py-8 sm:py-12 mt-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">Contact Info</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 group">
                    <MapPin className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs sm:text-sm group-hover:text-blue-300 transition-colors duration-300">
                      1140 Davenport Road, Toronto, ON M6G 2C3
                    </span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <Phone className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs sm:text-sm group-hover:text-blue-300 transition-colors duration-300">416-300-1006</span>
                  </div>
                  <div className="flex items-center gap-2 group">
                    <Mail className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                    <span className="text-xs sm:text-sm group-hover:text-blue-300 transition-colors duration-300">
                      info@pcmechanix.ca
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">Quick Links</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                  <li>
                    <Link href="/" className="text-xs sm:text-sm hover:text-blue-300 transition-colors duration-300 hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/business"
                      className="text-xs sm:text-sm hover:text-blue-300 transition-colors duration-300 hover:underline"
                    >
                      Business Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-xs sm:text-sm hover:text-blue-300 transition-colors duration-300 hover:underline"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-xs sm:text-sm hover:text-blue-300 transition-colors duration-300 hover:underline"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-4">Services</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                  <li>
                    <Link
                      href="/business/managed-it"
                      className="text-xs sm:text-sm hover:text-blue-300 transition-colors duration-300 hover:underline"
                    >
                      Managed IT Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/business/cybersecurity"
                      className="text-xs sm:text-sm hover:text-blue-300 transition-colors duration-300 hover:underline"
                    >
                      Cyber Security
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/business/cloud-services"
                      className="text-xs sm:text-sm hover:text-blue-300 transition-colors duration-300 hover:underline"
                    >
                      Cloud Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/business/network-solutions"
                      className="text-xs sm:text-sm hover:text-blue-300 transition-colors duration-300 hover:underline"
                    >
                      Networking
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs sm:text-sm text-center sm:text-left">&copy; {new Date().getFullYear()} PC Mechanix. All rights reserved.</p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-6 w-6 transition-transform duration-300 hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-300 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-6 w-6 transition-transform duration-300 hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      )}

      <ScrollToTopButton />
    </div>
  )
}
