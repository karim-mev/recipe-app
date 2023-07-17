import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/likes/records', {
    next: { revalidate: 1 },
  })
  const data = await res.json()
 
  return NextResponse.json(data)
}