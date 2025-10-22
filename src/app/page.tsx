"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, BookOpen, NotebookPen, ReceiptText, Globe,Menu} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#212529] backdrop-blur supports-[backdrop-filter]:bg-[#212529]">
        <div className="container max-w-screen-xl mx-auto flex h-16 items-center justify-between px-4 relative">
          <div className="flex items-center gap-2">
            <Image src="/epublit_logo.png" width={120} height={120} alt="Epublit" className="w-auto h-auto max-w-[150px] max-h-[150px]"/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="#caracteristicas" className="text-sm font-medium text-white hover:text-[#215f5c]">
              Características
            </Link>
            {/*
            <Link href="#testimonios" className="text-sm font-medium text-white hover:text-[#215f5c]">
              Testimonios
            </Link>
            */}
            <Link href="#planes" className="text-sm font-medium text-white hover:text-[#215f5c]">
              Planes
            </Link>
            <Link href="#registrarse" className="text-sm font-medium text-white hover:text-[#215f5c]">
              Contacto
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen} >
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white">
                  <Menu/>
                  <span className="sr-only">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Image src="/epublit_logo_oscuro.png" width={120} height={120} alt="Epublit" className="w-auto h-auto max-w-[150px] max-h-[150px]" />
                    </div>
                  </div>
                  <nav className="flex flex-col gap-4">
                    <Link
                      href="#caracteristicas"
                      className="text-lg font-medium text-[#212529] hover:text-[#215f5c] py-2 border-b border-gray-100"
                      onClick={closeMenu}
                    >
                      Características
                    </Link>
                    <Link
                      href="#testimonios"
                      className="text-lg font-medium text-[#212529] hover:text-[#215f5c] py-2 border-b border-gray-100"
                      onClick={closeMenu}
                    >
                      Testimonios
                    </Link>
                    <Link
                      href="#planes"
                      className="text-lg font-medium text-[#212529] hover:text-[#215f5c] py-2 border-b border-gray-100"
                      onClick={closeMenu}
                    >
                      Planes
                    </Link>
                    <Link
                      href="#registrarse"
                      className="text-lg font-medium text-[#212529] hover:text-[#215f5c] py-2 border-b border-gray-100"
                      onClick={closeMenu}
                    >
                      Contacto
                    </Link>
                  </nav>
                  <div className="flex flex-col gap-3 mt-6">
                    <Button
                      variant="outline"
                      className="w-full border-[#215f5c] text-[#215f5c] hover:bg-[#215f5c] hover:text-white"
                      onClick={closeMenu}
                    >
                      <Link href="/app" className="w-full">
                        Iniciar Sesión
                      </Link>
                    </Button>
                    <Button className="w-full bg-[#215f5c] text-white hover:bg-[#215f5c]/90" onClick={closeMenu}>
                      <Link href="#registrarse" className="w-full">
                        Registrarse
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="hidden md:flex gap-2">
            <Button variant="outline" className=" text-[#215f5c] hover:bg-[#215f5c] hover:text-white">
              <Link href="https://app.epublit.com.ar">Iniciar Sesión</Link>
            </Button>
            <Button className="bg-[#215f5c] text-white hover:bg-[#215f5c]/70">
              <Link href="https://app.epublit.com.ar/register">Registrarse</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-[#215f5c]/5">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-[#212529] sm:text-5xl xl:text-6xl">
                  Gestiona tu Editorial de Forma Eficiente
                </h1>
                <p className="text-lg text-[#212529]/80 max-w-[600px]">
                Epublit revoluciona la gestión editorial con control total de stock, facturación y consignaciones, todo en la nube y accesible desde cualquier dispositivo.
                </p>
                <div className="flex gap-3 pt-4">
                  <Button className="bg-[#215f5c] text-white hover:bg-[#215f5c]/90" size="lg">
                    <Link href="#registrarse">Probar </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#215f5c] text-[#215f5c] hover:bg-[#215f5c] hover:text-white"
                    size="lg"
                  >
                    <Link href="#planes">Ver Planes</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-end">
                <Image
                  src="/epublit_compu.png"
                  width={900}
                  height={900}
                  alt="Gestión Editorial"
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="caracteristicas" className="w-full py-20 bg-white">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#215f5c] px-3 py-1 text-sm text-white mb-4">
                Características
              </div>
              <h2 className="text-3xl font-bold text-[#212529] mb-4">Solución Completa para Editoriales</h2>
              <p className="text-[#212529]/70 max-w-2xl mx-auto">
                Epublit ofrece todas las herramientas que necesitas para gestionar tu editorial de manera eficiente.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-[#215f5c]/10 hover:border-[#215f5c]/30 transition-colors">
                <CardHeader>
                  <Globe className="h-12 w-12 text-[#215f5c] mb-4" />
                  <CardTitle className="text-xl text-[#212529]">Acceso desde cualquier dispositivo</CardTitle>
                  <CardDescription className="text-[#212529]/70">
                    Ingresa desde tu computadora, tablet o smartphone con conexión a Internet, sin necesidad de instalaciones.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-[#215f5c]/10 hover:border-[#215f5c]/30 transition-colors">
                <CardHeader>
                  <ReceiptText className="h-12 w-12 text-[#215f5c] mb-4" />
                  <CardTitle className="text-xl text-[#212529]">Facturación automatizada</CardTitle>
                  <CardDescription className="text-[#212529]/70">
                    Genera facturas de manera rápida y sencilla, cumpliendo con los requisitos legales sin complicaciones.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-[#215f5c]/10 hover:border-[#215f5c]/30 transition-colors">
                <CardHeader>
                  <NotebookPen className="h-12 w-12 text-[#215f5c] mb-4" />
                  <CardTitle className="text-xl text-[#212529]">Gestión de consignaciones</CardTitle>
                  <CardDescription className="text-[#212529]/70">
                    Registra y controla los libros consignados a librerías, con reportes claros de ventas y devoluciones.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-[#215f5c]/10 hover:border-[#215f5c]/30 transition-colors">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-[#215f5c] mb-4" />
                  <CardTitle className="text-xl text-[#212529]">Control de stock en tiempo real</CardTitle>
                  <CardDescription className="text-[#212529]/70">
                    Mantén actualizado tu inventario y recibe alertas cuando sea necesario reponer productos.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section 
        <section id="testimonios" className="w-full py-20 bg-[#215f5c]/5">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#215f5c] px-3 py-1 text-sm text-white mb-4">Testimonios</div>
              <h2 className="text-3xl font-bold text-[#212529] mb-4">Lo Que Dicen Nuestros Clientes</h2>
              <p className="text-[#212529]/70 max-w-2xl mx-auto">
                Editoriales de todos los tamaños confían en Epublit para optimizar sus procesos.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-[#215f5c]/10">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/Caro-Musa.jpg"
                      width={48}
                      height={48}
                      alt="Avatar"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg text-[#212529]">Carolina Musa</CardTitle>
                      <CardDescription>Editorial Libros Silvestres</CardDescription>
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-[#212529]/70 italic">
                    "La verdad que el sistema FIERRO es mejor pero Epublit es un 5% más barato"

                    </p>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card className="border-[#215f5c]/10">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      alt="Avatar"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg text-[#212529]">María Rodríguez</CardTitle>
                      <CardDescription>Ediciones Modernas</CardDescription>
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-[#212529]/70 italic">
                      "Las herramientas de análisis nos han permitido tomar decisiones más informadas sobre qué títulos
                      publicar."
                    </p>
                  </CardContent>
                </CardHeader>
              </Card>
              <Card className="border-[#215f5c]/10">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      alt="Avatar"
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg text-[#212529]">Alejandra Gómez</CardTitle>
                      <CardDescription>Libros del Amanecer</CardDescription>
                    </div>
                  </div>
                  <CardContent className="p-0">
                    <p className="text-[#212529]/70 italic">
                      "Como editorial pequeña, Epublit nos ha permitido competir con las grandes. La plataforma es
                      intuitiva."
                    </p>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>*/}

        {/* Pricing Section */}
        <section id="planes" className="w-full py-20 bg-[#215f5c]/5">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#215f5c] px-3 py-1 text-sm text-white mb-4">Planes</div>
              <h2 className="text-3xl font-bold text-[#212529] mb-4">Planes Adaptados a Tus Necesidades</h2>
              <p className="text-[#212529]/70 max-w-2xl mx-auto">
                Elige el plan que mejor se adapte al tamaño y necesidades de tu editorial.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="border-[#215f5c]/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#212529]">Básico</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[#212529]">$0</span>
                    <span className="text-[#212529]/70">/mes</span>
                  </div>
                  <CardDescription className="mt-4">Ideal para editoriales pequeñas o independientes.</CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#215f5c]" />
                      <span>Hasta 30 títulos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#215f5c]" />
                      <span>Gestion de stock</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-6">
                  <Button className="w-full bg-[#215f5c] text-white hover:bg-[#215f5c]/90">
                    <Link href="#registrarse">Comenzar</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-[#215f5c] shadow-lg">
                <CardHeader>
                  <div className="inline-block rounded-lg bg-[#215f5c] px-3 py-1 text-sm text-white mb-4">Popular</div>
                  <CardTitle className="text-2xl text-[#212529]">Profesional</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[#212529]">$27.000</span>
                    <span className="text-[#212529]/70">/mes</span>
                  </div>
                  <CardDescription className="mt-4">
                    Para editoriales en crecimiento con necesidades avanzadas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#215f5c]" />
                      <span>Todo lo del plan Básico</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#215f5c]" />
                      <span>Hasta 200 títulos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#215f5c]" />
                      <span>Reportes personalizados</span>
                    </li>                   
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#215f5c]" />
                      <span>Facturación automatica</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-6">
                  <Button className="w-full bg-[#215f5c] text-white hover:bg-[#215f5c]/90">
                    <Link href="#registrarse">Comenzar</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-[#215f5c]/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#212529]">Empresarial</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[#212529]">$49.000</span>
                    <span className="text-[#212529]/70">/mes</span>
                  </div>
                  <CardDescription className="mt-4">
                    Para grandes editoriales con necesidades complejas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#215f5c]" />
                      <span>Todo lo del plan Profesional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#215f5c]" />
                      <span>Títulos ilimitados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-[#215f5c]" />
                      <span>Soporte prioritario</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="mt-6">
                  <Button className="w-full bg-[#215f5c] text-white hover:bg-[#215f5c]/90">
                    <Link href="#registrarse">Contactar Ventas</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="registrarse" className="w-full py-20 bg-[#215f5c]">
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold text-white md:text-4xl">¿Listo para Transformar tu Editorial?</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Únete a cientos de editoriales que ya han optimizado sus procesos con Epublit.
              </p>
              <div className="w-full max-w-md">
                {/*
                <form 
                  className="flex flex-col sm:flex-row gap-2"
                  action="https://formspree.io/f/myzezglr"
                  method="POST"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Tu correo electrónico"
                    className="flex h-12 w-full rounded-md border border-white/20 bg-white/10 px-4 text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  />
                </form>
                 */}
                  <Button type="submit" className="h-12 bg-white text-[#215f5c] hover:bg-white/90 whitespace-nowrap">
                    <Link href="https://app.epublit.com.ar/register"> Registrarse</Link>
                  </Button>
                <p className="text-sm text-white/70 mt-3">
                  Version gratuita. No se requiere tarjeta de crédito.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-[#212529] text-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-6 w-6 text-[#215f5c]" />
                <span className="text-lg font-bold">Epublit</span>
              </div>
              <p className="text-sm text-white/70">
                © {new Date().getFullYear()} Epublit.
                <br />
                Todos los derechos reservados.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white/70 hover:text-white">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#planes" className="text-sm text-white/70 hover:text-white">
                    Planes
                  </Link>
                </li>
                <li>
                  <Link href="https://app.epublit.com.ar/register" className="text-sm text-white/70 hover:text-white">
                    Registrarse
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Compañía</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://thorque.com.ar/#about" className="text-sm text-white/70 hover:text-white">
                    Acerca de
                  </Link>
                </li>
                <li>
                  <Link href="https://thorque.com.ar/#services" className="text-sm text-white/70 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="https://thorque.com.ar/#clients" className="text-sm text-white/70 hover:text-white">
                   Clientes 
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-white/70 hover:text-white">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/70 hover:text-white">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-white/70 hover:text-white">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

