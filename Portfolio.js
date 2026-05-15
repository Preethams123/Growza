// Portfolio.js
const generatePortfolio = () => {
  const categories = {
    'Website Design': {
      prefixes: ['Luxury', 'Modern', 'Minimal', 'Corporate', 'Creative', 'Tech', 'Local', 'Global', 'Elite', 'Pro', 'Agile', 'NextGen'],
      suffixes: ['Agency', 'Clinic', 'Startup', 'Brand', 'Store', 'Portal', 'Platform', 'Firm', 'Studio', 'Hub', 'Network', 'App'],
      emojis: ['💻', '🚀', '🏢', '✨', '🌐', '📱', '🛍️', '🏥', '🏗️', '🎨'],
      color: '#3B82F6',
      bgBase: [215, 80, 15] // Blue
    },
    'Instagram Ads': {
      prefixes: ['Viral', 'Engaging', 'Dynamic', 'High-Converting', 'Trendy', 'Sleek', 'Bold', 'Seasonal', 'Flash', 'Targeted', 'Organic', 'Premium'],
      suffixes: ['Campaign', 'Promo', 'Story', 'Reel', 'Carousel', 'Lead Gen', 'Boost', 'Awareness', 'Launch', 'Sale', 'Showcase', 'Blitz'],
      emojis: ['📸', '🔥', '📈', '👠', '🍔', '✈️', '💪', '🛍️', '🏖️', '📱'],
      color: '#E1306C',
      bgBase: [340, 80, 15] // Pink
    },
    'SEO': {
      prefixes: ['Local', 'Global', 'Technical', 'E-Commerce', 'B2B', 'Content', 'Organic', 'Enterprise', 'Niche', 'Authority', 'Evergreen', 'Rapid'],
      suffixes: ['Ranking', 'Growth', 'Traffic', 'Optimization', 'Audit', 'Strategy', 'Domination', 'Keywords', 'Backlinks', 'Visibility', 'Boost', 'Surge'],
      emojis: ['📈', '🔍', '🎯', '🗺️', '💻', '🏥', '⚖️', '🔧', '📊', '🚀'],
      color: '#22C55E',
      bgBase: [140, 80, 15] // Green
    },
    'Menu Design': {
      prefixes: ['Fine Dining', 'Rustic', 'Modern', 'Vintage', 'Digital', 'Minimal', 'Artisan', 'Gourmet', 'Classic', 'Express', 'Premium', 'Seasonal'],
      suffixes: ['Menu', 'Card', 'Board', 'Folio', 'Selection', 'List', 'Specials', 'Tasting', 'Drinks', 'Desserts', 'Bistro', 'Cafe'],
      emojis: ['🍷', '☕', '🌮', '🥗', '🍔', '🍕', '🦞', '🧁', '🍺', '🍽️'],
      color: '#FF6B00',
      bgBase: [25, 80, 15] // Orange
    },
    'Poster Design': {
      prefixes: ['Event', 'Festival', 'Corporate', 'Nightclub', 'Concert', 'Workshop', 'Seminar', 'Marathon', 'Launch', 'Promo', 'Holiday', 'Exhibition'],
      suffixes: ['Flyer', 'Banner', 'Poster', 'Billboard', 'Signage', 'Print', 'Display', 'Backdrop', 'Invite', 'Showcase', 'Artwork', 'Graphic'],
      emojis: ['🎸', '🎆', '🎨', '🏃', '🎓', '🏢', '🛒', '🌐', '🏋️', '🎟️'],
      color: '#A855F7',
      bgBase: [270, 80, 15] // Purple
    },
    'Business Growth': {
      prefixes: ['Strategic', 'Explosive', 'Sustainable', 'Rapid', 'Market', 'Revenue', 'Profit', 'Scalable', 'Digital', 'Holistic', 'Agile', 'Lean'],
      suffixes: ['Expansion', 'Scaling', 'Domination', 'Acceleration', 'Blueprint', 'Roadmap', 'Funnels', 'Optimization', 'Consulting', 'Acquisition', 'Retention', 'Mastery'],
      emojis: ['💡', '🤝', '💰', '📈', '🚀', '📍', '💻', '🏢', '📊', '🏆'],
      color: '#F59E0B',
      bgBase: [40, 80, 15] // Amber
    }
  };

  const results = [];

  Object.keys(categories).forEach(tag => {
    const data = categories[tag];
    let count = 0;
    
    for(let i=0; i<data.prefixes.length; i++){
      for(let j=0; j<data.suffixes.length; j++){
        if(count >= 60) break; // Generates exactly 60 per category
        
        const title = `${data.prefixes[i]} ${data.suffixes[j]}`;
        const emoji = data.emojis[(i + j) % data.emojis.length];
        
        // Subtle gradient hue shifting to make them look distinct
        const hue = data.bgBase[0] + (count % 10 - 5);
        const bg = `linear-gradient(135deg, hsl(${hue}, ${data.bgBase[1]}%, ${data.bgBase[2]}%), hsl(${hue}, ${data.bgBase[1]}%, ${data.bgBase[2] - 10}%))`;
        
        results.push({ title, tag, emoji, color: data.color, bg });
        count++;
      }
    }
  });

  return results;
};

const PORTFOLIO = generatePortfolio();

const TAGS = ['All', 'Website Design', 'Instagram Ads', 'SEO', 'Menu Design', 'Poster Design', 'Business Growth'];

const CATEGORY_IMAGES = {
  'Website Design': [
    'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80', // UI Screens
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', // Dashboard
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80', // Wireframes
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', // Analytics UI
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80'  // Web dev
  ],
  'Instagram Ads': [
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80', // IG Mobile
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80', // Social Likes
    'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80', // Social Icons
    'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=800&q=80', // Phone Mockup
    'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80'  // Creative marketing
  ],
  'SEO': [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', // Data
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', // Graphs
    'https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80', // Code matrix
    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80', // Strategy meeting
    'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80'  // Notes
  ],
  'Menu Design': [
    'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=800&q=80', // Cafe menu
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80', // Restaurant interior
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', // Board menu
    'https://images.unsplash.com/photo-1414235077428-33898dd18d8e?auto=format&fit=crop&w=800&q=80', // Dining table
    'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=800&q=80'  // Coffee layout
  ],
  'Poster Design': [
    'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=800&q=80', // Poster on wall
    'https://images.unsplash.com/photo-1581005230113-14930335e80f?auto=format&fit=crop&w=800&q=80', // Print ad mockup
    'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&w=800&q=80', // Gallery frame
    'https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=800&q=80', // Graphic art
    'https://images.unsplash.com/photo-1583569528612-4299b82ec35a?auto=format&fit=crop&w=800&q=80'  // Banner design
  ],
  'Business Growth': [
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', // Business strategy
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80', // Target
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80', // Team growth
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', // Corporate
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80'  // Success
  ]
};

const Portfolio = () => {
  const [activeTag, setActiveTag] = React.useState('All');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filtered = PORTFOLIO.filter(p => {
    const matchTag = activeTag === 'All' ? true : p.tag === activeTag;
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.tag.toLowerCase().includes(searchTerm.toLowerCase());
    return matchTag && matchSearch;
  });

  React.useEffect(() => {
    const observer = new IntersectionObserver(els => {
      els.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('#portfolio .fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTag, searchTerm]); // Re-observe when filter changes

  return (
    <section className="sec-pad" id="portfolio" style={{ background: 'var(--bg)', paddingTop: '90px', minHeight: '100vh' }}>
      <div className="container">
        {/* Back Button */}
        <button 
          onClick={() => { window.scrollTo(0,0); window.location.hash = '#home'; }} 
          style={{ 
            background: 'rgba(255,255,255,0.05)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            color: '#fff', 
            padding: '8px 20px', 
            borderRadius: '50px', 
            marginBottom: '30px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            transition: '0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
        >
          <i className="fas fa-arrow-left"></i> Back to Home
        </button>

        <div className="text-center mb-5">
          <span className="sec-label fade-up">Portfolio</span>
          <h2 className="sec-title fade-up delay-1">Explore <span className="grad">All Templates</span></h2>
          <p className="sec-sub fade-up delay-2 mx-auto mb-4">Where creativity meets conversion. Explore our portfolio of high-performance digital experiences and strategic growth campaigns.</p>
          
          {/* Search Bar */}
          <div className="mx-auto fade-up delay-2" style={{ maxWidth: '500px', position: 'relative' }}>
            <i className="fas fa-search" style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }}></i>
            <input 
              type="text" 
              placeholder="Search 300+ premium templates..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 20px 16px 50px',
                borderRadius: '50px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.2)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5 fade-up delay-2">
          {TAGS.map(tag => (
            <button key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                background: activeTag === tag ? 'var(--primary)' : 'rgba(255,255,255,0.03)',
                border: '1px solid',
                borderColor: activeTag === tag ? 'var(--primary)' : 'var(--border)',
                color: activeTag === tag ? '#fff' : 'var(--muted)',
                padding: '8px 20px', borderRadius: '50px', fontSize: '.85rem',
                fontWeight: 600, cursor: 'pointer', transition: '.3s',
              }}>
              {tag}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filtered.map((p, i) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={i}>
              <div className="port-item fade-up" onClick={() => {
                window.selectedTemplate = { 
                  ...p, 
                  image: CATEGORY_IMAGES[p.tag] ? CATEGORY_IMAGES[p.tag][i % CATEGORY_IMAGES[p.tag].length] : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80' 
                };
                window.location.hash = '#template';
              }} style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                minHeight: '340px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                cursor: 'pointer'
              }}>
                {/* Photographic Texture Layer */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${CATEGORY_IMAGES[p.tag] ? CATEGORY_IMAGES[p.tag][i % CATEGORY_IMAGES[p.tag].length] : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.6s cubic-bezier(0.2, 1, 0.8, 1)',
                  zIndex: 0
                }} className="port-img-bg"></div>

                {/* Brand Color Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: p.bg,
                  opacity: 0.85,
                  mixBlendMode: 'hard-light',
                  zIndex: 1
                }}></div>

                {/* Text Readability Gradient */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                  zIndex: 2
                }}></div>

                {/* Emoji Floating Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '45px',
                  height: '45px',
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  border: '1px solid rgba(255,255,255,0.1)',
                  zIndex: 3,
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                }}>
                  {p.emoji}
                </div>

                {/* Card Content */}
                <div style={{
                  position: 'relative',
                  zIndex: 3,
                  padding: '30px 24px 24px',
                  transition: 'transform 0.4s ease'
                }} className="port-content">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <span style={{ 
                      background: p.color, 
                      color: '#fff', 
                      padding: '4px 10px', 
                      borderRadius: '6px', 
                      fontSize: '0.65rem', 
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      boxShadow: `0 4px 12px ${p.color}40`
                    }}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 style={{ 
                    color: '#fff', 
                    fontWeight: 700, 
                    fontSize: '1.25rem', 
                    lineHeight: '1.4',
                    marginBottom: '16px',
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                  }}>
                    {p.title}
                  </h3>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#fff',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    opacity: 0.9
                  }} className="port-btn">
                    View Available Options
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.3s' }}>
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .port-item:hover .port-img-bg {
          transform: scale(1.1);
        }
        .port-item:hover .port-btn svg {
          transform: translateX(5px);
        }
        .port-item {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
        }
        .port-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.5) !important;
        }
      `}} />
    </section>
  );
};
