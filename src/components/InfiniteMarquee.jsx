import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const InfiniteMarquee = ({ items, speed = 40, direction = 'left', className = '', dark = false }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const children = track.children;
    if (!children.length) return;

    // Measure one set width
    let setWidth = 0;
    const halfLen = children.length / 2;
    for (let i = 0; i < halfLen; i++) {
      setWidth += children[i].offsetWidth;
    }

    const dur = setWidth / speed;
    const xFrom = direction === 'left' ? 0 : -setWidth;
    const xTo = direction === 'left' ? -setWidth : 0;

    gsap.fromTo(
      track,
      { x: xFrom },
      {
        x: xTo,
        duration: dur,
        ease: 'none',
        repeat: -1
      }
    );

    return () => gsap.killTweensOf(track);
  }, [items, speed, direction]);

  const doubled = [...items, ...items];

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex items-center gap-12 whitespace-nowrap w-max">
        {doubled.map((item, idx) => (
          <span
            key={`${item}-${idx}`}
            className={`${dark ? 'text-black/[0.06]' : 'text-white/10'} text-[clamp(1rem,3vw,1.5rem)] font-extralight tracking-wider select-none`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
