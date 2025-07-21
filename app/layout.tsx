import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ImagePreloader } from "@/components/image-preloader"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Edgenet Solutions - Innovative Software Solutions",
  description: "Transform your business with cutting-edge SaaS products and custom software development services.",
  keywords: "SaaS, software development, custom software, web applications, mobile apps",
  authors: [{ name: "Edgenet Solutions" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Edgenet Solutions - Innovative Software Solutions",
    description: "Transform your business with cutting-edge SaaS products and custom software development services.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />

        {/* Resource hints */}
        <link rel="preload" href="/images/edgenet-logo-icon.png" as="image" />
      </head>
      <body className={inter.className}>
        <ImagePreloader />
        {children}
      </body>
    </html>
  )
}
