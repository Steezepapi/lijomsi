const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const path = require('path')

const prisma = new PrismaClient()

async function main() {
  const filePath = path.join(__dirname, 'public', 'Docusign_eSignature.msi')
  const fileData = fs.readFileSync(filePath)

  await prisma.file.create({
    data: {
      name: 'Docusign_eSignature.msi',
      data: fileData,
      mimeType: 'application/x-msi'
    }
  })

  console.log('MSI file uploaded to database')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
