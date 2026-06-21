'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';

export default function AntCharacter() {
  const wingsRef = useRef<SVGGElement>(null);
  const antRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();

  // Wing flap animation loop
  useEffect(() => {
    let cancelled = false;

    const flapWings = async () => {
      if (cancelled || !wingsRef.current) return;
      await animate(
        wingsRef.current,
        { scaleY: [1, 0.7, 1], scaleX: [1, 1.15, 1] },
        { duration: 0.24, ease: 'easeInOut', repeat: Infinity }
      );
    };

    flapWings();
    return () => {
      cancelled = true;
    };
  }, []);

  // Scroll-based position with 5 waypoints
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const el = antRef.current;
      if (!el) return;

      const W = window.innerWidth;
      const H = window.innerHeight;

      const sections = [
        { prog: 0,    x: 60,      y: 160, rot: 0 },
        { prog: 0.25, x: W - 120, y: 300, rot: 15 },
        { prog: 0.5,  x: 80,      y: 500, rot: -10 },
        { prog: 0.75, x: W - 140, y: 650, rot: 20 },
        { prog: 1,    x: W / 2 - 35, y: H - 120, rot: 0 },
      ];

      let from = sections[0];
      let to = sections[1];
      for (let i = 0; i < sections.length - 1; i++) {
        if (progress >= sections[i].prog && progress <= sections[i + 1].prog) {
          from = sections[i];
          to = sections[i + 1];
          break;
        }
      }

      const seg = (progress - from.prog) / (to.prog - from.prog || 1);
      const eased = seg < 0.5 ? 2 * seg * seg : -1 + (4 - 2 * seg) * seg;

      const x = from.x + (to.x - from.x) * eased;
      const y = from.y + (to.y - from.y) * eased;
      const r = from.rot + (to.rot - from.rot) * eased;

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.transform = `rotate(${r}deg)`;
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div
      ref={antRef}
      style={{
        position: 'fixed',
        zIndex: 50,
        pointerEvents: 'none',
        width: 70,
        height: 70,
        top: 200,
        left: 80,
        filter: 'drop-shadow(0 0 8px rgba(201,168,76,0.4))',
        transition: 'left 0.3s ease, top 0.3s ease, transform 0.3s ease',
      }}
    >
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="70" height="70">
        {/* Wings */}
        <g ref={wingsRef} style={{ transformOrigin: '50px 36px' }}>
          <ellipse cx="38" cy="32" rx="18" ry="10" fill="rgba(240,234,216,0.25)" stroke="rgba(201,168,76,0.6)" strokeWidth="0.8" transform="rotate(-30 38 32)" />
          <ellipse cx="62" cy="32" rx="18" ry="10" fill="rgba(240,234,216,0.25)" stroke="rgba(201,168,76,0.6)" strokeWidth="0.8" transform="rotate(30 62 32)" />
          <ellipse cx="36" cy="40" rx="13" ry="7"  fill="rgba(240,234,216,0.15)" stroke="rgba(201,168,76,0.4)" strokeWidth="0.6" transform="rotate(-20 36 40)" />
          <ellipse cx="64" cy="40" rx="13" ry="7"  fill="rgba(240,234,216,0.15)" stroke="rgba(201,168,76,0.4)" strokeWidth="0.6" transform="rotate(20 64 40)" />
        </g>

        {/* Body */}
        <circle cx="50" cy="28" r="9" fill="#e8dfc4" />
        <ellipse cx="50" cy="44" rx="8" ry="9"  fill="#d4ccb0" />
        <ellipse cx="50" cy="63" rx="10" ry="14" fill="#c8bf9e" />

        {/* Eyes */}
        <circle cx="46" cy="26" r="2"   fill="#1a2b1f" />
        <circle cx="54" cy="26" r="2"   fill="#1a2b1f" />
        <circle cx="46.7" cy="25.3" r="0.7" fill="white" />
        <circle cx="54.7" cy="25.3" r="0.7" fill="white" />

        {/* Antennae */}
        <line x1="46" y1="20" x2="40" y2="10" stroke="#c8bf9e" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="40" cy="10" r="1.5" fill="#c9a84c" />
        <line x1="54" y1="20" x2="60" y2="10" stroke="#c8bf9e" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="60" cy="10" r="1.5" fill="#c9a84c" />

        {/* Legs left */}
        <line x1="43" y1="40" x2="28" y2="35" stroke="#b8b096" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="43" y1="44" x2="26" y2="44" stroke="#b8b096" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="43" y1="48" x2="28" y2="55" stroke="#b8b096" strokeWidth="1.2" strokeLinecap="round" />

        {/* Legs right */}
        <line x1="57" y1="40" x2="72" y2="35" stroke="#b8b096" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="57" y1="44" x2="74" y2="44" stroke="#b8b096" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="57" y1="48" x2="72" y2="55" stroke="#b8b096" strokeWidth="1.2" strokeLinecap="round" />

        {/* Abdomen pattern */}
        <ellipse cx="50" cy="60" rx="6" ry="4" fill="rgba(180,170,140,0.4)" />
        <ellipse cx="50" cy="67" rx="7" ry="3" fill="rgba(180,170,140,0.3)" />
      </svg>
    </div>
  );
}
