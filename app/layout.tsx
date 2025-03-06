import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: 'PC Mechanix - Toronto IT Services & Solutions',
  description: 'Expert IT services in Toronto and the GTA. Network solutions, managed IT, cybersecurity, cloud services, and more.',
  keywords: 'IT services, Toronto, GTA, PC repair, computer repair, network solutions, managed IT, cybersecurity, cloud services, tech support, IT consulting, business IT solutions',
  generator: 'Next.js',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'PC Mechanix',
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  themeColor: '#1D4D84',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="application-name" content="PC Mechanix" />
        <meta name="apple-mobile-web-app-title" content="PC Mechanix" />
        <meta name="msapplication-TileColor" content="#1D4D84" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
