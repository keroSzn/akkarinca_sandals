export default function Footer() {
  return (
    <footer
      className="py-6 px-6 md:px-16"
      style={{
        background: '#1a2b1f',
        borderTop: '1px solid rgba(201,168,76,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '1rem',
          fontWeight: 600,
          color: '#c9a84c',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
        }}
      >
        Akkarınca
      </span>
      <span
        style={{
          fontSize: '0.65rem',
          color: 'rgba(212,204,184,0.4)',
          letterSpacing: '0.1em',
        }}
      >
        © 2026 Akkarınca byAktermal Mest — Tüm hakları saklıdır
      </span>
    </footer>
  );
}
