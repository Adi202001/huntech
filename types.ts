export enum ViewState {
  HOME = 'HOME',
  PRODUCTS = 'PRODUCTS',
  PRODUCT_DETAIL = 'PRODUCT_DETAIL',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  SPARES = 'SPARES'
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  imageUrl: string;
  images?: string[]; // Array of additional product images for gallery
  priceRange?: string;
  suitableFor: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}