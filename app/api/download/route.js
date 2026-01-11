import clientPromise from '../../../lib/mongodb'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const client = await clientPromise
  const db = client.db('msi_files')
  const file = await db.collection('files').findOne({ name: 'Docusign_eSignature.msi' })
  
  if (!file) {
    return NextResponse.json({ error: 'File not found' }, { status: 404 })
  }

  return new NextResponse(file.data.buffer, {
    headers: {
      'Content-Type': 'application/x-msi',
      'Content-Disposition': 'attachment; filename="Docusign_eSignature.msi"'
    }
  })
}
