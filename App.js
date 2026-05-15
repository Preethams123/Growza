const Splash = () => {
  const [visible, setVisible] = React.useState(true);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: '#0a0f1c',
      zIndex: 999999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      animation: 'fadeOutSplash 0.3s ease-in-out 0.9s forwards',
      willChange: 'opacity, visibility'
    }}>
      <style>{`
        @keyframes fadeOutSplash { to { opacity: 0; visibility: hidden; } }
        @keyframes pulseLogoSplash {
          0%, 100% { filter: drop-shadow(0 0 15px rgba(255,107,0,0.3)); }
          50% { filter: drop-shadow(0 0 30px rgba(59,130,246,0.5)); }
        }
        .splash-logo-box {
          animation: pulseLogoSplash 1.5s infinite ease-in-out;
          will-change: filter;
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px) scale(0.8); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px) scale(0.8); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        .splash-shape-1 { animation: slideInLeft 0.4s cubic-bezier(0.25, 1, 0.5, 1) forwards; will-change: transform, opacity; }
        .splash-shape-2 { animation: slideInRight 0.4s cubic-bezier(0.25, 1, 0.5, 1) 0.1s forwards; opacity: 0; will-change: transform, opacity; }
        @keyframes fadeInUpSplash { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      <div className="splash-logo-box">
        <svg width="100" height="100" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="splash-shape-1" d="M 31.31 8.69 A 16 16 0 1 0 31.31 31.31 A 4 4 0 0 1 25.66 25.66 A 8 8 0 1 1 25.66 14.34 A 4 4 0 0 1 31.31 8.69 Z" fill="url(#grad1Splash)"/>
          <rect className="splash-shape-2" x="18" y="16" width="18" height="8" rx="4" fill="url(#grad2Splash)"/>
          <defs>
            <linearGradient id="grad1Splash" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF6B00"/>
              <stop offset="1" stopColor="#FF3300"/>
            </linearGradient>
            <linearGradient id="grad2Splash" x1="18" y1="16" x2="36" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6"/>
              <stop offset="1" stopColor="#1D4ED8"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h2 style={{marginTop: 24, fontFamily: 'Space Grotesk', fontWeight: 800, background: 'linear-gradient(90deg, #FFFFFF, #FF6B00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '3px', opacity: 0, animation: 'fadeInUpSplash 0.3s ease 0.3s forwards', willChange: 'opacity, transform'}}>
        GROWZA
      </h2>
    </div>
  );
};

const App = () => {
  const [route, setRoute] = React.useState(window.location.hash || '#home');

  React.useEffect(() => {
    const handleHash = () => setRoute(window.location.hash || '#home');
    window.addEventListener('hashchange', handleHash);
    
    // Global Scroll Animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    const observeElements = () => {
      document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    };

    observeElements();
    // Re-observe on route change or dynamic content
    const timer = setTimeout(observeElements, 500);

    return () => {
      window.removeEventListener('hashchange', handleHash);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [route]);

  return (
    <React.Fragment>
      <Splash />
      <Navbar />
      
      {route === '#privacy' ? (
        <PrivacyPolicy />
      ) : route === '#template' ? (
        <TemplateDetails template={window.selectedTemplate} />
      ) : route === '#portfolio' ? (
        <Portfolio />
      ) : (
        <>
          <Hero />
          <AboutUs />
          <Services />
          <section className="sec-pad text-center" style={{ background: 'var(--bg)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container fade-up">
              <span className="sec-label">Portfolio</span>
              <h2 className="sec-title mt-2">Explore Our <span className="grad">Template Library</span></h2>
              <p className="sec-sub mx-auto mb-5" style={{ maxWidth: '600px' }}>Discover over 300+ high-converting, premium templates across Website Design, SEO, Instagram Ads, and Business Growth.</p>
              <button onClick={() => { window.scrollTo(0,0); window.location.hash = '#portfolio'; }} className="btn" style={{ background: 'var(--primary)', color: '#fff', padding: '16px 36px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 700, boxShadow: '0 10px 30px rgba(59,130,246,0.3)', transition: 'transform 0.3s' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-3px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}>
                View All Templates <i className="fas fa-arrow-right ms-2"></i>
              </button>
            </div>
          </section>
          <HowItWorks />
          <Contact />
        </>
      )}

      <Footer />
      
      <a href="https://wa.me/918095283922?text=OFFICIAL%20INQUIRY%20%7C%20GROWZA%0A%0AHello%20Team%2C%0A%0AI%20am%20visiting%20your%20digital%20platform%20and%20would%20like%20to%20formally%20request%20a%20consultation%20regarding%20business%20growth%20solutions.%0A%0AThank%20you." target="_blank" rel="noreferrer" style={{position:'fixed',bottom:24,right:24,zIndex:9998,width:56,height:56,borderRadius:'50%',background:'#25D366',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.6rem',color:'#fff',textDecoration:'none',boxShadow:'0 4px 20px rgba(37,211,102,.5)',transition:'all 0.3s'}} onMouseOver={e=>{e.currentTarget.style.transform='scale(1.1)';e.currentTarget.style.boxShadow='0 8px 30px rgba(37,211,102,.6)';}} onMouseOut={e=>{e.currentTarget.style.transform='scale(1)';e.currentTarget.style.boxShadow='0 4px 20px rgba(37,211,102,.5)';}}>
        <i className="fab fa-whatsapp"></i>
      </a>
      <CookieConsent />
    </React.Fragment>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
