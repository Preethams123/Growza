const CookieConsent = () => {
  const [visible, setVisible] = React.useState(false);
  const [closing, setClosing] = React.useState(false);

  React.useEffect(() => {
    const accepted = localStorage.getItem('growza_cookies');
    if (!accepted) {
      // Show after a slight delay so it doesn't block the first paint
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = (type) => {
    localStorage.setItem('growza_cookies', type);
    setClosing(true);
    setTimeout(() => setVisible(false), 400);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 99999,
      padding: '0 16px 16px',
      pointerEvents: 'none',
      animation: closing ? 'cookieOut 0.4s ease forwards' : 'cookieIn 0.5s cubic-bezier(0.2, 1, 0.3, 1)'
    }}>
      <style>{`
        @keyframes cookieIn {
          from { opacity: 0; transform: translateY(100%); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes cookieOut {
          from { opacity: 1; transform: translateY(0); }
          to   { opacity: 0; transform: translateY(100%); }
        }
      `}</style>
      <div style={{
        maxWidth: '480px',
        margin: '0 auto',
        background: 'rgba(12,17,32,0.95)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '24px',
        boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
        pointerEvents: 'auto',
        color: '#fff'
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12, flexShrink: 0,
            background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '1.1rem', color: 'var(--primary)'
          }}>
            <i className="fas fa-shield-alt"></i>
          </div>
          <div>
            <h6 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, margin: '0 0 6px', fontSize: '0.95rem' }}>We respect your privacy</h6>
            <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
              We use cookies to enhance your experience, analyze site traffic, and serve relevant content. 
              By continuing, you agree to our <a href="#privacy" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }} onClick={() => { accept('all'); window.location.hash = '#privacy'; }}>Privacy Policy</a>.
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={() => accept('essential')} style={{
            flex: 1, padding: '10px', borderRadius: '12px', fontSize: '0.82rem', fontWeight: 700,
            background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff', cursor: 'pointer', transition: 'all 0.2s'
          }}
          onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >
            Essential Only
          </button>
          <button onClick={() => accept('all')} style={{
            flex: 1, padding: '10px', borderRadius: '12px', fontSize: '0.82rem', fontWeight: 700,
            background: 'var(--primary)', border: 'none',
            color: '#fff', cursor: 'pointer', transition: 'all 0.2s',
            boxShadow: '0 4px 15px rgba(255,107,0,0.2)'
          }}
          onMouseOver={e => { e.currentTarget.style.filter = 'brightness(1.1)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseOut={e => { e.currentTarget.style.filter = 'brightness(1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};
