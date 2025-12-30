import { ProductCard } from '@/components/ProductCard';
import { db } from '@/lib/supabase';
import type { Product, Category } from '@/lib/supabase';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productos - Cuentas Premium de Streaming | Mundo Streaming',
  description: 'Explora todas nuestras cuentas premium: Netflix, HBO Max, Disney+, Prime Video, Flujo TV. Precios accesibles y entrega inmediata.',
  keywords: ['cuentas netflix', 'cuentas hbo', 'cuentas disney plus', 'streaming argentina', 'cuentas baratas'],
};

export const dynamic = 'force-dynamic';
export const revalidate = 60;

async function getCategories(): Promise<Category[]> {
  return db.getCategories();
}

async function getProducts(): Promise<Product[]> {
  return db.getProducts();
}

export default async function ProductsPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-blue-900 md:text-5xl">
          Nuestros Productos
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Encuentra las mejores cuentas premium de streaming al mejor precio del mercado
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center p-6 rounded-xl border border-blue-900/20 bg-white hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold text-white">
                {category.name.charAt(0)}
              </span>
            </div>
            <h3 className="font-semibold text-blue-900 text-center">
              {category.name}
            </h3>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-bold text-blue-900 mb-6">
          Todos los Productos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No hay productos disponibles en este momento.
            </p>
          </div>
        )}
      </div>

      <section className="bg-blue-900 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          ¿No encuentras lo que buscas?
        </h2>
        <p className="text-xl text-blue-100 mb-6">
          Contáctanos y te ayudaremos a encontrar la cuenta perfecta para ti
        </p>
        <a
          href="/contacto"
          className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-lg font-semibold text-blue-900 hover:bg-gray-100 transition-colors"
        >
          Contactar Ahora
        </a>
      </section>
    </div>
  );
}
