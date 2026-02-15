import { useEffect, useRef } from 'react';
import { personalInfo, stats } from '../data/mock';
import { MapPin, Mail, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.about-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
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
      id="about"
      ref={sectionRef}
      className="relative bg-[#fafafa] py-32 md:py-44"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="about-reveal mb-20">
          <p className="text-black/40 text-xs tracking-[0.3em] uppercase font-light mb-4">
            About
          </p>
          <h2 className="text-black text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-tight leading-tight max-w-3xl">
            O combinație unică de <span className="text-black/50">competențe tehnice</span> și <span className="text-black/50">viziune business</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div className="about-reveal">
            <p className="text-black/65 text-base md:text-lg font-light leading-[1.8]">
              Sunt un developer la început de drum în tech, cu un Master în Marketing (nota 10.00)
              și experiență ca Manager de Vânzări. Aduc o perspectivă unică în dezvoltarea software
              — înțeleg atât codul cât și utilizatorul.
            </p>
            <p className="text-black/65 text-base md:text-lg font-light leading-[1.8] mt-6">
              Am construit peste 50 de proiecte, obținut 8 certificări FreeCodeCamp și dezvoltat
              5 portfolio-uri comprehensive. Sunt pasionat de tehnologie, învățare continuă
              și construirea de experiențe web elegante.
            </p>

            <div className="flex flex-col gap-3 mt-10">
              <div className="flex items-center gap-3 text-black/50">
                <MapPin size={14} />
                <span className="text-sm font-light">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-black/50">
                <Mail size={14} />
                <span className="text-sm font-light">{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-3 text-black/50">
                <Phone size={14} />
                <span className="text-sm font-light">{personalInfo.phone}</span>
              </div>
            </div>
          </div>

          <div className="about-reveal">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="border border-black/8 rounded-2xl p-6 hover:border-black/15 transition-colors duration-300"
                >
                  <span className="text-black text-3xl md:text-4xl font-extralight tracking-tight block">
                    {s.number}
                  </span>
                  <span className="text-black/40 text-xs tracking-[0.15em] uppercase mt-2 block font-light">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-black/[0.03]">
              <p className="text-xs text-black/40 tracking-[0.2em] uppercase font-light mb-3">Languages</p>
              <div className="flex gap-6">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.name}>
                    <span className="text-black/80 text-sm font-light">{lang.name}</span>
                    <span className="text-black/35 text-xs ml-2 font-light">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
