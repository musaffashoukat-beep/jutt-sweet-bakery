import React from 'react';
import { MessageCircle, Info, Sparkles } from 'lucide-react';
import { CAKES, getWhatsAppUrl } from '../data/bakeryData';

export const CakesSection: React.FC = () => {
  return (
    <section id="cakes" className="py-16 sm:py-20 bg-[#FFFDF9] border-y border-[#EEDCC9]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCE8EB] text-[#9E2A3B] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bakery Special</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E1C14] tracking-tight">
            Our Delicious Cakes
          </h2>

          <p className="text-base sm:text-lg text-[#5A4232]">
            Perfect cakes for birthdays, celebrations and every special moment.
          </p>

          {/* Pricing transparency note */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-2 rounded-xl bg-[#FAF4ED] border border-[#E5D2C0] text-xs text-[#6B4E38]">
            <Info className="w-4 h-4 text-[#8C5E3C] shrink-0" />
            <span>
              All cake prices shown are <strong>starting prices</strong>. The final price varies by size (pounds), custom theme, and decoration.
            </span>
          </div>
        </div>

        {/* Cake Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAKES.map((cake) => {
            const cakeOrderMessage = `Assalam o Alaikum, I would like to order the ${cake.name} (${cake.priceText}) from Jutt Sweet Bakery.`;
            const orderLink = getWhatsAppUrl(cakeOrderMessage);

            return (
              <div
                key={cake.id}
                id={`cake-card-${cake.id}`}
                className="group flex flex-col bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#EBD9C6] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image container */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-[#EAE2D8]">
                  <img
                    src={cake.image}
                    alt={`${cake.name} from Jutt Sweet Bakery Lahore`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {cake.tag && (
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2E1C14]/85 backdrop-blur-xs text-[#E3A857] shadow-xs">
                      {cake.tag}
                    </span>
                  )}

                  {/* Quick price overlay ribbon */}
                  <div className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs shadow-md border border-[#EBD9C6]">
                    <span className="text-xs font-extrabold text-[#2E1C14]">
                      {cake.priceText}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#2E1C14] group-hover:text-[#8C5E3C] transition-colors">
                      {cake.name}
                    </h3>
                    <p className="text-sm text-[#5A4232] mt-1.5 leading-relaxed">
                      {cake.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E8D7C4] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#8C5E3C] font-semibold block">
                        Estimated Price
                      </span>
                      <span className="text-base font-bold text-[#2E1C14]">
                        {cake.priceText}
                      </span>
                    </div>

                    <a
                      href={orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 shadow-xs transition-transform duration-150"
                      aria-label={`Order ${cake.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Order Now</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Cake Banner Footer */}
        <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#3E2723] to-[#25160E] text-white p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E3A857]">
              Need something unique?
            </span>
            <h3 className="font-display text-2xl font-bold">
              Have a specific cake design in mind?
            </h3>
            <p className="text-sm text-stone-300 max-w-xl">
              Send us a photo or sketch on WhatsApp! We customize flavors, layers, photo toppers, fondant figurines, and tier sizes for birthdays and weddings.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('Assalam o Alaikum, I would like to discuss a custom cake design with Jutt Sweet Bakery.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-[#2E1C14] bg-[#E3A857] hover:bg-[#d49945] shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-[#2E1C14]" />
            <span>Send Custom Photo on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
