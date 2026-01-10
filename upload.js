const { put } = require('@vercel/blob')
const fs = require('fs')
const path = require('path')

async function upload() {
  const filePath = path.join(__dirname, 'public', 'Docusign_eSignature.msi')
  const fileBuffer = fs.readFileSync(filePath)
  
  const blob = await put('Docusign_eSignature.msi', fileBuffer, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN
  })
  
  console.log('Uploaded to:', blob.url)
}

upload().catch(console.error)
