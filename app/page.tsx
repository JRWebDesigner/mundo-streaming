import Link from 'next/link';
import { PromotionsSlider } from '@/components/PromotionsSlider';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';
import type { Promotion, Product } from '@/lib/supabase';
import { Sparkles, Shield, Zap, HeadphonesIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

async function getPromotions(): Promise<Promotion[]> {
  const { data, error } = await supabase
    .from('promotions')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching promotions:', error);
    return [];
  }

  return data || [];
}

async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*, categories(*)')
    .eq('is_featured', true)
    .order('created_at', { ascending: false })
    .limit(6);

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data || [];
}

export default async function Home() {
  const promotions = await getPromotions();
  const featuredProducts = await getFeaturedProducts();

  return (
    <div className="space-y-16 pb-16">
      <section className="container mx-auto px-4 pt-8">
        <PromotionsSlider promotions={promotions} />
      </section>

      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900">Entrega Inmediata</h3>
            <p className="text-sm text-gray-600">
              Recibe tu cuenta al instante después de la compra
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900">100% Seguro</h3>
            <p className="text-sm text-gray-600">
              Compra segura y protección de tus datos
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <HeadphonesIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900">Soporte 24/7</h3>
            <p className="text-sm text-gray-600">
              Atención al cliente disponible en todo momento
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-blue-900">Mejor Precio</h3>
            <p className="text-sm text-gray-600">
              Las mejores ofertas del mercado garantizadas
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            Productos Destacados
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Las mejores cuentas premium al mejor precio
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/productos">Ver Todos los Productos</Link>
          </Button>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            ¿Listo para comenzar?
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Únete a miles de clientes satisfechos y disfruta del mejor streaming
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              <Link href="/productos">Ver Productos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
