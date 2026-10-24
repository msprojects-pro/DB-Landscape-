import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Shovel } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'work', 'about', 'quote'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Our Work', href: '#work', id: 'work' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#quote', id: 'quote' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white ${
        scrolled
          ? 'shadow-xs border-b border-neutral-200/80 py-3.5'
          : 'border-b border-neutral-100 py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-[#173D27] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#173D27] text-[#8DD75C] shadow-xs">
              <span className="font-extrabold text-sm tracking-tighter">DB</span>
            </span>
            <span className="text-lg lg:text-xl font-bold tracking-tight text-[#173D27]">
              {BUSINESS_INFO.name}
            </span>
          </a>

          {/* Zone 2: 4–5 single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#202720]/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#173D27] ${
                    isActive ? 'text-[#173D27] font-semibold' : 'text-[#202720]/75'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8DD75C] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary CTA button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs lg:text-sm font-semibold text-[#173D27] bg-[#8DD75C] hover:bg-[#7ec74e] active:scale-[0.98] rounded-lg shadow-xs hover:shadow-sm transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DD75C]"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 text-[#173D27]" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#173D27] hover:bg-[#F3F8EF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DD75C]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-b border-neutral-200 bg-white overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#F3F8EF] text-[#173D27] font-semibold'
                      : 'text-[#202720] hover:bg-neutral-50'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#173D27] bg-[#8DD75C] hover:bg-[#7ec74e] rounded-lg shadow-sm transition-all"
                >
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
