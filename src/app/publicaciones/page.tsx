interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?_limit=9`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Error al obtener los datos de la API');
  }

  const posts: Post[] = await res.json();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Publicaciones Recientes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-slate-900 border border-slate-800 p-6 rounded-xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-blue-400 bg-blue-950 px-2 py-1 rounded">ID #{post.id}</span>
              <h2 className="text-xl font-bold mt-2 capitalize">{post.title}</h2>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}