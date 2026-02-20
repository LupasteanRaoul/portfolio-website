import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Download, X, FileText } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';

// Modal pentru selectare CV
const CVModal = ({ isOpen, onClose, t }) => {
  if (!isOpen) return null;

  const handleDownload = (lang) => {
    const fileName = lang === 'ro' 
      ? '/Lupastean_Raoul_CV_RO.pdf' 
      : '/Lupastean_Raoul_CV_EN.pdf';
    
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText size={28} className="text-white/60" />
          </div>
          <h3 className="text-white text-xl font-light">{t.selectCVLanguage}</h3>
        </div>

        {/* Options */}
        <div className="space-y-3">
          <button
            onClick={() => handleDownload('ro')}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇷🇴</span>
              <span className="text-white/80 font-light">{t.downloadRO}</span>
            </div>
            <Download size={18} className="text-white/40 group-hover:text-white transition-colors" />
          </button>

          <button
            onClick={() => handleDownload('en')}
            className="w-full flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇬🇧</span>
              <span className="text-white/80 font-light">{t.downloadEN}</span>
            </div>
            <Download size={18} className="text-white/40 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Cancel */}
        <button
          onClick={onClose}
          className="w-full mt-6 py-3 text-white/40 text-sm font-light hover:text-white/60 transition-colors"
        >
          {t.cancel}
        </button>
      </div>
    </div>
  );
};

export const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);
  const ringRef = useRef(null);
  
  const [showCVModal, setShowCVModal] = useState(false);
  const { t, personalInfo } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current?.children || [],
        { y: 80, opacity: 0, rotateX: -15 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2, stagger: 0.15 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          statsRef.current?.children || [],
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        );

      if (ringRef.current) {
        gsap.to(ringRef.current, { rotation: 360, duration: 60, repeat: -1, ease: 'none' });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg ref={ringRef} width="700" height="700" viewBox="0 0 700 700" className="opacity-[0.08] w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#666666" />
            </linearGradient>
          </defs>
          <circle cx="350" cy="350" r="280" fill="none" stroke="url(#ringGrad)" strokeWidth="0.5" />
          <circle cx="350" cy="350" r="220" fill="none" stroke="url(#ringGrad)" strokeWidth="0.3" />
          <circle cx="350" cy="350" r="160" fill="none" stroke="url(#ringGrad)" strokeWidth="0.5" />
          <circle cx="350" cy="350" r="340" fill="none" stroke="url(#ringGrad)" strokeWidth="0.2" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line key={angle} x1="350" y1="350" x2={350 + 340 * Math.cos((angle * Math.PI) / 180)} y2={350 + 340 * Math.sin((angle * Math.PI) / 180)} stroke="url(#ringGrad)" strokeWidth="0.2" />
          ))}
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '128px 128px' }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/50 text-xs tracking-[0.2em] uppercase font-light">{t.available}</span>
          </div>

          <div ref={titleRef} style={{ perspective: '1000px' }}>
            <p className="text-white/50 text-lg md:text-xl font-light mb-4 tracking-wide">{t.hello}</p>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-extralight text-white leading-[0.95] tracking-[-0.03em] mb-4 hero-name-shine">{personalInfo.name.split(' ')[0]}</h1>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-extralight text-white/30 leading-[0.95] tracking-[-0.03em]">{personalInfo.name.split(' ')[1]}</h1>
          </div>

          <div ref={subtitleRef} className="mt-8 max-w-xl">
            <p className="text-white/55 text-base md:text-lg font-light leading-relaxed">{personalInfo.description}</p>
          </div>

          <div ref={statsRef} className="flex gap-10 md:gap-16 mt-16">
            {t.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-white text-3xl md:text-4xl font-extralight tracking-tight">{stat.number}</span>
                <span className="text-white/35 text-xs tracking-[0.15em] uppercase mt-1 font-light">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Butoane */}
          <div className="flex items-center gap-4 mt-16">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300">
              <Github size={16} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300">
              <Linkedin size={16} />
            </a>
            <span className="w-px h-6 bg-white/10 mx-2" />
            
            <button 
              onClick={() => setShowCVModal(true)}
              className="text-white/50 text-sm font-light hover:text-white/80 transition-colors duration-300 flex items-center gap-2"
            >
              <Download size={12} />
              {t.downloadCV}
            </button>
            
            <span className="w-px h-6 bg-white/10 mx-1" />
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-white/50 text-sm font-light hover:text-white/80 transition-colors duration-300 flex items-center gap-2">
              {t.viewProjects}
              <ArrowDown size={12} className="rotate-[-90deg]" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-light">{t.scroll}</span>
          <ArrowDown size={14} className="text-white/30 animate-bounce" />
        </div>
      </div>

      <CVModal isOpen={showCVModal} onClose={() => setShowCVModal(false)} t={t} />
    </section>
  );
};
