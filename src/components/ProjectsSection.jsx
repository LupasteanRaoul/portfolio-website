import { useEffect, useRef, useCallback } from 'react';
import { projects } from '../data/mock';
import { ExternalLink, Github } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(5px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease-out', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

export const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.proj-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
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
      id="projects"
      ref={sectionRef}
      className="relative bg-black py-32 md:py-44"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="proj-reveal mb-20">
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-light mb-4">
            Projects
          </p>
          <h2 className="text-white text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-tight leading-tight">
            Featured work
          </h2>
          <p className="text-white/40 text-sm font-light mt-4 max-w-md">
            5 portfolio-uri comprehensive cu peste 50 de proiecte
          </p>
        </div>

        <div className="space-y-0">
          {projects.map((proj) => (
            <TiltCard
              key={proj.id}
              className="proj-reveal group border-t border-white/8 py-10 md:py-14 hover:bg-white/[0.02] transition-colors duration-500"
            >
              <div className="grid md:grid-cols-[auto_1fr_auto] items-start gap-6 md:gap-12">
                <span className="text-white/[0.08] text-5xl md:text-7xl font-extralight tracking-tighter leading-none select-none">
                  {proj.num}
                </span>

                <div>
                  <h3 className="text-white text-xl md:text-2xl font-light tracking-tight mb-3 group-hover:text-white transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-white/50 text-sm md:text-base font-light leading-relaxed mb-4 max-w-lg">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-white/30 text-xs font-light px-3 py-1 border border-white/8 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-all duration-300"
                    title="GitHub"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
