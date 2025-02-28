import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Modern Layout Demo | PC Mechanix",
  description: "Explore our modern layout design and responsive components for PC Mechanix website.",
  keywords: "modern layout, website design, PC Mechanix demo, user interface, web design, responsive design, UI components, layout system",
}

export default function ModernLayoutDemoLayout({
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