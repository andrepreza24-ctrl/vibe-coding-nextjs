import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-6 text-center py-12">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Desarrollo Guiado por IA: <span className="text-blue-500">Vibe Coding</span>
      </h1>
      <p className="max-w-2xl mx-auto text-slate-400 text-lg">
        Panel de control y explorador de datos construido con Server Components, Client Components y consumo de APIs dinámicas.
      </p>
      <div className="flex justify-center gap-4 pt-4">
        <Link
          href="/publicaciones"
          className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-lg transition"
        >
          Explorar Publicaciones
        </Link>
        <Link
          href="/metricas"
          className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3 rounded-lg transition"
        >
          Ver Métricas
        </Link>
      </div>
    </div>
  );
}