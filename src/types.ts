export interface CakeItem {
  id: string;
  name: string;
  priceText: string;
  startingPrice: number | null;
  description: string;
  image: string;
  tag?: string;
  popular?: boolean;
}

export interface BiscuitItem {
  id: string;
  name: string;
  priceText: string;
  description: string;
  image: string;
  badge?: string;
}

export interface PriceGuideItem {
  size: string;
  priceText: string;
  servings?: string;
  idealFor?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Cakes' | 'Biscuits' | 'Custom Cakes';
  image: string;
  description: string;
}

export interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

export interface PizzaItem {
  id: string;
  name: string;
  priceText: string;
  description: string;
  image: string;
  badge?: string;
  toppings?: string[];
}

