import React from 'react';
import { Heart, MapPin, Sparkles, Check, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bakeryData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image collage showcasing real bakery atmosphere */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#EAE2D8]">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80"
                  alt="Fresh artisan baking at Jutt Sweet Bakery Lahore"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
              </div>

              {/* Accent mini card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#2E1C14] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-[#E3A857]/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4A2E1B] flex items-center justify-center text-[#E3A857]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#E3A857]">Local Lahore Bakery</h4>
                    <p className="text-xs text-stone-300">Daroghawala, Ahmad Town</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Warm, trustworthy narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0E4] text-[#8C5E3C] text-xs font-bold uppercase tracking-wider border border-[#E8D7C4]">
              <Heart className="w-3.5 h-3.5 text-[#9E2A3B] fill-[#9E2A3B]" />
              <span>Our Story & Values</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E1C14] tracking-tight">
              About Jutt Sweet Bakery
            </h2>

            {/* Exact quote from prompt */}
            <blockquote className="text-lg sm:text-xl text-[#3E2723] font-medium leading-relaxed bg-[#FFFDF9] p-6 rounded-2xl border-l-4 border-[#C59B27] shadow-xs">
              “Jutt Sweet Bakery is a local bakery serving delicious cakes and biscuits in Daroghawala, Ahmad Town, Lahore. We focus on fresh preparation, delicious taste and beautiful presentation. Whether you are celebrating a birthday, arranging a family event or simply craving something sweet, we are here to make your occasion special.”
            </blockquote>

            <p className="text-sm sm:text-base text-[#5A4232] leading-relaxed">
              We take pride in our honest ingredients, daily fresh baking, and customized touch. As an authentic local neighborhood bakery, we value our relationships with every family and customer in Daroghawala and Ahmad Town. Whether you need a 1-pound birthday cake on short notice or a designer centerpiece for an anniversary, our kitchen treats every order with dedicated care.
            </p>

            {/* Genuine principles checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-[#2E1C14] font-medium">
                <span className="w-6 h-6 rounded-full bg-[#EBF7EE] text-[#1E7E34] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Fresh preparation every morning</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-[#2E1C14] font-medium">
                <span className="w-6 h-6 rounded-full bg-[#EBF7EE] text-[#1E7E34] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Custom flavor & message lettering</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-[#2E1C14] font-medium">
                <span className="w-6 h-6 rounded-full bg-[#EBF7EE] text-[#1E7E34] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Traditional Lahori Nan Khatai recipe</span>
              </div>

              <div className="flex items-center gap-2.5 text-sm text-[#2E1C14] font-medium">
                <span className="w-6 h-6 rounded-full bg-[#EBF7EE] text-[#1E7E34] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Transparent starting prices from Rs. 1,500</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#8C5E3C] hover:text-[#2E1C14] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Direct: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
