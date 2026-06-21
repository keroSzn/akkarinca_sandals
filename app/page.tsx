'use client';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import AntCharacter from '@/components/AntCharacter';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CollectionSection from '@/components/CollectionSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { LightboxProvider } from '@/components/LightboxContext';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <LightboxProvider>
      <main>
        <Navbar />
        <AntCharacter />
        <HeroSection />
        <AboutSection />
        <CollectionSection />
        <ContactSection />
        <Footer />
      </main>
    </LightboxProvider>
  );
}

