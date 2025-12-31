import { ProductCard } from '@/components/ProductCard';
import Redes from '@/components/Redes'
import { db, urlFor } from '@/lib/supabase';
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
    <div className="container mx-auto px-4 py-12 space-y-7">
      <section className="rounded-3xl bg-[url(/banner2.png)] bg-cover bg-center bg-norepeat w-full h-auto p-10">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-500 bg-clip-text text-transparent">
            Nuestros Productos
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Encuentra las mejores cuentas premium de streaming al mejor precio del mercado
          </p>
        </div>
        <Redes />
      </section>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const iconUrl = category.icon ? urlFor(category.icon).width(100).height(100).url() : null;
            return (
              <div
                key={category._id}
                className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-blue-900/40 to-blue-600/40 border border-purple-500/30 hover:border-purple-400/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/50 overflow-hidden">
                    {iconUrl ? (
                      <img 
                        src={iconUrl} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-white">
                        {category.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-white text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* All Products */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-8">
          Todos los Productos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No hay productos disponibles en este momento.
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="relative overflow-hidden rounded-3xl p-12 md:p-16 bg-[url(/banner2.png)] bg-cover bg-center bg-norepeat border border-purple-500/30">
        
        <div className="relative z-10 text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">
            ¿No encuentras lo que buscas?
          </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Contáctanos y te ayudaremos a encontrar la cuenta perfecta para ti
        </p>
        <a
          href="/contacto"
          className="inline-flex items-center justify-center rounded-full bg-white text-blue-900 hover:bg-gray-100 transition-colors px-8 py-3 text-lg font-semibold"
        >
          Contactar Ahora
        </a>
        </div>
      </section>
    </div>
  );
}
