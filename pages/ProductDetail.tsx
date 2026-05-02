import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Cog, Download, Zap, ShieldCheck, Thermometer, Settings, Play, Quote, Star, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../components/Button';
import { Product, ViewState } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onNavigate: (view: ViewState) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onNavigate }) => {
  // State for active image
  const [activeImage, setActiveImage] = useState(product.imageUrl);
  
  // Reset active image when product changes
  useEffect(() => {
    setActiveImage(product.imageUrl);
  }, [product]);

  // Construct share URLs
  const shareUrl = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '');
  const shareText = encodeURIComponent(`Check out the ${product.name} by Huntech Engineers: ${product.tagline}`);

  // Mock Testimonials for Widget
  const productTestimonials = [
    { text: `The ${product.name} significantly increased our packaging speed. The accuracy is unmatched in this price range.`, author: "Suresh Gupta", company: "SnackUp India" },
    { text: "Build quality is excellent. The stainless steel finish is hygienic and very easy to clean after every shift.", author: "Meera Reddy", company: "Organic Spices" },
    { text: "Very easy to operate. Our workers learned the PLC system in just 2 days. Highly recommended.", author: "Prakash Jha", company: "Daily Foods" }
  ];

  // Extract Speed from specs if available for the hero stats
  const speed = product.specs['Speed'] || product.specs['Max Speed'] || 'High Speed';
  
  // Use product images array if available, otherwise use main imageUrl
  const thumbnails = product.images && product.images.length > 0 
    ? product.images 
    : [product.imageUrl];

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      
      {/* Breadcrumb / Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-8 mb-8">
         <button 
          onClick={onBack} 
          className="group inline-flex items-center text-sm font-bold text-gray-500 hover:text-black transition-colors bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full border border-gray-100"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to Catalog
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left: Image Gallery */}
          <div className="space-y-6 animate-in slide-in-from-left-4 duration-700">
             <div className="aspect-[4/3] bg-gray-100 rounded-[2rem] overflow-hidden relative group shadow-2xl shadow-gray-300/50">
                <img 
                    key={activeImage} // Key helps trigger animation on change
                    src={activeImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-in fade-in" 
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-xs font-bold px-3 py-1.5 rounded-full text-green-700 flex items-center gap-2 shadow-sm border border-green-100/50">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> In Stock
                </div>
             </div>
             {/* Thumbnails Row */}
             <div className="grid grid-cols-4 gap-4 max-h-[300px] overflow-y-auto">
                {thumbnails.map((src, i) => (
                   <div 
                        key={i} 
                        onClick={() => setActiveImage(src)}
                        className={`aspect-square rounded-2xl overflow-hidden border-2 ${activeImage === src ? 'border-orange-500' : 'border-transparent'} cursor-pointer hover:border-gray-300 transition-all`}
                   >
                      <img src={src} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
                   </div>
                ))}
             </div>
          </div>

          {/* Right: Content & Specs */}
          <div className="flex flex-col justify-center animate-in slide-in-from-right-4 duration-700">
             <div className="mb-2">
                <span className="text-orange-600 font-bold tracking-widest text-xs uppercase">{product.category}</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-6 tracking-tight leading-tight">{product.name}</h1>
             <p className="text-lg text-gray-500 leading-relaxed mb-10 font-light">
               {product.description}
             </p>

             {/* Key Stats Row */}
             <div className="flex items-center gap-8 mb-10 border-l-4 border-orange-500 pl-8 py-2">
                <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Speed</p>
                   <p className="font-bold text-xl text-[#1d1d1f]">{speed.replace('PPM', '')} <span className="text-sm font-medium text-gray-500">PPM</span></p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Warranty</p>
                   <p className="font-bold text-xl text-[#1d1d1f]">1 <span className="text-sm font-medium text-gray-500">Year</span></p>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Support</p>
                   <p className="font-bold text-xl text-[#1d1d1f]">24/7</p>
                </div>
             </div>

             {/* Actions */}
             <div className="flex flex-wrap gap-4 mb-10">
                <Button onClick={() => onNavigate(ViewState.CONTACT)} className="flex-1 md:flex-none justify-center h-14 text-base shadow-xl shadow-blue-900/5 px-8">
                  Request Quote
                </Button>
                <button className="flex-1 md:flex-none h-14 px-8 rounded-full bg-gray-50 border border-gray-200 text-gray-900 font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                   <Download size={18} className="text-gray-600"/> Brochure
                </button>
             </div>

             {/* Trust Badge */}
             <div className="bg-green-50/50 border border-green-100 rounded-2xl p-5 flex items-start gap-4">
                <div className="bg-green-100 p-1.5 rounded-full shrink-0">
                    <ShieldCheck className="text-green-600" size={18} />
                </div>
                <div>
                   <h4 className="font-bold text-sm text-gray-900 mb-1">Swiss-Engineered Reliability</h4>
                   <p className="text-xs text-gray-500 leading-relaxed">Certified for 24/7 continuous operation with 99.9% uptime guarantee. Components sourced from top global vendors.</p>
                </div>
             </div>
          </div>
        </div>

        {/* FEATURES SECTION (Cards) */}
        <div className="mb-24">
           <div className="max-w-2xl mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#1d1d1f] tracking-tight">Engineered for Efficiency.</h2>
              <p className="text-gray-500 text-lg font-light">Every component designed to maximize uptime and minimize cost.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
              {product.features.slice(0, 3).map((feature, i) => (
                 <div key={i} className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                       {i === 0 ? <Zap size={28}/> : i === 1 ? <Thermometer size={28}/> : <Settings size={28}/>}
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-[#1d1d1f]">{feature.split(' ').slice(0, 3).join(' ')}...</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature}</p>
                 </div>
              ))}
              {/* If fewer than 3 features, add a generic one to maintain grid balance */}
              {product.features.length < 3 && (
                 <div className="p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 text-gray-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                       <Cog size={28}/>
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-[#1d1d1f]">Tool-Free Changeover</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">Switch between pouch sizes in under 10 minutes without requiring specialized tools.</p>
                 </div>
              )}
           </div>
        </div>

        {/* TECHNICAL SPECS SECTION */}
        <div className="bg-[#f5f5f7] rounded-[3rem] p-8 md:p-16 mb-24 relative overflow-hidden">
           {/* Decorative Background */}
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

           <div className="max-w-5xl mx-auto relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                 <div>
                    <h2 className="text-3xl font-bold mb-4 text-[#1d1d1f]">Technical Specifications</h2>
                    <p className="text-gray-500 max-w-md">Comprehensive data for the {product.name} model. All specifications are subject to customization.</p>
                 </div>
                 <button className="text-orange-600 font-bold text-sm hover:underline flex items-center gap-1 group">
                    Download Datasheet <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
                 </button>
              </div>

              <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
                 {Object.entries(product.specs).map(([key, value], i) => (
                    <div key={key} className="border-b border-gray-200/60 pb-4">
                       <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{key}</h4>
                       <p className="text-xl font-medium text-[#1d1d1f] tracking-tight">{value}</p>
                    </div>
                 ))}
                 <div className="border-b border-gray-200/60 pb-4">
                     <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Machine Weight</h4>
                     <p className="text-xl font-medium text-[#1d1d1f] tracking-tight">~1200 KG</p>
                 </div>
                 <div className="border-b border-gray-200/60 pb-4">
                     <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Power Supply</h4>
                     <p className="text-xl font-medium text-[#1d1d1f] tracking-tight">220V / 415V (50/60Hz)</p>
                 </div>
              </div>
           </div>
        </div>

        {/* CUSTOMER FEEDBACK SECTION */}
        <div className="border-t border-gray-200 pt-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Quote size={20} className="text-orange-600 fill-orange-600"/>
                            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Reviews</span>
                        </div>
                        <h2 className="text-3xl font-bold text-[#1d1d1f]">Customer Feedback</h2>
                    </div>
                    
                    {/* Social Share */}
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Share</span>
                        <div className="flex gap-2">
                           <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1877F2] hover:text-white transition-all"><Facebook size={14}/></a>
                           <a href={`https://twitter.com/intent/tweet?text=${shareText}`} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1DA1F2] hover:text-white transition-all"><Twitter size={14}/></a>
                           <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-all"><Linkedin size={14}/></a>
                        </div>
                    </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                    {productTestimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="flex text-orange-400 mb-6 gap-1">
                                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" strokeWidth={0} />)}
                            </div>
                            <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium min-h-[60px]">"{t.text}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-600 font-bold border border-white shadow-sm">
                                    {t.author[0]}
                                </div>
                                <div>
                                    <span className="block text-sm font-bold text-gray-900">{t.author}</span>
                                    <span className="block text-xs text-gray-400 font-medium">{t.company}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};