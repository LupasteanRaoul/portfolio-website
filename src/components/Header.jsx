import { useState, useEffect } from 'react';
import { navItems } from '../data/mock';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="text-white font-light text-lg tracking-wider hover:opacity-70 transition-opacity duration-300"
          >
            Raoul<span className="text-white/40 ml-1">/</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {t.navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-white/50 text-sm font-light tracking-wide hover:text-white transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/30 transition-all duration-300"
            >
              <Globe size={14} />
              <span className="text-xs font-medium uppercase">{language}</span>
            </button>

            {/* Contact Button */}
            <a
              href="mailto:lupasteanraoul@gmail.com"
              className="flex items-center gap-2 text-sm font-light text-black bg-white px-5 py-2 rounded-full hover:bg-white/90 transition-colors duration-300"
            >
              {t.contact}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-full border border-white/15 text-white/50"
            >
              <Globe size={12} />
              <span className="text-xs uppercase">{language}</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white/70 hover:text-white transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-white/5">
          <div className="px-6 py-8 space-y-4">
            {t.navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="block w-full text-left text-white/60 text-lg font-light py-2 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};