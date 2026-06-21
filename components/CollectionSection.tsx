'use client';

import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

// Collection vines
const colVines = [
  { d: 'M 0 200 C 40 250, 30 310, 60 370 C 85 420, 60 480, 80 540 C 100 590, 70 650, 100 710', stroke: '#4a7c52', sw: 2 },
  { d: 'M 60 370 C 100 360, 150 345, 190 335',  stroke: '#4a7c52', sw: 1.2 },
  { d: 'M 80 540 C 120 530, 170 515, 210 505',  stroke: '#4a7c52', sw: 1.2 },
  { d: 'M 1440 200 C 1400 250, 1410 310, 1380 370 C 1355 420, 1380 480, 1360 540 C 1340 590, 1370 650, 1340 710', stroke: '#4a7c52', sw: 2 },
  { d: 'M 1380 370 C 1340 360, 1290 345, 1250 335', stroke: '#4a7c52', sw: 1.2 },
  { d: 'M 1360 540 C 1320 530, 1270 515, 1230 505', stroke: '#4a7c52', sw: 1.2 },
];

const colLeaves = [
  { cx: 193,  cy: 333, rx: 11, ry: 6, fill: '#3d6b45', opacity: 0.7, rotate: -20 },
  { cx: 213,  cy: 503, rx: 11, ry: 6, fill: '#3d6b45', opacity: 0.7, rotate: 10 },
  { cx: 1247, cy: 333, rx: 11, ry: 6, fill: '#3d6b45', opacity: 0.7, rotate: 20 },
  { cx: 1227, cy: 503, rx: 11, ry: 6, fill: '#3d6b45', opacity: 0.7, rotate: -10 },
];

export default function CollectionSection() {
  const kadinProducts = products.filter(p => p.category === 'kadin');
  const erkekProducts = products.filter(p => p.category === 'erkek');

  return (
    <section
      id="collection"
      className="pt-20 lg:pt-32 pb-36 lg:pb-52 px-6 md:px-16"
      style={{
        position: 'relative',
        background: 'linear-gradient(to bottom, #1a2b1f, #111d14)',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Collection vines */}
      <svg
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}
      >
        {colVines.map((vine, i) => (
          <motion.path
            key={i}
            d={vine.d}
            fill="none"
            stroke={vine.stroke}
            strokeWidth={vine.sw}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.6 + i * 0.15, delay: i * 0.08, ease: 'easeInOut' }}
          />
        ))}
        {colLeaves.map((leaf, i) => (
          <motion.ellipse
            key={i}
            cx={leaf.cx}
            cy={leaf.cy}
            rx={leaf.rx}
            ry={leaf.ry}
            fill={leaf.fill}
            opacity={leaf.opacity}
            transform={`rotate(${leaf.rotate} ${leaf.cx} ${leaf.cy})`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 1 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ transformOrigin: `${leaf.cx}px ${leaf.cy}px` }}
          />
        ))}
      </svg>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '5rem', position: 'relative' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.5em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '0.5rem',
          }}
        >
          Koleksiyonumuz
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 300,
            color: '#f0ead8',
          }}
        >
          Seçilmiş <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Modeller</span>
        </motion.h2>
      </div>

      {/* ── KADIN MODELLERİ ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto 6rem', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.8rem',
              fontWeight: 300,
              color: '#f0ead8',
              letterSpacing: '0.05em',
            }}
          >
            Kadın <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Terlik Modelleri</span>
          </h3>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(201,168,76,0.3), transparent)' }} />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {kadinProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* ── ERKEK MODELLERİ ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: '1.8rem',
              fontWeight: 300,
              color: '#f0ead8',
              letterSpacing: '0.05em',
            }}
          >
            Erkek <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>Terlik Modelleri</span>
          </h3>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(201,168,76,0.3), transparent)' }} />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {erkekProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
