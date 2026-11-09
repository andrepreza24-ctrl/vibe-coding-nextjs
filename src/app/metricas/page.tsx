'use client';

import { useState, useEffect } from 'react';

interface Stats {
  totalPosts: number;
  activeUsers: number;
  serverStatus: string;
  timestamp: string;
}

export default function MetricsPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        setStats(data);
      } catch (err) {
        console.error('Error al cargar metricas', err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-slate-400">Cargando metricas del servidor...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Métricas de la Aplicación</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <p className="text-slate-400 text-sm">Publicaciones Totales</p>
          <p className="text-3xl font-bold text-blue-400 mt-2">{stats?.totalPosts}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <p className="text-slate-400 text-sm">Usuarios Activos</p>
          <p className="text-3xl font-bold text-green-400 mt-2">{stats?.activeUsers}</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <p className="text-slate-400 text-sm">Estado del Servidor</p>
          <p className="text-3xl font-bold text-purple-400 mt-2">{stats?.serverStatus}</p>
        </div>
      </div>
      <p className="text-xs text-slate-500">Última actualización: {stats?.timestamp}</p>
    </div>
  );
}