"use client"

import ModernMenu from "@/components/ModernMenu"

export default function ModernMenuPage() {
  return (
    <div className="min-h-screen">
      <ModernMenu />
      
      {/* Content for testing scroll behavior */}
      <div className="pt-24">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="p-8 bg-gray-100 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Section {index + 1}</h2>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}