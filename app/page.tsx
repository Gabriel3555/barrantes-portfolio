import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Database,
  Code,
  BarChart3,
  Users,
  Shield,
  FileText,
  Search,
  Zap,
  Settings,
  Smartphone,
  Globe,
  MessageCircle,
  ArrowUpRight,
  Terminal,
  Cloud,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"

/* ---------------------------------------------------------------- *
 * Small, reusable building blocks — one disciplined design system
 * instead of per-element rainbow styling.
 * ---------------------------------------------------------------- */

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-zinc-400">
      {children}
    </span>
  )
}

function Feature({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon
  title: string
  desc: string
}) {
  return (
    <div className="group flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4 transition-colors hover:border-emerald-400/30 hover:bg-emerald-400/[0.03]">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
      <div>
        <h4 className="text-sm font-medium text-zinc-100">{title}</h4>
        <p className="text-xs text-zinc-500">{desc}</p>
      </div>
    </div>
  )
}

/* App-window chrome around every screenshot, so the gallery reads
 * as one product rather than a pile of random images. */
function Frame({
  src,
  alt,
  caption,
  portrait = false,
}: {
  src: string
  alt: string
  caption: string
  portrait?: boolean
}) {
  return (
    <figure className="space-y-3">
      <div
        className={`overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 shadow-2xl shadow-black/40 ${
          portrait ? "mx-auto max-w-[16rem]" : ""
        }`}
      >
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
        </div>
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={portrait ? 488 : 640}
          height={portrait ? 1002 : 420}
          className="w-full"
        />
      </div>
      <figcaption className="text-center text-xs text-zinc-500">{caption}</figcaption>
    </figure>
  )
}

function SectionHeading({
  index,
  kicker,
  title,
  subtitle,
}: {
  index: string
  kicker: string
  title: string
  subtitle: string
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-emerald-400">
        {index} <span className="text-zinc-600">/</span> {kicker}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-zinc-400">{subtitle}</p>
    </div>
  )
}

const navLinks = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#skills", label: "Skills" },
  { href: "#contacto", label: "Contacto" },
]

const usochicamochaMobileScreens = [
  {
    src: "/images/usochicamocha-mobile-main-menu.png",
    alt: "Menú principal de la aplicación móvil de Usochicamocha",
    caption: "Menú de inspecciones",
  },
  {
    src: "/images/usochicamocha-mobile-machinery-menu.png",
    alt: "Menú de maquinaria y sincronización de la aplicación móvil",
    caption: "Formularios y sincronización",
  },
  {
    src: "/images/usochicamocha-mobile-machinery-inspection-1.png",
    alt: "Primera parte del formulario móvil de inspección de maquinaria",
    caption: "Inspección de maquinaria · 1/3",
  },
  {
    src: "/images/usochicamocha-mobile-machinery-inspection-2.png",
    alt: "Segunda parte del formulario móvil de inspección de maquinaria",
    caption: "Inspección de maquinaria · 2/3",
  },
  {
    src: "/images/usochicamocha-mobile-machinery-inspection-3.png",
    alt: "Tercera parte del formulario móvil de inspección de maquinaria",
    caption: "Inspección de maquinaria · 3/3",
  },
  {
    src: "/images/usochicamocha-mobile-unplanned-inspection-1.png",
    alt: "Primera parte del formulario móvil de inspección imprevista",
    caption: "Inspección imprevista · 1/3",
  },
  {
    src: "/images/usochicamocha-mobile-unplanned-inspection-2.png",
    alt: "Segunda parte del formulario móvil de inspección imprevista",
    caption: "Inspección imprevista · 2/3",
  },
  {
    src: "/images/usochicamocha-mobile-unplanned-inspection-3.png",
    alt: "Tercera parte del formulario móvil de inspección imprevista",
    caption: "Inspección imprevista · 3/3",
  },
  {
    src: "/images/usochicamocha-mobile-vehicle-menu.png",
    alt: "Menú de inspecciones vehiculares de la aplicación móvil",
    caption: "Menú de inspección vehicular",
  },
  {
    src: "/images/usochicamocha-mobile-vehicle-inspection-1.png",
    alt: "Primera parte del formulario móvil de inspección vehicular",
    caption: "Inspección vehicular · 1/6",
  },
  {
    src: "/images/usochicamocha-mobile-vehicle-inspection-2.png",
    alt: "Segunda parte del formulario móvil de inspección vehicular",
    caption: "Inspección vehicular · 2/6",
  },
  {
    src: "/images/usochicamocha-mobile-vehicle-inspection-3.png",
    alt: "Tercera parte del formulario móvil de inspección vehicular",
    caption: "Inspección vehicular · 3/6",
  },
  {
    src: "/images/usochicamocha-mobile-vehicle-inspection-4.png",
    alt: "Cuarta parte del formulario móvil de inspección vehicular",
    caption: "Inspección vehicular · 4/6",
  },
  {
    src: "/images/usochicamocha-mobile-vehicle-inspection-5.png",
    alt: "Quinta parte del formulario móvil de inspección vehicular",
    caption: "Inspección vehicular · 5/6",
  },
  {
    src: "/images/usochicamocha-mobile-vehicle-inspection-6.png",
    alt: "Sexta parte del formulario móvil de inspección vehicular",
    caption: "Inspección vehicular · 6/6",
  },
  {
    src: "/images/usochicamocha-mobile-motorcycle-inspection-1.png",
    alt: "Primera parte del formulario móvil de inspección de motocicletas",
    caption: "Inspección de motocicletas · 1/4",
  },
  {
    src: "/images/usochicamocha-mobile-motorcycle-inspection-2.png",
    alt: "Segunda parte del formulario móvil de inspección de motocicletas",
    caption: "Inspección de motocicletas · 2/4",
  },
  {
    src: "/images/usochicamocha-mobile-motorcycle-inspection-3.png",
    alt: "Tercera parte del formulario móvil de inspección de motocicletas",
    caption: "Inspección de motocicletas · 3/4",
  },
  {
    src: "/images/usochicamocha-mobile-motorcycle-inspection-4.png",
    alt: "Cuarta parte del formulario móvil de inspección de motocicletas",
    caption: "Inspección de motocicletas · 4/4",
  },
]

const fluvialScreens = [
  {
    src: "/images/fluvial-login.png",
    alt: "Inicio de sesión del sistema de gestión de embarcaciones",
    caption: "Acceso para administradores y propietarios",
  },
  {
    src: "/images/fluvial-password-recovery.png",
    alt: "Recuperación de contraseña del sistema de embarcaciones",
    caption: "Recuperación segura de acceso",
  },
  {
    src: "/images/fluvial-password-reset.png",
    alt: "Restablecimiento de contraseña del sistema de embarcaciones",
    caption: "Restablecimiento de contraseña",
  },
  {
    src: "/images/fluvial-admin-dashboard.png",
    alt: "Panel administrativo del sistema de gestión de embarcaciones",
    caption: "Resumen general de la operación",
  },
  {
    src: "/images/fluvial-admin-inventory.png",
    alt: "Inventario administrativo de embarcaciones",
    caption: "Inventario y estado de embarcaciones",
  },
  {
    src: "/images/fluvial-admin-owners.png",
    alt: "Gestión administrativa de propietarios",
    caption: "Propietarios y embarcaciones asignadas",
  },
  {
    src: "/images/fluvial-admin-maintenance.png",
    alt: "Gestión administrativa de mantenimientos de embarcaciones",
    caption: "Programación y costos de mantenimiento",
  },
  {
    src: "/images/fluvial-admin-payments.png",
    alt: "Gestión administrativa de pagos de embarcaciones",
    caption: "Pagos, estados y comprobantes",
  },
  {
    src: "/images/fluvial-admin-reports.png",
    alt: "Reportes administrativos de embarcaciones pagos y mantenimientos",
    caption: "Reportes descargables en Excel y PDF",
  },
  {
    src: "/images/fluvial-admin-profile.png",
    alt: "Perfil del administrador del sistema de embarcaciones",
    caption: "Perfil y resumen del administrador",
  },
  {
    src: "/images/fluvial-owner-dashboard.png",
    alt: "Panel del propietario de embarcaciones",
    caption: "Resumen personalizado del propietario",
  },
  {
    src: "/images/fluvial-owner-boats.png",
    alt: "Embarcaciones asignadas al propietario",
    caption: "Consulta de embarcaciones propias",
  },
  {
    src: "/images/fluvial-owner-maintenance.png",
    alt: "Mantenimientos visibles para el propietario",
    caption: "Historial de mantenimientos",
  },
  {
    src: "/images/fluvial-owner-payments.png",
    alt: "Pagos visibles para el propietario",
    caption: "Historial y estado de pagos",
  },
  {
    src: "/images/fluvial-owner-profile.png",
    alt: "Perfil del propietario de embarcaciones",
    caption: "Perfil y resumen del propietario",
  },
]

const sgdisScreens = [
  {
    src: "/images/sgdis-landing.png",
    alt: "Página informativa de SGDIS",
    caption: "Presentación de la plataforma institucional",
  },
  {
    src: "/images/sgdis-login.png",
    alt: "Inicio de sesión institucional de SGDIS",
    caption: "Acceso seguro a la plataforma",
  },
  {
    src: "/images/sgdis-register.png",
    alt: "Registro de usuarios de SGDIS",
    caption: "Registro vinculado con regional y centro",
  },
  {
    src: "/images/sgdis-superadmin-dashboard.png",
    alt: "Panel nacional del superadministrador de SGDIS",
    caption: "Resumen nacional de la operación",
  },
  {
    src: "/images/sgdis-superadmin-inventory.png",
    alt: "Gestión de inventarios en SGDIS",
    caption: "Inventarios por regional y centro",
  },
  {
    src: "/images/sgdis-superadmin-users.png",
    alt: "Gestión de usuarios y roles en SGDIS",
    caption: "Usuarios, permisos y responsabilidades",
  },
  {
    src: "/images/sgdis-superadmin-verifications.png",
    alt: "Gestión de verificaciones de activos en SGDIS",
    caption: "Verificación física de los elementos",
  },
  {
    src: "/images/sgdis-superadmin-loans.png",
    alt: "Gestión de préstamos de elementos en SGDIS",
    caption: "Préstamos y devoluciones bajo control",
  },
  {
    src: "/images/sgdis-superadmin-reports.png",
    alt: "Generación de reportes en SGDIS",
    caption: "Reportes filtrados para seguimiento",
  },
  {
    src: "/images/sgdis-superadmin-import-export.png",
    alt: "Importación y exportación de elementos en SGDIS",
    caption: "Carga y descarga de información en Excel",
  },
  {
    src: "/images/sgdis-superadmin-notifications.png",
    alt: "Centro de notificaciones de SGDIS",
    caption: "Avisos centralizados de la operación",
  },
  {
    src: "/images/sgdis-superadmin-settings.png",
    alt: "Configuración de apariencia de SGDIS",
    caption: "Preferencias de la plataforma",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* ----------------------------------------------------------- */}
      {/* Nav */}
      {/* ----------------------------------------------------------- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold text-zinc-100">
            <Terminal className="h-4 w-4 text-emerald-400" />
            barrantes<span className="text-emerald-400">.dev</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {l.label}
              </a>
            ))}
          </div>
          <Button
            asChild
            size="sm"
            className="bg-emerald-400 font-medium text-emerald-950 hover:bg-emerald-300"
          >
            <a href="https://wa.me/573154625105" target="_blank" rel="noopener noreferrer">
              Hablemos
            </a>
          </Button>
        </nav>
      </header>

      {/* ----------------------------------------------------------- */}
      {/* Hero */}
      {/* ----------------------------------------------------------- */}
      <section id="top" className="relative overflow-hidden">
        {/* texture + glow */}
        <div className="bg-dotgrid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-36 sm:px-6 lg:px-8 lg:pt-44">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Disponible para nuevos proyectos
              </span>

              <h1 className="mt-6 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
                Gabriel Barrantes
              </h1>

              <p className="mt-4 font-mono text-lg text-zinc-400">
                <span className="text-emerald-400">~/</span> software para operar mejor
                <span className="animate-caret ml-0.5 text-emerald-400">_</span>
              </p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Ayudo a empresas y equipos a convertir procesos manuales o dispersos en{" "}
                <span className="font-medium text-zinc-100">sistemas claros, seguros y confiables</span>. Me especializo
                en soluciones digitales que conectan la información, automatizan tareas y acompañan el crecimiento de
                la operación.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-emerald-400 font-medium text-emerald-950 hover:bg-emerald-300"
                >
                  <a href="#proyectos">
                    Ver soluciones
                    <ArrowUpRight className="ml-1.5 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06] hover:text-white"
                >
                  <a href="https://github.com/Gabriel3555" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1.5 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06] hover:text-white"
                >
                  <a href="https://co.linkedin.com/in/barrantesv/es" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-1.5 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              <dl className="mt-12 grid max-w-sm grid-cols-2 gap-6 border-t border-white/[0.06] pt-8">
                <div>
                  <dt className="font-mono text-xs text-zinc-500">Qué resuelvo</dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-200">Procesos operativos</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-zinc-500">Qué entrego</dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-200">Software confiable</dd>
                </div>
              </dl>
            </div>

            {/* Portrait */}
            <div className="relative mx-auto lg:mx-0">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/20 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 p-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480502099_122211395426232005_4687904367962952875_n.jpg-I7oNAL6PyNA8mYlg1dy5yjGwvLj244.jpeg"
                  alt="Gabriel Barrantes"
                  width={360}
                  height={360}
                  className="h-72 w-72 rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 rounded-lg border border-white/10 bg-zinc-900 px-3 py-2 font-mono text-xs text-zinc-300 shadow-xl">
                <span className="text-emerald-400">✓</span> listo para producción
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* Experience */}
      {/* ----------------------------------------------------------- */}
      <section id="experiencia" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          kicker="Experiencia"
          title="Experiencia aplicada"
          subtitle="Entornos donde he ayudado a mantener operaciones estables y a convertir necesidades reales en software."
        />

        <div className="relative space-y-10 border-l border-white/[0.08] pl-8">
          {/* Indra Group */}
          <div className="relative">
            <span className="absolute -left-[2.55rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/30 bg-background">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
            </span>
            <div className="rounded-xl border border-white/[0.06] bg-card p-6 transition-colors hover:border-white/[0.12]">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-50">Soporte de Aplicaciones (Prácticas)</h3>
                  <p className="text-sm text-emerald-400">Indra Group · Remoto</p>
                </div>
                <span className="w-fit font-mono text-xs text-zinc-500">Dic 2025 — Jun 2026</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Ayudé a mantener aplicaciones en producción disponibles, seguras y dentro de los tiempos de atención
                acordados. Participé en la resolución de incidentes, automatización de tareas, despliegues controlados,
                gestión de vulnerabilidades y planes de recuperación para reducir riesgos operativos.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Azure DevOps", "ARO (OpenShift)", "GitOps", "DevSecOps", "Azure Key Vault", "Python", "CI/CD"].map(
                  (t) => (
                    <Tag key={t}>{t}</Tag>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* SENNOVA */}
          <div className="relative">
            <span className="absolute -left-[2.55rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/30 bg-background">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <div className="rounded-xl border border-white/[0.06] bg-card p-6 transition-colors hover:border-white/[0.12]">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-50">Desarrollador de Software (Monitor)</h3>
                  <p className="text-sm text-emerald-400">SENA SENNOVA · Sogamoso, Boyacá</p>
                </div>
                <span className="w-fit font-mono text-xs text-zinc-500">Jul 2024 — Nov 2025</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Construí soluciones para organizaciones que necesitaban centralizar información, controlar procesos y
                reducir trabajo manual. Me encargué del backend, la integración de datos, la seguridad y el despliegue,
                dejando sistemas documentados y preparados para mantenerse y crecer.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Spring Boot", "Arquitectura Hexagonal", "Spring Data JPA", "PostgreSQL", "Swagger", "Docker", "VPS"].map(
                  (t) => (
                    <Tag key={t}>{t}</Tag>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Educación SENA */}
          <div className="relative">
            <span className="absolute -left-[2.55rem] top-1.5 flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-background">
              <span className="h-2 w-2 rounded-full bg-zinc-500" />
            </span>
            <div className="rounded-xl border border-white/[0.06] bg-card p-6 transition-colors hover:border-white/[0.12]">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-50">Tecnólogo en Análisis y Desarrollo de Software</h3>
                  <p className="text-sm text-emerald-400">SENA · Sogamoso, Boyacá</p>
                </div>
                <span className="w-fit font-mono text-xs text-zinc-500">Abr 2024 — Jun 2026</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Formación integral orientada al diseño, desarrollo, despliegue y mantenimiento de aplicaciones robustas,
                con énfasis en arquitecturas backend escalables, metodologías ágiles y buenas prácticas de programación.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Java", "Spring", "PostgreSQL", "Docker", "Bases de Datos", "Metodologías Ágiles"].map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* Projects */}
      {/* ----------------------------------------------------------- */}
      <section id="proyectos" className="border-y border-white/[0.06] bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <SectionHeading
            index="02"
            kicker="Proyectos"
            title="Soluciones construidas"
            subtitle="Sistemas reales creados para organizar operaciones, reducir errores y facilitar mejores decisiones."
          />

          <div className="space-y-8">
            {/* Project 1 — Usochicamocha / TecnoParque */}
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-card">
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.06] p-6 sm:flex-row sm:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-semibold text-zinc-50">Sistema de Gestión de Maquinaria</h3>
                    <Badge className="border-emerald-400/20 bg-emerald-400/10 font-mono text-emerald-300">
                      Usochicamocha
                    </Badge>
                    <Badge className="border-white/10 bg-white/[0.04] font-mono text-zinc-300">TecnoParque SENA</Badge>
                    <Badge className="border-emerald-400/20 bg-emerald-400/10 font-mono text-emerald-300">Completado</Badge>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    Solución creada para Usochicamocha que centraliza el estado, las inspecciones y el mantenimiento de
                    maquinaria, vehículos y motocicletas. Permite detectar novedades, coordinar órdenes de trabajo y
                    consultar la operación desde un solo lugar. La aplicación Android en Kotlin lleva las inspecciones al
                    campo y sincroniza la información con el sistema web.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="shrink-0 border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]"
                >
                  <a href="https://usochicamocha.co" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-4 w-4" />
                    Sitio de Usochicamocha
                  </a>
                </Button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Frame
                    src="/images/usochicamocha-equipment-status.png"
                    alt="Panel de control del estado de equipos de Usochicamocha"
                    caption="Inspecciones y estado operativo de la maquinaria"
                  />
                  <Frame
                    src="/images/usochicamocha-create-work-order.png"
                    alt="Creación de una orden de trabajo en Usochicamocha"
                    caption="Creación y asignación de órdenes de trabajo"
                  />
                  <Frame
                    src="/images/usochicamocha-machinery-inventory.png"
                    alt="Inventario de maquinaria de Usochicamocha"
                    caption="Inventario de maquinaria, vehículos y motocicletas"
                  />
                  <Frame
                    src="/images/usochicamocha-work-orders.png"
                    alt="Listado de órdenes de trabajo de Usochicamocha"
                    caption="Seguimiento del ciclo de las órdenes de trabajo"
                  />
                  <Frame
                    src="/images/usochicamocha-execute-work-order.png"
                    alt="Ejecución de una orden de trabajo de Usochicamocha"
                    caption="Registro de tiempos, mano de obra y repuestos"
                  />
                  <Frame
                    src="/images/usochicamocha-oil-management.png"
                    alt="Gestión de aceites de Usochicamocha"
                    caption="Control de aceites hidráulicos y de motor"
                  />
                </div>

                <div className="mt-10 border-t border-white/[0.06] pt-8">
                  <p className="font-mono text-xs uppercase tracking-wide text-emerald-400">
                    Aplicación móvil · Kotlin
                  </p>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    Inspecciones de maquinaria, vehículos y motocicletas, con captura de evidencias y sincronización
                    de datos desde campo.
                  </p>
                  <p className="mt-2 text-xs text-zinc-600">Desliza horizontalmente para recorrer las 19 pantallas.</p>
                  <div
                    className="-mx-2 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-4"
                    role="region"
                    aria-label="Galería de la aplicación móvil de Usochicamocha"
                    tabIndex={0}
                  >
                    {usochicamochaMobileScreens.map((screen) => (
                      <div key={screen.src} className="min-w-[15rem] snap-start sm:min-w-[16rem]">
                        <Frame {...screen} portrait />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Feature icon={Settings} title="Monitoreo de Equipos" desc="Inspecciones y estado operativo" />
                  <Feature icon={Database} title="Inventario de Flota" desc="Maquinaria, vehículos y motos" />
                  <Feature icon={FileText} title="Órdenes de Trabajo" desc="Creación, asignación y seguimiento" />
                  <Feature icon={Users} title="Ejecución de Mantenimiento" desc="Mano de obra, tiempos y repuestos" />
                  <Feature icon={Zap} title="Alertas Preventivas" desc="Avisos oportunos para actuar antes" />
                  <Feature icon={Smartphone} title="App Móvil Kotlin" desc="Inspecciones y sincronización en campo" />
                </div>

                <div className="mt-8">
                  <p className="mb-2 font-mono text-xs uppercase tracking-wide text-emerald-400">Backend · mi rol</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Java 17",
                      "Spring Boot",
                      "Arquitectura Hexagonal",
                      "Spring Security",
                      "JWT",
                      "PostgreSQL",
                      "Flyway",
                      "WebSocket",
                      "OpenAPI / Swagger",
                      "Docker",
                    ].map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <p className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">Aplicación móvil</p>
                  <div className="flex flex-wrap gap-2">
                    {["Kotlin", "Android", "Sincronización de datos", "Captura de evidencias"].map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Project 2 — Gestión de Embarcaciones */}
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-card">
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.06] p-6 sm:flex-row sm:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-semibold text-zinc-50">Sistema de Gestión de Embarcaciones</h3>
                    <Badge className="border-emerald-400/20 bg-emerald-400/10 font-mono text-emerald-300">
                      Manta Fluvial
                    </Badge>
                    <Badge className="border-emerald-400/20 bg-emerald-400/10 font-mono text-emerald-300">
                      Alianza Carrocera de Boyacá S.A.S.
                    </Badge>
                    <Badge className="border-white/10 bg-white/[0.04] font-mono text-zinc-300">TecnoParque SENA</Badge>
                    <Badge className="border-emerald-400/20 bg-emerald-400/10 font-mono text-emerald-300">Completado</Badge>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    Solución desarrollada para Manta Fluvial y Alianza Carrocera de Boyacá S.A.S. durante mi trabajo en
                    TecnoParque. Centraliza el inventario de embarcaciones, sus propietarios, mantenimientos y pagos, con
                    espacios diferenciados para el equipo administrativo y cada propietario.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="shrink-0 border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]"
                >
                  <a href="https://fluvial.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-1.5 h-4 w-4" />
                    Sitio de Manta Fluvial
                  </a>
                </Button>
              </div>

              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-emerald-400">Recorrido del sistema</p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                  Acceso seguro, herramientas administrativas y un portal de consulta para propietarios.
                </p>
                <p className="mt-2 text-xs text-zinc-600">Desliza horizontalmente para recorrer las 15 pantallas.</p>
                <div
                  className="-mx-2 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-4"
                  role="region"
                  aria-label="Galería del sistema de gestión de embarcaciones"
                  tabIndex={0}
                >
                  {fluvialScreens.map((screen) => (
                    <div key={screen.src} className="min-w-[19rem] snap-start sm:min-w-[34rem]">
                      <Frame {...screen} />
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Feature icon={Database} title="Inventario de Embarcaciones" desc="Estado, disponibilidad y asignación" />
                  <Feature icon={Users} title="Gestión de Propietarios" desc="Información y embarcaciones asociadas" />
                  <Feature icon={Settings} title="Mantenimientos Bajo Control" desc="Programación, prioridad y costos" />
                  <Feature icon={FileText} title="Seguimiento de Pagos" desc="Estados, conceptos y comprobantes" />
                  <Feature icon={Shield} title="Accesos por Rol" desc="Experiencias para administración y propietarios" />
                  <Feature icon={BarChart3} title="Reportes para Decidir" desc="Exportación inmediata en Excel y PDF" />
                </div>

                <div className="mt-8 space-y-4">
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">Interfaz web</p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "JavaScript", "Vercel"].map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wide text-emerald-400">Servidor y datos</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Java 17",
                        "Spring Boot",
                        "Spring Security",
                        "Spring Data JPA",
                        "JWT",
                        "PostgreSQL",
                        "Spring Mail",
                        "OpenAPI / Swagger",
                        "Apache POI",
                        "iText",
                        "Docker",
                      ].map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 3 — SGDIS */}
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-card">
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.06] p-6 sm:flex-row sm:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-semibold text-zinc-50">
                      SGDIS — Sistema de Gestión Institucional de Inventarios
                    </h3>
                    <Badge className="border-white/10 bg-white/[0.04] font-mono text-zinc-300">
                      Proyecto colaborativo
                    </Badge>
                    <Badge className="border-emerald-400/20 bg-emerald-400/10 font-mono text-emerald-300">Completado</Badge>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    Proyecto colaborativo creado para centralizar el control de bienes e inventarios del SENA. La
                    plataforma organiza regionales, centros, inventarios, elementos y responsables; además, registra
                    transferencias, préstamos, verificaciones y bajas para conservar la trazabilidad de cada activo.
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]"
                  >
                    <a href="https://github.com/Gabriel3555/SGDIS" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-4 w-4" />
                      Repositorio
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-emerald-400 text-emerald-950 hover:bg-emerald-300">
                    <a href="https://sgdis-landing.vercel.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-4 w-4" />
                      Sitio informativo
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-emerald-400">Recorrido de la plataforma</p>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-zinc-400">
                  SGDIS ofrece una visión nacional del inventario y herramientas operativas para que cada equipo pueda
                  consultar activos, asignar responsabilidades, verificar existencias y documentar sus movimientos.
                  Los reportes, la auditoría y los permisos por rol facilitan el seguimiento y la toma de decisiones.
                </p>
                <p className="mt-2 text-xs text-zinc-600">Desliza horizontalmente para recorrer las 12 pantallas.</p>
                <div
                  className="-mx-2 mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-4"
                  role="region"
                  aria-label="Galería del Sistema de Gestión Institucional de Inventarios"
                  tabIndex={0}
                >
                  {sgdisScreens.map((screen) => (
                    <div key={screen.src} className="min-w-[19rem] snap-start sm:min-w-[34rem]">
                      <Frame {...screen} />
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Feature icon={Database} title="Gestión Multicentro" desc="Inventarios por regional, centro y responsable" />
                  <Feature icon={ArrowUpRight} title="Movimientos Trazables" desc="Transferencias, préstamos, devoluciones y bajas" />
                  <Feature icon={Search} title="Verificación de Activos" desc="Comprobación física y evidencia de los elementos" />
                  <Feature icon={Users} title="Accesos por Responsabilidad" desc="Permisos para cada perfil institucional" />
                  <Feature icon={FileText} title="Intercambio de Información" desc="Importación masiva y reportes en Excel o PDF" />
                  <Feature icon={BarChart3} title="Seguimiento Institucional" desc="Indicadores, auditoría y notificaciones" />
                </div>

                <div className="mt-8 space-y-4">
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">Plataforma web</p>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"].map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wide text-emerald-400">Servidor y datos</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Java 17",
                        "Spring Boot",
                        "Spring Security",
                        "Spring Data JPA",
                        "JWT",
                        "PostgreSQL",
                        "Maven",
                      ].map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">
                      Aplicación móvil e infraestructura
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["React Native", "Expo", "Docker", "Docker Compose"].map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* Skills */}
      {/* ----------------------------------------------------------- */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          kicker="Skills"
          title="Stack técnico"
          subtitle="Las herramientas con las que diseño, construyo y despliego."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Code,
              title: "Backend",
              items: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "Python", "PHP", "Jakarta EE"],
            },
            {
              icon: Database,
              title: "Datos & Arquitectura",
              items: ["PostgreSQL", "MySQL", "Arquitectura Hexagonal", "MVC", "Flyway"],
            },
            {
              icon: Cloud,
              title: "Cloud & DevSecOps",
              items: ["Azure", "Azure DevOps", "ARO (OpenShift)", "Docker", "Linux", "Azure Key Vault", "GitOps", "CI/CD"],
            },
            {
              icon: Shield,
              title: "Herramientas & Calidad",
              items: ["Git", "GitHub", "Maven", "Swagger", "SonarQube", "Trivy", "Tenable"],
            },
            {
              icon: Globe,
              title: "Frontend & Mobile",
              items: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React Native"],
            },
          ].map((group) => (
            <div key={group.title} className="rounded-xl border border-white/[0.06] bg-card p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10">
                  <group.icon className="h-5 w-5 text-emerald-400" />
                </span>
                <h3 className="font-semibold text-zinc-50">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* Contact / Footer */}
      {/* ----------------------------------------------------------- */}
      <footer id="contacto" className="relative overflow-hidden border-t border-white/[0.06]">
        <div className="bg-dotgrid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-sm text-emerald-400">04 <span className="text-zinc-600">/</span> Contacto</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            ¿Hay un proceso que podría funcionar mejor?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Cuéntame qué necesitas organizar, automatizar o mejorar. Puedo ayudarte a convertirlo en una solución
            clara, segura y preparada para acompañar el crecimiento de tu operación.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-emerald-400 font-medium text-emerald-950 hover:bg-emerald-300">
              <a href="mailto:gabrielbarrantes35@gmail.com">
                <Mail className="mr-1.5 h-4 w-4" />
                Cuéntame tu proyecto
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]"
            >
              <a href="https://wa.me/573154625105" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]"
            >
              <a href="https://co.linkedin.com/in/barrantesv/es" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-1.5 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]"
            >
              <a href="https://github.com/Gabriel3555" target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-8 font-mono text-xs text-zinc-500 sm:flex-row">
            <span>© 2026 Gabriel Barrantes</span>
            <span className="flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-emerald-400" />
              built with Next.js
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
