const PrivacyPolicy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: '1. Introduction',
      content: 'Welcome to Growza Business Growth Agency ("we," "us," or "our"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website growza.in and use our services.'
    },
    {
      title: '2. Data We Collect',
      content: null,
      list: [
        '<strong>Identity Data</strong> — Name, business name, or similar identifiers provided via our contact form.',
        '<strong>Contact Data</strong> — Phone number and email address you voluntarily submit.',
        '<strong>Technical Data</strong> — IP address, browser type/version, timezone, operating system, and device information collected automatically.',
        '<strong>Usage Data</strong> — Pages visited, click patterns, referral sources, and time spent on site.',
        '<strong>Cookie Data</strong> — Information stored via cookies and similar tracking technologies (see Section 6).'
      ]
    },
    {
      title: '3. How We Use Your Data',
      content: null,
      list: [
        'To respond to your inquiries and provide our digital services.',
        'To improve our website, content, and user experience.',
        'To send service-related communications (only if you contact us first).',
        'To analyze website traffic and performance via Google Analytics.',
        'To comply with legal obligations.'
      ]
    },
    {
      title: '4. Data Sharing',
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data with analytics providers (such as Google Analytics) to understand website usage patterns. These providers are bound by their own privacy policies.'
    },
    {
      title: '5. Data Security',
      content: 'We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.'
    },
    {
      title: '6. Cookies & Tracking',
      content: 'We use cookies and similar tracking technologies to enhance your browsing experience and gather analytics data.',
      list: [
        '<strong>Essential Cookies</strong> — Required for basic site functionality (e.g., cookie consent preference).',
        '<strong>Analytics Cookies</strong> — Help us understand how visitors interact with our site (Google Analytics).',
        '<strong>Your Choice</strong> — You can manage cookie preferences through our cookie consent banner or your browser settings.'
      ]
    },
    {
      title: '7. Your Rights',
      content: null,
      list: [
        'Request access to the personal data we hold about you.',
        'Request correction or deletion of your personal data.',
        'Object to or restrict our processing of your data.',
        'Withdraw consent at any time (for consent-based processing).',
        'Lodge a complaint with a data protection authority.'
      ]
    },
    {
      title: '8. Data Retention',
      content: 'We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Contact form submissions are retained for up to 12 months unless you request earlier deletion.'
    },
    {
      title: '9. Third-Party Links',
      content: 'Our website may contain links to third-party websites (e.g., WhatsApp, social media platforms). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies independently.'
    },
    {
      title: '10. Changes to This Policy',
      content: 'We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated "Last Modified" date. Continued use of our website after changes constitutes your acceptance of the revised policy.'
    },
    {
      title: '11. Contact Us',
      content: 'If you have any questions about this privacy policy, your personal data, or wish to exercise your rights, please contact us via WhatsApp at +91 80952 83922 or email at hello@growza.in.'
    }
  ];

  return (
    <section className="sec-pad" style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '120px' }}>
      <div className="container" style={{ maxWidth: '780px' }}>
        <div className="fade-up visible">
          <span className="sec-label">Legal</span>
          <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, marginBottom: '8px', fontSize: 'clamp(2.2rem, 5vw, 3rem)' }}>
            Privacy <span className="grad">Policy</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.88rem', marginBottom: '48px' }}>
            Last updated: May 2026 &nbsp;•&nbsp; Growza Business Growth Agency
          </p>
        </div>

        <div style={{ color: 'var(--muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
          {sections.map((s, i) => (
            <div key={i} className="fade-up visible" style={{ marginBottom: '36px' }}>
              <h4 style={{ color: '#fff', marginBottom: '14px', fontSize: '1.1rem', fontWeight: 700 }}>{s.title}</h4>
              {s.content && <p style={{ marginBottom: s.list ? '14px' : 0 }}>{s.content}</p>}
              {s.list && (
                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                  {s.list.map((item, j) => (
                    <li key={j} style={{ marginBottom: '8px' }} dangerouslySetInnerHTML={{ __html: item }}></li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="fade-up visible" style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <a href="#home" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'gap 0.2s' }}
            onMouseOver={e => e.currentTarget.style.gap = '12px'}
            onMouseOut={e => e.currentTarget.style.gap = '8px'}
          >
            <i className="fas fa-arrow-left"></i> Return to Home
          </a>
          <span style={{ fontSize: '0.82rem', color: 'rgba(148,163,184,0.5)' }}>© 2026 Growza. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
};
