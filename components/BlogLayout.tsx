import type { ReactNode } from "react"
import ServiceLayout from "./ServiceLayout"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Link from "next/link"
import { Search } from "lucide-react"

interface BlogLayoutProps {
  children: ReactNode
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <ServiceLayout>
      <div className="bg-gray-50">
        <section className="relative bg-gradient-to-r from-[#47639e] to-[#4b67a1] text-white py-24">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">PC Mechanix Blog</h1>
              <p className="text-xl mb-8">
                Expert IT insights and tips tailored for Toronto businesses. Stay informed, secure, and ahead of the
                curve.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 shadow-md">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <form className="flex items-center">
                <Input
                  type="text"
                  placeholder="Search blog posts..."
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#47639e]"
                />
                <Button
                  type="submit"
                  className="bg-[#47639e] text-white hover:bg-[#4b67a1] transition-colors duration-300 rounded-r-md"
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row gap-8">
            <main className="lg:w-2/3">{children}</main>
            <aside className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">Categories</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline">
                      IT Security
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Cloud Computing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Hardware Tips
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Software Updates
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-blue-600 hover:underline">
                      Business IT
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
                <ul className="space-y-4">
                  <li>
                    <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                      10 Cybersecurity Best Practices for Small Businesses
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                      The Benefits of Cloud Migration for Toronto Businesses
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                      How to Choose the Right IT Support Provider
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </ServiceLayout>
  )
}

