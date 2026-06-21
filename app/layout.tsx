import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Akkarınca — Doğanın Adımı | El Yapımı Terlikler',
  description:
    'Akkarınca, toprağa saygı duyan ellerin yarattığı terlik geleneğini yaşatır. Her çift, seçilmiş ham maddelerle el işçiliğiyle şekillendirilir.',
  keywords: ['el yapımı terlik', 'akkarınca', 'doğal terlik', 'Konya', 'Türkiye'],
  openGraph: {
    title: 'Akkarınca — Doğanın Adımı',
    description: 'El yapımı terlikler — doğadan ilham, ustalıktan doğan.',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
