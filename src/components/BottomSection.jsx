import React from 'react';
import { Briefcase, MapPin, Phone, Mail, Clock, Award, Eye, Image } from 'lucide-react';
import './BottomSection.css';

const WhatsAppIcon = ({ size = 17 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const InstagramIcon = ({ size = 17 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YouTubeIcon = ({ size = 17 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const defaultJobsData = [
  { 
    title: 'TNPSC Group 2 & 2A', 
    status: 'Notification Out', 
    post: 'Assistant, Sub-Registrar, Municipal Commissioner', 
    qualification: 'Graduate Degree (Any Discipline)', 
    lastDate: '10 Jun 2026', 
    examDate: '28 Sep 2026', 
    type: 'blue', 
    image: null 
  },
  { 
    title: 'SSC CGL 2026',        
    status: 'Apply Online',    
    post: 'Inspector, Assistant Section Officer, Auditor', 
    qualification: 'Bachelor\'s Degree', 
    lastDate: '15 Jun 2026', 
    examDate: '10 Oct 2026', 
    type: 'red', 
    image: null 
  },
  { 
    title: 'RRB Technician 2026', 
    status: 'Apply Online',    
    post: 'Technician Grade I & III', 
    qualification: 'ITI / Diploma / B.Sc (Physics/Maths)', 
    lastDate: '30 Jun 2026', 
    examDate: '15 Nov 2026', 
    type: 'red', 
    image: null 
  },
  { 
    title: 'SBI PO 2026',         
    status: 'Apply Online',    
    post: 'Probationary Officer (PO)', 
    qualification: 'Graduation in any discipline', 
    lastDate: '08 Jul 2026', 
    examDate: '16 Aug 2026', 
    type: 'blue', 
    image: '/sbi_po_2026_poster.png' 
  },
  { 
    title: 'TNUSRB PC 2026',      
    status: 'Upcoming',        
    post: 'Police Constable (Grade II)', 
    qualification: '10th Standard (SSLC) Pass', 
    lastDate: '15 Nov 2026', 
    examDate: '21 Dec 2026', 
    type: 'blue', 
    image: null 
  },
];

const defaultResultsData = [
  { 
    title: 'TNPSC Group 4 Results', 
    status: 'Declared', 
    lastDate: '18 Jun 2026', 
    examDate: '09 Jun 2026', 
    type: 'green', 
    image: null 
  },
  { 
    title: 'HSC (+2) Board Exam Results', 
    status: 'Declared', 
    lastDate: '08 May 2026', 
    examDate: '05 Mar 2026', 
    type: 'blue', 
    image: null 
  },
  { 
    title: 'SSLC (10th) Board Exam Results', 
    status: 'Declared', 
    lastDate: '12 May 2026', 
    examDate: '27 Mar 2026', 
    type: 'blue', 
    image: null 
  },
  { 
    title: 'NEET UG 2026 Results', 
    status: 'Declared', 
    lastDate: '04 Jun 2026', 
    examDate: '03 May 2026', 
    type: 'red', 
    image: null 
  },
];

const BottomSection = ({ globalData }) => {
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);

  // 1. Jobs Data mapping
  const jobsData = (globalData && globalData.jobs && globalData.jobs.length > 0)
    ? globalData.jobs.map((job, idx) => ({
        ...job,
        title: job.title || 'N/A',
        status: job.status || (job.is_active ? 'Apply Online' : 'Closed'),
        post: job.post_count || job.post || job.posts || 'N/A',
        qualification: job.qualification || 'N/A',
        lastDate: job.last_date || job.endDate || job.lastDate || 'N/A',
        examDate: job.exam_date || job.examDate || 'N/A',
        image: job.image || job.photo || job.poster || null,
        type: job.type || (idx % 2 === 0 ? 'blue' : 'red')
      }))
    : defaultJobsData;

  // 1.2. Results Data mapping
  const resultsData = (globalData && globalData.results && globalData.results.length > 0)
    ? globalData.results.map((res, idx) => ({
        ...res,
        title: res.title || 'N/A',
        status: res.status || 'Declared',
        lastDate: res.last_date || res.lastDate || 'N/A',
        examDate: res.exam_date || res.examDate || 'N/A',
        image: res.image || res.photo || res.poster || null,
        type: res.type || (idx % 3 === 0 ? 'green' : idx % 3 === 1 ? 'blue' : 'red')
      }))
    : defaultResultsData;

  // 2. Footer Data mapping
  const shopName = globalData?.settings?.shop_name || "VINO BROWSING";
  const tagline = globalData?.settings?.tagline || "Your Trusted Digital Service Partner";
  const address = globalData?.settings?.address || "43/53, Yoga Complex, AMC Road,\nJB Hotel Opp, Near Bus Stand, Dindigul – 624001";
  const phone = globalData?.settings?.phone || "97504 72040  |  83445 16738";
  const email = globalData?.settings?.email || "vinobrowsingdgl@gmail.com";
  const hours = globalData?.settings?.hours || "Mon – Sat: 9:30 AM – 8:00 PM";
  const holiday = globalData?.settings?.holiday || "Sunday: Holiday";
  const whatsapp = globalData?.settings?.whatsapp || "918344516738";

  const ensureAbsoluteUrl = (url, defaultDomain) => {
    if (!url) return null;
    const trimmed = String(url).trim();
    if (!trimmed) return null;
    
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }
    if (trimmed.startsWith('//')) {
      return `https:${trimmed}`;
    }
    if (trimmed.includes('.') || trimmed.includes('localhost') || trimmed.includes('wa.me')) {
      return `https://${trimmed}`;
    }
    if (defaultDomain) {
      const cleanDomain = defaultDomain.endsWith('/') ? defaultDomain.slice(0, -1) : defaultDomain;
      if (cleanDomain.includes('youtube.com') && !trimmed.startsWith('@')) {
        return `${cleanDomain}/${trimmed.startsWith('/') ? trimmed.slice(1) : '@' + trimmed}`;
      }
      return `${cleanDomain}/${trimmed.startsWith('/') ? trimmed.slice(1) : trimmed}`;
    }
    return trimmed;
  };

  const getWhatsAppLink = () => {
    const ws = globalData?.settings?.whatsapp_link 
      || globalData?.settings?.whatsapp_url 
      || globalData?.settings?.whatsapp
      || globalData?.settings?.whatsapp_number
      || globalData?.settings?.whatsapp_phone;
    return ensureAbsoluteUrl(ws, "https://wa.me") || "https://wa.me/918344516738";
  };

  const getInstagramLink = () => {
    const insta = globalData?.settings?.instagram_link 
      || globalData?.settings?.instagram_url 
      || globalData?.settings?.instagram
      || globalData?.settings?.instagram_profile
      || globalData?.settings?.instagram_id;
    return ensureAbsoluteUrl(insta, "https://instagram.com") || "https://instagram.com/vinobrowsing";
  };

  const getYouTubeLink = () => {
    const yt = globalData?.settings?.youtube_link 
      || globalData?.settings?.youtube_url 
      || globalData?.settings?.youtube
      || globalData?.settings?.youtube_channel
      || globalData?.settings?.youtube_channel_url
      || globalData?.settings?.youtube_id;
    return ensureAbsoluteUrl(yt, "https://youtube.com") || "https://youtube.com/@vinobrowsing";
  };

  const getModalWhatsAppLink = (jobTitle) => {
    const ws = globalData?.settings?.whatsapp_link 
      || globalData?.settings?.whatsapp_url 
      || globalData?.settings?.whatsapp
      || globalData?.settings?.whatsapp_number
      || globalData?.settings?.whatsapp_phone;
      
    const textParam = `text=Hi%20Vino%20Browsing,%20I%20want%20to%20apply%20for%20the%20job%20update:%20*${encodeURIComponent(jobTitle)}*.%20Please%20help%20me%20apply.`;
    const absoluteWs = ensureAbsoluteUrl(ws, "https://wa.me");
    if (absoluteWs) {
      if (absoluteWs.includes('wa.me') || absoluteWs.includes('api.whatsapp.com')) {
        return absoluteWs + (absoluteWs.includes('?') ? '&' : '?') + textParam;
      }
      return absoluteWs;
    }
    return `https://wa.me/918344516738?${textParam}`;
  };
  
  let mapUrl = globalData?.settings?.map_url || "";
  
  // Smart extract: If the user pasted a full <iframe src="..."> embed code, extract just the URL
  if (mapUrl.includes('<iframe') && mapUrl.includes('src=')) {
    const match = mapUrl.match(/src="([^"]+)"/);
    if (match && match[1]) {
      mapUrl = match[1];
    }
  }

  // If mapUrl is empty or not a valid Google Maps embed link, construct a safe search embed
  const isEmbedUrl = mapUrl.includes('google.com/maps/embed') || mapUrl.includes('output=embed');
  if (!mapUrl || !isEmbedUrl) {
    let queryParam = "";
    if (mapUrl) {
      try {
        const urlObj = new URL(mapUrl);
        queryParam = urlObj.searchParams.get("q") || urlObj.searchParams.get("query") || "";
      } catch (e) {
        const qMatch = mapUrl.match(/[?&](q|query)=([^&]+)/);
        if (qMatch && qMatch[2]) {
          queryParam = decodeURIComponent(qMatch[2]);
        }
      }
    }
    
    // Fallback to shopName + primary address if query parameter wasn't found
    const searchString = queryParam || `${shopName}, ${address.split('\n')[0]}`;
    mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(searchString)}&output=embed`;
  }

  return (
    <section className="bottom-section">
      <div className="container">
        <div className="bottom-grid-stacked">

          {/* 1 — Latest Job Updates */}
          <div id="job-updates" className="widget-card bg-white" style={{ border: '1px solid #e5e7eb', marginBottom: '2.5rem' }}>
            <div className="widget-header widget-header-white">
              <span className="widget-title" style={{ color: 'var(--dark-blue)' }}>
                <span className="title-accent"></span> Latest Job Updates
              </span>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="job-list-vertical">
              {jobsData.map((job, i) => (
                <div
                  key={i}
                  className="job-card-premium click-active"
                  onClick={() => setSelectedPhoto(job)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="job-card-left">
                    {job.image ? (
                      <img src={job.image} alt={job.title} className="job-poster-thumb-large" />
                    ) : (
                      <div className={`job-icon-large job-icon-${job.type}`}>
                        <Briefcase size={20} />
                      </div>
                    )}
                  </div>
                  
                  <div className="job-card-middle">
                    <div className="job-card-title-row">
                      <h4 className="job-card-title">{job.title}</h4>
                      {job.status && job.status.toLowerCase() !== 'apply online' && job.status.toLowerCase() !== 'declared' && (
                        <span className={`status-badge-premium status-${job.type}`}>{job.status}</span>
                      )}
                    </div>
                    
                    <div className="job-card-grid">
                      <div className="job-grid-cell">
                        <span className="cell-label">Post:</span>
                        <span className="cell-value">{job.post}</span>
                      </div>
                      <div className="job-grid-cell">
                        <span className="cell-label">Qualification:</span>
                        <span className="cell-value">{job.qualification}</span>
                      </div>
                      <div className="job-grid-cell">
                        <span className="cell-label">Last Date:</span>
                        <span className="cell-value date-highlight-red">{job.lastDate}</span>
                      </div>
                      <div className="job-grid-cell">
                        <span className="cell-label">Exam Date:</span>
                        <span className="cell-value date-highlight-blue">{job.examDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="job-card-right">
                    <button className="view-poster-btn-premium">
                      <Eye size={13} /> View Poster
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2 — Exam Updates */}
          <div id="exam-updates" className="widget-card bg-white" style={{ border: '1px solid #e5e7eb' }}>
            <div className="widget-header widget-header-white">
              <span className="widget-title" style={{ color: 'var(--dark-blue)' }}>
                <span className="title-accent" style={{ backgroundColor: 'var(--primary-blue)' }}></span> Exam Updates
              </span>
              <button className="view-all-btn" style={{ backgroundColor: 'var(--primary-blue)' }}>View All</button>
            </div>
            <div className="job-list-vertical">
              {resultsData.map((res, i) => (
                <div
                  key={i}
                  className="job-card-premium click-active"
                  onClick={() => setSelectedPhoto(res)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="job-card-left">
                    {res.image ? (
                      <img src={res.image} alt={res.title} className="job-poster-thumb-large" />
                    ) : (
                      <div className={`job-icon-large job-icon-${res.type}`}>
                        <Award size={20} />
                      </div>
                    )}
                  </div>
                  
                  <div className="job-card-middle">
                    <div className="job-card-title-row">
                      <h4 className="job-card-title">{res.title}</h4>
                      {res.status && res.status.toLowerCase() !== 'apply online' && res.status.toLowerCase() !== 'declared' && (
                        <span className={`status-badge-premium status-${res.type}`}>{res.status}</span>
                      )}
                    </div>
                    
                    <div className="job-card-grid exam-grid-layout">
                      <div className="job-grid-cell">
                        <span className="cell-label">Last Date:</span>
                        <span className="cell-value date-highlight-red">{res.lastDate}</span>
                      </div>
                      <div className="job-grid-cell">
                        <span className="cell-label">Exam Date:</span>
                        <span className="cell-value date-highlight-blue">{res.examDate}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="job-card-right">
                    <button className="view-poster-btn-premium" style={{ borderColor: 'var(--primary-blue)', color: 'var(--primary-blue)' }}>
                      <Eye size={13} /> View Poster
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ===== FOOTER WITH MAP ===== */}
      <footer id="contact" className="site-footer">
        <div className="footer-top">
          <div className="container footer-top-inner">

            {/* Left — Brand & Contact */}
            <div className="footer-brand-col">
              <div className="footer-logo">
                <div className="footer-logo-icon">VB</div>
                <div>
                <div className="footer-logo-name">{shopName}</div>
                  <div className="footer-logo-tagline">{tagline}</div>
                </div>
              </div>

              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <MapPin size={15} className="footer-contact-icon" />
                  <span>{address.replace(/[\r\n]+/g, ', ')}</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={15} className="footer-contact-icon" />
                  <span>{phone}</span>
                </div>
                <div className="footer-contact-item">
                  <Mail size={15} className="footer-contact-icon" />
                  <span>{email}</span>
                </div>
                <div className="footer-contact-item">
                  <Clock size={15} className="footer-contact-icon" />
                  <span>{hours} &nbsp;|&nbsp; {holiday}</span>
                </div>
              </div>

              <div className="footer-actions-row">
                <a
                  href={getInstagramLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-instagram-btn"
                >
                  <InstagramIcon size={17} />
                  Instagram
                </a>
                <a
                  href={getYouTubeLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-youtube-btn"
                >
                  <YouTubeIcon size={17} />
                  YouTube
                </a>
              </div>
            </div>

            {/* Right — Google Map */}
            <div className="footer-map-col">
              <div className="footer-map-label">
                <MapPin size={15} /> Find Us on Map
              </div>
              <div className="footer-map-wrapper">
                <iframe
                  title="Vino Browsing Location"
                  src={mapUrl}
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>© 2025 VINO BROWSING. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <span className="footer-divider">|</span>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="photo-modal-overlay" onClick={() => setSelectedPhoto(null)}>
          <div className="photo-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="photo-modal-close" onClick={() => setSelectedPhoto(null)}>×</button>
            {selectedPhoto.image ? (
              <img src={selectedPhoto.image} alt={selectedPhoto.title} className="photo-modal-img" />
            ) : (
              <div className="photo-modal-fallback" style={{ background: selectedPhoto.post ? 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)' : 'linear-gradient(135deg, #11998e, #38ef7d)' }}>
                <div className="fallback-logo">VB</div>
                <h2>{selectedPhoto.title}</h2>
                <div className="fallback-badge">{selectedPhoto.status}</div>
                <div className="fallback-details">
                  {selectedPhoto.post && <p>💼 <strong>Post:</strong> {selectedPhoto.post}</p>}
                  {selectedPhoto.qualification && <p>🎓 <strong>Qualification:</strong> {selectedPhoto.qualification}</p>}
                  <p>⌛ <strong>Last Date:</strong> {selectedPhoto.lastDate}</p>
                  <p>🗓️ <strong>Exam Date:</strong> {selectedPhoto.examDate}</p>
                </div>
                <div className="fallback-footer">
                  <p>📍 VINO BROWSING CENTER</p>
                  <p>📞 Phone: {phone}</p>
                </div>
              </div>
            )}
            <div className="photo-modal-info">
              <h3>{selectedPhoto.title}</h3>
              <p className="photo-modal-status">{selectedPhoto.status}</p>
              <div className="photo-modal-actions">
                <a
                  href={getModalWhatsAppLink(selectedPhoto.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="photo-modal-wa-btn"
                >
                  <WhatsAppIcon size={16} /> Apply via WhatsApp
                </a>
                {selectedPhoto.image && (
                  <a
                    href={selectedPhoto.image}
                    download={`${selectedPhoto.title.toLowerCase().replace(/\s+/g, '_')}_poster.png`}
                    target="_blank"
                    rel="noreferrer"
                    className="photo-modal-download-btn"
                  >
                    Download Poster
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BottomSection;
