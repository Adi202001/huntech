import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (id: string) => void;
}

const pickSpeed = (specs: Product['specs']): string | null => {
  const key = Object.keys(specs).find((k) => /speed/i.test(k));
  return key ? specs[key] : null;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const speed = pickSpeed(product.specs);
  const price = product.priceRange;

  return (
    <div
      onClick={() => onClick(product.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(product.id); }}
      className="group relative overflow-hidden bg-white rounded-3xl cursor-pointer transition-all duration-500 ease-out aspect-[4/5] hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 border border-gray-200 shadow-sm focus-visible:ring-2 focus-visible:ring-orange-500 focus:outline-none"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-10 bg-gray-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Subtle bottom gradient — keeps image visible while ensuring text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Top-left category badge */}
      <div className="absolute top-5 left-5 z-20">
        <span className="text-[10px] font-bold tracking-widest text-orange-700 bg-orange-50 border border-orange-100 uppercase px-2.5 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-6 flex flex-col gap-4">
        <div>
          <h3 className="font-bold text-2xl leading-tight text-[#1d1d1f] group-hover:text-white transition-colors duration-300 mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 group-hover:text-gray-200 line-clamp-2 transition-colors duration-300">
            {product.tagline}
          </p>
        </div>

        {(speed || price) && (
          <div className="flex items-center gap-4 text-xs">
            {speed && (
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-300 transition-colors">Speed</span>
                <span className="font-semibold text-gray-800 group-hover:text-white transition-colors">{speed}</span>
              </div>
            )}
            {price && (
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-300 transition-colors">Price</span>
                <span className="font-semibold text-gray-800 group-hover:text-white transition-colors">{price}</span>
              </div>
            )}
          </div>
        )}

        <span className="inline-flex items-center self-start text-xs font-bold text-white bg-orange-600 group-hover:bg-orange-500 px-4 py-2 rounded-full shadow-lg shadow-orange-600/30 transition-colors duration-300">
          View Details <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  );
};