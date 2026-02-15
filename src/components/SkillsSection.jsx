import { useEffect, useRef } from 'react';
import { skills } from '../data/mock';
import { InfiniteMarquee } from './InfiniteMarquee';
import { skillsMarquee } from '../data/mock';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SkillCategory = ({ title, items }) => (
  <div className="skills-reveal">
    <p className="text-black/35 text-xs tracking-[0.2em] uppercase font-light mb-4">
      {title}
    </p>
    <div className="flex flex-wrap gap-2">
      {items.map((skill) => (
        <span
          key={skill}
          className="text-black/65 text-sm font-light px-4 py-2 border border-black/10 rounded-full hover:border-black/25 hover:text-black/85 transition-all duration-300 cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export const SkillsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.skills-reveal').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.08,
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

  const categories = [
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Tools & Platforms', items: skills.tools },
    { title: 'Marketing & Analytics', items: skills.marketing }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative bg-[#fafafa] py-32 md:py-44 overflow-hidden"
    >
      {/* Infinite Marquee Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none">
        <InfiniteMarquee
          items={skillsMarquee}
          speed={30}
          direction="left"
          className="opacity-40 mb-8"
          dark={true}
        />
        <InfiniteMarquee
          items={[...skillsMarquee].reverse()}
          speed={25}
          direction="right"
          className="opacity-25"
          dark={true}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="skills-reveal mb-20">
          <p className="text-black/40 text-xs tracking-[0.3em] uppercase font-light mb-4">
            Skills
          </p>
          <h2 className="text-black text-[clamp(2rem,4vw,3.5rem)] font-extralight tracking-tight leading-tight">
            Technical expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {categories.map((cat) => (
            <SkillCategory key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};
