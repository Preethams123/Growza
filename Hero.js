const Hero = () => {
  const words = ['Digital Assets', 'Conversion Engines', 'Brand Identities', 'SEO Architectures', 'Ad Campaigns'];
  const [wi, setWi] = React.useState(0);
  const galleryRef = React.useRef(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWi(prev => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  const handleMouseMove = React.useCallback((e) => {
    const el = galleryRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const rx = ((e.clientY - cy) / (rect.height / 2)) * -12;
    const ry = ((e.clientX - cx) / (rect.width / 2)) * 12;
    setTilt({ x: rx, y: ry });
  }, []);

  const handleMouseLeave = React.useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <section className="hero-sec" id="home">
      <style>{`
        .hero-right-col { min-height: 480px; }
        @media(max-width:991px){
          .hero-3d-scene { transform: scale(0.85); transform-origin: top center; }
        }
        @media(max-width:767px){
          .hero-right-col { min-height: auto; margin-top: 0 !important; }
          .hero-left { text-align:center; justify-content:center; }
          .hero-left .badge-pill { margin-left:auto; margin-right:auto; }
          .hero-btns-wrap { flex-direction:column; align-items:stretch; }
          .hero-btns-wrap .btn-primary-g,
          .hero-btns-wrap .btn-wa { width:100%; justify-content:center; font-size:1rem; padding:13px; }
          .hero-h1 { margin:10px 0 12px; font-size: 2.2rem; }
          .hero-sub, .hero-desc { font-size:0.95rem; }
          .hero-3d-scene { display: none; }
        }
        
        /* 3D Text Roller */
        .word-slider-wrap {
          display: inline-grid;
          height: 1.2em;
          vertical-align: bottom;
          position: relative;
          color: var(--primary);
          text-shadow: 0 0 15px rgba(255,107,0,0.5);
          font-weight: 800;
          perspective: 600px;
        }
        .slide-word {
          grid-area: 1/1;
          transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.8s ease;
          transform-origin: center;
        }
        .slide-word.active { transform: translateY(0) rotateX(0deg); opacity: 1; z-index: 2; }
        .slide-word.prev { transform: translateY(-80%) rotateX(-90deg); opacity: 0; z-index: 1; }
        .slide-word.next { transform: translateY(80%) rotateX(90deg); opacity: 0; z-index: 1; }
        
        /* 3D Scene */
        .hero-3d-scene {
          perspective: 1000px;
          width: 100%;
          height: 100%;
          position: relative;
        }
        .hero-3d-body {
          width: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out;
          will-change: transform;
        }
        
        /* Floating cards */
        .h-card {
          position: absolute;
          border-radius: 20px;
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(255,255,255,0.12);
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.6);
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
          will-change: transform;
        }
        .h-card:hover {
          border-color: var(--primary);
          box-shadow: 0 35px 70px rgba(0,0,0,0.8), 0 0 30px rgba(255,107,0,0.15);
        }
        .h-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,15,28,0.9) 0%, transparent 55%);
          pointer-events: none;
        }
        .h-card-tag {
          position: absolute;
          bottom: 18px;
          left: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: 10px;
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
        }
        
        .h-card-main {
          width: 75%;
          aspect-ratio: 16/10;
          top: 0;
          right: 0;
          z-index: 3;
          transform: translateZ(60px);
        }
        .h-card-mid {
          width: 60%;
          aspect-ratio: 4/3;
          bottom: 10px;
          left: -5%;
          z-index: 2;
          transform: translateZ(30px);
        }
        .h-card-back {
          width: 45%;
          aspect-ratio: 1/1;
          top: 15%;
          right: -8%;
          z-index: 1;
          transform: translateZ(0px);
        }
        
        /* Floating stat pill */
        .h-stat-pill {
          position: absolute;
          bottom: -10px;
          left: 10%;
          z-index: 10;
          transform: translateZ(80px);
          background: rgba(15,22,41,0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 60px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.6);
          animation: pillFloat 5s ease-in-out infinite;
        }
        .h-stat-pill .avatars { display: flex; }
        .h-stat-pill .avatars img {
          width: 30px; height: 30px;
          border-radius: 50%;
          border: 2px solid rgba(15,22,41,0.9);
          margin-left: -10px;
          object-fit: cover;
        }
        .h-stat-pill .avatars img:first-child { margin-left: 0; }
        
        /* Ambient glow */
        .h-ambient {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) translateZ(-20px);
          width: 90%;
          height: 90%;
          background: radial-gradient(circle, rgba(255,107,0,0.12) 0%, rgba(59,130,246,0.08) 40%, transparent 70%);
          filter: blur(50px);
          pointer-events: none;
          animation: pulseAmb 6s ease-in-out infinite;
        }
        @keyframes pulseAmb {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes pillFloat {
          0%, 100% { transform: translateZ(80px) translateY(0); }
          50% { transform: translateZ(80px) translateY(-8px); }
        }
      `}</style>
      <div className="shape s1"></div>
      <div className="shape s2"></div>
      <div className="shape s3"></div>
      <div className="container h-100 d-flex align-items-center">
        <div className="row w-100 align-items-center">
          <div className="col-lg-6 hero-left position-relative" style={{ zIndex: 5 }}>
            <div className="badge-pill mb-3 fade-up" style={{ background: 'rgba(59,130,246,0.1)', borderColor: 'rgba(59,130,246,0.3)', color: '#3B82F6' }}>
              <span className="dot-live" style={{ background: '#3B82F6' }}></span>
              Elevate Your Agency Standard
            </div>
            <h1 className="hero-h1 fade-up delay-1" style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>Architecting Digital Dominance with <span className="grad">Premium Solutions</span></h1>
            <p className="hero-sub fade-up delay-2">
              We don't just build{' '}
              <span className="word-slider-wrap mx-1">
                {words.map((w, i) => (
                  <span key={i} className={`slide-word ${i === wi ? 'active' : i < wi ? 'prev' : 'next'}`}>
                    {w}
                  </span>
                ))}
              </span>
              {' '}— we engineer high-converting digital ecosystems for visionary brands.
            </p>
            <p className="hero-desc fade-up delay-3 mt-3" style={{ opacity: 0.8 }}>Elite UI/UX • Advanced SEO • Viral Campaigns • Strategic Growth</p>
            <div className="d-flex flex-wrap gap-3 mt-4 hero-btns-wrap fade-up delay-3">
              <button className="btn-primary-g" onClick={()=>document.getElementById('services').scrollIntoView({behavior:'smooth'})}>
                Explore Capabilities <i className="fas fa-arrow-right ms-2"></i>
              </button>
              <a href="https://wa.me/918095283922?text=Hello%20Growza!%20I%20would%20like%20to%20discuss%20an%20elite%20digital%20transformation%20for%20my%20business." target="_blank" rel="noreferrer" className="btn-wa">
                <i className="fab fa-whatsapp me-2"></i> Request Consultation
              </a>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0 fade-up delay-2 hero-right-col">
            <div 
              className="hero-3d-scene" 
              ref={galleryRef} 
              onMouseMove={handleMouseMove} 
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className="hero-3d-body" 
                style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
              >
                <div className="h-ambient"></div>

                <div className="h-card h-card-main" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80)' }}>
                  <div className="h-card-overlay"></div>
                  <div className="h-card-tag" style={{ background: 'rgba(34,197,94,0.25)' }}><i className="fas fa-chart-line" style={{ color: '#22C55E' }}></i> SEO Dashboard</div>
                </div>

                <div className="h-card h-card-mid" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80)' }}>
                  <div className="h-card-overlay"></div>
                  <div className="h-card-tag" style={{ background: 'rgba(59,130,246,0.25)' }}><i className="fas fa-desktop" style={{ color: '#3B82F6' }}></i> Website Design</div>
                </div>

                <div className="h-card h-card-back" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80)' }}>
                  <div className="h-card-overlay"></div>
                  <div className="h-card-tag" style={{ background: 'rgba(225,48,108,0.25)' }}><i className="fab fa-instagram" style={{ color: '#E1306C' }}></i> Instagram</div>
                </div>

                <div className="h-stat-pill">
                  <div className="avatars">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="c" />
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="c" />
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="c" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.85rem', lineHeight: 1 }}>250+</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.5px', textTransform: 'uppercase', marginTop: 2 }}>Global Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
