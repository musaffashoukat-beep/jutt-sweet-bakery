/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CakesSection } from './components/CakesSection';
import { CakePriceGuide } from './components/CakePriceGuide';
import { BiscuitsSection } from './components/BiscuitsSection';
import { PizzaSection } from './components/PizzaSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { AboutSection } from './components/AboutSection';
import { OrderCtaSection } from './components/OrderCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2C1D11] selection:bg-[#ECA1A6]/30 selection:text-[#3E2723]">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <CakesSection />
        <CakePriceGuide />
        <BiscuitsSection />
        <PizzaSection />
        <WhyChooseUs />
        <GallerySection />
        <AboutSection />
        <OrderCtaSection />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

