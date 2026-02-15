import { useEffect, useRef } from 'react';
import { certifications } from '../data/mock';
import { ExternalLink, Award, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CertificationsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.cert-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
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
      id="certifications"
      ref={sectionRef}
      className="relative bg-[#fafafa] py-32 md:py-44"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="cert-reveal mb-20">
          <p className="text-black/40 text-xs tracking-[0.3em] uppercase font-light mb-4">
            Certifications
          </p>
          <h2 className="text-black text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-tight leading-tight">
            Continuous learning
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="cert-reveal border border-black/8 rounded-2xl p-8 hover:border-black/15 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                {cert.id === 1 ? (
                  <BookOpen size={18} className="text-black/40" />
                ) : (
                  <Award size={18} className="text-black/40" />
                )}
                <h3 className="text-black/90 text-lg font-light tracking-tight">
                  {cert.category}
                </h3>
              </div>

              <ul className="space-y-3 mb-6">
                {cert.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-black/60 text-sm font-light flex items-start gap-3"
                  >
                    <span className="text-black/25 mt-0.5 flex-shrink-0 text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black/50 text-xs tracking-wide hover:text-black/80 transition-colors duration-300"
                >
                  View all certificates
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
