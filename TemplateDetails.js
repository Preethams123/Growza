const TemplateDetails = ({ template }) => {
  const [copied, setCopied] = React.useState(false);
  const [shareOpen, setShareOpen] = React.useState(false);
  const shareRef = React.useRef(null);

  React.useEffect(() => {
    if (!template) {
      window.location.hash = '#portfolio';
    } else {
      window.scrollTo(0, 0);
    }
  }, [template]);

  // Close share dropdown on outside click
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (shareRef.current && !shareRef.current.contains(e.target)) {
        setShareOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!template) return null;

  const message = `Hello Growza Team! 🚀
I am highly interested in the following template:

*Template Name:* ${template.title}
*Category:* ${template.tag}
*Visual Reference:* ${template.image}

Please let me know the process to deploy this for my business.`;

  const waLink = `https://wa.me/918095283922?text=${encodeURIComponent(message)}`;
  const pageUrl = window.location.href;

  const copyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareEmail = () => {
    window.open(`mailto:?subject=${encodeURIComponent(`Check out: ${template.title}`)}&body=${encodeURIComponent(`I found this template and thought you might like it:\n\n${template.title}\n${pageUrl}`)}`, '_self');
  };

  const shareNative = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: template.title, text: `Check out this template: ${template.title}`, url: pageUrl });
      } catch (e) { /* user cancelled */ }
    } else {
      copyLink();
    }
  };

  return (
    <section style={{ padding: '100px 0 60px', background: 'var(--bg)', minHeight: '100vh', color: '#fff' }}>
      <style>{`
        .share-bar {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0;
          height: 56px;
        }
        .share-trigger {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.05rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 3;
          flex-shrink: 0;
        }
        .share-trigger:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
        }
        .share-trigger.active {
          background: rgba(255,255,255,0.1);
          border-color: rgba(255,255,255,0.2);
        }
        .share-panel {
          display: flex;
          align-items: center;
          gap: 4px;
          height: 48px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          padding: 0 6px;
          position: absolute;
          right: 64px;
          z-index: 2;
          animation: panelSlide 0.35s cubic-bezier(0.2, 1, 0.3, 1);
          backdrop-filter: blur(20px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        @keyframes panelSlide {
          from { opacity: 0; transform: translateX(20px) scale(0.95); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        .share-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: none;
          background: transparent;
          color: var(--muted);
          font-size: 0.95rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          position: relative;
        }
        .share-icon-btn:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
          transform: translateY(-1px);
        }
        .share-icon-btn.copied {
          color: var(--accent);
        }
        .share-tooltip {
          position: absolute;
          bottom: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.85);
          color: #fff;
          padding: 5px 10px;
          border-radius: 8px;
          font-size: 0.7rem;
          font-weight: 600;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.15s;
          letter-spacing: 0.3px;
        }
        .share-icon-btn:hover .share-tooltip,
        .share-icon-btn.copied .share-tooltip {
          opacity: 1;
        }
        .share-divider {
          width: 1px;
          height: 24px;
          background: rgba(255,255,255,0.08);
          margin: 0 2px;
        }
      `}</style>
      <div className="container">
        {/* Back Button */}
        <button 
          onClick={() => window.location.hash = '#portfolio'} 
          style={{ 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid rgba(255,255,255,0.08)', 
            color: '#fff', 
            padding: '10px 24px', 
            borderRadius: '50px', 
            marginBottom: '48px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            fontWeight: 600
          }}
          onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
          onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
        >
          <i className="fas fa-arrow-left"></i> Back to Portfolio
        </button>

        <div className="row g-5">
          {/* Left Side: Image Gallery/Showcase */}
          <div className="col-lg-7 fade-up visible">
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.08)',
              background: '#000',
              aspectRatio: '4/3'
            }}>
              <img 
                src={template.image} 
                alt={template.title} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  opacity: 0.95
                }} 
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(to top, rgba(0,0,0,0.7), transparent)`,
                pointerEvents: 'none'
              }}></div>
            </div>

            <div className="row g-4 mt-2">
              {[1, 2].map((_, idx) => (
                <div className="col-6 fade-up visible delay-1" key={idx}>
                  <div style={{
                    borderRadius: '16px',
                    overflow: 'hidden',
                    aspectRatio: '16/9',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                  }}>
                     <img 
                      src={template.image + `&variant=${idx}`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7) contrast(1.1)' }} 
                      alt="Template detail" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Details */}
          <div className="col-lg-5 fade-up visible delay-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{
                background: template.color,
                color: '#fff',
                padding: '6px 16px',
                borderRadius: '50px',
                fontSize: '0.85rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '1px',
                boxShadow: `0 4px 15px ${template.color}50`
              }}>
                {template.tag}
              </span>
              <span style={{ fontSize: '1.5rem' }}>{template.emoji}</span>
            </div>

            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1, letterSpacing: '-1px' }}>
              {template.title}
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', marginBottom: '32px', lineHeight: 1.6 }}>
              This premium <strong>{template.tag}</strong> framework is engineered for high performance, maximum conversion, and stunning visual appeal. Tailored specifically for the {template.title.split(' ')[0]} industry to give your brand an unfair digital advantage.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '20px', padding: '32px', marginBottom: '40px', boxShadow: 'inset 0 0 20px rgba(255,255,255,0.01)' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-layer-group" style={{ color: template.color }}></i> Architecture Overview
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'rgba(255,255,255,0.85)' }}>
                {[
                  'High-Converting Layout Engine', 
                  'Fully Responsive & Mobile Optimized', 
                  'SEO-Ready Semantic Structure', 
                  'Premium Typography & Color System', 
                  'Frictionless User Experience (UX)'
                ].map((feat, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.05rem' }}>
                    <i className="fas fa-check-circle" style={{ color: template.color, fontSize: '1.1rem' }}></i>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '12px', height: '56px' }}>
              <a href={waLink} target="_blank" rel="noreferrer" style={{
                flex: 1,
                background: template.color,
                color: '#fff',
                border: 'none',
                borderRadius: '16px',
                fontSize: '1.05rem',
                fontWeight: 700,
                boxShadow: `0 10px 30px ${template.color}40`,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }} onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = `0 15px 40px ${template.color}60`; e.currentTarget.style.filter = 'brightness(1.1)'; }} onMouseOut={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = `0 10px 30px ${template.color}40`; e.currentTarget.style.filter = 'brightness(1)'; }}>
                Deploy This Solution <i className="fas fa-rocket" style={{ fontSize: '0.9rem' }}></i>
              </a>

              <div className="share-bar" ref={shareRef}>
                {shareOpen && (
                  <div className="share-panel">
                    <button className={`share-icon-btn ${copied ? 'copied' : ''}`} onClick={copyLink}>
                      <i className={copied ? 'fas fa-check' : 'fas fa-link'}></i>
                      <span className="share-tooltip">{copied ? 'Copied!' : 'Copy link'}</span>
                    </button>
                    <div className="share-divider"></div>
                    <button className="share-icon-btn" onClick={shareEmail}>
                      <i className="fas fa-envelope"></i>
                      <span className="share-tooltip">Email</span>
                    </button>
                    <div className="share-divider"></div>
                    <button className="share-icon-btn" onClick={shareNative}>
                      <i className="fas fa-external-link-alt"></i>
                      <span className="share-tooltip">Share</span>
                    </button>
                  </div>
                )}
                <button 
                  className={`share-trigger ${shareOpen ? 'active' : ''}`}
                  onClick={() => setShareOpen(!shareOpen)}
                >
                  <i className={shareOpen ? 'fas fa-times' : 'fas fa-share-alt'}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
