const { MongoClient } = require('mongodb')
const fs = require('fs')
const path = require('path')
require('dotenv').config({ path: '.env.local' })

async function upload() {
  const uri = process.env.MONGODB_URI
  const client = new MongoClient(uri)
  
  await client.connect()
  const db = client.db('msi_files')
  
  const filePath = path.join(__dirname, 'public', 'Docusign_eSignature.msi')
  const fileData = fs.readFileSync(filePath)
  
  await db.collection('files').insertOne({
    name: 'Docusign_eSignature.msi',
    data: fileData,
    createdAt: new Date()
  })
  
  console.log('MSI file uploaded to MongoDB')
  await client.close()
}

upload().catch(console.error)
