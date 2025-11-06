import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Source_Sans_3 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: "Mridul Agrawal",
  description:
    "Professional portfolio showcasing modern web development and design expertise.",
  keywords: ["web developer", "full-stack", "React", "Next.js", "UI/UX", "portfolio"],
  authors: [{ name: "Mridul" }],
  creator: "Mridul",
  openGraph: {
    title: "Mridul Agrawal",
    description: "Professional portfolio showcasing modern web development and design expertise",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mridul Agrawal",
    description: "Professional portfolio showcasing modern web development and design expertise",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  generator: 'v0.app',
  icons: {
    icon: '/favicon.jpeg',
    shortcut: '/favicon.jpeg',
    apple: '/favicon.jpeg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable} ${sourceSans.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}