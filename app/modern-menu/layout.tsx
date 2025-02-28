import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Menu Demo | PC Mechanix",
  description: "Experience our modern menu design and navigation system for PC Mechanix website.",
  keywords: "modern menu, website navigation, PC Mechanix menu, user interface, web design, responsive menu, navigation system",
}

export default function ModernMenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      {children}
    </div>
  )
}