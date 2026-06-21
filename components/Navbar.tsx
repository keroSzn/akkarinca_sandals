'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const links = [
  { href: '#about',      label: 'Hakkımızda' },
  { href: '#collection', label: 'Koleksiyon' },
  { href: '#contact',    label: 'İletişim' },
];

function Logo() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-cormorant)',
        fontSize: '1.4rem',
        fontWeight: 600,
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 0,
      }}
    >
      {/* "AK" — krem/beyaz */}
      <span
        className={hovered ? 'logo-shimmer' : ''}
        style={{
          color: hovered ? undefined : '#f0ead8',
          transition: 'color 0.3s',
        }}
      >
        AK
      </span>

      {/* "KARINCA" — altın */}
      <span
        className={hovered ? 'logo-shimmer' : ''}
        style={{
          color: hovered ? undefined : '#c9a84c',
          animationDelay: hovered ? '0.06s' : '0s',
          transition: 'color 0.3s',
        }}
      >
        KARINCA
      </span>

      {/* Parlayan alt çizgi */}
      <motion.span
        animate={hovered
          ? { scaleX: 1, opacity: 1 }
          : { scaleX: 0, opacity: 0 }
        }
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          bottom: -5,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(to right, transparent, #f0ead8 30%, #c9a84c 50%, #f0ead8 70%, transparent)',
          transformOrigin: 'center',
          display: 'block',
          boxShadow: '0 0 8px rgba(201,168,76,0.6)',
        }}
      />
    </Link>
  );
}

function NavLink({ href, label, delay }: { href: string; label: string; delay: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={{ position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={href}
        style={{
          color: hovered ? '#c9a84c' : '#d4ccb8',
          textDecoration: 'none',
          fontSize: '0.75rem',
          letterSpacing: hovered ? '0.28em' : '0.2em',
          textTransform: 'uppercase',
          position: 'relative',
          display: 'inline-block',
          paddingBottom: '6px',
          transition: 'color 0.3s, letter-spacing 0.3s',
          textShadow: hovered ? '0 0 14px rgba(201,168,76,0.5)' : 'none',
        }}
      >
        {label}

        {/* Altın nokta */}
        <motion.span
          animate={hovered ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 3, scale: 0.5 }}
          transition={{ duration: 0.22 }}
          style={{
            position: 'absolute',
            bottom: -2,
            left: '50%',
            translateX: '-50%',
            width: 4,
            height: 4,
            borderRadius: '50%',
            background: '#c9a84c',
            display: 'block',
            boxShadow: '0 0 8px rgba(201,168,76,0.9)',
          }}
        />
      </Link>
    </motion.div>
  );
}

export default function Navbar() {
  return (
    <nav
      className="py-4 md:py-6 px-6 md:px-16"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* gradient backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(26,43,31,0.92), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* ── LOGO ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <Logo />
      </motion.div>

      {/* ── NAV LINKS ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        style={{ display: 'flex', gap: '2.5rem', position: 'relative', zIndex: 1 }}
      >
        {links.map((link, i) => (
          <NavLink key={link.href} href={link.href} label={link.label} delay={0.3 + i * 0.1} />
        ))}
      </motion.div>
    </nav>
  );
}
