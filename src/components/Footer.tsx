import React from 'react';
import { Cake, Phone, MessageCircle, MapPin, Heart } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/bakeryData';

export const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Cakes', href: '#cakes' },
    { name: 'Biscuits', href: '#biscuits' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#1E120C] text-[#F5EBE1] border-t border-[#3E2723]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3A261B]">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#3E2723] flex items-center justify-center text-[#E3A857] border border-[#E3A857]/30">
                <Cake className="w-6 h-6" />
              </div>
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                {BUSINESS_INFO.name}
              </span>
            </div>

            {/* Tagline as specified */}
            <p className="text-base text-[#E3A857] font-serif italic">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="text-sm text-stone-300 max-w-md leading-relaxed">
              Serving delicious cakes, homemade biscuits and sweet memories to families in Daroghawala, Ahmad Town, Lahore. Freshly baked with care and pure ingredients.
            </p>

            {/* Direct WhatsApp Quick Chat */}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors"
                aria-label="WhatsApp with Jutt Sweet Bakery"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat with Baker on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E3A857]">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-300 hover:text-[#E3A857] transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-stone-300 hover:text-[#E3A857] transition-colors inline-block"
                >
                  Cake Size & Price Guide
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-stone-300 hover:text-[#E3A857] transition-colors inline-block"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Bakery Location & Contact Info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E3A857]">
              Visit or Contact
            </h4>
            <div className="space-y-3 text-sm text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E3A857] shrink-0 mt-1" />
                <span>Location: Daroghawala, Ahmad Town, Lahore</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E3A857] shrink-0" />
                <a
                  href={BUSINESS_INFO.phoneTel}
                  className="hover:text-white transition-colors"
                >
                  Phone: {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 fill-[#25D366]" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="text-xs text-stone-300 pt-1">
                <span>Open 7 Days a week: 8:00 AM – 11:30 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
          <p>© 2026 Jutt Sweet Bakery. All Rights Reserved.</p>
          <p className="flex items-center gap-1 text-stone-300">
            <span>Baked fresh daily in Lahore</span>
            <Heart className="w-3 h-3 text-[#ECA1A6] fill-[#ECA1A6]" />
          </p>
        </div>
      </div>
    </footer>
  );
};
