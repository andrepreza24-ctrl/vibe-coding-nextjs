import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    totalPosts: 100,
    activeUsers: 10,
    serverStatus: 'Operativo',
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data);
}