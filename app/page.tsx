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
  BookOpen,
  Search,
  Calendar,
  Zap,
  Settings,
  Smartphone,
  Globe,
  MessageCircle,
  ArrowUpRight,
  MapPin,
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
          width={portrait ? 320 : 640}
          height={portrait ? 480 : 420}
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
                Disponible para proyectos
              </span>

              <h1 className="mt-6 text-5xl font-bold tracking-tight text-zinc-50 sm:text-6xl">
                Gabriel Barrantes
              </h1>

              <p className="mt-4 font-mono text-lg text-zinc-400">
                <span className="text-emerald-400">~/</span> backend &amp; devsecops
                <span className="animate-caret ml-0.5 text-emerald-400">_</span>
              </p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                Tecnólogo en Análisis y Desarrollo de Software. Construyo backends robustos y escalables con{" "}
                <span className="font-medium text-zinc-100">Java &amp; Spring</span> y opero infraestructura en la
                nube aplicando arquitectura hexagonal, automatización y prácticas DevSecOps.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-emerald-400 font-medium text-emerald-950 hover:bg-emerald-300"
                >
                  <a href="#proyectos">
                    Ver proyectos
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

              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/[0.06] pt-8">
                <div>
                  <dt className="font-mono text-xs text-zinc-500">Foco</dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-200">Backend &amp; Cloud</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs text-zinc-500">Stack</dt>
                  <dd className="mt-1 text-sm font-medium text-zinc-200">Spring Boot</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1 font-mono text-xs text-zinc-500">Ubicación</dt>
                  <dd className="mt-1 flex items-center gap-1 text-sm font-medium text-zinc-200">
                    <MapPin className="h-3.5 w-3.5 text-emerald-400" /> Boyacá, CO
                  </dd>
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
                <span className="text-emerald-400">$</span> spring boot run
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
          title="Trayectoria"
          subtitle="Dónde he aplicado y afilado mis habilidades como desarrollador de software."
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
                Gestión integral de incidentes y cumplimiento de SLAs sobre aplicaciones en producción. Soporte a
                pipelines CI/CD en Azure DevOps y despliegues GitOps sobre clústeres ARO (Azure RedHat OpenShift),
                gestión de vulnerabilidades (Trivy, SonarQube, Tenable, Mendbolt), administración segura de identidades
                y secretos con Azure Key Vault, automatización en Python y ejecución de planes de recuperación
                tecnológica (PRT/DRP).
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
                Desarrollo de soluciones backend escalables con Java y el ecosistema Spring (Boot, MVC, Data JPA) bajo
                arquitectura hexagonal. Diseño y exposición de APIs RESTful documentadas con Swagger, gestión y
                optimización de datos en PostgreSQL, y despliegue contenerizado con Docker sobre servidores VPS.
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
            title="Trabajo seleccionado"
            subtitle="Sistemas reales construidos de extremo a extremo, con foco en el backend."
          />

          <div className="space-y-8">
            {/* Project 1 — TecnoParque */}
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-card">
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.06] p-6 sm:flex-row sm:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-semibold text-zinc-50">Sistema de Gestión Industrial</h3>
                    <Badge className="border-emerald-400/20 bg-emerald-400/10 font-mono text-emerald-300">
                      TecnoParque
                    </Badge>
                    <Badge className="border-emerald-400/20 bg-emerald-400/10 font-mono text-emerald-300">Completado</Badge>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    Proyecto de la Red TecnoParque SENA (Nodo Boyacá) con una empresa del sector agropecuario. Rol de
                    desarrollador backend, implementando Spring Boot con arquitectura hexagonal.
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Frame
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2004.25.58-MrNOEQQwQhukOIOSv7IEUkJHgKd119.png"
                    alt="Gestión de Máquinas"
                    caption="Gestión de maquinaria industrial"
                  />
                  <Frame
                    src="/images/equipment-status-panel.png"
                    alt="Panel de Control"
                    caption="Estado de equipos y métricas en tiempo real"
                  />
                  <Frame
                    src="/images/create-work-order-modal.png"
                    alt="Crear Orden de Trabajo"
                    caption="Creación de órdenes de trabajo"
                  />
                  <Frame
                    src="/images/user-management-page.png"
                    alt="Gestión de Usuarios"
                    caption="Usuarios con roles y permisos"
                  />
                  <Frame
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2004.48.58-1LBHpwLe7ttgmY4b6LuPMwqVwwYsFx.png"
                    alt="Panel Móvil"
                    caption="App móvil para auditorías técnicas"
                    portrait
                  />
                  <Frame
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2004.49.13-tsMbS4RByno8uQ7qX1O3WErDHKkEMD.png"
                    alt="Control de Equipos"
                    caption="Evaluación técnica de equipos"
                    portrait
                  />
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Feature icon={Settings} title="Gestión de Maquinaria" desc="Control integral de equipos" />
                  <Feature icon={Shield} title="Auditorías Técnicas" desc="Evaluación y seguimiento" />
                  <Feature icon={Users} title="Gestión de Usuarios" desc="Roles y permisos" />
                  <Feature icon={Smartphone} title="App Móvil" desc="Kotlin nativo" />
                  <Feature icon={Globe} title="App Web" desc="Frontend en Svelte" />
                  <Feature icon={Zap} title="Notificaciones" desc="Eventos en tiempo real" />
                </div>

                <div className="mt-8 space-y-4">
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wide text-emerald-400">Backend · mi rol</p>
                    <div className="flex flex-wrap gap-2">
                      {["Spring Boot", "Arquitectura Hexagonal", "Spring Security", "JWT", "PostgreSQL", "Flux"].map(
                        (t) => (
                          <Tag key={t}>{t}</Tag>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">Frontend · equipo</p>
                    <div className="flex flex-wrap gap-2">
                      {["Svelte (Web)", "Kotlin (Móvil)"].map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 2 — Finanzas Personales */}
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-card">
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.06] p-6 sm:flex-row sm:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-semibold text-zinc-50">Sistema de Finanzas Personales</h3>
                    <Badge className="border-emerald-400/20 bg-emerald-400/10 font-mono text-emerald-300">Completado</Badge>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    Aplicación web completa en PHP con arquitectura MVC para la gestión integral de finanzas personales.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="shrink-0 border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]"
                >
                  <a href="https://github.com/Gabriel3555/FinanzasPersonales" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-1.5 h-4 w-4" />
                    Código
                  </a>
                </Button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Frame
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2002.54.45-iNJzchgampTWCrASOXcJ1hTZpE7Gkt.png"
                    alt="Dashboard de Finanzas"
                    caption="Dashboard con métricas y gráficos"
                  />
                  <Frame
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2002.55.04-5H9VO0iauKEpZBbxtYiGhTICkJIhm8.png"
                    alt="Reportes Financieros"
                    caption="Reportes con exportación a Excel, PDF y CSV"
                  />
                  <Frame
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2002.55.22-d4nGPv81sCkR62V23ekiDO9vUmkrnq.png"
                    alt="Gestión de Categorías"
                    caption="Categorías con filtros y paginación"
                  />
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Feature icon={Users} title="Gestión de Usuarios" desc="Registro y autenticación" />
                  <Feature icon={Database} title="Base de Datos" desc="Diseño relacional completo" />
                  <Feature icon={BarChart3} title="Reportes" desc="Análisis y visualización" />
                  <Feature icon={Code} title="Arquitectura MVC" desc="Código organizado y escalable" />
                  <Feature icon={Shield} title="Seguridad" desc="Validación y protección" />
                  <Feature icon={FileText} title="Exportación" desc="Múltiples formatos" />
                </div>

                <div className="mt-8">
                  <p className="mb-3 font-mono text-xs uppercase tracking-wide text-emerald-400">Diseño de base de datos</p>
                  <Frame
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-08%20at%2003.06.02-z2QLxQVHmk7085g81Si5nzNG7BqAve.jpeg"
                    alt="Diagrama de Base de Datos"
                    caption="Esquema relacional: usuarios, cuentas, categorías, transacciones, presupuestos, movimientos y exportaciones"
                  />
                </div>

                <div className="mt-8">
                  <p className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["PHP", "MySQL", "MVC", "JavaScript", "HTML5", "CSS3", "Chart.js", "Bootstrap"].map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Project 3 — Biblioteca */}
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-card">
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.06] p-6 sm:flex-row sm:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-semibold text-zinc-50">Sistema de Biblioteca Municipal</h3>
                    <Badge className="border-emerald-400/20 bg-emerald-400/10 font-mono text-emerald-300">Completado</Badge>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    Aplicación web con Jakarta EE 11 para la gestión integral de bibliotecas: catálogo de libros y
                    control de préstamos.
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-white/10 bg-white/[0.02] text-zinc-200 hover:bg-white/[0.06]"
                  >
                    <a href="https://github.com/Gabriel3555/DuitamaBiblioteca" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-4 w-4" />
                      Código
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-emerald-400 text-emerald-950 hover:bg-emerald-300">
                    <a href="https://duitamabiblioteca.onrender.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Frame
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2003.23.48-0icuuqmqs7nfZFkAOS2IHY159lagCx.png"
                    alt="Homepage Biblioteca"
                    caption="Acceso a gestión de libros y préstamos"
                  />
                  <Frame
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2003.24.30-iB2fGy7RBF1fvWaSk3LZOsU1FZw8vG.png"
                    alt="Dashboard Biblioteca"
                    caption="Dashboard con acciones rápidas"
                  />
                  <Frame
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2003.24.11-MZzyaXiTXjs6R95m6MbaNZfyWekpdp.png"
                    alt="Catálogo de Libros"
                    caption="Catálogo con filtros avanzados y exportación"
                  />
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Feature icon={BookOpen} title="Gestión de Libros" desc="CRUD completo del catálogo" />
                  <Feature icon={Calendar} title="Control de Préstamos" desc="Registro y seguimiento" />
                  <Feature icon={Search} title="Filtros Avanzados" desc="Por autor, título e ISBN" />
                  <Feature icon={Users} title="Gestión de Usuarios" desc="Administración de lectores" />
                  <Feature icon={FileText} title="Exportación" desc="Excel e impresión" />
                  <Feature icon={Code} title="Jakarta EE 11" desc="Arquitectura empresarial" />
                </div>

                <div className="mt-8">
                  <p className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Jakarta EE 11",
                      "Apache Tomcat 11",
                      "Maven",
                      "Docker",
                      "WAR Deployment",
                      "HTML5",
                      "CSS3",
                      "JavaScript",
                    ].map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Project 4 — SGDIS */}
            <article className="overflow-hidden rounded-2xl border border-white/[0.08] bg-card">
              <div className="flex flex-col justify-between gap-4 border-b border-white/[0.06] p-6 sm:flex-row sm:items-start">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-semibold text-zinc-50">SGDIS — Gestión de Inventario</h3>
                    <Badge className="border-emerald-400/20 bg-emerald-400/10 font-mono text-emerald-300">Completado</Badge>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
                    Sistema para optimizar la gestión de inventario de SENA: reduce errores, mejora la eficiencia y
                    garantiza transparencia en el control de recursos, con mejor seguimiento, informes y toma de
                    decisiones.
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Frame src="/images/sgdis-main-dashboard.png" alt="Dashboard SGDIS" caption="Dashboard con métricas clave del inventario" />
                  <Frame src="/images/sgdis-inventories-dashboard.png" alt="Gestión de Inventarios" caption="Inventarios por ubicación con métricas" />
                  <Frame src="/images/sgdis-reports-statistics.png" alt="Reportes y Estadísticas" caption="Reportes avanzados con filtros y exportación" />
                  <Frame src="/images/sgdis-item-verification.png" alt="Verificación de Items" caption="Búsqueda por placa y código de barras" />
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <Feature icon={Database} title="Gestión de Inventarios" desc="Control por ubicaciones" />
                  <Feature icon={BarChart3} title="Reportes Avanzados" desc="Análisis y estadísticas" />
                  <Feature icon={Search} title="Verificación de Items" desc="Búsqueda por código de barras" />
                  <Feature icon={Users} title="Control de Usuarios" desc="Roles y permisos" />
                  <Feature icon={FileText} title="Exportación" desc="PDF y Excel" />
                  <Feature icon={Smartphone} title="App Móvil" desc="React Native" />
                </div>

                <div className="mt-8 space-y-4">
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wide text-emerald-400">Backend</p>
                    <div className="flex flex-wrap gap-2">
                      {["Spring Boot", "Arquitectura Hexagonal", "Spring Security", "JWT", "PostgreSQL", "Flyway"].map(
                        (t) => (
                          <Tag key={t}>{t}</Tag>
                        ),
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-wide text-zinc-500">Frontend</p>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "React Native"].map((t) => (
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
            ¿Construimos algo juntos?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Abierto a oportunidades de desarrollo backend con Java &amp; Spring, infraestructura en la nube y DevSecOps,
            y a proyectos que representen un reto.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="bg-emerald-400 font-medium text-emerald-950 hover:bg-emerald-300">
              <a href="mailto:gabrielbarrantes35@gmail.com">
                <Mail className="mr-1.5 h-4 w-4" />
                Escríbeme
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
