import React, { useState } from 'react';
import { Scale, Users, MessageCircle, AlertCircle, CheckCircle2, Calculator } from 'lucide-react';
import { CAKE_PRICE_GUIDE, getWhatsAppUrl } from '../data/bakeryData';

export const CakePriceGuide: React.FC = () => {
  const [selectedWeight, setSelectedWeight] = useState('2 Pound');
  const [selectedFlavor, setSelectedFlavor] = useState('Chocolate');
  const [customText, setCustomText] = useState('');

  const flavors = ['Chocolate', 'Vanilla', 'Fresh Cream', 'Pineapple', 'Black Forest', 'Custom Flavor'];

  const getCustomWhatsAppMsg = () => {
    let msg = `Assalam o Alaikum, I would like to order a cake from Jutt Sweet Bakery:\n`;
    msg += `• Size: ${selectedWeight}\n`;
    msg += `• Flavor: ${selectedFlavor}\n`;
    if (customText.trim()) {
      msg += `• Message on Cake: "${customText.trim()}"\n`;
    }
    msg += `Please confirm availability and the final price. Thank you!`;
    return msg;
  };

  return (
    <section id="pricing" className="py-16 sm:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0E4] text-[#8C5E3C] text-xs font-bold uppercase tracking-wider border border-[#E8D7C4]">
            <Scale className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Size & Price Chart</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#2E1C14] tracking-tight">
            Cake Size & Price Guide
          </h2>

          <p className="text-base text-[#5A4232]">
            Helpful guide to pick the perfect cake size for your party and guest count.
          </p>
        </div>

        {/* Price Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 mb-8">
          {CAKE_PRICE_GUIDE.map((item, idx) => (
            <div
              key={item.size}
              className={`rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                idx === 1
                  ? 'bg-[#FFFDF9] border-[#C59B27] shadow-md ring-1 ring-[#C59B27]/30'
                  : 'bg-[#FFFDF9] border-[#EBD9C6] shadow-xs hover:border-[#C59B27]/60'
              }`}
            >
              <div>
                {idx === 1 && (
                  <span className="inline-block mb-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#FEF4E6] text-[#B87C1D]">
                    Most Popular
                  </span>
                )}
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-[#2E1C14]">
                    {item.size}
                  </h3>
                  <Scale className="w-4 h-4 text-[#8C5E3C]" />
                </div>

                <div className="mt-3 mb-4">
                  <span className="text-xs text-[#7A6352] block">Starting from</span>
                  <span className="text-xl sm:text-2xl font-black text-[#2E1C14] font-display">
                    {item.priceText.replace('From ', '')}
                  </span>
                </div>

                <div className="space-y-2 text-xs text-[#5A4232] border-t border-[#F0E4D5] pt-3">
                  <div className="flex items-center gap-1.5 font-medium text-[#2E1C14]">
                    <Users className="w-3.5 h-3.5 text-[#8C5E3C]" />
                    <span>{item.servings}</span>
                  </div>
                  <p className="text-[11px] text-[#7A6352] italic">
                    {item.idealFor}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F0E4D5]">
                <a
                  href={getWhatsAppUrl(`Assalam o Alaikum, I would like to inquire about a ${item.size} cake (${item.priceText}) from Jutt Sweet Bakery.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-[#2E1C14] bg-[#F5EFE6] hover:bg-[#25D366] hover:text-white transition-all duration-200"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Required Mandatory Price Note */}
        <div className="rounded-2xl bg-[#FFF6F0] border border-[#FAD8C7] p-5 mb-12 flex items-start gap-3.5 text-[#5C321E]">
          <AlertCircle className="w-5 h-5 text-[#B85422] shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed">
            <strong className="font-semibold block mb-0.5">Please Note:</strong>
            Final price may vary depending on flavor, decoration, design and customization. Please contact us for the exact price.
          </div>
        </div>

        {/* Interactive Quick Order / Quote Form */}
        <div className="rounded-3xl bg-[#FFFDF9] border border-[#EBD9C6] p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-[#FCE8EB] flex items-center justify-center text-[#9E2A3B]">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2E1C14]">
                Interactive WhatsApp Cake Order Form
              </h3>
              <p className="text-xs sm:text-sm text-[#7A6352]">
                Select your preferences below to automatically generate an order inquiry message directly for our baker.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Weight selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#5A4232] block">
                Select Cake Size
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['1 Pound', '2 Pound', '3 Pound', '4 Pound', 'Custom'].map((weight) => (
                  <button
                    key={weight}
                    type="button"
                    onClick={() => setSelectedWeight(weight)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                      selectedWeight === weight
                        ? 'bg-[#2E1C14] text-white border-[#2E1C14] shadow-xs'
                        : 'bg-[#FAF7F2] text-[#4A3525] border-[#E5D2C0] hover:bg-[#F2E8DC]'
                    }`}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            {/* Flavor selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#5A4232] block">
                Select Flavor
              </label>
              <div className="grid grid-cols-2 gap-2">
                {flavors.map((flavor) => (
                  <button
                    key={flavor}
                    type="button"
                    onClick={() => setSelectedFlavor(flavor)}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                      selectedFlavor === flavor
                        ? 'bg-[#8C5E3C] text-white border-[#8C5E3C] shadow-xs'
                        : 'bg-[#FAF7F2] text-[#4A3525] border-[#E5D2C0] hover:bg-[#F2E8DC]'
                    }`}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>

            {/* Message on Cake & WhatsApp submit */}
            <div className="space-y-3 flex flex-col justify-between">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#5A4232] block mb-1">
                  Cake Message (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Happy 5th Birthday Zainab!"
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF7F2] border border-[#E5D2C0] text-[#2E1C14] placeholder-[#A89484] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
                />
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(getCustomWhatsAppMsg())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Spec to WhatsApp</span>
                </a>
                <p className="text-[11px] text-center text-[#7A6352] mt-1.5 flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                  <span>Direct chat with baker in Ahmad Town, Lahore</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
