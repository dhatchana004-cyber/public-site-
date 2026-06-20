import React from 'react';
import { CheckCircle2, FileText, Phone } from 'lucide-react';
import './Hero.css';

const Hero = ({ globalData }) => {
  let heroPhoto = globalData?.settings?.hero_photo || "/vino_circle.png";
  if (heroPhoto.includes('ngrok-free.dev')) {
    heroPhoto = new URL(heroPhoto).pathname;
  }

  const heroTitle = globalData?.settings?.hero_title || "VINO BROWSING";
  // Fallbacks if backend is empty
  const heroSubtitle = globalData?.settings?.hero_subtitle || "Digital Service Center — Dindigul";
  const heroTagline = globalData?.settings?.hero_tagline || "One Trusted Solution for All Government Services";
  
  // Parse comma-separated string from backend
  const tagsStr = globalData?.settings?.hero_service_tags;
  const serviceTags = tagsStr 
    ? tagsStr.split(',').map(s => s.trim()).filter(Boolean)
    : [
        'Aadhaar Services', 'Certificate Services',
        'PAN Card Services', 'Revenue Services',
        'Passport Services', 'Education Services',
        'Voter ID Services', 'All Online Applications'
      ];

  return (
    <section className="hero-section">
      <div className="container hero-container">

        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">{heroTitle}</h1>
          <h2 className="hero-subtitle">{heroSubtitle}</h2>
          <p className="hero-tagline">{heroTagline}</p>

          <div className="hero-services">
            {serviceTags.map((s, index) => (
              <div key={index} className="hero-service-item">
                <CheckCircle2 size={15} className="check-icon" />
                <span>{s}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              <FileText size={16} /> OUR SERVICES
            </a>
            <a href="#contact" className="btn btn-white-outline">
              <Phone size={16} /> CONTACT US
            </a>
          </div>
        </div>

        {/* Center Image */}
        <div className="hero-image-container">
          <div className="hero-image-circle">
            <img
              src={heroPhoto}
              alt="Vino Browsing Digital Service Center"
            />
          </div>
        </div>

        {/* Right Card — Why Choose Us */}
        <div className="hero-card">
          <h3 className="card-title">
            <CheckCircle2 size={18} style={{ color: 'var(--primary-blue)' }} />
            WHY CHOOSE US?
          </h3>
          <ul className="why-list">
            {(globalData?.why_choose_us?.length > 0 ? globalData.why_choose_us.map(w => w.text || w.point) : [
              'Fast & Reliable Service',
              'Experienced Professionals',
              '100% Customer Satisfaction',
              'Document Verification',
              'Online Application Support',
              'Affordable Charges',
            ]).map((item, i) => (
              <li key={i} className="why-item">
                <CheckCircle2 size={14} style={{ color: 'var(--accent-green)', flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>

          <div className="trusted-badge">
            <div className="shield-icon">🛡️</div>
            <div className="badge-text">
              <div className="badge-title">TRUSTED SERVICE</div>
              <div className="badge-sub">100% SECURE</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
