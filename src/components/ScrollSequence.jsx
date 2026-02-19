import { useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 60;

function drawFrame(ctx, width, height, progress) {
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, width, height);

  const cx = width / 2;
  const cy = height / 2;

  const zoom = 3.2 - progress * 2.4;
  const rotation = progress * Math.PI * 0.4;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(zoom, zoom);
  ctx.rotate(rotation * 0.08);

  // Hexagonal grid - more visible
  const hexSize = 30;
  const hexGap = hexSize * 1.8;
  const gridOpacity = 0.04 + progress * 0.06;
  
  for (let row = -10; row <= 10; row++) {
    for (let col = -10; col <= 10; col++) {
      const x = col * hexGap + (row % 2) * (hexGap / 2);
      const y = row * hexGap * 0.866;
      const dist = Math.sqrt(x * x + y * y);
      
      if (dist > 450) continue;
      
      const alpha = gridOpacity * Math.max(0, 1 - dist / 450);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i + Math.PI / 6;
        const hx = x + hexSize * 0.5 * Math.cos(angle);
        const hy = y + hexSize * 0.5 * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.lineWidth = 0.4 / zoom;
      ctx.stroke();
    }
  }

  // Concentric rings - brighter
  const numRings = 10;
  for (let i = 0; i < numRings; i++) {
    const baseR = (i + 1) * 35;
    const pulse = Math.sin(progress * Math.PI * 2 + i * 0.5) * 3;
    const r = baseR + pulse;
    const alpha = 0.03 + (i / numRings) * 0.06 * (0.5 + progress);
    
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.lineWidth = (0.5 + i * 0.08) / zoom;
    ctx.stroke();
  }

  // Orbital dots - larger and brighter
  const numOrbits = 6;
  for (let i = 0; i < numOrbits; i++) {
    const orbitR = 50 + i * 55;
    const speed = (i + 1) * 0.7;
    const angle = progress * Math.PI * speed + (i * Math.PI * 2) / numOrbits;
    const dx = Math.cos(angle) * orbitR;
    const dy = Math.sin(angle) * orbitR;
    
    const dotAlpha = Math.min(1, progress * 2.5) * 0.5;
    ctx.beginPath();
    ctx.arc(dx, dy, (3 + i * 0.5) / zoom, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${dotAlpha})`;
    ctx.fill();
    
    // Trail
    for (let t = 1; t <= 5; t++) {
      const trailAngle = angle - t * 0.12;
      const tx = Math.cos(trailAngle) * orbitR;
      const ty = Math.sin(trailAngle) * orbitR;
      ctx.beginPath();
      ctx.arc(tx, ty, (2 - t * 0.25) / zoom, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${dotAlpha * (1 - t / 6)})`;
      ctx.fill();
    }
  }

  // Node network - tech skills - MORE VISIBLE
  const nodes = [
    { x: -160, y: -100, label: 'React', size: 1.3 },
    { x: 140, y: -150, label: 'JavaScript', size: 1.2 },
    { x: -100, y: 130, label: 'Python', size: 1.1 },
    { x: 180, y: 80, label: 'SQL', size: 1.0 },
    { x: 10, y: -200, label: 'CSS', size: 1.0 },
    { x: -200, y: 40, label: 'TypeScript', size: 1.1 },
    { x: 80, y: 180, label: 'Git', size: 0.9 },
    { x: -50, y: 70, label: 'Node.js', size: 1.0 },
    { x: 220, y: -60, label: 'HTML', size: 0.9 },
    { x: -140, y: -200, label: 'C#', size: 0.9 },
    { x: 60, y: -70, label: 'APIs', size: 0.9 },
    { x: -230, y: -110, label: 'Power BI', size: 0.8 },
    { x: 250, y: 160, label: 'Tailwind', size: 0.9 },
    { x: -60, y: -140, label: 'GSAP', size: 0.8 },
  ];

  const nodeAppear = Math.max(0, (progress - 0.1) * 1.3);

  // Connection lines
  nodes.forEach((node, idx) => {
    const delay = idx * 0.05;
    const np = Math.min(1, Math.max(0, nodeAppear - delay));
    if (np <= 0) return;

    const nx = node.x + Math.sin(progress * 2.5 + idx) * 5;
    const ny = node.y + Math.cos(progress * 1.8 + idx) * 5;

    nodes.forEach((other, oidx) => {
      if (oidx <= idx) return;
      const op = Math.min(1, Math.max(0, nodeAppear - oidx * 0.05));
      if (op <= 0) return;
      const ox = other.x + Math.sin(progress * 2.5 + oidx) * 5;
      const oy = other.y + Math.cos(progress * 1.8 + oidx) * 5;
      const dist = Math.sqrt((nx - ox) ** 2 + (ny - oy) ** 2);
      if (dist < 250) {
        ctx.beginPath();
        ctx.moveTo(nx, ny);
        ctx.lineTo(ox, oy);
        const lineAlpha = 0.06 * np * op * (1 - dist / 250);
        ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
        ctx.lineWidth = 0.5 / zoom;
        ctx.stroke();
      }
    });
  });

  // Nodes on top - BIGGER and BRIGHTER
  nodes.forEach((node, idx) => {
    const delay = idx * 0.05;
    const np = Math.min(1, Math.max(0, nodeAppear - delay));
    if (np <= 0) return;

    const nx = node.x + Math.sin(progress * 2.5 + idx) * 5;
    const ny = node.y + Math.cos(progress * 1.8 + idx) * 5;

    // Glow - bigger
    const glowR = (12 * node.size) / zoom;
    const glow = ctx.createRadialGradient(nx, ny, 0, nx, ny, glowR);
    glow.addColorStop(0, `rgba(255, 255, 255, ${0.15 * np})`);
    glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.beginPath();
    ctx.arc(nx, ny, glowR, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    // Dot - bigger
    ctx.beginPath();
    ctx.arc(nx, ny, (3.5 * node.size) / zoom, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${0.45 * np})`;
    ctx.fill();

    // Label - MORE VISIBLE
    if (progress > 0.25) {
      const labelAlpha = Math.min(1, (progress - 0.25) * 2.5) * np;
      ctx.font = `400 ${Math.max(9, 12 * node.size) / zoom}px Inter, sans-serif`;
      ctx.fillStyle = `rgba(255, 255, 255, ${0.55 * labelAlpha})`;
      ctx.textAlign = 'center';
      ctx.fillText(node.label, nx, ny - (14 * node.size) / zoom);
    }
  });

  // Center pulsing core - BIGGER
  const coreSize = 6 + Math.sin(progress * 8) * 2;
  const coreGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, (coreSize * 5) / zoom);
  coreGlow.addColorStop(0, `rgba(255, 255, 255, ${0.25 + progress * 0.15})`);
  coreGlow.addColorStop(0.5, `rgba(255, 255, 255, ${0.06 + progress * 0.04})`);
  coreGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.beginPath();
  ctx.arc(0, 0, (coreSize * 5) / zoom, 0, Math.PI * 2);
  ctx.fillStyle = coreGlow;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(0, 0, coreSize / zoom, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${0.5 + progress * 0.2})`;
  ctx.fill();

  // Center text - MORE VISIBLE
  if (progress > 0.5) {
    ctx.save();

    const currentTransform = ctx.getTransform();
  ctx.setTransform(
    currentTransform.a,  
    currentTransform.b,  
    currentTransform.c,  
    currentTransform.d,  
    currentTransform.e,  
    currentTransform.f   
  );
      const textAlpha = Math.min(1, (progress - 0.5) * 3);
    ctx.font = `300 ${18 / zoom}px Inter, sans-serif`;
    ctx.fillStyle = `rgba(255, 255, 255, ${0.7 * textAlpha})`;
    ctx.textAlign = 'center';
    ctx.fillText('Full-Stack Developer', 0, 30 / zoom);
    
    if (progress > 0.7) {
      const subAlpha = Math.min(1, (progress - 0.7) * 4);
      ctx.font = `300 ${11 / zoom}px Inter, sans-serif`;
      ctx.fillStyle = `rgba(255, 255, 255, ${0.4 * subAlpha})`;
      ctx.fillText('50+ Projects  •  9 Certificates  •  5 Portfolios', 0, 50 / zoom);
    }
    ctx.restore();
  }

  ctx.restore();

  // Bottom progress bar
  const barWidth = width * 0.2;
  const barX = (width - barWidth) / 2;
  const barY = height - 30;
  ctx.fillStyle = 'rgba(255,255,255,0.06)';
  ctx.fillRect(barX, barY, barWidth, 2);
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.fillRect(barX, barY, barWidth * progress, 2);
}

export const ScrollSequence = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const rafRef = useRef(null);

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== Math.floor(rect.width * dpr) || canvas.height !== Math.floor(rect.height * dpr)) {
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const progress = frameRef.current / TOTAL_FRAMES;
    drawFrame(ctx, rect.width, rect.height, Math.min(1, Math.max(0, progress)));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const maxScroll = container.scrollHeight - container.clientHeight;
      const ratio = maxScroll > 0 ? scrollTop / maxScroll : 0;
      frameRef.current = ratio * TOTAL_FRAMES;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(render);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    render();

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [render]);

  useEffect(() => {
    const handleResize = () => render();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [render]);

  return (
    <section className="relative bg-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase font-light mb-4">
          Interactive visualization
        </p>
        <h2 className="text-white text-2xl md:text-4xl font-extralight tracking-tight mb-2">
          My Tech Universe
        </h2>
        <p className="text-white/40 text-sm font-light max-w-md mb-4">
          Scroll în cadrul acestei componente pentru a explora o vizualizare interactivă a skill-urilor mele tehnice.
        </p>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 border border-white/30 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-white/50 rounded-full animate-bounce" />
          </div>
          <span className="text-white/25 text-[10px] tracking-wider uppercase">Scroll down inside</span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full overflow-y-scroll"
        style={{ height: '100vh' }}
      >
        <canvas
          ref={canvasRef}
          className="sticky top-0 left-0 w-full pointer-events-none"
          style={{ height: '100vh' }}
        />
        <div style={{ height: '500vh', marginTop: '-100vh' }} />
      </div>
    </section>
  );
};
