import React from 'react';
import {
  Fingerprint, CreditCard, Globe, UserCheck, FileText,
  Map, GraduationCap, Briefcase, FormInput, ShieldCheck,
  Zap, Wrench
} from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    title: 'Aadhaar Services',
    icon: <Fingerprint size={24} color="var(--accent-green)" />,
    items: ['New Aadhaar', 'Address Update', 'Mobile Number Update', 'Biometric Update']
  },
  {
    title: 'PAN Card Services',
    icon: <CreditCard size={24} color="var(--primary-blue)" />,
    items: ['New PAN Card', 'PAN Correction', 'e-PAN Download']
  },
  {
    title: 'Passport Services',
    icon: <Globe size={24} color="#2563eb" />,
    items: ['New Passport', 'Renewal', 'Appointment Booking']
  },
  {
    title: 'Voter ID Services',
    icon: <UserCheck size={24} color="#dc2626" />,
    items: ['New Voter ID', 'Correction', 'Address Change']
  },
  {
    title: 'Certificate Services',
    icon: <FileText size={24} color="var(--accent-green)" />,
    items: ['Income Certificate', 'Community Certificate', 'Nativity Certificate', 'First Graduate']
  },
  {
    title: 'Revenue Services',
    icon: <Map size={24} color="#16a34a" />,
    items: ['Patta', 'Chitta', 'EC', 'Land Records']
  },
  {
    title: 'Education Services',
    icon: <GraduationCap size={24} color="var(--primary-blue)" />,
    items: ['College Admission', 'Scholarship Applications', 'TNEA', 'Govt. Admissions']
  },
  {
    title: 'Job Updates',
    icon: <Briefcase size={24} color="#f97316" />,
    items: ['TNPSC', 'SSC', 'RRB', 'Banking & More']
  },
  {
    title: 'Online Applications',
    icon: <FormInput size={24} color="var(--primary-blue)" />,
    items: ['All Online Forms', 'Government Portals', 'Application Tracking']
  },
  {
    title: 'Insurance Services',
    icon: <ShieldCheck size={24} color="#3b82f6" />,
    items: ['Life Insurance', 'Health Insurance', 'Motor Insurance']
  },
  {
    title: 'Utility Services',
    icon: <Zap size={24} color="#a855f7" />,
    items: ['EB Bill Payment', 'Water Bill Payment', 'Mobile/DTH Recharge']
  },
  {
    title: 'Other Services',
    icon: <Wrench size={24} color="#78350f" />,
    items: ['Typing Services', 'Scanning', 'Photo Print', 'Lamination']
  }
];

const IconMap = {
  Fingerprint: <Fingerprint size={24} color="var(--accent-green)" />,
  CreditCard: <CreditCard size={24} color="var(--primary-blue)" />,
  Globe: <Globe size={24} color="#2563eb" />,
  UserCheck: <UserCheck size={24} color="#dc2626" />,
  FileText: <FileText size={24} color="#f59e0b" />,
  Map: <Map size={24} color="#059669" />,
  GraduationCap: <GraduationCap size={24} color="#7c3aed" />,
  Briefcase: <Briefcase size={24} color="#db2777" />,
  FormInput: <FormInput size={24} color="#ea580c" />,
  ShieldCheck: <ShieldCheck size={24} color="#0284c7" />,
  Zap: <Zap size={24} color="#eab308" />,
  Wrench: <Wrench size={24} color="#64748b" />
};

const Services = ({ globalData }) => {
  let displayServices = servicesData;
  if (globalData && globalData.services && globalData.services.length > 0) {
    displayServices = globalData.services.map(s => {
      const iconKey = s.icon ? Object.keys(IconMap).find(
        key => key.toLowerCase() === s.icon.trim().toLowerCase()
      ) : null;
      return {
        title: s.title,
        icon: iconKey ? IconMap[iconKey] : (s.icon ? <span style={{ fontSize: '24px' }}>{s.icon}</span> : <FileText size={24} color="#f59e0b" />),
        items: (s.description || s.sub_items || s.items || '').split(',').map(i => i.trim()).filter(Boolean)
      };
    });
  }

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        <div className="section-header">
          <div className="line"></div>
          <h2 className="section-title">OUR SERVICES</h2>
          <div className="line"></div>
        </div>

        <div className="services-grid">
          {displayServices.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-header">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
              <ul className="service-list">
                {service.items.map((item, i) => (
                  <li key={i} className="service-list-item">
                    <span className="service-dot"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
