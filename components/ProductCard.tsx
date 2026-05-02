import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (id: string) => void;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick, featured = false }) => {
  return (
    <div 
      onClick={() => onClick(product.id)}
      className={`
        group relative overflow-hidden bg-white rounded-3xl cursor-pointer transition-all duration-500 ease-out
        ${featured 
          ? 'col-span-1 md:col-span-2 row-span-2 aspect-[4/3] md:aspect-auto hover:shadow-2xl hover:scale-[1.01]' 
          : 'aspect-[4/5] hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1'}
        border border-gray-200 shadow-sm
      `}
    >
      {/* Content Layer - High Z-Index to stay on top */}
      <div className={`absolute inset-0 z-20 p-8 flex flex-col ${featured ? 'justify-end' : 'justify-between'}`}>
        <div>
          {/* Small Title: Orange -> Light Orange on Hover */}
          <p className="text-xs font-bold tracking-widest text-orange-600 group-hover:text-orange-400 uppercase mb-2 transition-colors duration-300">
            {product.category}
          </p>
          
          {/* Main Title: Navy Blue -> White on Hover */}
          <h3 className={`font-bold text-blue-900 group-hover:text-white transition-colors duration-300 ${featured ? 'text-4xl md:text-5xl mb-4' : 'text-2xl mb-2 leading-tight'}`}>
            {product.name}
          </h3>
          
          {/* Text: Black -> Light Gray on Hover */}
          <p className={`text-black group-hover:text-gray-200 font-medium transition-colors duration-300 ${featured ? 'text-lg max-w-md' : 'text-sm line-clamp-2 leading-relaxed'}`}>
            {product.tagline}
          </p>
        </div>
        
        <div className={`mt-6 ${featured ? '' : 'flex items-center justify-between'}`}>
           <span className="inline-flex items-center text-sm font-bold text-white transition-colors duration-300 bg-orange-600 group-hover:bg-orange-500 px-5 py-2.5 rounded-full shadow-lg shadow-orange-600/30">
             View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
           </span>
        </div>
      </div>

      {/* Background Layer - Image and Overlays */}
      <div className="absolute inset-0 z-10 bg-gray-50">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover object-center absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        />
        
        {/* Light Overlay (Default) - Transparent Center to see Image */}
        {/* Optimized gradient: Solid white at very top/bottom, completely transparent in middle */}
        <div className={`absolute inset-0 bg-gradient-to-b ${featured ? 'from-transparent via-transparent to-white/90' : 'from-white/95 via-transparent via-transparent to-white/95'} transition-opacity duration-500 group-hover:opacity-0`} />
        
        {/* Dark Overlay (Hover) - Fades in on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};