const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const go = id => {
    // Check if we are on a sub-page like #portfolio or #template
    const isSubPage = window.location.hash && window.location.hash !== '#home' && window.location.hash !== '#';
    
    if (id === 'home') {
      window.location.hash = '#home';
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else if (isSubPage) {
      window.location.hash = '#home';
      // Wait for React to re-render the home components, then scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if(el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }, 150);
    } else {
      const el = document.getElementById(id);
      if(el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({top: y, behavior: 'smooth'});
      }
    }

    // Close mobile navbar
    const menu = document.getElementById('nm');
    if(menu && menu.classList.contains('show')) {
      const toggler = document.querySelector('.navbar-toggler');
      if(toggler) toggler.click();
    }
  };
  return (
    <nav className={`navbar navbar-expand-lg fixed-top gn ${scrolled?'gn-scrolled':''}`}>
      <style>{`
        .gn-scrolled { background: rgba(7,9,15,0.95) !important; box-shadow: 0 1px 0 var(--border), 0 8px 30px rgba(0,0,0,0.4); }
        .nm-mobile-link { display:flex; align-items:center; padding:14px 0; border-bottom:1px solid var(--border); color:var(--muted) !important; font-size:1rem; font-weight:500; width:100%; text-align:left; transition: color 0.2s; }
        .nm-mobile-link:hover { color:#fff !important; }
        @media(max-width:991px){
          .navbar-collapse { background:rgba(7,9,15,0.98); backdrop-filter:blur(20px); padding:12px 20px 20px; border:1px solid var(--border); margin-top:8px; border-radius:16px; box-shadow: 0 20px 40px rgba(0,0,0,0.5); }
          .nav-item:last-child .nm-mobile-link { border-bottom:none; }
          .ms-2.nav-item { margin-top:12px; }
          .btn-wa-sm { display:block; text-align:center; padding:12px; font-size:1rem; border-radius:12px; }
        }
      `}</style>
      <div className="container">
        <a className="navbar-brand brand d-flex align-items-center" href="#" onClick={()=>go('home')} style={{gap: '8px'}}>
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 31.31 8.69 A 16 16 0 1 0 31.31 31.31 A 4 4 0 0 1 25.66 25.66 A 8 8 0 1 1 25.66 14.34 A 4 4 0 0 1 31.31 8.69 Z" fill="url(#brandGrad1)"/>
            <rect x="18" y="16" width="18" height="8" rx="4" fill="url(#brandGrad2)"/>
            <defs>
              <linearGradient id="brandGrad1" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF6B00"/>
                <stop offset="1" stopColor="#FF3300"/>
              </linearGradient>
              <linearGradient id="brandGrad2" x1="18" y1="16" x2="36" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6"/>
                <stop offset="1" stopColor="#1D4ED8"/>
              </linearGradient>
            </defs>
          </svg>
          <span style={{letterSpacing: '-0.5px', background: 'linear-gradient(90deg, #FFFFFF, #FF6B00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold'}}>Growza</span>
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#nm" style={{boxShadow:'none'}}>
          <div style={{width:24,height:2,background:'#fff',marginBottom:5}}></div>
          <div style={{width:18,height:2,background:'#fff',marginBottom:5,marginLeft:'auto'}}></div>
          <div style={{width:24,height:2,background:'#fff'}}></div>
        </button>
        <div className="collapse navbar-collapse" id="nm">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
            {[['Home','home'],['About','about'],['Services','services'],['Contact','contact']].map(([l,id])=>(
              <li className="nav-item" key={id}>
                <button className="nav-link btn btn-link nm-mobile-link" onClick={()=>go(id)}>{l}</button>
              </li>
            ))}
            <li className="nav-item ms-lg-2">
              <a href="https://wa.me/918095283922?text=OFFICIAL%20INQUIRY%20%7C%20GROWZA%0A%0AHello%20Team%2C%0A%0AI%20would%20like%20to%20formally%20request%20information%20regarding%20your%20business%20growth%20solutions.%0A%0AThank%20you." target="_blank" rel="noreferrer" className="btn-wa-sm">
                <i className="fab fa-whatsapp me-1"></i> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
