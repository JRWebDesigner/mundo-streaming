import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mundo Streaming - Cuentas Premium de Netflix, HBO, Disney+ y más',
  description: 'Compra cuentas premium de streaming: Netflix, HBO Max, Disney+, Prime Video, Flujo TV. Precios accesibles, entrega inmediata y soporte 24/7. La mejor tienda de cuentas streaming en Argentina.',
  keywords: ['streaming', 'netflix', 'hbo', 'disney plus', 'prime video', 'flujo tv', 'cuentas premium', 'argentina', 'cuentas streaming baratas'],
  authors: [{ name: 'Mundo Streaming' }],
  creator: 'Mundo Streaming',
  publisher: 'Mundo Streaming',
  metadataBase: new URL('https://mundostreaming.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mundo Streaming - Cuentas Premium de Streaming',
    description: 'Las mejores cuentas de Netflix, HBO Max, Disney+, Prime Video y Flujo TV. Precios accesibles y entrega inmediata.',
    url: 'https://mundostreaming.com',
    siteName: 'Mundo Streaming',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mundo Streaming - Cuentas Premium de Streaming',
    description: 'Las mejores cuentas de Netflix, HBO Max, Disney+ y más. Precios accesibles.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gradient-to-b from-white to-blue-50`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
