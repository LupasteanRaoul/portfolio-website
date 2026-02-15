import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ParallaxReveal = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
        }
      });

      tl.fromTo(
        line1Ref.current,
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1 }
      )
        .fromTo(
          line2Ref.current,
          { y: 80, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 1 },
          '-=0.5'
        )
        .fromTo(
          line3Ref.current,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.5'
        )
        .to(overlayRef.current, { scaleX: 1, duration: 1.5 }, '-=0.3')
        .to(
          [line1Ref.current, line2Ref.current, line3Ref.current],
          { y: -40, opacity: 0.3, duration: 1 }
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div ref={textRef} className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center" style={{ perspective: '800px' }}>
        <p
          ref={line1Ref}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-extralight text-white leading-[1.1] tracking-[-0.02em]"
        >
          Passion meets
        </p>
        <p
          ref={line2Ref}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-extralight leading-[1.1] tracking-[-0.02em]"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          precision.
        </p>
        <p
          ref={line3Ref}
          className="text-white/35 text-base md:text-lg font-extralight mt-8 max-w-lg mx-auto leading-relaxed"
        >
          Fiecare proiect este o oportunitate de a crea ceva remarcabil.
          De la concept la cod, fiecare detaliu contează.
        </p>

        {/* Decorative line */}
        <div className="mt-12 flex justify-center">
          <div
            ref={overlayRef}
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent origin-left"
            style={{ width: '200px', transform: 'scaleX(0)' }}
          />
        </div>
      </div>
    </section>
  );
};
