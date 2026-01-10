export default function Home() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <img src="https://docucdn-a.akamaihd.net/olive/images/2.70.0/global-assets/ds-logo-default.svg" alt="DocuSign" style={{ width: '200px', marginBottom: '2rem' }} />
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Sign Your Document with DocuSign</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px' }}>
        Please review the document below. Once you're ready, you can download it or sign directly with DocuSign.
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
          Sign Document with DocuSign
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
          Download PDF
        </a>
      </div>
      <p style={{ fontSize: '0.9rem', color: '#666' }}>
        If you have any questions, please contact our support team at <a href="mailto:support@docusign.com" style={{ color: '#0070f3' }}>support@docusign.com</a>.
      </p>
    </main>
  );
}
