import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { GalleryItem } from '../types';
import { getWhatsAppUrl } from '../data/bakeryData';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  if (!item) return null;

  const inquiryMsg = `Assalam o Alaikum, I saw "${item.title}" in your gallery and would like to order something similar from Jutt Sweet Bakery.`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FFFDF9] rounded-3xl overflow-hidden shadow-2xl border border-[#EEDCC9] flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EBD9C6] bg-[#FAF7F2]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase bg-[#FCE8EB] text-[#9E2A3B]">
              {item.category}
            </span>
            <span className="text-xs text-[#7A6352]">Jutt Sweet Bakery Gallery</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#4A3525] hover:bg-[#EBD9C6] transition-colors"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display Area with Prev/Next Controls */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] max-h-[60vh] bg-black/95 flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[60vh] w-full object-contain"
          />

          {/* Navigation Arrows */}
          {hasPrev && (
            <button
              type="button"
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {hasNext && (
            <button
              type="button"
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Footer info & WhatsApp Order */}
        <div className="p-5 sm:p-6 bg-[#FFFDF9] border-t border-[#EBD9C6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#2E1C14]">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#5A4232] mt-0.5">
              {item.description}
            </p>
          </div>

          <a
            href={getWhatsAppUrl(inquiryMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Order Similar on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
