import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BottomSection from './components/BottomSection';
import './components/BottomSection.css';

const WhatsAppIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function App() {
  const getWhatsAppLink = (ws) => {
    if (ws && String(ws).trim().startsWith('http')) return String(ws).trim();
    let cleaned = String(ws || '918344516738').replace(/[^0-9]/g, '');
    if (cleaned.length === 10) cleaned = '91' + cleaned;
    return `https://api.whatsapp.com/send?phone=${cleaned}`;
  };

  const [globalData, setGlobalData] = React.useState(null);

// Live Backend URL-ஐ இங்கு கொடுக்கவும்
  const API_BASE_URL = import.meta.env.PROD 
    ? 'https://api.vinobrowsing.com' // <-- Aapanel-ல் உள்ள உங்கள் Backend URL-ஐ இங்கு மாற்றவும்
    : '';
  React.useEffect(() => {
    fetch(`${API_BASE_URL}/api/public-site/data/`, {
      cache: 'no-store'
    })
    .then(res => res.json())
    .then(data => {
       console.log('Fetched Public Site Data:', data);
       
       // Fix image URLs from backend (Handle relative paths, ngrok, and absolute bugs)
       const fixUrl = (url) => {
         if (!url) return url;
         
         // Extract the path if it's an absolute URL
         try {
           const urlObj = new URL(url);
           if (urlObj.pathname.startsWith('/media/')) {
             return (API_BASE_URL || 'https://api.vinobrowsing.com') + urlObj.pathname;
           }
         } catch(e) {
           // Not an absolute URL, continue
         }

         if (url.startsWith('/media/')) {
           return (API_BASE_URL || 'https://api.vinobrowsing.com') + url;
         }
         return url;
       };

       if (data?.settings?.hero_photo) {
         data.settings.hero_photo = fixUrl(data.settings.hero_photo);
       }
       if (data?.jobs) {
         data.jobs = data.jobs.map(j => ({ ...j, image: fixUrl(j.image) }));
       }
       if (data?.education_apps) {
         data.education_apps = data.education_apps.map(a => ({ ...a, image: fixUrl(a.image) }));
       }

       setGlobalData(data);
    })
    .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div>
      <Header globalData={globalData} />
      <Hero globalData={globalData} />
      <Services globalData={globalData} />
      <BottomSection globalData={globalData} />
      <a
        href={getWhatsAppLink(globalData?.settings?.whatsapp_link || globalData?.settings?.whatsapp_url || globalData?.settings?.whatsapp)}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}

export default App;
