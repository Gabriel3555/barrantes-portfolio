import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gabriel Barrantes - Desarrollador de Software",
  description:
    "Portfolio profesional de Gabriel Barrantes, especialista en desarrollo Java Spring Framework y arquitectura de software. Estudiante de Análisis y Desarrollo de Software en SENA.",
  generator: "Gabriel Barrantes",
  keywords: ["Gabriel Barrantes", "Desarrollador", "Java", "Spring", "Spring Boot", "SENA", "Software"],
  authors: [{ name: "Gabriel Barrantes" }],
  openGraph: {
    title: "Gabriel Barrantes - Desarrollador de Software",
    description: "Portfolio profesional mostrando proyectos de desarrollo web y aplicaciones.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
