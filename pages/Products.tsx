import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { Button } from '../components/Button';
import { PRODUCTS } from '../constants';
import { ViewState } from '../types';
import { SlidersHorizontal, CheckCircle, Zap, Settings, ArrowRight, Box, Cpu } from 'lucide-react';

interface ProductsProps {
  onNavigate: (view: ViewState, id: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredProducts]);

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Header Section */}
      <div className="relative border-b border-gray-200 pt-32 pb-16 px-6 overflow-hidden">
        {/* Background collage of machine images */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 opacity-[0.28] pointer-events-none select-none">
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Packaging machinery" />
          <img src="https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Packaging machinery" />
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Packaging machinery" />
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Packaging machinery" />
          <img src="https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Packaging machinery" />
          <img src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Packaging machinery" />
          <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Packaging machinery" />
          <img src="https://images.unsplash.com/photo-1533417479674-4f1c8a4c18f2?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Packaging machinery" />
        </div>
        {/* Gradient fade over the collage */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h5 className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-6">Our Catalogue &middot; {PRODUCTS.length} Machines</h5>
            <h1 className="anim-blur-in text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-[#1d1d1f]">
              Precision Machinery.
            </h1>
            <p className="anim-blur-in delay-300 text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
              Advanced packaging solutions engineered for speed, accuracy, and reliability.
              Discover the perfect machine for your production line.
            </p>
          </div>
        </div>
      </div>

      {/* Filter and Grid Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Sticky Controls */}
        <div className="sticky top-20 z-40 bg-[#f5f5f7]/95 backdrop-blur-md py-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-200/50 transition-all duration-300">
          
          {/* Filter Tabs */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 no-scrollbar gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  filter === cat 
                    ? 'bg-[#1d1d1f] text-white shadow-lg transform scale-105' 
                    : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-black border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium px-2">
            <SlidersHorizontal size={14} />
            <span>{filteredProducts.length} Machines Available</span>
          </div>
        </div>

        {/* Product Grid - Improved Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 pb-32">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className={`scroll-animate stagger-${(index % 5) + 1}`}>
              <ProductCard 
                product={product} 
                onClick={(id) => onNavigate(ViewState.PRODUCT_DETAIL, id)} 
              />
            </div>
          ))}
          
          {/* Empty State */}
          {filteredProducts.length === 0 && (
             <div className="col-span-full text-center py-24">
                <p className="text-gray-400 text-lg">No machines found in this category.</p>
                <button 
                  onClick={() => setFilter('All')}
                  className="mt-6 text-blue-600 font-bold hover:underline"
                >
                  View All Machines
                </button>
             </div>
          )}
        </div>
      </div>

      {/* Smart Technology Section (Dark) */}
      <div className="bg-[#0b0b0d] text-white py-32 overflow-hidden relative">
        {/* Background ambient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Image Column */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-[2rem] overflow-hidden aspect-square shadow-2xl border border-white/10 group bg-gray-900">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200" 
                  alt="Swiss Engineering Gears" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-110"
                />
                
                {/* Gradient Overlay for Text Readability if needed, though image is on side */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                {/* Badge */}
                <div className="absolute bottom-8 left-8 flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-lg">
                  <div className="bg-blue-600 rounded-full p-1">
                    <CheckCircle size={14} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">Swiss Engineering</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
                Smart Technology for <br />
                <span className="text-blue-500">Smarter Packaging.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
                Huntech integrates advanced IoT capabilities into our packaging lines. 
                Monitor efficiency, predict maintenance, and optimize throughput remotely.
              </p>

              <div className="space-y-10 mb-12">
                {/* Feature 1 */}
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-900/20 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                    <Zap className="text-blue-500" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">High Throughput</h4>
                    <p className="text-gray-400 text-base leading-relaxed max-w-md">
                      Maximize output without compromising on seal integrity. Our algorithms adjust heat and pressure in real-time.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-900/20 flex items-center justify-center shrink-0 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                    <Cpu className="text-blue-500" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">Modular Design</h4>
                    <p className="text-gray-400 text-base leading-relaxed max-w-md">
                      Easily swap components for different pouch styles. The system auto-calibrates for new configurations.
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => onNavigate(ViewState.ABOUT, '')}
                className="group inline-flex items-center text-white font-semibold text-lg hover:text-blue-400 transition-colors"
              >
                Explore Our Technology 
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section (Light) */}
      <div className="relative py-32 border-t border-gray-100 overflow-hidden bg-[#f5f5f7]">
        {/* Background machine image with dark overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1600&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/85" />
          {/* Radial vignette to focus center */}
          <div className="absolute inset-0 bg-radial-gradient" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(245,245,247,0.95) 80%)' }} />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="w-20 h-20 bg-blue-50 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-blue-600 shadow-sm">
             <Box size={40} strokeWidth={1.5} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-[#1d1d1f] tracking-tighter">
            Ready to upgrade your production line?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-500 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Contact our engineering team for a custom consultation. We analyze your product 
            and space to recommend the perfect solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button onClick={() => onNavigate(ViewState.CONTACT, '')} className="!px-10 !py-5 text-lg shadow-xl shadow-blue-900/5">
              Request Quote
            </Button>
            <Button 
              variant="outline" 
              onClick={() => onNavigate(ViewState.CONTACT, '')}
              className="!px-10 !py-5 text-lg hover:bg-gray-50"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
};