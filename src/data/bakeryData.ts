import { CakeItem, BiscuitItem, PriceGuideItem, GalleryItem, WhyUsItem, PizzaItem } from '../types';
import classicBirthdayCakeImg from '../assets/images/classic_birthday_cake_1788577958956.jpg';
import multilayerCelebrationCakeImg from '../assets/images/multilayer_celebration_cake_1788577978814.jpg';
import freshlyBakedPizzaImg from '../assets/images/freshly_baked_pizza_1788577997546.jpg';

export const BUSINESS_INFO = {
  name: 'Jutt Sweet Bakery',
  tagline: 'Fresh Cakes • Delicious Biscuits • Sweet Memories',
  location: 'Daroghawala, Ahmad Town, Lahore, Pakistan',
  phoneDisplay: '0342 4954371',
  phoneTel: 'tel:03424954371',
  whatsappNumber: '923424954371',
  startingCakePrice: 'Rs. 1,500',
  city: 'Lahore',
  neighborhood: 'Daroghawala, Ahmad Town',
  openingHours: 'Open Daily: 8:00 AM – 11:30 PM',
};

export function getWhatsAppUrl(message?: string): string {
  const defaultText = 'Assalam o Alaikum, I would like to place an order from Jutt Sweet Bakery.';
  const textToSend = message || defaultText;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(textToSend)}`;
}

export const CAKES: CakeItem[] = [
  {
    id: 'classic-birthday-cake',
    name: 'Classic Birthday Cake',
    priceText: 'Starting from Rs. 1,500',
    startingPrice: 1500,
    description: 'Fresh cream cake with customizable message.',
    image: classicBirthdayCakeImg,
    tag: 'Bestseller',
    popular: true,
  },
  {
    id: 'chocolate-cake',
    name: 'Chocolate Cake',
    priceText: 'Starting from Rs. 1,800',
    startingPrice: 1800,
    description: 'Rich chocolate cake for chocolate lovers.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80',
    tag: 'Chocoholic Favorite',
    popular: true,
  },
  {
    id: 'vanilla-cake',
    name: 'Vanilla Cake',
    priceText: 'Starting from Rs. 1,500',
    startingPrice: 1500,
    description: 'Soft and creamy classic vanilla cake.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=900&q=80',
    tag: 'Classic Recipe',
  },
  {
    id: 'fresh-cream-cake',
    name: 'Fresh Cream Cake',
    priceText: 'Starting from Rs. 1,700',
    startingPrice: 1700,
    description: 'Light, creamy and freshly prepared.',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80',
    tag: 'Daily Fresh',
  },
  {
    id: 'designer-cake',
    name: 'Designer Cake',
    priceText: 'Starting from Rs. 2,500',
    startingPrice: 2500,
    description: 'Beautiful custom-designed cakes for special occasions.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=80',
    tag: 'Special Occasion',
    popular: true,
  },
  {
    id: 'custom-cake',
    name: 'Custom Cake',
    priceText: 'Price: Contact us',
    startingPrice: null,
    description: 'Tell us your design, size and flavor requirements.',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=900&q=80',
    tag: 'Made to Order',
  },
];

export const CAKE_PRICE_GUIDE: PriceGuideItem[] = [
  {
    size: '1 Pound',
    priceText: 'From Rs. 1,500',
    servings: '3 – 5 Persons',
    idealFor: 'Intimate celebrations, small birthdays',
  },
  {
    size: '2 Pound',
    priceText: 'From Rs. 2,800',
    servings: '6 – 10 Persons',
    idealFor: 'Family parties, celebrations',
  },
  {
    size: '3 Pound',
    priceText: 'From Rs. 4,000',
    servings: '12 – 16 Persons',
    idealFor: 'Large gatherings, dinner parties',
  },
  {
    size: '4 Pound',
    priceText: 'From Rs. 5,200',
    servings: '18 – 24 Persons',
    idealFor: 'Big celebrations & events',
  },
  {
    size: 'Custom / Designer',
    priceText: 'From Rs. 2,500',
    servings: 'Custom Size & Tiers',
    idealFor: 'Themed birthdays, weddings, anniversaries',
  },
];

export const BISCUITS: BiscuitItem[] = [
  {
    id: 'butter-biscuits',
    name: 'Butter Biscuits',
    priceText: 'Price: Contact Us',
    description: 'Crisp, rich, melt-in-the-mouth golden butter biscuits baked with pure butter.',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=900&q=80',
    badge: 'Bakery Favorite',
  },
  {
    id: 'coconut-biscuits',
    name: 'Coconut Biscuits',
    priceText: 'Price: Contact Us',
    description: 'Crispy cookies baked with toasted desiccated coconut and subtle sweetness.',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=900&q=80',
    badge: 'Aromatic & Crispy',
  },
  {
    id: 'chocolate-biscuits',
    name: 'Chocolate Biscuits',
    priceText: 'Price: Contact Us',
    description: 'Deep cocoa infused crunchy cookies studded with rich chocolate flavor.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
    badge: 'Kids Favorite',
  },
  {
    id: 'nan-khatai',
    name: 'Nan Khatai',
    priceText: 'Price: Contact Us',
    description: 'Traditional Lahori cardamom shortbread biscuits with roasted almonds on top.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80',
    badge: 'Lahori Specialty',
  },
  {
    id: 'assorted-biscuits',
    name: 'Assorted Biscuits',
    priceText: 'Price: Contact Us',
    description: 'A delightful mixed selection box of our finest handmade daily bakery biscuits.',
    image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=900&q=80',
    badge: 'Gift Box Favorite',
  },
  {
    id: 'special-bakery-biscuits',
    name: 'Special Bakery Biscuits',
    priceText: 'Price: Contact Us',
    description: 'Chef special recipe biscuits with delicate jam center and pistachio crunch.',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=900&q=80',
    badge: 'Chef Special',
  },
];

export const WHY_CHOOSE_US: WhyUsItem[] = [
  {
    icon: '🍰',
    title: 'Freshly Baked',
    description: 'Fresh cakes and biscuits prepared with care.',
  },
  {
    icon: '❤️',
    title: 'Made With Love',
    description: 'Every order is prepared with attention to quality.',
  },
  {
    icon: '🎂',
    title: 'Custom Orders',
    description: 'Choose your cake size, flavor and design.',
  },
  {
    icon: '📍',
    title: 'Local Lahore Bakery',
    description: 'Serving customers in Daroghawala, Ahmad Town, Lahore.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Multi-Layer Birthday Celebration Cake',
    category: 'Cakes',
    image: multilayerCelebrationCakeImg,
    description: 'Classic celebration cake with whipped buttercream rosettes and berries.',
  },
  {
    id: 'g2',
    title: 'Traditional Golden Nan Khatai',
    category: 'Biscuits',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    description: 'Authentic Lahori cardamon shortbread baked fresh every morning.',
  },
  {
    id: 'g3',
    title: 'Decadent Dark Chocolate Drip Cake',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80',
    description: 'Rich chocolate ganache glaze on soft chocolate sponge.',
  },
  {
    id: 'g4',
    title: 'Bespoke Floral Designer Cake',
    category: 'Custom Cakes',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1000&q=80',
    description: 'Custom wedding & anniversary designer cake crafted to customer theme.',
  },
  {
    id: 'g5',
    title: 'Crispy Bakery Butter & Jam Cookies',
    category: 'Biscuits',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=1000&q=80',
    description: 'Melt-in-mouth afternoon tea biscuits prepared daily.',
  },
  {
    id: 'g6',
    title: 'Custom Novelty Birthday Creation',
    category: 'Custom Cakes',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=1000&q=80',
    description: 'Tailor-made customized cake for children birthdays and special events.',
  },
  {
    id: 'g7',
    title: 'Delicate Strawberry Fresh Cream Sponge',
    category: 'Cakes',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1000&q=80',
    description: 'Light, fluffy fresh cream cake with seasonal fruit garnishes.',
  },
  {
    id: 'g8',
    title: 'Assorted Lahore Tea Biscuit Platter',
    category: 'Biscuits',
    image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&w=1000&q=80',
    description: 'Selection of crunchy coconut, chocolate, and butter cookies.',
  },
];

export const PIZZA_PRODUCTS: PizzaItem[] = [
  {
    id: 'freshly-baked-pizza',
    name: 'Freshly Baked Pizza',
    priceText: 'Price: Contact Us',
    description: 'Hot, cheesy and freshly baked pizza made to order.',
    image: freshlyBakedPizzaImg,
    badge: 'Freshly Baked',
    toppings: ['Melted Mozzarella', 'Tender Chicken Chunks', 'Fresh Green Capsicum', 'Sliced Black Olives'],
  },
];

