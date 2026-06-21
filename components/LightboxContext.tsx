'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getImagePath } from '@/utils/imagePath';

interface LightboxContextType {
  openLightbox: (src: string, alt: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');

  const openLightbox = (imageSrc: string, imageAlt: string) => {
    setSrc(imageSrc);
    setAlt(imageAlt);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              backgroundColor: 'rgba(17, 29, 20, 0.95)', // Forest dark overlay
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
              cursor: 'zoom-out',
            }}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(201, 168, 76, 0.3)',
                borderRadius: '50%',
                width: '3rem',
                height: '3rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#f0ead8',
                fontSize: '1.25rem',
                transition: 'all 0.3s',
                zIndex: 210,
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(201, 168, 76, 0.15)', borderColor: '#c9a84c' }}
              whileTap={{ scale: 0.95 }}
              aria-label="Kapat"
            >
              ✕
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.92, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '90vw',
                height: '80vh',
                maxHeight: '900px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  maxHeight: 'calc(100% - 3rem)',
                }}
              >
                <Image
                  src={getImagePath(src)}
                  alt={alt}
                  fill
                  sizes="90vw"
                  style={{
                    objectFit: 'contain',
                  }}
                  priority
                />
              </div>

              {/* Title / Description */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{
                  marginTop: '1rem',
                  color: '#f0ead8',
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.5rem',
                  letterSpacing: '0.05em',
                  textAlign: 'center',
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
              >
                {alt}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
