'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { type Product } from '@/data/products';
import { useLightbox } from './LightboxContext';

function VineCorner() {
  return (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: 80,
        height: 80,
        pointerEvents: 'none',
        zIndex: 2,
      }}
    >
      <path
        d="M 80 0 C 60 10, 50 30, 40 50 C 35 60, 20 70, 0 80"
        fill="none"
        stroke="rgba(74,124,82,0.5)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse
        cx="42" cy="48" rx="7" ry="4"
        fill="rgba(61,107,69,0.5)"
        transform="rotate(-30 42 48)"
      />
    </svg>
  );
}

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const { openLightbox } = useLightbox();
  const [activeIdx, setActiveIdx] = useState(0);

  const activeVariant = product.variants[activeIdx] || product.variants[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ borderColor: 'rgba(201,168,76,0.5)' }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(201,168,76,0.15)',
        background: 'rgba(46,74,48,0.15)',
        borderRadius: 3,
        transition: 'border-color 0.4s',
      }}
    >
      <div style={{ padding: '2rem 1.5rem 1.5rem' }}>

        {/* ── IMAGE WRAP ── */}
        <div
          onClick={() => activeVariant && openLightbox(activeVariant.image, `${product.name} (${activeVariant.color})`)}
          style={{
            width: '100%',
            height: 260,
            background: 'linear-gradient(135deg, rgba(46,74,48,0.4), rgba(61,43,26,0.4))',
            marginBottom: '1.2rem',
            borderRadius: 2,
            overflow: 'hidden',
            position: 'relative',
            cursor: 'zoom-in',
          }}
          title={`${product.name} (${activeVariant.color}) - Büyütmek için tıklayın`}
        >
          {activeVariant ? (
            <motion.div
              key={activeVariant.image}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              style={{ width: '100%', height: '100%', position: 'relative' }}
            >
              <Image
                src={activeVariant.image}
                alt={`${product.name} - ${activeVariant.color}`}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{
                  objectFit: 'contain',
                }}
              />
              {/* Subtle gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(26,43,31,0.25) 100%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Zoom badge overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  right: '0.75rem',
                  background: 'rgba(26, 43, 31, 0.75)',
                  border: '1px solid rgba(201, 168, 76, 0.4)',
                  borderRadius: '50%',
                  width: '2rem',
                  height: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#c9a84c',
                  fontSize: '0.9rem',
                  pointerEvents: 'none',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                🔍
              </div>
            </motion.div>
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '0.85rem',
                  color: 'rgba(240,234,216,0.25)',
                  letterSpacing: '0.15em',
                }}
              >
                Görsel Yakında
              </p>
            </div>
          )}

          <VineCorner />
        </div>

        {/* ── COLOR VARIANT SWATCHES ── */}
        {product.variants.length > 1 && (
          <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {product.variants.map((v, idx) => (
              <button
                key={v.color}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  borderRadius: '50%',
                  backgroundColor: v.colorCode,
                  border: idx === activeIdx ? '2px solid #c9a84c' : '1px solid rgba(240, 234, 216, 0.25)',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.2s ease',
                  boxShadow: idx === activeIdx ? '0 0 6px rgba(201,168,76,0.8)' : 'none',
                }}
                title={v.color}
              />
            ))}
            <span style={{ fontSize: '0.7rem', color: '#c9a84c', marginLeft: '0.25rem', letterSpacing: '0.05em' }}>
              {activeVariant.color}
            </span>
          </div>
        )}

        {/* ── META ── */}
        <p
          style={{
            fontSize: '0.55rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#c9a84c',
            marginBottom: '0.5rem',
          }}
        >
          {product.model}
        </p>
        <h3
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.4rem',
            fontWeight: 400,
            color: '#f0ead8',
            marginBottom: '0.5rem',
          }}
        >
          {product.name}
        </h3>
        <p style={{ fontSize: '0.8rem', color: '#d4ccb8', lineHeight: 1.6 }}>
          {product.description}
        </p>
      </div>
    </motion.div>
  );
}
