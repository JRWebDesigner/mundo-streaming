'use client';

import { Check, ShoppingCart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { urlFor } from '@/lib/supabase';
import type { Product } from '@/lib/supabase';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '59169705031';
    const message = encodeURIComponent(
      `Hola! Estoy interesado en: ${product.name}\nPrecio: $${product.price}\nDuración: ${product.duration}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const imageUrl = product.image ? urlFor(product.image).url() : null;

  return (
    <Card className="group relative overflow-hidden border-purple-500/30 bg-gradient-to-br from-slate-800 to-slate-900 hover:border-purple-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-blue-600/10 transition-all duration-500" />
      
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600">
        {imageUrl && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute inset-0 bg-blue-900/50 group-hover:bg-blue-900/30 transition-all duration-500" />
          </div>
        )}
        <div className="relative flex h-full items-center justify-center">
          <h3 className="text-2xl font-bold text-white text-center px-4">
            {product.name}
          </h3>
        </div>
        {product.is_featured && (
          <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 text-xs font-bold text-slate-900 shadow-lg animate-pulse flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            Destacado
          </div>
        )}
      </div>

      <div className="relative p-6 space-y-4">
        <p className="text-sm text-gray-400 line-clamp-2">{product.description}</p>

        <div className="space-y-2">
          {product.features && product.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
              <Check className="h-4 w-4 text-purple-400 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
          <div>
            <p className="text-sm text-gray-500">Precio</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500">{product.duration}</p>
          </div>
        </div>

        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 rounded-lg font-semibold"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Comprar por WhatsApp
        </Button>

        {product.stock > 0 && product.stock < 10 && (
          <p className="text-xs text-center text-orange-400 font-medium bg-orange-400/10 py-2 rounded-lg">
            ⚡ ¡Solo quedan {product.stock} disponibles!
          </p>
        )}
      </div>
    </Card>
  );
}
          >
            <div className="absolute inset-0 bg-blue-900/50 group-hover:bg-blue-900/30 transition-all duration-500" />
          </div>
        )}
        <div className="relative flex h-full items-center justify-center">
          <h3 className="text-2xl font-bold text-white text-center px-4">
            {product.name}
          </h3>
        </div>
        {product.is_featured && (
          <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 text-xs font-bold text-slate-900 shadow-lg animate-pulse flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            Destacado
          </div>
        )}
      </div>

      <div className="relative p-6 space-y-4">
        <p className="text-sm text-gray-400 line-clamp-2">{product.description}</p>

        <div className="space-y-2">
          {product.features && product.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-300">
              <Check className="h-4 w-4 text-purple-400 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
          <div>
            <p className="text-sm text-gray-500">Precio</p>
            <p className="text-3xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">
              {product.price}Bs.
            </p>
            <p className="text-sm text-gray-500">{product.duration}</p>
          </div>
        </div>

        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 rounded-lg font-semibold"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Comprar por WhatsApp
        </Button>

        {product.stock > 0 && product.stock < 10 && (
          <p className="text-xs text-center text-orange-400 font-medium bg-orange-400/10 py-2 rounded-lg">
            ⚡ ¡Solo quedan {product.stock} disponibles!
          </p>
        )}
      </div>
    </Card>
  );
}
