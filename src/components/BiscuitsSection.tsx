import React from 'react';
import { MessageCircle, Sparkles, Cookie } from 'lucide-react';
import { BISCUITS, getWhatsAppUrl } from '../data/bakeryData';

export const BiscuitsSection: React.FC = () => {
  return (
    <section id="biscuits" className="py-16 sm:py-20 bg-[#FFFDF9] border-y border-[#EEDCC9]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0E4] text-[#8C5E3C] text-xs font-bold uppercase tracking-wider border border-[#E8D7C4]">
            <Cookie className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Bakery Fresh Everyday</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E1C14] tracking-tight">
            Fresh Homemade Biscuits
          </h2>

          <p className="text-base sm:text-lg text-[#5A4232]">
            Crunchy, fresh and delicious biscuits prepared with care.
          </p>
        </div>

        {/* Biscuits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BISCUITS.map((biscuit) => {
            const biscuitOrderMessage = `Assalam o Alaikum, I would like to inquire about the ${biscuit.name} from Jutt Sweet Bakery.`;
            const orderLink = getWhatsAppUrl(biscuitOrderMessage);

            return (
              <div
                key={biscuit.id}
                id={`biscuit-card-${biscuit.id}`}
                className="group flex flex-col bg-[#FAF7F2] rounded-3xl overflow-hidden border border-[#EBD9C6] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-56 sm:h-60 overflow-hidden bg-[#EAE2D8]">
                  <img
                    src={biscuit.image}
                    alt={`${biscuit.name} from Jutt Sweet Bakery Lahore`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {biscuit.badge && (
                    <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-xs font-bold bg-[#2E1C14]/85 backdrop-blur-xs text-[#E3A857] shadow-xs">
                      {biscuit.badge}
                    </span>
                  )}

                  {/* Price Tag as strictly requested: "Price: Contact Us" */}
                  <div className="absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs shadow-md border border-[#EBD9C6]">
                    <span className="text-xs font-bold text-[#8C5E3C]">
                      {biscuit.priceText}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#2E1C14] group-hover:text-[#8C5E3C] transition-colors">
                      {biscuit.name}
                    </h3>
                    <p className="text-sm text-[#5A4232] mt-1.5 leading-relaxed">
                      {biscuit.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8D7C4] flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-[#8C5E3C]">
                      {biscuit.priceText}
                    </span>

                    <a
                      href={orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 shadow-xs transition-transform duration-150"
                      aria-label={`Order ${biscuit.name} on WhatsApp`}
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Local Lahore Tea & Chai pairing tip banner */}
        <div className="mt-12 rounded-2xl bg-[#F4ECE1] border border-[#DFCFC0] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <span className="text-3xl">☕</span>
            <div>
              <h4 className="font-display text-base font-bold text-[#2E1C14]">
                Perfect accompaniment for your evening Chai
              </h4>
              <p className="text-xs sm:text-sm text-[#6B513E]">
                Our traditional Lahori Nan Khatai and crispy butter biscuits are baked fresh every morning in Daroghawala.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl('Assalam o Alaikum, I would like to order fresh biscuits / Nan Khatai from Jutt Sweet Bakery.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#2E1C14] bg-white border border-[#D9C3B0] hover:bg-[#FAF7F2] shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Inquire Biscuit Quantities</span>
          </a>
        </div>
      </div>
    </section>
  );
};
