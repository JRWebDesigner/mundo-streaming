'use client';

import { Check, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { Product } from '@/lib/supabase';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '59169705031';
    const message = encodeURIComponent(
      `Hola! Estoy interesado en: ${product.name}\nPrecio: ${product.price}Bs. \nDuración: ${product.duration}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <Card className="group relative overflow-hidden border-blue-900/20 bg-white hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-400">
        {product.image_url && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundImage: `url(${product.image_url})` }}
          >
            <div className="absolute inset-0 bg-blue-900/40" />
          </div>
        )}
        <div className="relative flex h-full items-center justify-center">
          <h3 className="text-2xl font-bold text-white text-center px-4">
            {product.name}
          </h3>
        </div>
        {product.is_featured && (
          <div className="absolute top-4 right-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-blue-900">
            Destacado
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>

        <div className="space-y-2">
          {product.features && product.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
              <Check className="h-4 w-4 text-blue-600 flex-shrink-0" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            <p className="text-sm text-gray-500">Precio</p>
            <p className="text-3xl font-bold text-blue-900">
              {product.price}Bs.
            </p>
            <p className="text-sm text-gray-500">{product.duration}</p>
          </div>
        </div>

        <Button
          onClick={handleWhatsAppClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          size="lg"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Comprar por WhatsApp
        </Button>

        {product.stock > 0 && product.stock < 10 && (
          <p className="text-xs text-center text-orange-600 font-medium">
            ¡Solo quedan {product.stock} disponibles!
          </p>
        )}
      </div>
    </Card>
  );
}
