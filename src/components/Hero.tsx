import React from 'react';
import { MessageCircle, UtensilsCrossed, Sparkles, Star, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/bakeryData';
import heroBakerImg from '../assets/images/hero_baker_man_1788577935454.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle warm decorative background blobs */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#FCE8EB]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#F5E6D3]/70 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Small badge: Cakes Starting From Rs. 1,500 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF0F2] border border-[#F5C2C7] text-[#9E2A3B] shadow-xs">
              <Sparkles className="w-4 h-4 text-[#D4707F]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Cakes Starting From Rs. 1,500
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#2E1C14] tracking-tight leading-[1.15]">
              Freshly Baked Happiness,{' '}
              <span className="italic font-normal text-[#8C5E3C] block sm:inline">
                Made for You
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-[#5A4232] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Delicious cakes, biscuits and sweet treats freshly prepared by{' '}
              <strong className="text-[#2E1C14] font-semibold">Jutt Sweet Bakery</strong> in Lahore.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={getWhatsAppUrl('Assalam o Alaikum, I would like to place an order from Jutt Sweet Bakery.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] shadow-md hover:shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href="#cakes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-[#2E1C14] bg-[#F4ECE1] hover:bg-[#EEDCC9] border border-[#D9C3B0] transition-colors duration-150"
              >
                <UtensilsCrossed className="w-4 h-4 text-[#8C5E3C]" />
                <span>View Our Menu</span>
              </a>
            </div>

            {/* Quick trust bullet pills */}
            <div className="pt-6 border-t border-[#E8D9C8] grid grid-cols-3 gap-3 text-center sm:text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FCE8EB] flex items-center justify-center text-[#9E2A3B] shrink-0">
                  <Heart className="w-4 h-4 fill-[#9E2A3B]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2E1C14]">100% Fresh</h4>
                  <p className="text-[11px] text-[#7A6352]">Baked daily in Lahore</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FEF4E6] flex items-center justify-center text-[#B87C1D] shrink-0">
                  <Star className="w-4 h-4 fill-[#B87C1D]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2E1C14]">Custom Cakes</h4>
                  <p className="text-[11px] text-[#7A6352]">Any design or flavor</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-[#EBF7EE] flex items-center justify-center text-[#1E7E34] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2E1C14]">Fast WhatsApp</h4>
                  <p className="text-[11px] text-[#7A6352]">0342 4954371</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Cake Showcase */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 -m-3 rounded-3xl bg-gradient-to-tr from-[#EEDCC9] via-[#FAF3EA] to-[#FCE8EB] -rotate-2 transform transition-transform" />

              {/* Main Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FFFDF9] bg-[#FFFDF9]">
                <img
                  src={heroBakerImg}
                  alt="Jutt Sweet Bakery team member wearing clean face mask in bakery setting"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E1C14]/85 via-transparent to-transparent pointer-events-none" />

                {/* Bottom banner in image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white flex items-end justify-between">
                  <div>
                    <span className="inline-block text-[11px] uppercase tracking-widest font-semibold text-[#E3A857] mb-1">
                      Jutt Sweet Bakery
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                      Hygienic & Fresh Daily
                    </h3>
                    <p className="text-xs text-stone-200 mt-0.5">
                      Prepared with care in Daroghawala, Lahore
                    </p>
                  </div>

                  <div className="bg-[#FFFDF9]/95 text-[#2E1C14] px-3.5 py-2 rounded-xl text-center shadow-md backdrop-blur-xs">
                    <span className="block text-[10px] uppercase font-bold text-[#8C5E3C]">Starts at</span>
                    <span className="text-base font-extrabold text-[#2E1C14]">Rs. 1,500</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-[#EEDCC9] flex items-center gap-2.5 z-10">
                <span className="text-xl">🎂</span>
                <div>
                  <p className="text-xs font-bold text-[#2E1C14]">Freshly Baked</p>
                  <p className="text-[10px] text-[#7A6352]">Ahmad Town, Lahore</p>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-[#2E1C14] text-white px-4 py-2.5 rounded-2xl shadow-xl border border-[#E3A857]/40 flex items-center gap-2 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <div>
                  <p className="text-xs font-bold">Taking Orders Today</p>
                  <p className="text-[10px] text-[#E3A857]">WhatsApp: 0342 4954371</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
