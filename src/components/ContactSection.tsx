import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Send, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/bakeryData';

export const ContactSection: React.FC = () => {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState('Birthday Cake');
  const [dateRequired, setDateRequired] = useState('');
  const [notes, setNotes] = useState('');

  const handleCustomOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let msg = `Assalam o Alaikum Jutt Sweet Bakery! I would like to place an order inquiry:\n`;
    if (customerName.trim()) msg += `• Customer Name: ${customerName.trim()}\n`;
    msg += `• Item / Type: ${orderType}\n`;
    if (dateRequired.trim()) msg += `• Required Date/Time: ${dateRequired.trim()}\n`;
    if (notes.trim()) msg += `• Special Notes/Flavors/Message: ${notes.trim()}\n`;
    msg += `Please let me know availability and price. Thank you!`;

    window.open(getWhatsAppUrl(msg), '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0E4] text-[#8C5E3C] text-xs font-bold uppercase tracking-wider border border-[#E8D7C4]">
            <MapPin className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Find Our Bakery</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E1C14] tracking-tight">
            Visit or Contact Us
          </h2>

          <p className="text-base sm:text-lg text-[#5A4232]">
            We welcome orders from all across Lahore, especially our neighborhood patrons in Daroghawala & Ahmad Town.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Location */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#EBD9C6] flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF0E4] flex items-center justify-center text-[#8C5E3C]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#2E1C14]">
                Bakery Location
              </h3>
              <p className="text-sm font-medium text-[#4A3525] leading-relaxed">
                Daroghawala, Ahmad Town, Lahore, Pakistan
              </p>
              <p className="text-xs text-[#7A6352]">
                Convenient local bakery serving fresh bakes daily to Ahmad Town and neighboring Lahore areas.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8D7C4]">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Daroghawala+Ahmad+Town+Lahore+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C5E3C] hover:text-[#2E1C14] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#EBD9C6] flex flex-col justify-between shadow-xs">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#FCE8EB] flex items-center justify-center text-[#9E2A3B]">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#2E1C14]">
                Direct Phone Call
              </h3>
              <p className="text-2xl font-black font-display text-[#2E1C14]">
                {BUSINESS_INFO.phoneDisplay}
              </p>
              <p className="text-xs text-[#7A6352]">
                Tap the number on your mobile to call our bakery counter directly for quick inquiries.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8D7C4]">
              <a
                href={BUSINESS_INFO.phoneTel}
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#2E1C14] hover:bg-[#4A2E1B] transition-colors"
              >
                <span>Call 0342 4954371</span>
              </a>
            </div>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#25D366]/40 flex flex-col justify-between shadow-xs ring-1 ring-[#25D366]/20">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF7EE] flex items-center justify-center text-[#25D366]">
                <MessageCircle className="w-6 h-6 fill-[#25D366]" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#2E1C14]">
                WhatsApp Chat & Orders
              </h3>
              <p className="text-2xl font-black font-display text-[#1E7E34]">
                {BUSINESS_INFO.phoneDisplay}
              </p>
              <p className="text-xs text-[#7A6352]">
                Send your cake design photos, requested flavors, or biscuit inquiries anytime.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8D7C4]">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-colors gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map & Order Message Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Google Maps Styled Area (Daroghawala, Ahmad Town, Lahore) */}
          <div className="lg:col-span-6 rounded-3xl overflow-hidden border border-[#EBD9C6] bg-[#FAF7F2] shadow-sm flex flex-col">
            <div className="p-5 border-b border-[#EBD9C6] bg-[#FFFDF9] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#C59B27]" />
                <div>
                  <h4 className="font-display text-base font-bold text-[#2E1C14]">
                    Daroghawala, Ahmad Town, Lahore
                  </h4>
                  <p className="text-xs text-[#7A6352]">
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Daroghawala+Ahmad+Town+Lahore+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#8C5E3C] hover:underline inline-flex items-center gap-1"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Responsive Google Map */}
            <div className="relative flex-1 min-h-[340px] bg-stone-100">
              <iframe
                title="Location of Daroghawala, Ahmad Town, Lahore"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '340px' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=Daroghawala,+Ahmad+Town,+Lahore,+Pakistan&t=&z=14&ie=UTF8&iwloc=&output=embed"
              />

              {/* Map Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#FFFDF9]/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#EBD9C6] max-w-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#25D366] animate-ping" />
                  <span className="text-xs font-bold text-[#2E1C14]">Jutt Sweet Bakery Area</span>
                </div>
                <p className="text-[11px] text-[#7A6352] mt-1">
                  Daroghawala, Ahmad Town, Lahore • Call 0342 4954371 for guidance or pickup
                </p>
              </div>
            </div>
          </div>

          {/* Quick Message Form that builds custom WhatsApp text */}
          <div className="lg:col-span-6 bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-[#EBD9C6] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#C59B27]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C5E3C]">
                  Quick WhatsApp Order Builder
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#2E1C14]">
                Send an Order Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#5A4232] mt-1 mb-6">
                Fill this quick helper to automatically format your request for WhatsApp. We will reply with availability and exact pricing.
              </p>

              <form onSubmit={handleCustomOrderSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5A4232] mb-1">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g., Usman, Ayesha..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E5D2C0] text-[#2E1C14] placeholder-[#A89484] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5A4232] mb-1">
                      Item You Need
                    </label>
                    <select
                      value={orderType}
                      onChange={(e) => setOrderType(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E5D2C0] text-[#2E1C14] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
                    >
                      <option value="Classic Birthday Cake">Classic Birthday Cake (from Rs. 1,500)</option>
                      <option value="Chocolate Cake">Chocolate Cake (from Rs. 1,800)</option>
                      <option value="Vanilla Cake">Vanilla Cake (from Rs. 1,500)</option>
                      <option value="Fresh Cream Cake">Fresh Cream Cake (from Rs. 1,700)</option>
                      <option value="Designer Cake">Designer Cake (from Rs. 2,500)</option>
                      <option value="Custom Cake Design">Custom Cake (Photo / Specific Design)</option>
                      <option value="Butter Biscuits">Butter Biscuits</option>
                      <option value="Nan Khatai">Traditional Nan Khatai</option>
                      <option value="Assorted Biscuits">Assorted Bakery Biscuits</option>
                      <option value="Freshly Baked Pizza">Freshly Baked Pizza</option>
                      <option value="Other Bakery Items">Other Bakery Items</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#5A4232] mb-1">
                      Required Date / Time
                    </label>
                    <input
                      type="text"
                      value={dateRequired}
                      onChange={(e) => setDateRequired(e.target.value)}
                      placeholder="e.g., Tomorrow 6:00 PM"
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E5D2C0] text-[#2E1C14] placeholder-[#A89484] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#5A4232] mb-1">
                    Special Instructions or Custom Text
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g., Please write 'Happy Birthday Papa', 2 pound chocolate flavor..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-[#FAF7F2] border border-[#E5D2C0] text-[#2E1C14] placeholder-[#A89484] focus:outline-none focus:ring-2 focus:ring-[#8C5E3C]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-[0.98] shadow-md transition-all duration-150"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry to WhatsApp (0342 4954371)</span>
                </button>
              </form>
            </div>

            <div className="pt-4 mt-4 border-t border-[#EBD9C6] flex items-center justify-between text-xs text-[#7A6352]">
              <span>Bakery timing: 8:00 AM – 11:30 PM</span>
              <span className="font-semibold text-[#2E1C14]">Fast WhatsApp response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
