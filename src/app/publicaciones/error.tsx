'use client';

export default function ErrorPosts({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-16 space-y-4">
      <h2 className="text-2xl font-bold text-red-400">Ocurrio un error al cargar las publicaciones</h2>
      <p className="text-slate-400">No se pudo establecer conexion con la API externa.</p>
      <button
        onClick={() => reset()}
        aria-label="Reintentar carga de publicaciones"
        className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-lg transition"
      >
        Reintentar
      </button>
    </div>
  );
}