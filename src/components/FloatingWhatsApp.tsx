import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl, BUSINESS_INFO } from '../data/bakeryData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Mini notification pill for first-time visitors */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-[#EEDCC9] text-xs animate-in fade-in slide-in-from-right-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          <div className="text-left">
            <span className="font-bold text-[#2E1C14] block">Order on WhatsApp</span>
            <span className="text-[#8C5E3C] text-[10px]">{BUSINESS_INFO.phoneDisplay}</span>
          </div>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-600 ml-1 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* The Floating Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Jutt Sweet Bakery"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] active:scale-95 transition-all duration-200"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none group-hover:opacity-0" />
        <MessageCircle className="w-7 h-7 fill-white relative z-10" />
      </a>
    </div>
  );
};
