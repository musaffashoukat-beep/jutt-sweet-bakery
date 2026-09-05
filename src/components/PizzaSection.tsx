import React from 'react';
import { MessageCircle, Flame, Sparkles } from 'lucide-react';
import { PIZZA_PRODUCTS, getWhatsAppUrl } from '../data/bakeryData';

export const PizzaSection: React.FC = () => {
  return (
    <section id="pizza" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#EEDCC9]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0E4] text-[#8C5E3C] text-xs font-bold uppercase tracking-wider border border-[#E8D7C4]">
            <Flame className="w-3.5 h-3.5 text-[#B85422]" />
            <span>Hot & Savory Bakes</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E1C14] tracking-tight">
            Freshly Baked Pizza
          </h2>

          <p className="text-base sm:text-lg text-[#5A4232]">
            Craving something hot and savory? Jutt Sweet Bakery prepares fresh, cheesy pizzas baked to order.
          </p>
        </div>

        {/* Product Card */}
        <div className="max-w-xl mx-auto">
          {PIZZA_PRODUCTS.map((pizza) => {
            const pizzaOrderMessage = `Assalam o Alaikum, I would like to order the ${pizza.name} (${pizza.priceText}) from Jutt Sweet Bakery.`;
            const orderLink = getWhatsAppUrl(pizzaOrderMessage);

            return (
              <div
                key={pizza.id}
                id={`pizza-card-${pizza.id}`}
                className="group flex flex-col bg-[#FFFDF9] rounded-3xl overflow-hidden border border-[#EBD9C6] shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-[#EAE2D8]">
                  <img
                    src={pizza.image}
                    alt={`${pizza.name} with chicken, capsicum and olives at Jutt Sweet Bakery Lahore`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {pizza.badge && (
                    <span className="absolute top-3.5 left-3.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#2E1C14]/85 backdrop-blur-xs text-[#E3A857] shadow-xs flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#E3A857]" />
                      <span>{pizza.badge}</span>
                    </span>
                  )}

                  {/* Price overlay ribbon */}
                  <div className="absolute bottom-3.5 right-3.5 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-xs shadow-md border border-[#EBD9C6]">
                    <span className="text-xs font-extrabold text-[#2E1C14]">
                      {pizza.priceText}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col justify-between space-y-5">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-2xl font-bold text-[#2E1C14] group-hover:text-[#8C5E3C] transition-colors">
                        {pizza.name}
                      </h3>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FAF0E4] text-[#8C5E3C] border border-[#EBD9C6]">
                        Made to Order
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-[#5A4232] mt-2 leading-relaxed">
                      {pizza.description}
                    </p>

                    {/* Toppings pills */}
                    {pizza.toppings && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {pizza.toppings.map((topping) => (
                          <span
                            key={topping}
                            className="text-xs px-2.5 py-1 rounded-lg bg-[#FAF7F2] text-[#4A3525] border border-[#E8D7C4]"
                          >
                            ✓ {topping}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Pricing & WhatsApp CTA */}
                  <div className="pt-4 border-t border-[#E8D7C4] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#8C5E3C] font-semibold block">
                        Pricing & Availability
                      </span>
                      <span className="text-base font-bold text-[#2E1C14]">
                        {pizza.priceText}
                      </span>
                    </div>

                    <a
                      href={orderLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 shadow-xs transition-transform duration-150"
                      aria-label={`Order ${pizza.name} on WhatsApp`}
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
      </div>
    </section>
  );
};
