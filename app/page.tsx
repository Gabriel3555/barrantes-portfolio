import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
} from "lucide-react"
import Image from "next/image"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480502099_122211395426232005_4687904367962952875_n.jpg-I7oNAL6PyNA8mYlg1dy5yjGwvLj244.jpeg"
              alt="Gabriel Barrantes"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-blue-500/30 shadow-xl"
            />
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 text-balance">Gabriel Barrantes</h1>
            <p className="text-xl text-slate-600 mb-6 text-pretty">Aprendiz en Análisis y Desarrollo de Software</p>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto text-pretty">
              Especializado en desarrollo de aplicaciones con{" "}
              <span className="text-blue-600 font-semibold">Java Spring Framework</span> y arquitectura de software.
              Enfocado en crear soluciones eficientes, escalables y robustas con tecnologías empresariales.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg border-0"
              >
                <a
                  href="https://co.linkedin.com/in/barrantesv/es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" asChild className="border-blue-200 hover:bg-blue-50 bg-white/80 text-slate-700">
                <a
                  href="https://github.com/Gabriel3555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 no-underline"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg border-0"
              >
                <a
                  href="https://wa.me/573154625105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-purple-200 hover:bg-purple-50 bg-white/80 text-slate-700"
              >
                <a href="mailto:gabriel_barrantes@soy.sena.edu.co" className="text-slate-700 no-underline">
                  <Mail className="w-4 h-4 mr-2" />
                  Contacto
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Experiencia</h2>
            <p className="text-lg text-slate-600">Mi trayectoria en desarrollo de software</p>
          </div>

          <div className="space-y-8">
            {/* SENA SENNOVA Experience */}
            <Card className="border-green-200/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">Desarrollador de Software (Monitor)</h3>
                        <p className="text-green-600 font-semibold">SENA SENNOVA</p>
                        <p className="text-sm text-slate-600">Sogamoso, Boyacá</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 w-fit">
                        Julio 2024 - Julio 2025
                      </Badge>
                    </div>
                    <p className="text-slate-700 mb-4 text-pretty">
                      Apoyo en el análisis, diseño, implementación y prueba de soluciones de software según los
                      requerimientos funcionales y no funcionales. Colaboración con equipos de desarrollo en la
                      elaboración de documentación técnica y manuales de usuario. Participación en el mantenimiento y
                      mejora de aplicaciones existentes, contribuyendo a la gestión y manipulación de datos en entornos
                      de desarrollo.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-blue-100 text-blue-800">Spring Boot</Badge>
                      <Badge className="bg-green-100 text-green-800">Arquitectura Hexagonal</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Spring Security</Badge>
                      <Badge className="bg-orange-100 text-orange-800">PostgreSQL</Badge>
                      <Badge className="bg-red-100 text-red-800">JWT</Badge>
                      <Badge className="bg-cyan-100 text-cyan-800">Control de Versiones</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* SENA Student Experience */}
            <Card className="border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          Aprendiz en Análisis y Desarrollo de Software
                        </h3>
                        <p className="text-blue-600 font-semibold">SENA - Centro de Servicios Financieros</p>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 w-fit">2023 - 2025</Badge>
                    </div>
                    <p className="text-slate-700 mb-4 text-pretty">
                      Formación técnica especializada en desarrollo de software con énfasis en tecnologías
                      empresariales. Desarrollo de proyectos prácticos aplicando metodologías ágiles y buenas prácticas
                      de programación.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-green-100 text-green-800">Java</Badge>
                      <Badge className="bg-orange-100 text-orange-800">PHP</Badge>
                      <Badge className="bg-red-100 text-red-800">Jakarta EE</Badge>
                      <Badge className="bg-cyan-100 text-cyan-800">Base de Datos</Badge>
                      <Badge className="bg-purple-100 text-purple-800">Metodologías Ágiles</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Proyectos Destacados</h2>
            <p className="text-lg text-slate-600">Aplicaciones web desarrolladas con diferentes tecnologías</p>
          </div>

          <div className="space-y-12">
            {/* Project 1: SENA TecnoParque */}
            <Card className="overflow-hidden border-green-200/50 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2 text-slate-900">Sistema de Gestión Industrial</CardTitle>
                    <CardDescription className="text-base">
                      Proyecto ejecutado en el marco de la Red TecnoParque SENA (Nodo Boyacá), en colaboración con una
                      empresa del sector agropecuario. Mi rol fue desarrollador backend, implementando Spring Boot con
                      arquitectura hexagonal.
                    </CardDescription>
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">SENA TecnoParque</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Project Screenshots */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="space-y-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2004.25.58-MrNOEQQwQhukOIOSv7IEUkJHgKd119.png"
                      alt="Gestión de Máquinas"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Sistema web de gestión de maquinaria industrial
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="/images/equipment-status-panel.png"
                      alt="Panel de Control - Estado de Equipos"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Panel de control con estado de equipos y métricas en tiempo real
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="/images/create-work-order-modal.png"
                      alt="Crear Orden de Trabajo"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Modal para crear órdenes de trabajo con información detallada de máquinas
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="/images/user-management-page.png"
                      alt="Gestión de Usuarios"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Sistema de gestión de usuarios con roles y permisos administrativos
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2004.48.58-1LBHpwLe7ttgmY4b6LuPMwqVwwYsFx.png"
                      alt="Panel de Control Móvil"
                      width={300}
                      height={450}
                      className="rounded-lg border shadow-lg w-full max-w-xs mx-auto hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">Aplicación móvil para auditorías técnicas</p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2004.49.13-tsMbS4RByno8uQ7qX1O3WErDHKkEMD.png"
                      alt="Control de Equipos"
                      width={300}
                      height={450}
                      className="rounded-lg border shadow-lg w-full max-w-xs mx-auto hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">Evaluación técnica de equipos industriales</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                    <Settings className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-blue-900">Gestión de Maquinaria</h4>
                      <p className="text-sm text-blue-700">Control integral de equipos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                    <Shield className="w-8 h-8 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-900">Auditorías Técnicas</h4>
                      <p className="text-sm text-green-700">Evaluación y seguimiento</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                    <Users className="w-8 h-8 text-purple-600" />
                    <div>
                      <h4 className="font-semibold text-purple-900">Gestión de Usuarios</h4>
                      <p className="text-sm text-purple-700">Roles y permisos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                    <Smartphone className="w-8 h-8 text-orange-600" />
                    <div>
                      <h4 className="font-semibold text-orange-900">App Móvil</h4>
                      <p className="text-sm text-orange-700">Kotlin nativo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200">
                    <Globe className="w-8 h-8 text-teal-600" />
                    <div>
                      <h4 className="font-semibold text-teal-900">App Web</h4>
                      <p className="text-sm text-teal-700">Svelte frontend</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200">
                    <Zap className="w-8 h-8 text-red-600" />
                    <div>
                      <h4 className="font-semibold text-red-900">Notificaciones</h4>
                      <p className="text-sm text-red-700">Sistema en tiempo real</p>
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-900">
                    Tecnologías Backend (Mi Responsabilidad)
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Spring Boot</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Arquitectura Hexagonal</Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Spring Security</Badge>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">JWT</Badge>
                    <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">PostgreSQL</Badge>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Flux (Notificaciones)</Badge>
                  </div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-900">Tecnologías Frontend (Equipo)</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Svelte (Web)</Badge>
                    <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Kotlin (Móvil)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 2: Finanzas Personales */}
            <Card className="overflow-hidden border-blue-200/50 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2 text-slate-900">Sistema de Finanzas Personales</CardTitle>
                    <CardDescription className="text-base">
                      Aplicación web completa desarrollada en PHP con arquitectura MVC para la gestión integral de
                      finanzas personales
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/Gabriel3555/FinanzasPersonales"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Project Screenshots */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="space-y-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2002.54.45-iNJzchgampTWCrASOXcJ1hTZpE7Gkt.png"
                      alt="Dashboard de Finanzas Personales"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Dashboard principal con métricas financieras y gráficos interactivos
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2002.55.04-5H9VO0iauKEpZBbxtYiGhTICkJIhm8.png"
                      alt="Reportes Financieros"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Sistema de reportes con exportación a Excel, PDF y CSV
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2002.55.22-d4nGPv81sCkR62V23ekiDO9vUmkrnq.png"
                      alt="Gestión de Categorías"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">Gestión de categorías con filtros y paginación</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                    <Users className="w-8 h-8 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-900">Gestión de Usuarios</h4>
                      <p className="text-sm text-green-700">Registro y autenticación</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                    <Database className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-blue-900">Base de Datos</h4>
                      <p className="text-sm text-blue-700">Diseño relacional completo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                    <BarChart3 className="w-8 h-8 text-purple-600" />
                    <div>
                      <h4 className="font-semibold text-purple-900">Reportes</h4>
                      <p className="text-sm text-purple-700">Análisis y visualización</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                    <Code className="w-8 h-8 text-orange-600" />
                    <div>
                      <h4 className="font-semibold text-orange-900">Arquitectura MVC</h4>
                      <p className="text-sm text-orange-700">Código organizado y escalable</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200">
                    <Shield className="w-8 h-8 text-red-600" />
                    <div>
                      <h4 className="font-semibold text-red-900">Seguridad</h4>
                      <p className="text-sm text-red-700">Validación y protección</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200">
                    <FileText className="w-8 h-8 text-teal-600" />
                    <div>
                      <h4 className="font-semibold text-teal-900">Exportación</h4>
                      <p className="text-sm text-teal-700">Múltiples formatos</p>
                    </div>
                  </div>
                </div>

                {/* Database Schema */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 text-slate-900">Diseño de Base de Datos</h4>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-08%20at%2003.06.02-z2QLxQVHmk7085g81Si5nzNG7BqAve.jpeg"
                    alt="Diagrama de Base de Datos"
                    width={800}
                    height={600}
                    className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                  />
                  <p className="text-sm text-slate-600 mt-2">
                    Esquema relacional con 7 tablas principales: usuarios, cuentas, categorías, transacciones,
                    presupuestos, movimientos y exportaciones
                  </p>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-900">Tecnologías Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">PHP</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">MySQL</Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">MVC Architecture</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">JavaScript</Badge>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">HTML5</Badge>
                    <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200">CSS3</Badge>
                    <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Chart.js</Badge>
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Bootstrap</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 3: DuitamaBiblioteca */}
            <Card className="overflow-hidden border-green-200/50 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-50 to-teal-50">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2 text-slate-900">Sistema de Biblioteca Municipal</CardTitle>
                    <CardDescription className="text-base">
                      Aplicación web desarrollada con Jakarta EE 11 para la gestión integral de bibliotecas, incluyendo
                      catálogo de libros y control de préstamos
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/Gabriel3555/DuitamaBiblioteca"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                      asChild
                    >
                      <a href="https://duitamabiblioteca.onrender.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Project Screenshots */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="space-y-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2003.23.48-0icuuqmqs7nfZFkAOS2IHY159lagCx.png"
                      alt="Homepage Biblioteca Municipal"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Página principal con acceso a gestión de libros y préstamos
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2003.24.30-iB2fGy7RBF1fvWaSk3LZOsU1FZw8vG.png"
                      alt="Dashboard Biblioteca"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Dashboard con acciones rápidas y módulos principales
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-08%20at%2003.24.11-MZzyaXiTXjs6R95m6MbaNZfyWekpdp.png"
                      alt="Catálogo de Libros"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Catálogo completo con filtros avanzados y exportación
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                    <BookOpen className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-blue-900">Gestión de Libros</h4>
                      <p className="text-sm text-blue-700">CRUD completo del catálogo</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                    <Calendar className="w-8 h-8 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-900">Control de Préstamos</h4>
                      <p className="text-sm text-green-700">Registro y seguimiento</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                    <Search className="w-8 h-8 text-purple-600" />
                    <div>
                      <h4 className="font-semibold text-purple-900">Filtros Avanzados</h4>
                      <p className="text-sm text-purple-700">Por autor, título e ISBN</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                    <Users className="w-8 h-8 text-orange-600" />
                    <div>
                      <h4 className="font-semibold text-orange-900">Gestión de Usuarios</h4>
                      <p className="text-sm text-orange-700">Administración de lectores</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200">
                    <FileText className="w-8 h-8 text-teal-600" />
                    <div>
                      <h4 className="font-semibold text-teal-900">Exportación</h4>
                      <p className="text-sm text-teal-700">Excel e impresión</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200">
                    <Code className="w-8 h-8 text-red-600" />
                    <div>
                      <h4 className="font-semibold text-red-900">Jakarta EE 11</h4>
                      <p className="text-sm text-red-700">Arquitectura empresarial</p>
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-900">Tecnologías Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">Jakarta EE 11</Badge>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Apache Tomcat 11</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Maven</Badge>
                    <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Docker</Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">WAR Deployment</Badge>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">HTML5</Badge>
                    <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200">CSS3</Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">JavaScript</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project 4: SGDIS */}
            <Card className="overflow-hidden border-amber-200/50 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-amber-50 to-yellow-50">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2 text-slate-900">
                      SGDIS - Sistema de Gestión de Inventario SENA
                    </CardTitle>
                    <CardDescription className="text-base">
                      Sistema estructurado para mejorar la gestión de inventario de SENA, reduciendo errores, mejorando
                      la eficiencia para mejorar la gestión de inventario de SENA, reduciendo errores, mejorando la
                      eficiencia y garantizando transparencia en el control de recursos. Proporciona mejor seguimiento,
                      generación de informes y toma de decisiones para optimizar las operaciones diarias.
                    </CardDescription>
                  </div>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">En Desarrollo</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                {/* Project Screenshots */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="space-y-4">
                    <Image
                      src="/images/sgdis-main-dashboard.png"
                      alt="Dashboard Principal SGDIS"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Dashboard principal con métricas clave y estadísticas del inventario
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="/images/sgdis-inventories-dashboard.png"
                      alt="Gestión de Inventarios"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Gestión de inventarios por ubicación con métricas detalladas
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="/images/sgdis-reports-statistics.png"
                      alt="Reportes y Estadísticas"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Sistema de reportes avanzados con filtros y exportación de datos
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Image
                      src="/images/sgdis-item-verification.png"
                      alt="Verificación de Items"
                      width={600}
                      height={400}
                      className="rounded-lg border shadow-lg w-full hover:shadow-xl transition-shadow"
                    />
                    <p className="text-sm text-slate-600 text-center">
                      Verificación de items con búsqueda por placa y código de barras
                    </p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                    <Database className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-blue-900">Gestión de Inventarios</h4>
                      <p className="text-sm text-blue-700">Control por ubicaciones</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                    <BarChart3 className="w-8 h-8 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-green-900">Reportes Avanzados</h4>
                      <p className="text-sm text-green-700">Análisis y estadísticas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                    <Search className="w-8 h-8 text-purple-600" />
                    <div>
                      <h4 className="font-semibold text-purple-900">Verificación de Items</h4>
                      <p className="text-sm text-purple-700">Búsqueda por código de barras</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                    <Users className="w-8 h-8 text-orange-600" />
                    <div>
                      <h4 className="font-semibold text-orange-900">Control de Usuarios</h4>
                      <p className="text-sm text-orange-700">Roles y permisos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200">
                    <FileText className="w-8 h-8 text-teal-600" />
                    <div>
                      <h4 className="font-semibold text-teal-900">Exportación</h4>
                      <p className="text-sm text-teal-700">PDF y Excel</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg border border-red-200">
                    <Smartphone className="w-8 h-8 text-red-600" />
                    <div>
                      <h4 className="font-semibold text-red-900">App Móvil</h4>
                      <p className="text-sm text-red-700">React Native</p>
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-900">Tecnologías Backend</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Spring Boot</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Arquitectura Hexagonal</Badge>
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Spring Security</Badge>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">JWT</Badge>
                    <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">PostgreSQL</Badge>
                    <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Flyway</Badge>
                  </div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-900">Tecnologías Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">JavaScript</Badge>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">HTML5</Badge>
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">CSS3</Badge>
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">Tailwind CSS</Badge>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-200">React Native (Móvil)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Habilidades Técnicas</h2>
            <p className="text-lg text-slate-600">Tecnologías y herramientas con las que trabajo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Backend Development */}
            <Card className="border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100">
                <CardTitle className="flex items-center gap-3 text-blue-900">
                  <Code className="w-6 h-6" />
                  Backend Development
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800">Java</Badge>
                    <Badge className="bg-green-100 text-green-800">Spring Boot</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800">Spring Security</Badge>
                    <Badge className="bg-purple-100 text-purple-800">JWT</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-orange-100 text-orange-800">PHP</Badge>
                    <Badge className="bg-red-100 text-red-800">Jakarta EE</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Database & Architecture */}
            <Card className="border-green-200/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-green-50 to-green-100">
                <CardTitle className="flex items-center gap-3 text-green-900">
                  <Database className="w-6 h-6" />
                  Base de Datos & Arquitectura
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800">PostgreSQL</Badge>
                    <Badge className="bg-orange-100 text-orange-800">MySQL</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-100 text-purple-800">Arquitectura Hexagonal</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-green-100 text-green-800">MVC</Badge>
                    <Badge className="bg-indigo-100 text-indigo-800">Flyway</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Frontend & Mobile */}
            <Card className="border-purple-200/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100">
                <CardTitle className="flex items-center gap-3 text-purple-900">
                  <Globe className="w-6 h-6" />
                  Frontend & Mobile
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-yellow-100 text-yellow-800">JavaScript</Badge>
                    <Badge className="bg-orange-100 text-orange-800">HTML5</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800">CSS3</Badge>
                    <Badge className="bg-teal-100 text-teal-800">Bootstrap</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">¿Interesado en colaborar?</h3>
            <p className="text-slate-300 mb-6 text-pretty">
              Estoy abierto a oportunidades de desarrollo backend con Java Spring Framework y proyectos desafiantes
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant="outline"
                asChild
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white bg-transparent"
              >
                <a
                  href="https://linkedin.com/in/gabriel-barrantes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-slate-400 text-slate-400 hover:bg-slate-400 hover:text-slate-900 bg-transparent"
              >
                <a
                  href="https://github.com/Gabriel3555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white bg-transparent"
              >
                <a href="https://wa.me/573154625105" target="_blank" rel="noopener noreferrer" className="no-underline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white bg-transparent"
              >
                <a href="mailto:gabriel_barrantes@soy.sena.edu.co" className="no-underline">
                  <Mail className="w-4 h-4 mr-2" />
                  Contacto
                </a>
              </Button>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © 2025 Gabriel Barrantes. Desarrollado con pasión por la programación backend.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
