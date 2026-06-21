'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { useLightbox } from './LightboxContext';
import { getImagePath } from '@/utils/imagePath';

// About section vine paths
const aboutVines = [
  { d: 'M 0 0 C 50 30, 80 70, 60 120 C 45 160, 80 190, 50 230', stroke: '#4a7c52', sw: 2 },
  { d: 'M 60 120 C 100 110, 150 100, 200 95', stroke: '#4a7c52', sw: 1.2 },
  { d: 'M 1440 700 C 1390 670, 1360 630, 1380 580 C 1395 540, 1360 510, 1390 470', stroke: '#4a7c52', sw: 2 },
  { d: 'M 1380 580 C 1340 570, 1290 560, 1240 558', stroke: '#4a7c52', sw: 1.2 },
];

const aboutLeaves = [
  { cx: 205,  cy: 93,  rx: 10, ry: 6, fill: '#3d6b45', opacity: 0.7, rotate: -15 },
  { cx: 52,   cy: 228, rx: 10, ry: 6, fill: '#3d6b45', opacity: 0.7, rotate: 5 },
  { cx: 1237, cy: 556, rx: 10, ry: 6, fill: '#3d6b45', opacity: 0.7, rotate: 10 },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function AboutSection() {
  const { openLightbox } = useLightbox();

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        background: '#1a2b1f',
        minHeight: '80vh',
        overflow: 'hidden',
        padding: '8rem 0',
      }}
    >
      {/* About vines */}
      <svg
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'visible' }}
      >
        {aboutVines.map((vine, i) => (
          <motion.path
            key={i}
            d={vine.d}
            fill="none"
            stroke={vine.stroke}
            strokeWidth={vine.sw}
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.8 + i * 0.2, delay: i * 0.1, ease: 'easeInOut' }}
          />
        ))}
        {aboutLeaves.map((leaf, i) => (
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
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 1.2 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ transformOrigin: `${leaf.cx}px ${leaf.cy}px` }}
          />
        ))}
      </svg>

      {/* Content wrapper centered to match site width */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 px-6 md:px-16 items-center"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{ position: 'relative' }}
        >
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.5em',
              textTransform: 'uppercase',
              color: '#c9a84c',
              marginBottom: '1rem',
            }}
          >
            Hikayemiz
          </motion.p>

          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#f0ead8',
              marginBottom: '2rem',
            }}
          >
            Doğadan ilham,<br />
            <span style={{ color: '#c9a84c', fontStyle: 'italic' }}>ustalıktan</span> doğan
          </motion.h2>

          <motion.div
            variants={itemVariants}
            style={{
              width: 60,
              height: 1,
              background: '#c9a84c',
              margin: '2rem 0',
              opacity: 0.5,
            }}
          />

          <motion.p
            variants={itemVariants}
            style={{ color: '#d4ccb8', fontSize: '0.95rem', lineHeight: 1.9, maxWidth: '42ch' }}
          >
            Akkarınca, toprağa saygı duyan ellerin yarattığı terlik geleneğini yaşatır. Her çift,
            seçilmiş ham maddelerle el işçiliğiyle şekillendirilir — fabrika koridorlarında değil,
            ustanın atölyesinde.
          </motion.p>

          <motion.p
            variants={itemVariants}
            style={{ color: '#d4ccb8', fontSize: '0.95rem', lineHeight: 1.9, maxWidth: '42ch', marginTop: '1rem' }}
          >
            Markamızın sembolü olan kanatlı ak karınca, doğanın en çalışkan ve en hafif varlığından
            ilham alır. Terliklerimizdeki konfor da tam böyle — fark edilmeden taşır.
          </motion.p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          onClick={() => openLightbox(getImagePath('/images/ana_menu.png'), 'Akkarınca — Ana Model')}
          style={{ position: 'relative', height: 500, borderRadius: 2, cursor: 'zoom-in' }}
          title="Büyütmek için tıklayın"
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid rgba(201,168,76,0.4)',
              borderRadius: 2,
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #2e4a30 0%, #3d2b1a 100%)',
              overflow: 'hidden',
              position: 'relative',
              borderRadius: 2,
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Image
                src={getImagePath('/images/ana_menu.png')}
                alt="Akkarınca El Yapımı Terlik"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
              {/* Subtle overlay for blending */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 70%, rgba(26,43,31,0.3) 100%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Zoom badge overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  background: 'rgba(26, 43, 31, 0.75)',
                  border: '1px solid rgba(201, 168, 76, 0.4)',
                  borderRadius: '50%',
                  width: '2.5rem',
                  height: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c9a84c',
                  fontSize: '1.1rem',
                  pointerEvents: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  zIndex: 12,
                }}
              >
                🔍
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
