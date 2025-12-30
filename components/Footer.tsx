import Link from 'next/link';
import { Tv, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-blue-900/20 bg-[#0A1929] text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-400">
                <Tv className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Mundo <span className="text-blue-400">Streaming</span>
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Tu tienda de confianza para cuentas premium de streaming.
              Acceso inmediato y soporte 24/7.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-blue-400 transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-blue-400 transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Plataformas</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Netflix</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">HBO Max</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Disney+</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Prime Video</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Flujo TV</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>info@mundostreaming.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+591 69705031</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Bolivia, La Paz</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-900/20 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mundo Streaming. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
