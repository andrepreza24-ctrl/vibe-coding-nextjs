export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">Acerca del Proyecto</h1>
      <p className="text-slate-300 leading-relaxed">
        Esta aplicación fue desarrollada siguiendo la metodología de <strong>Vibe Coding</strong> como parte de la evaluación práctica de Next.js. El flujo integró generación interactiva de código mediante modelos de inteligencia artificial, refinamiento de prompts y control estricto de arquitectura de componentes.
      </p>
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-3">
        <h2 className="text-xl font-semibold text-blue-400">Detalles del Desarrollador</h2>
        <ul className="text-slate-300 space-y-2 text-sm">
          <li><strong>Usuario GitHub:</strong> andrepreza24-ctrl</li>
          <li><strong>Framework:</strong> Next.js 16 (App Router)</li>
          <li><strong>Lenguaje:</strong> TypeScript</li>
          <li><strong>Estilos:</strong> Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
}