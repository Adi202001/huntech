import React, { useState } from 'react';
import { X, Wrench, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const BASE = 'https://huntechengineers.com/wp-content/uploads/2022/04/';
const TOTAL = 27;

const images = Array.from({ length: TOTAL }, (_, i) => ({
  id: i + 1,
  src: `${BASE}img-${i + 1}.jpg`,
  label: `Spare Part ${i + 1}`,
}));

export const Spares: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="pt-8 pb-20 bg-white animate-in fade-in duration-700">

      {/* Header */}
      <section className="relative overflow-hidden mb-16 pt-24 pb-16 text-center">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.92) 70%, white 100%)' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-8">
            <Wrench size={12} className="text-orange-500" />
            <span className="text-xs font-semibold text-orange-600 tracking-wide uppercase">Genuine Parts</span>
          </div>
          <h1 className="anim-blur-in text-5xl md:text-7xl font-bold tracking-tighter text-[#1d1d1f] mb-6">
            Services &amp; <br /><span className="shimmer-text">Spares.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto">
            We supply high-quality spare parts that extend the life of your packaging machinery. Genuine components, competitive prices, fast delivery.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img) => (
            <div
              key={img.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              onClick={() => setLightbox(img.id)}
            >
              <div className="aspect-square overflow-hidden bg-white flex items-center justify-center p-2">
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-[#1d1d1f] text-white rounded-[2rem] p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Specific Part?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Can't find what you're looking for? Contact us directly and our team will source the right component for your machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <Phone size={16} /> {COMPANY_INFO.phone}
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <Mail size={16} /> {COMPANY_INFO.email}
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <img
            src={`${BASE}img-${lightbox}.jpg`}
            alt={`Spare Part ${lightbox}`}
            className="max-w-full max-h-[85vh] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
