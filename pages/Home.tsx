import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, CheckCircle, Factory, ShieldCheck, Zap, Plus, Minus, Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, COMPANY_INFO } from '../constants';
import { ViewState } from '../types';

interface HomeProps {
  onNavigate: (view: ViewState, productId?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Parallax on hero image
  const heroImgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `scale(1.05) translateY(${window.scrollY * 0.18}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount = direction === 'left' ? -400 : 400;
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      q: "What types of products can your machines pack?",
      a: "Our machines are versatile and designed for snacks (chips, namkeen), powders (spices, flour, besan), granules (pulses, grains), and liquids (oil, sauces). We customize the filler system (Cup, Auger, or Multi-Head Weigher) based on your specific product."
    },
    {
      q: "Do you provide on-site installation and training?",
      a: "Yes, our engineers travel across India to install the machinery at your factory. We also provide comprehensive training to your operators to ensure smooth daily operations."
    },
    {
      q: "What is the warranty period?",
      a: "We provide a standard 1-year warranty on all major electronic components (PLC, Drives) and manufacturing defects. We also offer lifetime paid support for mechanical parts and upgrades."
    },
    {
      q: "How long does it take to deliver a machine?",
      a: "Standard VFFS machines are typically delivered within 2-3 weeks. Customized solutions or full plant setups may take 4-6 weeks depending on the complexity."
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#f5f5f7]">
        {/* Background Image Layer */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
           <img
             ref={heroImgRef}
             src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2670"
             alt="Industrial Technology"
             className="w-full h-full object-cover opacity-30 pointer-events-none grayscale transition-opacity duration-700"
             style={{ willChange: 'transform' }}
           />
           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f5f5f7]/40 to-[#f5f5f7]"></div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-100 to-purple-50 rounded-full blur-3xl -z-10 opacity-50"></div>

        <div className="max-w-5xl z-10 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 shadow-lg mb-8 animate-in slide-in-from-bottom-4 duration-1000">
             <Star size={12} className="text-orange-500 fill-orange-500" />
             <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Trusted by Manufacturers across India</span>
          </div>
          <h1 className="anim-blur-in text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-[#1d1d1f] mb-8 drop-shadow-sm leading-[0.9]">
            Packaging. <br />
            <span className="shimmer-text">Reimagined.</span>
          </h1>
          <p className="anim-blur-in delay-300 text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Engineered in Faridabad. Deployed for excellence. <br className="hidden md:block"/>
            The most reliable VFFS and Filling systems in India.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={() => onNavigate(ViewState.PRODUCTS)}>Explore Machines</Button>
            <Button variant="secondary" onClick={() => onNavigate(ViewState.ABOUT)}>Our Story</Button>
          </div>
        </div>
      </section>

      {/* Trusted By / Clients Strip */}
      <section className="py-10 border-y border-gray-200 bg-white overflow-hidden scroll-animate">
        <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">Trusted by Manufacturers Across India</p>
        <div className="relative flex overflow-hidden">
          {/* One animated track holding two identical halves so translateX(-50%) loops seamlessly */}
          <div className="flex shrink-0 items-center animate-marquee">
            {[0, 1].map((pass) => (
              <div key={pass} className="flex shrink-0 items-center gap-12 pr-12" aria-hidden={pass === 1}>
                {Array.from({ length: 15 }, (_, i) => (
                  <div key={i} className="flex-shrink-0 h-24 w-44 flex items-center justify-center">
                    <img
                      src={`/assets/clients/logo-${i + 1}.jpg`}
                      alt={`Client ${i + 1}`}
                      loading="lazy"
                      className="max-h-20 max-w-[160px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Collection - Horizontal Scroll Layout */}
      <section className="py-32 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between scroll-animate">
            <div>
                <h2 className="text-5xl font-bold text-[#1d1d1f] mb-3 tracking-tight">The Collection.</h2>
                <p className="text-xl text-gray-500 font-light">Precision machinery for every packaging need.</p>
            </div>
            <div className="hidden md:flex gap-3">
                <button
                  aria-label="Scroll machines left"
                  onClick={() => scroll('left')}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                  aria-label="Scroll machines right"
                  onClick={() => scroll('right')}
                  className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
                <Button variant="outline" onClick={() => onNavigate(ViewState.PRODUCTS)} className="!px-6 ml-4">View All Models</Button>
            </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pr-6 max-w-[100vw] no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth"
        >
            {PRODUCTS.map((product) => (
                <div key={product.id} className="snap-center shrink-0 w-[85vw] md:w-[400px]">
                    <ProductCard
                        product={product}
                        onClick={(id) => onNavigate(ViewState.PRODUCT_DETAIL, id)}
                    />
                </div>
            ))}
            {/* View All Card */}
            <div className="snap-center shrink-0 w-[85vw] md:w-[400px] flex items-center justify-center bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => onNavigate(ViewState.PRODUCTS)}>
                <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto mb-4">
                        <ArrowRight className="text-black" />
                    </div>
                    <span className="font-bold text-lg">View Full Catalog</span>
                </div>
            </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1 scroll-animate-left">
                      <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                          <img src="/assets/AUGOR/AUGOR-10.jpeg" alt="Engineering" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/10"></div>
                      </div>
                  </div>
                  <div className="order-1 lg:order-2 scroll-animate-right">
                      <div className="inline-block p-3 rounded-2xl bg-orange-50 text-orange-600 mb-6 anim-float">
                          <Factory size={24} />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Built in Faridabad. <br/>Engineered for the World.</h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                          Since 2010, Huntech Engineers has been at the forefront of the packaging revolution in North India. Located in the industrial hub of Old Faridabad, we combine traditional mechanical expertise with modern automation technologies.
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed mb-8">
                          Our philosophy is "Frugal Innovation" — creating world-class VFFS and filling systems that are affordable, durable, and easy to maintain for Indian manufacturers.
                      </p>
                      <Button variant="outline" onClick={() => onNavigate(ViewState.ABOUT)}>Read Our Story</Button>
                  </div>
              </div>
          </div>
      </section>

      {/* Why Huntech? Grid */}
      <section className="bg-[#1d1d1f] text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Industry Leaders Choose Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">We don't just sell machines; we sell production reliability.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {[
                { icon: Zap, title: "High Speed", desc: "Up to 450 pouches per minute on our flagship FFS line, with consistent sealing quality." },
                { icon: ShieldCheck, title: "Built to Last", desc: "Heavy-gauge steel frames and SS contact parts engineered for years of continuous operation." },
                { icon: Users, title: "Local Support", desc: "Under 24-hour response time from our Faridabad-based service team." }
            ].map((item, i) => (
                <div key={i} className={`anim-flip delay-${i === 0 ? '100' : i === 1 ? '300' : '500'} p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300`}>
                    <item.icon className="w-10 h-10 text-orange-500 mb-6 anim-float-slow" />
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Compliance & Certifications Strip */}
      <section className="py-20 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl scroll-animate-left">
                 <div className="flex items-center gap-2 mb-4">
                    <ShieldCheck className="text-green-600" size={24} />
                    <span className="text-sm font-bold text-green-600 uppercase tracking-wider">Quality Assurance</span>
                 </div>
                 <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f]">Global Standards. <br/>Local Engineering.</h2>
                 <p className="text-gray-500 text-lg leading-relaxed">
                   Our manufacturing facility is ISO 9001:2015 certified. Every machine undergoes a rigorous 48-hour continuous test run before dispatch to ensure consistent build quality and reliable performance.
                 </p>
              </div>

              {/* Certification Badge */}
              <div className="w-full md:w-auto scroll-animate-right">
                 <div className="anim-zoom flex items-center gap-6 p-6 rounded-2xl bg-gray-50 border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center font-bold text-blue-900 border border-gray-200 shadow-sm text-lg">ISO</div>
                    <div>
                       <p className="font-bold text-gray-900 text-lg">ISO 9001:2015</p>
                       <p className="text-gray-500 text-sm">Quality Management Certified</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything you need to know about our machinery.</p>
        </div>
        <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-6 text-left"
                    >
                        <span className="font-semibold text-lg text-gray-900 pr-8">{faq.q}</span>
                        {openFaq === idx ? <Minus className="text-orange-600 shrink-0" /> : <Plus className="text-gray-400 shrink-0" />}
                    </button>
                    <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <p className="p-6 pt-0 text-gray-600 leading-relaxed">
                            {faq.a}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden shadow-2xl group">
              {/* Background Image - High Tech Industrial Machine */}
              <div className="absolute inset-0">
                  <img 
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=2000" 
                      alt="High Tech Packaging Machine" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Overlay - Gradient Blue to Black */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-black/70 to-blue-900/80 mix-blend-multiply"></div>
                  <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-12 md:p-24 text-center text-white">
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to scale your production?</h2>
                  <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-10">
                      Get a customized quote for your packaging line today. 
                      Expert consultation included.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button 
                        onClick={() => onNavigate(ViewState.CONTACT)}
                        className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg"
                      >
                          Get a Free Quote
                      </button>
                      <button 
                        onClick={() => onNavigate(ViewState.PRODUCTS)}
                        className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
                      >
                          View Catalog
                      </button>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};