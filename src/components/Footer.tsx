import React from 'react';
import { Mail, MapPin, ArrowRight, Clock, Facebook } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';

interface FooterProps {
  onQuoteClick: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenFacebookModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onQuoteClick,
  onSelectService,
  onOpenFacebookModal,
}) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#173D27] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#8DD75C] text-[#173D27] font-extrabold text-sm shadow-xs">
                DB
              </span>
              <span className="text-xl font-bold tracking-tight text-white">
                {BUSINESS_INFO.name}
              </span>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              {BUSINESS_INFO.tagline}
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Serving Heanor, Derbyshire and surrounding communities with durable block paving, outdoor patios, fencing, turfing, and complete garden transformations.
            </p>

            <div className="pt-2">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#8DD75C] hover:bg-[#7ec74e] text-xs font-semibold text-[#173D27] transition-all"
              >
                Request a Free Quote
                <ArrowRight className="w-3.5 h-3.5 text-[#173D27]" />
              </button>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8DD75C] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  onClick={(e) => handleNavClick(e, '#work')}
                  className="hover:text-white transition-colors"
                >
                  Our Work &amp; Inspiration
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#quote"
                  onClick={(e) => handleNavClick(e, '#quote')}
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8DD75C] mb-4">
              Landscaping Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2 text-xs text-neutral-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onSelectService(s.title)}
                    className="hover:text-[#8DD75C] text-left transition-colors truncate w-full"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#8DD75C] mb-4">
              Business Information
            </h4>
            
            <div className="flex items-start gap-3 text-xs text-neutral-300">
              <Mail className="w-4 h-4 text-[#8DD75C] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] text-neutral-400">Email Enquiries:</span>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-[#8DD75C] transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-neutral-300">
              <MapPin className="w-4 h-4 text-[#8DD75C] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] text-neutral-400">Location:</span>
                <span>{BUSINESS_INFO.location}</span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-neutral-300">
              <Clock className="w-4 h-4 text-[#8DD75C] shrink-0 mt-0.5" />
              <div>
                <span className="block text-[11px] text-neutral-400">Availability:</span>
                <span>{BUSINESS_INFO.availability}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenFacebookModal}
                className="inline-flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#8DD75C]" />
                <span>Facebook: {BUSINESS_INFO.facebookName}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved. Heanor, United Kingdom.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Driveways</span>
            <span>·</span>
            <span>Patios</span>
            <span>·</span>
            <span>Fencing</span>
            <span>·</span>
            <span>Garden Transformations</span>
            <span>·</span>
            <span>Groundworks</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
