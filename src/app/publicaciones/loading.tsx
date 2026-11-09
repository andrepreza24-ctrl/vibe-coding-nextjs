export default function LoadingPosts() {
  return (
    <div className="space-y-6">
      <div className="h-8 w-48 bg-slate-800 rounded animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 animate-pulse">
            <div className="h-4 w-12 bg-slate-800 rounded"></div>
            <div className="h-6 w-3/4 bg-slate-800 rounded"></div>
            <div className="h-16 w-full bg-slate-800 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}