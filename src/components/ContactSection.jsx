import { useEffect, useRef } from 'react';
import { personalInfo } from '../data/mock';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.contact-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-black py-32 md:py-44"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="contact-reveal mb-20">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-light mb-4">
            Contact
          </p>
          <h2 className="text-white text-[clamp(2rem,5vw,4.5rem)] font-extralight tracking-tight leading-tight max-w-2xl">
            Let's build something <span className="text-white/30">together</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <a
            href={`mailto:${personalInfo.email}`}
            className="contact-reveal group border border-white/8 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
          >
            <Mail size={18} className="text-white/30 mb-4 group-hover:text-white/60 transition-colors" />
            <p className="text-white/25 text-xs tracking-[0.2em] uppercase font-light mb-2">Email</p>
            <p className="text-white/70 text-sm font-light group-hover:text-white/90 transition-colors">
              {personalInfo.email}
            </p>
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="contact-reveal group border border-white/8 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
          >
            <Phone size={18} className="text-white/30 mb-4 group-hover:text-white/60 transition-colors" />
            <p className="text-white/25 text-xs tracking-[0.2em] uppercase font-light mb-2">Phone</p>
            <p className="text-white/70 text-sm font-light group-hover:text-white/90 transition-colors">
              {personalInfo.phone}
            </p>
          </a>

          <div className="contact-reveal group border border-white/8 rounded-2xl p-8">
            <MapPin size={18} className="text-white/30 mb-4" />
            <p className="text-white/25 text-xs tracking-[0.2em] uppercase font-light mb-2">Location</p>
            <p className="text-white/70 text-sm font-light">
              {personalInfo.location}
            </p>
          </div>
        </div>

        <div className="contact-reveal flex flex-col md:flex-row gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-white/40 text-sm font-light hover:text-white/70 transition-colors duration-300"
          >
            GitHub
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-white/40 text-sm font-light hover:text-white/70 transition-colors duration-300"
          >
            LinkedIn
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
