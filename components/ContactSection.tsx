'use client';

import { motion, type Variants } from 'framer-motion';

const contactItems = [
  { label: 'Telefon', value: '0533 342 9332' },
  { label: 'E-posta', value: 'info@akkarinca.com' },
  { label: 'Konum',   value: 'Konya, Türkiye' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 lg:py-48 px-6 md:px-16"
      style={{
        background: '#111d14',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ maxWidth: 800, margin: '0 auto' }}
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
          Bize Ulaşın
        </motion.p>

        <motion.h2
          variants={itemVariants}
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 300,
            color: '#f0ead8',
            marginBottom: '1.5rem',
          }}
        >
          Bir adım <em style={{ color: '#c9a84c', fontStyle: 'italic' }}>yakın</em> olalım
        </motion.h2>

        <motion.p
          variants={itemVariants}
          style={{
            color: '#d4ccb8',
            fontSize: '0.9rem',
            lineHeight: 1.8,
            marginBottom: '3rem',
            maxWidth: '40ch',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Sorularınız ve toptan siparişleriniz için bize ulaşın.
        </motion.p>

        {/* Contact items */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '3rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}
        >
          {contactItems.map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: '#c9a84c',
                  marginBottom: '0.5rem',
                }}
              >
                {item.label}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.1rem',
                  color: '#f0ead8',
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.a
          variants={itemVariants}
          href="mailto:info@akkarinca.com"
          whileHover={{ backgroundColor: '#c9a84c', color: '#1a2b1f' }}
          style={{
            display: 'inline-block',
            border: '1px solid #c9a84c',
            color: '#c9a84c',
            padding: '0.9rem 3rem',
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontFamily: 'var(--font-jost)',
            transition: 'background 0.3s, color 0.3s',
          }}
        >
          Mesaj Gönder
        </motion.a>
      </motion.div>
    </section>
  );
}
