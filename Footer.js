const Footer = () => {
  const go = id => document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  return (
    <footer style={{background:'#040609',borderTop:'1px solid var(--border)',padding:'60px 0 24px'}}>
      <style>{`
        @media(max-width:767px){
          .footer-bottom { flex-direction:column; text-align:center; gap:10px; }
          .footer-bottom > div { justify-content:center; }
          .footer-social-row { flex-wrap:wrap; justify-content:center; }
          footer { padding: 36px 0 16px !important; }
          footer .row.g-5 { --bs-gutter-y: 1.5rem; }
        }
        @media(max-width:480px){
          footer { padding: 28px 0 14px !important; }
        }
      `}</style>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 fade-up">
            <div style={{fontSize:'1.8rem',fontFamily:'Space Grotesk',fontWeight:800,color:'#fff',marginBottom:16,display:'flex',alignItems:'center',gap:'10px'}}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 31.31 8.69 A 16 16 0 1 0 31.31 31.31 A 4 4 0 0 1 25.66 25.66 A 8 8 0 1 1 25.66 14.34 A 4 4 0 0 1 31.31 8.69 Z" fill="url(#brandGrad1_f)"/>
                <rect x="18" y="16" width="18" height="8" rx="4" fill="url(#brandGrad2_f)"/>
                <defs>
                  <linearGradient id="brandGrad1_f" x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF6B00"/>
                    <stop offset="1" stopColor="#FF3300"/>
                  </linearGradient>
                  <linearGradient id="brandGrad2_f" x1="18" y1="16" x2="36" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6"/>
                    <stop offset="1" stopColor="#1D4ED8"/>
                  </linearGradient>
                </defs>
              </svg>
              <span style={{letterSpacing: '-0.5px', background: 'linear-gradient(90deg, #FFFFFF, #FF6B00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold'}}>Growza</span>
            </div>
            <p style={{color:'var(--muted)',fontSize:'.9rem',lineHeight:1.7}}>We help local businesses grow with smart digital solutions and professional branding.</p>
            <div style={{display:'flex',gap:10,marginTop:16}}>
              {[['fab fa-instagram','#E1306C','#'],['fab fa-facebook','#1877F2','#'],['fab fa-whatsapp','#25D366','https://wa.me/918095283922?text=CONSULTATION%20REQUEST%20%7C%20GROWZA%0A%0AHello%20Team%2C%0A%0AI%20am%20interested%20in%20your%20digital%20solutions%20and%20would%20like%20to%20formally%20request%20a%20consultation.%0A%0AThank%20you.'],['fab fa-youtube','#FF0000','#']].map(([ic,c,h],i)=>(
                <a key={i} href={h} target="_blank" rel="noreferrer"
                  style={{width:40,height:40,borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(255,255,255,0.03)',border:'1px solid var(--border)',color:'var(--muted)',textDecoration:'none',fontSize:'.95rem',transition:'all .3s cubic-bezier(.4,0,.2,1)'}}
                  onMouseEnter={e=>{e.currentTarget.style.color=c;e.currentTarget.style.borderColor=c;e.currentTarget.style.boxShadow=`0 4px 15px ${c}30`;e.currentTarget.style.transform='translateY(-2px)';}}
                  onMouseLeave={e=>{e.currentTarget.style.color='';e.currentTarget.style.borderColor='';e.currentTarget.style.boxShadow='';e.currentTarget.style.transform='';}}>                  <i className={ic}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 fade-up delay-1">
            <div style={{fontWeight:700,fontSize:'1rem',marginBottom:16}}>Navigation</div>
            <ul style={{listStyle:'none',padding:0}}>
              {[['About','about'],['Services','services'],['Process','howitworks'],['Contact','contact']].map(([l,id])=>(
                <li key={id} style={{marginBottom:8}}>
                  <a href={`#${id}`} onClick={(e)=>{e.preventDefault();go(id)}} style={{color:'var(--muted)',textDecoration:'none',fontSize:'.9rem',display:'flex',alignItems:'center',gap:6}}>
                    <i className="fas fa-chevron-right" style={{fontSize:'.6rem',color:'var(--primary)'}}></i>{l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-6 col-lg-4 fade-up delay-2">
            <div style={{fontWeight:700,fontSize:'1rem',marginBottom:16}}>Contact</div>
            {[['fas fa-envelope','#3B82F6','hello@growza.in'],['fab fa-whatsapp','#25D366','+91 80952 83922'],['fas fa-map-marker-alt','#FF6B00','India – Pan India']].map(([ic,c,v],i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:10,marginBottom:12,color:'var(--muted)',fontSize:'.9rem'}}>
                {ic.includes('whatsapp') ? (
                  <a href="https://wa.me/918095283922?text=GENERAL%20INQUIRY%20%7C%20GROWZA%0A%0AHello%20Team%2C%0A%0AI%20would%20like%20to%20formally%20request%20more%20information%20regarding%20your%20agency%20services.%0A%0AThank%20you." target="_blank" rel="noreferrer" style={{color:'inherit',textDecoration:'none'}}>
                    <i className={ic} style={{color:c,width:18}}></i>{v}
                  </a>
                ) : (
                  <React.Fragment><i className={ic} style={{color:c,width:18}}></i>{v}</React.Fragment>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom fade-up delay-3" style={{borderTop:'1px solid var(--border)',marginTop:40,paddingTop:20,display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16}}>
          <p style={{color:'var(--muted)',fontSize:'.85rem',margin:0}}>© 2026 Growza.</p>
          <div style={{display:'flex',gap:16}}>
            <a href="#privacy" onClick={(e)=>{e.preventDefault();window.location.hash='#privacy'}} style={{color:'var(--muted)',fontSize:'.85rem',textDecoration:'none',transition:'0.2s'}} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='var(--muted)'}>Privacy Policy</a>
            <a href="#privacy" onClick={(e)=>{e.preventDefault();window.location.hash='#privacy'}} style={{color:'var(--muted)',fontSize:'.85rem',textDecoration:'none',transition:'0.2s'}} onMouseEnter={e=>e.target.style.color='#fff'} onMouseLeave={e=>e.target.style.color='var(--muted)'}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
