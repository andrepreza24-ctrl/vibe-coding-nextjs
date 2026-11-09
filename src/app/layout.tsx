import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plataforma Vibe Coding Next.js',
  description: 'Aplicacion desarrollada mediante flujo Vibe Coding e IA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 max-w-6xl w-full mx-auto p-6">{children}</main>
        <footer className="border-t border-slate-800 p-4 text-center text-slate-500 text-sm">
          Desarrollado con Next.js 16 y Vibe Coding
        </footer>
      </body>
    </html>
  );
}