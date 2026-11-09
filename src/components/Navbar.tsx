import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-400">
          DevPortal
        </Link>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-400 transition">Inicio</Link>
          <Link href="/publicaciones" className="hover:text-blue-400 transition">Publicaciones</Link>
          <Link href="/metricas" className="hover:text-blue-400 transition">Métricas</Link>
          <Link href="/acerca" className="hover:text-blue-400 transition">Acerca</Link>
        </div>
      </div>
    </nav>
  );
}