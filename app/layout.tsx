import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gabriel Barrantes - Soluciones de Software",
  description:
    "Portafolio de Gabriel Barrantes. Soluciones de software para organizar procesos, automatizar tareas y convertir información en mejores decisiones.",
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
    title: "Gabriel Barrantes - Soluciones de Software",
    description:
      "Soluciones de software claras, seguras y confiables para organizar procesos y mejorar operaciones.",
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
