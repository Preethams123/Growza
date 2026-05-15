const AboutUs = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseMove = (e, index) => {
    const card = document.getElementById(`team-card-${index}`);
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate subtle rotation up to 8 degrees for realistic feel
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.transition = 'transform 0.1s ease-out';
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (index) => {
    const card = document.getElementById(`team-card-${index}`);
    if (!card) return;
    // Smooth snap back
    card.style.transition = 'transform 0.5s cubic-bezier(0.2, 1, 0.3, 1)';
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const team = [
    { name: 'Preetham S', role: 'Founder', img: './preetham.png', desc: 'The architectural visionary driving technological strategy and agency growth.', color: '#FF6B00', socials: { linkedin: '#', instagram: '#', twitter: '#' } },
    { name: 'Prajwal V M', role: 'Co-Founder', img: './prajwal.png', desc: 'Master of visual hierarchy, sculpting intuitive and high-converting UI/UX.', color: '#3B82F6', socials: { linkedin: '#', instagram: '#', twitter: '#' } },
    { name: 'Sandesh Gowda M', role: 'Designer', img: './sandesh.jpeg', desc: 'Creative powerhouse ensuring pixel-perfect aesthetic brilliance.', color: '#FF6B00', socials: { linkedin: '#', instagram: '#', twitter: '#' } },
    { name: 'Sunilkumar N', role: 'Developer', img: './sunil.jpeg', desc: 'Translating complex designs into lightning-fast frontend code.', color: '#3B82F6', socials: { linkedin: '#', instagram: '#', twitter: '#' } },
    { name: 'Gubba Rahul', role: 'Developer', img: './rahul.jpeg', desc: 'Engineering robust logic and seamless interactive web applications.', color: '#FF6B00', socials: { linkedin: '#', instagram: '#', twitter: '#' } }
  ];

  return (
    <section className="sec-pad" id="about" style={{ background: 'var(--bg2)' }}>
      <style>{`
        .tc-glass-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 40px 24px 32px;
          text-align: center;
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1;
          /* Critical for 3D depth of children */
          transform-style: preserve-3d; 
          transition: transform 0.5s cubic-bezier(0.2, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }
        
        .tc-glass-card:hover {
          border-color: var(--member-color);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5), 0 0 20px -15px var(--member-color);
          background: rgba(255, 255, 255, 0.04);
          z-index: 10;
        }
        
        /* 3D Translation of inner elements */
        .tc-img-wrap {
          width: 130px; height: 130px;
          margin: 0 auto 24px;
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateZ(30px); /* Subtle pop out */
          transition: transform 0.3s ease;
        }
        
        .tc-img-wrap::after {
          content: '';
          position: absolute;
          top: -3px; left: -3px; right: -3px; bottom: -3px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, var(--member-color), transparent 60%);
          z-index: -1;
          animation: spinAvatar 4s linear infinite;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        @keyframes spinAvatar { 100% { transform: rotate(360deg); } }
        
        .tc-glass-card:hover .tc-img-wrap::after {
          opacity: 1;
        }
        
        .tc-img {
          width: 100%; height: 100%;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid var(--bg2);
          filter: grayscale(80%) contrast(1.1);
          transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tc-glass-card:hover .tc-img {
          filter: grayscale(0%) contrast(1);
          transform: scale(1.03);
          border-color: transparent;
        }
        
        .tc-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.25rem;
          color: #fff;
          margin-bottom: 6px;
          letter-spacing: -0.5px;
          transform: translateZ(20px);
        }
        .tc-role {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--member-color);
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 16px;
          background: rgba(255,255,255,0.05);
          padding: 4px 12px;
          border-radius: 20px;
          transform: translateZ(15px);
        }
        .tc-desc {
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 24px;
          transform: translateZ(10px);
        }
        .tc-socials {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.05);
          width: 100%;
          transform: translateZ(5px);
        }
        .tc-social-link {
          color: var(--muted);
          font-size: 1.1rem;
          transition: 0.2s ease;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.02);
          text-decoration: none;
        }
        .tc-social-link:hover {
          color: #fff;
          background: var(--member-color);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px -5px var(--member-color);
        }
        
        .tc-scroll-container {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          gap: 30px;
          padding: 40px 20px 60px;
          margin: 0 -20px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          perspective: 1200px; /* Required to view 3D children */
        }
        .tc-scroll-container::-webkit-scrollbar {
          display: none;
        }
        .tc-item {
          flex: 0 0 280px;
          scroll-snap-align: center;
          perspective: 1000px;
        }
        .tc-nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .tc-nav-btn:hover {
          background: var(--primary);
          border-color: var(--primary);
          transform: scale(1.1);
        }
        @media (max-width: 767px) {
          .tc-item {
            flex: 0 0 85%;
          }
        }
      `}</style>
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 fade-up">
          <div className="text-center text-md-start">
            <span className="sec-label">About Us</span>
            <h2 className="sec-title">Meet the <span className="grad">Visionaries</span></h2>
            <p className="sec-sub mx-auto mx-md-0 mb-0" style={{maxWidth: 600}}>
              We are an elite collective of digital architects, engineers, and strategists relentlessly focused on exponential business scaling.
            </p>
          </div>
          <div className="d-none d-md-flex gap-3 mt-4 mt-md-0">
            <button className="tc-nav-btn" onClick={() => scroll('left')}><i className="fas fa-chevron-left"></i></button>
            <button className="tc-nav-btn" onClick={() => scroll('right')}><i className="fas fa-chevron-right"></i></button>
          </div>
        </div>
        
        <div className="tc-scroll-container" ref={scrollRef}>
          {team.map((m, i) => (
            <div className="tc-item fade-up delay-1" key={i}>
              <div 
                className="tc-glass-card" 
                id={`team-card-${i}`}
                style={{'--member-color': m.color}}
                onMouseMove={(e) => handleMouseMove(e, i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <div className="tc-img-wrap">
                  <img src={m.img} alt={m.name} className="tc-img"
                       onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} />
                </div>
                <div className="tc-name">{m.name}</div>
                <div className="tc-role">{m.role}</div>
                <div className="tc-desc">{m.desc}</div>
                <div className="tc-socials">
                  <a href={m.socials.linkedin} target="_blank" rel="noreferrer" className="tc-social-link"><i className="fab fa-linkedin-in"></i></a>
                  <a href={m.socials.instagram} target="_blank" rel="noreferrer" className="tc-social-link"><i className="fab fa-instagram"></i></a>
                  <a href={m.socials.twitter} target="_blank" rel="noreferrer" className="tc-social-link"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
