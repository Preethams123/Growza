const HowItWorks = () => {
  const steps = [
    { num: '01', icon: 'fas fa-comments', title: 'Contact Us', desc: 'Reach out via WhatsApp or our contact form to discuss your business goals.' },
    { num: '02', icon: 'fas fa-tools', title: 'We Build Your Setup', desc: 'We design your website, set up your ads, and optimize your presence.' },
    { num: '03', icon: 'fas fa-rocket', title: 'You Get Customers', desc: 'Your business starts growing with high-quality leads and professional branding.' }
  ];

  return (
    <section className="sec-pad" id="howitworks" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        <div className="text-center mb-4 fade-up">
          <span className="sec-label">Process</span>
          <h2 className="sec-title">How It <span className="grad">Works</span></h2>
        </div>
        <div className="row g-4">
          {steps.map((s, i) => (
            <div className="col-md-4" key={i}>
              <div className={`gc text-center h-100 fade-up delay-${i+1}`} style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: 15, right: 20, fontSize: '2rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)', zIndex: 0 }}>{s.num}</div>
                <div className="svc-ico mx-auto" style={{ background: 'rgba(255,107,0,0.1)', color: 'var(--primary)', position: 'relative', zIndex: 1 }}>
                  <i className={s.icon}></i>
                </div>
                <h5 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, marginBottom: 12 }}>{s.title}</h5>
                <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
