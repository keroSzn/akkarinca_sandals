'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import HeroVines from './HeroVines';

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const heroY          = useTransform(scrollYProgress, [0, 0.4], [0, 80]);
  const contentY       = useTransform(scrollYProgress, [0, 0.4], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const vinesY         = useTransform(scrollYProgress, [0, 0.4], [0, 60]);

  return (
    <section
      id="hero"
      style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 30% 60%, rgba(74,124,82,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(201,168,76,0.08) 0%, transparent 50%), #1a2b1f',
          y: heroY,
        }}
      />

      {/* Vines */}
      <motion.div style={{ position: 'absolute', inset: 0, y: vinesY }}>
        <HeroVines />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{
          position: 'relative',
          textAlign: 'center',
          zIndex: 10,
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        {/* "by Aktermal Mest" — ayrı satır, küçük caps */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '0.5rem',
          }}
        >
          by Aktermal Mest
        </motion.p>

        {/* Divider line under byline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            width: 40,
            height: 1,
            background: 'rgba(201,168,76,0.4)',
            margin: '0 auto 1.8rem',
          }}
        />

        {/* Brand name — "Akkarınca" on one line, "ınca" italic gold */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(4rem, 10vw, 9rem)',
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            color: '#f0ead8',
            whiteSpace: 'nowrap',
          }}
        >
          Ak<em style={{ fontStyle: 'italic', color: '#c9a84c' }}>karınca</em>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          style={{
            marginTop: '2rem',
            fontSize: '0.8rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#d4ccb8',
          }}
        >
          Doğanın adımı — El yapımı terlikler
        </motion.p>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          fontSize: '0.6rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: '#c9a84c',
        }}
      >
        <div
          className="animate-scroll-pulse"
          style={{
            width: 1,
            height: 60,
            background: 'linear-gradient(to bottom, #c9a84c, transparent)',
          }}
        />
        <span>Kaydır</span>
      </motion.div>
    </section>
  );
}
