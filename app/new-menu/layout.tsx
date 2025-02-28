import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "New Menu Demo | PC Mechanix",
  description: "Explore our new menu design and navigation system for PC Mechanix website.",
  keywords: "menu demo, website navigation, PC Mechanix menu, user interface, web design, modern menu, navigation system",
}

export default function NewMenuLayout({
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