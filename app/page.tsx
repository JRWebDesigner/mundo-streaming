import Link from 'next/link';
import { PromotionsSlider } from '@/components/PromotionsSlider';
import { ProductCard } from '@/components/ProductCard';
import Redes from '@/components/Redes'
import { Button } from '@/components/ui/button';
import { db } from '@/lib/supabase';
import type { Promotion, Product } from '@/lib/supabase';
import { Sparkles, Shield, Zap, HeadphonesIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

async function getPromotions(): Promise<Promotion[]> {
  return db.getPromotions();
}

async function getFeaturedProducts(): Promise<Product[]> {
  return db.getFeaturedProducts(6);
}

export default async function Home() {
  const promotions = await getPromotions();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16">
        <div className="text-center space-y-8 relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob" />
          <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
          
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 bg-clip-text text-transparent mb-4">
              Mundo Streaming
            </h1>
            <p className="text-xl md:text-2xl text-gray-950 max-w-3xl mx-auto mb-8">
              Las mejores cuentas <span className="text-blue-800 font-semibold">premium de streaming</span> con entrega inmediata y soporte 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8">
                <Link href="/productos" className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Ver Catálogo Completo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-blue-400 text-blue-900 hover:bg-blue-900/10 rounded-full px-8">
                <Link href="/contacto">Obtener Más Info</Link>
              </Button>
            </div>
          </div>
          <Redes />
        </div>
      </section>

      {/* Promotions Slider */}
      <section className="container mx-auto px-4">
        <PromotionsSlider promotions={promotions} />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-900/40 to-blue-900/20 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/5 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center space-y-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Entrega Inmediata</h3>
              <p className="text-sm text-gray-950">
                Recibe tu cuenta al instante después de la compra
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-purple-900/40 to-purple-900/20 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/0 group-hover:from-purple-600/10 group-hover:to-purple-600/5 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center space-y-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">100% Seguro</h3>
              <p className="text-sm text-gray-950">
                Compra segura y protección de tus datos
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-pink-900/40 to-pink-900/20 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/0 to-pink-600/0 group-hover:from-pink-600/10 group-hover:to-pink-600/5 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center space-y-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-pink-600 group-hover:shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300">
                <HeadphonesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Soporte 24/7</h3>
              <p className="text-sm text-gray-950">
                Atención al cliente disponible en todo momento
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-indigo-900/40 to-indigo-900/20 border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/0 to-indigo-600/0 group-hover:from-indigo-600/10 group-hover:to-indigo-600/5 transition-all duration-300" />
            <div className="relative z-10 flex flex-col items-center space-y-3 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all duration-300">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Mejor Precio</h3>
              <p className="text-sm text-gray-950">
                Las mejores ofertas del mercado garantizadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
            Productos Destacados
          </h2>
          <p className="text-lg text-gray-950 max-w-2xl mx-auto">
            Las mejores cuentas premium al mejor precio del mercado
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8">
            <Link href="/productos" className="flex items-center gap-2">
              Ver Todos los Productos
              <Sparkles className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl p-12 md:p-20 bg-[url('/banner2.png')] bg-cover bg-norepeat bg-center border border-blue-500/30">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
          
          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Únete a miles de clientes satisfechos y disfruta del mejor streaming de América Latina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-8 font-semibold">
                <Link href="/productos" className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Explorar Catálogo
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10 rounded-full px-8 font-semibold">
                <Link href="/contacto">Contactar Ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
