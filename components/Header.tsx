'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Tv, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-900/20 bg-[#0A1929]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A1929]/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-400">
            <Tv className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white">
            Mundo <span className="text-blue-400">Streaming</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
          >
            Inicio
          </Link>
          <Link
            href="/productos"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
          >
            Productos
          </Link>
          <Link
            href="/contacto"
            className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
          >
            Contacto
          </Link>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/productos">Ver Ofertas</Link>
          </Button>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-blue-900/20 bg-[#0A1929]">
          <nav className="container mx-auto flex flex-col space-y-4 px-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
