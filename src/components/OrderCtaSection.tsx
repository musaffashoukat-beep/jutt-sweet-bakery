import React from 'react';
import { MessageCircle, Phone, Clock, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/bakeryData';

export const OrderCtaSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#2E1C14] text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#E3A857]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#ECA1A6]/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#4A2E1B] text-[#E3A857] text-xs font-bold uppercase tracking-widest border border-[#E3A857]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Instant WhatsApp & Call Ordering</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Ready to Order Something Sweet?
        </h2>

        {/* Exact text requested */}
        <p className="text-base sm:text-xl text-stone-300 max-w-2xl mx-auto leading-relaxed">
          Place your order with Jutt Sweet Bakery today. Contact us on WhatsApp for cake designs, flavors, sizes, prices and availability.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={getWhatsAppUrl('Assalam o Alaikum, I would like to place an order from Jutt Sweet Bakery.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 fill-white" />
            <span>Order on WhatsApp</span>
          </a>

          <a
            href={BUSINESS_INFO.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-[#2E1C14] bg-[#FFFDF9] hover:bg-[#F4ECE1] active:scale-[0.98] transition-colors duration-150"
          >
            <Phone className="w-5 h-5 text-[#8C5E3C]" />
            <span>Call Us: {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Local Lahore Hours notice */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-300">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#E3A857]" />
            <span>Daily Kitchen Timing: 8:00 AM – 11:30 PM</span>
          </div>
          <span>•</span>
          <div className="text-stone-300">
            <span>Location: Daroghawala, Ahmad Town, Lahore</span>
          </div>
        </div>
      </div>
    </section>
  );
};
