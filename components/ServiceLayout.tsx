"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Mail, MapPin, Phone, X } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import type { ReactNode } from "react"
import { useCallback, useState } from "react"

// Use dynamic import to prevent circular dependencies
const ModernMenu = dynamic(() => import("./ModernMenu"), {
  ssr: false,
  loading: () => <div className="h-16 bg-gray-900"></div>
})

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
          className="w-full bg-[#1D4D84] text-white hover:bg-[#4B6E97] text-base sm:text-lg font-bold transition-all duration-300 hover:shadow-md py-3 sm:py-4 min-h-[44px]"
          asChild
        >
          <a href="tel:416-300-1006" className="flex items-center justify-center gap-2">
            <Phone className="h-5 w-5" />
            <span>416-300-1006</span>
          </a>
        </Button>
      </div>

      {renderHeaderAndFooter && (
        <>
          <header className="sticky top-0 z-[100] bg-white shadow-lg">
            <ModernMenu variant="inline" className="bg-gray-900" />
          </header>

          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-[110] overflow-y-auto bg-white">
              <div className="container mx-auto px-4 py-4">
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
              <div className="flex space-x-6 -ml-24">
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
