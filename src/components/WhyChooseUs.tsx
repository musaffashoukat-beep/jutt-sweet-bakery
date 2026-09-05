import React from 'react';
import { WHY_CHOOSE_US } from '../data/bakeryData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8C5E3C]">
            Our Commitment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E1C14] tracking-tight">
            Why Choose Jutt Sweet Bakery?
          </h2>
          <p className="text-base text-[#5A4232]">
            We take pride in bringing sweetness, freshness, and authentic flavor to every gathering in Lahore.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              id={`why-choose-card-${index}`}
              className="bg-[#FFFDF9] rounded-3xl p-7 border border-[#EBD9C6] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col items-start space-y-4 group hover:-translate-y-1"
            >
              {/* Icon Bubble */}
              <div className="w-14 h-14 rounded-2xl bg-[#FAF0E4] border border-[#ECD9C5] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200">
                <span>{item.icon}</span>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5">
                <h3 className="font-display text-xl font-bold text-[#2E1C14]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5A4232] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Sub-accent line */}
              <div className="w-10 h-0.5 bg-[#E8D0BB] rounded-full group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
