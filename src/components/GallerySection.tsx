import React, { useState } from 'react';
import { Camera, ZoomIn, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, getWhatsAppUrl } from '../data/bakeryData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const categories = ['All', 'Cakes', 'Biscuits', 'Custom Cakes'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const currentSelectedItem: GalleryItem | null =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] || null : null;

  const handleOpenLightbox = (index: number) => {
    setSelectedItemIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedItemIndex(null);
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null && selectedItemIndex > 0) {
      setSelectedItemIndex(selectedItemIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedItemIndex !== null && selectedItemIndex < filteredItems.length - 1) {
      setSelectedItemIndex(selectedItemIndex + 1);
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-[#FFFDF9] border-y border-[#EEDCC9]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCE8EB] text-[#9E2A3B] text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Bakery Visuals</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E1C14] tracking-tight">
            Sweet Moments From Our Kitchen
          </h2>

          <p className="text-base sm:text-lg text-[#5A4232]">
            Browse our freshly baked creations. Click any photo for an expanded view or to request a similar custom bake on WhatsApp.
          </p>

          <p className="text-xs text-[#8C5E3C] italic">
            * High-resolution placeholders ready to be substituted with Jutt Sweet Bakery's live kitchen and counter photos.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setSelectedItemIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 ${
                activeCategory === cat
                  ? 'bg-[#2E1C14] text-white shadow-sm'
                  : 'bg-[#FAF7F2] text-[#4A3525] border border-[#E5D2C0] hover:bg-[#F2E8DC]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer bg-[#EAE2D8] border border-[#EBD9C6] shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2E1C14]/90 via-[#2E1C14]/20 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white" />

              {/* Category pill top left */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#2E1C14]/80 backdrop-blur-xs text-[#E3A857]">
                  {item.category}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-9 h-9 rounded-full bg-white/90 text-[#2E1C14] flex items-center justify-center shadow-md">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Title and info bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-white">
                <h3 className="font-display text-base font-bold leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-300 mt-1 line-clamp-1 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E3A857] mt-2 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view & order
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery bottom action */}
        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl('Assalam o Alaikum, I would like to see more cake/biscuit photos from Jutt Sweet Bakery.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-[#2E1C14] bg-[#F4ECE1] hover:bg-[#EEDCC9] border border-[#D9C3B0] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Ask for More Photos on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={currentSelectedItem}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedItemIndex !== null && selectedItemIndex > 0}
        hasNext={selectedItemIndex !== null && selectedItemIndex < filteredItems.length - 1}
      />
    </section>
  );
};
