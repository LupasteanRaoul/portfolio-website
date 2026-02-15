import { useEffect, useRef } from 'react';
import { experience, education } from '../data/mock';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.exp-reveal').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: i * 0.1,
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
      id="experience"
      ref={sectionRef}
      className="relative bg-black py-32 md:py-44"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="exp-reveal mb-20">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-light mb-4">
            Experience
          </p>
          <h2 className="text-white text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-tight leading-tight">
            Where I've worked
          </h2>
        </div>

        <div className="space-y-0">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="exp-reveal group border-t border-white/8 py-12 md:py-16"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
                <div>
                  <p className="text-white/30 text-xs tracking-[0.2em] uppercase font-light mb-2">
                    {exp.period}
                  </p>
                  <h3 className="text-white text-xl md:text-2xl font-light tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="text-white/40 text-sm font-light mt-1">
                    {exp.company} — {exp.location}
                  </p>
                </div>
                <div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-white/55 text-sm md:text-base font-light leading-relaxed flex gap-3"
                      >
                        <span className="text-white/15 mt-1.5 flex-shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-24">
          <div className="exp-reveal mb-12">
            <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-light mb-4">
              Education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="exp-reveal border border-white/8 rounded-2xl p-8 hover:border-white/15 transition-colors duration-300"
              >
                <p className="text-white/25 text-xs tracking-[0.2em] uppercase font-light mb-3">
                  {edu.period}
                </p>
                <h3 className="text-white text-lg font-light tracking-tight mb-2">
                  {edu.degree}
                </h3>
                <p className="text-white/40 text-sm font-light">
                  {edu.institution}
                </p>
                <div className="mt-4 inline-flex items-center gap-2">
                  <span className="text-white/60 text-xs font-light">Nota:</span>
                  <span className="text-white text-sm font-light">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
