import React, { useState } from 'react';
import { Cake, Phone, MessageCircle, Menu, X, Clock, MapPin } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/bakeryData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Cakes', href: '#cakes' },
    { name: 'Cake Sizes', href: '#pricing' },
    { name: 'Biscuits', href: '#biscuits' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-xs">
      {/* Top micro bar with contact info */}
      <div className="bg-[#2E1C14] text-[#F5EBE1] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#E3A857]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Daroghawala, Ahmad Town, Lahore</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#E3A857]" />
              <span>Open Daily: 8:00 AM – 11:30 PM</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={BUSINESS_INFO.phoneTel}
              className="flex items-center gap-1 hover:text-[#E3A857] transition-colors"
              title="Call Bakery"
            >
              <Phone className="w-3.5 h-3.5 text-[#E3A857]" />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
            <span className="text-[#E3A857]/60 hidden md:inline">•</span>
            <span className="hidden md:inline text-stone-300">
              Cakes Starting From <strong className="text-[#E3A857]">Rs. 1,500</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#EEDCC9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-3 group"
              aria-label="Jutt Sweet Bakery Home"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4A2E1B] to-[#2E1C14] flex items-center justify-center text-[#E3A857] shadow-sm border border-[#E3A857]/30 group-hover:scale-105 transition-transform duration-200">
                <Cake className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-2xl font-bold tracking-tight text-[#2E1C14] leading-tight">
                  Jutt Sweet Bakery
                </span>
                <span className="text-[11px] tracking-wider uppercase font-semibold text-[#8C5E3C]">
                  Daroghawala, Lahore
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-[#4A3525] hover:text-[#2E1C14] hover:bg-[#F4ECE1] transition-colors duration-150"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full text-sm font-medium text-[#2E1C14] border border-[#D9C3B0] hover:bg-[#F5EFE6] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8C5E3C]" />
                <span>Call Us</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 shadow-sm hover:shadow-md transition-all duration-150"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center justify-center p-2.5 rounded-full text-white bg-[#25D366] hover:bg-[#20ba59]"
                aria-label="Order on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-[#2E1C14] hover:bg-[#F4ECE1] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EEDCC9] bg-[#FFFDF9] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-1 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-[#3E2723] hover:bg-[#F5EFE6] hover:text-[#2E1C14] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#EEDCC9] flex flex-col gap-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-xs"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Order on WhatsApp (0342 4954371)</span>
              </a>

              <a
                href={BUSINESS_INFO.phoneTel}
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-[#2E1C14] bg-[#F5EFE6] hover:bg-[#EEDCC9] border border-[#E0CFBD]"
              >
                <Phone className="w-4 h-4 text-[#8C5E3C]" />
                <span>Call Bakery: 0342 4954371</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
