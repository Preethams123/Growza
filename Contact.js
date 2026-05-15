const Contact = () => {
  const [form,setForm] = React.useState({name:'',phone:'',service:'',msg:''});
  const [errs,setErrs] = React.useState({});
  const [done,setDone] = React.useState(false);
  const set = (k,v) => { setForm(f=>({...f,[k]:v})); setErrs(e=>({...e,[k]:''})); };
  const submit = ev => {
    ev.preventDefault();
    const e={};
    if(!form.name.trim()) e.name='Name required';
    if(!/^\d{10}$/.test(form.phone)) e.phone='Enter valid 10-digit number';
    if(!form.service) e.service='Select a service';
    if(Object.keys(e).length){setErrs(e);return;}
    
    // Redirect to WhatsApp with form data
    const message = `OFFICIAL%20INQUIRY%20%7C%20GROWZA%0A%0AHello%20Team%20Growza%2C%0A%0AI%20would%20like%20to%20formally%20request%20a%20business%20consultation%20regarding%20the%20following%3A%0A%0A---%20Client%20Profile%20---%0AName%3A%20${form.name}%0AContact%3A%20${form.phone}%0AObjective%3A%20${form.service}%0AAdditional%20Brief%3A%20${form.msg || 'N/A'}%0A%0AInquiry%20via%20Growza%20Digital`;
    window.open(`https://wa.me/918095283922?text=${message}`, '_blank');
    
    setDone(true);
  };
  return (
    <section className="sec-pad" id="contact" style={{background:'linear-gradient(135deg,rgba(59,130,246,.05),rgba(255,107,0,.05))'}}>
      <div className="container">
        <div className="text-center mb-4">
          <span className="sec-label">Contact</span>
          <h2 className="sec-title">Let's <span className="grad">Grow Together</span></h2>
          <p className="sec-sub mx-auto">Fill the form or WhatsApp us directly — we reply within 2 hours.</p>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-5">
            <div className="gc">
              <h5 style={{fontFamily:'Space Grotesk',fontWeight:700,marginBottom:20}}>Contact Info</h5>
              {[
                ['fas fa-map-marker-alt','Location','India – Serving Nationwide','#FF6B00'],
                ['fab fa-whatsapp','WhatsApp','+91 80952  83922','#25D366'],
                ['fas fa-envelope','Email','hello@growza.in','#3B82F6']
              ].map(([ic,l,v,c],i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:14,padding:'14px',background:'var(--glass)',border:'1px solid var(--border)',borderRadius:12,marginBottom:12}}>
                  <div style={{width:40,height:40,borderRadius:10,background:`${c}15`,display:'flex',alignItems:'center',justifyContent:'center',color:c,fontSize:'1.1rem'}}>
                    <i className={ic}></i>
                  </div>
                  <div><div style={{fontSize:'.75rem',color:'var(--muted)',fontWeight:600}}>{l}</div><div style={{fontWeight:600}}>{v}</div></div>
                </div>
              ))}
              <a href="https://wa.me/918095283922?text=Hello%20Growza!%20I%20am%20interested%20in%20growing%20my%20business" target="_blank" rel="noreferrer" className="btn-wa d-block text-center mt-3" style={{borderRadius:12,padding:14,textDecoration:'none'}}>
                <i className="fab fa-whatsapp me-2"></i>Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="gc">
              {done?(
                <div className="text-center py-4">
                  <div style={{fontSize:'3.5rem',marginBottom:12}}>🎉</div>
                  <h5 style={{fontFamily:'Space Grotesk',fontWeight:700}}>Message Received!</h5>
                  <p style={{color:'var(--muted)'}}>We have redirected you to WhatsApp, but here is a quick reply from our side:</p>
                  
                  <div className="text-start p-4 mx-auto mt-4" style={{background:'var(--glass)', border:'1px solid var(--border)', borderRadius:12, maxWidth:500}}>
                    <div style={{display:'flex', alignItems:'center', gap:12, marginBottom:16}}>
                      <div style={{width:40, height:40, borderRadius:'50%', background:'linear-gradient(135deg, var(--primary), var(--secondary))', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff'}}>
                        <i className="fas fa-robot"></i>
                      </div>
                      <div>
                        <div style={{fontWeight:700, fontFamily:'Space Grotesk'}}>Preetham & Prajwal</div>
                        <div style={{fontSize:'0.8rem', color:'var(--primary)'}}>Auto-Reply • Just now</div>
                      </div>
                    </div>
                    <p style={{fontSize:'0.95rem', color:'var(--text)', marginBottom:12}}>
                      Hello {form.name || 'there'}! Thanks for reaching out to <strong>Growza – Business Growth Agency</strong> 🚀. We'd love to help you scale your business!
                    </p>
                    <p style={{fontSize:'0.95rem', color:'var(--text)', marginBottom:12}}>
                      To give you the best advice, our team will review your requirement for <strong>{form.service || 'our services'}</strong> and get back to you shortly.
                    </p>
                    <p style={{fontSize:'0.95rem', color:'var(--text)', marginBottom:0}}>
                      Looking forward to working with you!
                    </p>
                  </div>

                  <button className="btn-primary-g mt-4" onClick={()=>{setDone(false);setForm({name:'',phone:'',service:'',msg:''});}}>Send Another Message</button>
                </div>
              ):(
                <form onSubmit={submit} noValidate>
                  <h5 style={{fontFamily:'Space Grotesk',fontWeight:700,marginBottom:20}}>Send a Message</h5>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <label className="form-label">Your Name *</label>
                      <input className="form-control fc" placeholder="Rahul Sharma" value={form.name} onChange={e=>set('name',e.target.value)} />
                      {errs.name&&<div className="err">{errs.name}</div>}
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label">Phone *</label>
                      <input className="form-control fc" placeholder="9876543210" maxLength={10} value={form.phone} onChange={e=>set('phone',e.target.value)} />
                      {errs.phone&&<div className="err">{errs.phone}</div>}
                    </div>
                    <div className="col-12">
                      <label className="form-label">Service Needed *</label>
                      <select className="form-select fc" value={form.service} onChange={e=>set('service',e.target.value)}>
                        <option value="">Choose a service...</option>
                        <option>Website Designing</option>
                        <option>Instagram Ads & Boosting</option>
                        <option>Google SEO Optimization</option>
                        <option>Menu Designing</option>
                        <option>Poster Designing</option>
                        <option>Business Growth Consulting</option>
                      </select>
                      {errs.service&&<div className="err">{errs.service}</div>}
                    </div>
                    <div className="col-12">
                      <label className="form-label">Message (Optional)</label>
                      <textarea className="form-control fc" rows={3} placeholder="Tell us about your business..." value={form.msg} onChange={e=>set('msg',e.target.value)}></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-primary-g w-100">Send Message <i className="fas fa-paper-plane ms-2"></i></button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
