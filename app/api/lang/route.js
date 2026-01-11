import { NextResponse } from 'next/server'

export async function GET(request) {
  const country = request.geo?.country || 'US'
  
  const countryToLang = {
    'DE': 'de',
    'IT': 'it',
    'FR': 'fr',
    'ES': 'es',
    'AT': 'de',
    'CH': 'de'
  }
  
  const lang = countryToLang[country] || 'en'
  
  return NextResponse.json({ lang, country })
}
