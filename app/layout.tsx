import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gabriel Barrantes - Backend & DevSecOps",
  description:
    "Portfolio profesional de Gabriel Barrantes, Tecnólogo en Análisis y Desarrollo de Software. Backend con Java & Spring, arquitectura hexagonal, infraestructura en la nube (Azure, ARO/OpenShift) y prácticas DevSecOps.",
  generator: "Gabriel Barrantes",
  keywords: [
    "Gabriel Barrantes",
    "Desarrollador Backend",
    "Java",
    "Spring",
    "Spring Boot",
    "DevSecOps",
    "Azure",
    "Azure DevOps",
    "OpenShift",
    "Docker",
    "SENA",
  ],
  authors: [{ name: "Gabriel Barrantes" }],
  openGraph: {
    title: "Gabriel Barrantes - Backend & DevSecOps",
    description:
      "Tecnólogo en Análisis y Desarrollo de Software: backend con Java & Spring, cloud (Azure/OpenShift) y DevSecOps.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
