import React, { useEffect, useRef, useState } from 'react';
import { TEAM, COMPANY_INFO } from '../constants';
import { CheckCircle2, Quote, Target, Award, ShieldCheck, Users, Globe, Hammer } from 'lucide-react';

// Animated counter hook
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

export const About: React.FC = () => {
  const c1 = useCounter(15);
  const c2 = useCounter(500);
  const c3 = useCounter(3);

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

  const milestones = [
    { year: '2010', title: 'The Beginning', desc: 'Started operations in a small workshop in Old Faridabad with a focus on basic sealing machines.' },
    { year: '2015', title: 'Expansion', desc: 'Moved to our current 10,000 sq. ft. facility. Introduced the first fully automatic VFFS line.' },
    { year: '2018', title: 'Innovation Award', desc: 'Recognized by MSME body for "Best Budget Packaging Solution" in North India.' },
    { year: '2023', title: 'Going Digital', desc: 'Launched IoT-enabled Smart Weighers, allowing remote monitoring for factory owners.' },
    { year: '2025', title: 'Global Vision', desc: 'Incorporated as Huntech Engineers Pvt. Ltd. with exports to Nepal, Bangladesh, and Africa.' },
  ];

  const testimonials = [
    { text: "Huntech's machines are built like tanks. We have been running their VFFS for 5 years with zero major breakdowns.", author: "Rajesh Kumar", role: "MD, Tasty Bites Snacks", location: "Delhi" },
    { text: "The service team is incredible. They reached our plant in Panipat within 4 hours when we had a sensor issue.", author: "Amit Singhania", role: "Plant Head, Golden Grains", location: "Haryana" },
    { text: "We switched from expensive imported machines to Huntech. Same speed, half the cost, and local spare parts availability.", author: "Vikram Singh", role: "Director, Fresh Spices Co.", location: "Punjab" },
  ];

  return (
    <div className="pt-8 pb-20 animate-in fade-in duration-700 bg-white">
      
      {/* Header */}
      <section className="relative overflow-hidden mb-24 pt-24 pb-20 text-center">
        {/* Background collage */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 opacity-[0.22] pointer-events-none select-none">
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Industrial machinery" />
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Industrial machinery" />
          <img src="https://images.unsplash.com/photo-1565689157206-0fddef7589a2?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Industrial machinery" />
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Industrial machinery" />
          <img src="https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Industrial machinery" />
          <img src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Industrial machinery" />
          <img src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Industrial machinery" />
          <img src="https://images.unsplash.com/photo-1533417479674-4f1c8a4c18f2?auto=format&fit=crop&w=600&q=60" className="w-full h-full object-cover" alt="Industrial machinery" />
        </div>
        {/* Radial gradient — fade edges, keep centre clear */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.6) 20%, rgba(255,255,255,0.92) 65%, white 100%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="anim-blur-in text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-[#1d1d1f]">
            We Build <br/> <span className="shimmer-text">Momentum.</span>
          </h1>
          <div className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-500 leading-relaxed font-light">
            <p className="mb-6">
              Huntech Engineers began with a simple vision in 2010: to democratize high-quality packaging automation for Indian manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="border-y border-gray-100 py-12 mb-24 bg-[#fbfbfd]">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div ref={c1.ref} className="anim-zoom delay-100">
                 <p className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2">{c1.count}+</p>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years Experience</p>
             </div>
             <div ref={c2.ref} className="anim-zoom delay-200">
                 <p className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2">{c2.count}+</p>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Machines Installed</p>
             </div>
             <div ref={c3.ref} className="anim-zoom delay-300">
                 <p className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2">{c3.count}</p>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Countries Exported</p>
             </div>
             <div className="anim-zoom delay-400">
                 <p className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-2">24/7</p>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Support Active</p>
             </div>
         </div>
      </section>

      {/* Visual Story */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid md:grid-cols-2 gap-8 items-center">
             <div className="space-y-6 scroll-animate-left">
                 <h2 className="text-4xl font-bold text-[#1d1d1f] tracking-tight">The Factory Floor.</h2>
                 <p className="text-lg text-gray-600 leading-relaxed">
                     Located in the industrial heart of Old Faridabad, our 10,000 sq. ft. facility is where heavy metal meets precision electronics. We don't just assemble; we fabricate. 
                 </p>
                 <p className="text-lg text-gray-600 leading-relaxed">
                     By controlling the chassis manufacturing in-house, we ensure that every Huntech machine is vibration-free and durable enough to withstand the harshest industrial environments.
                 </p>
             </div>
             <div className="grid grid-cols-2 gap-4 scroll-animate-right">
                 <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" className="rounded-2xl w-full aspect-square object-cover shadow-xl" alt="Factory 1" />
                 <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" className="rounded-2xl w-full aspect-square object-cover mt-8 shadow-xl" alt="Factory 2" />
             </div>
          </div>
      </section>

      {/* Purpose Section */}
      <section className="bg-[#1d1d1f] text-white py-32 mb-24">
        <div className="max-w-4xl mx-auto px-6 text-center scroll-animate-scale">
            <Target className="text-blue-500 w-16 h-16 mx-auto mb-8" strokeWidth={1.5} />
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Our Mission</h2>
            <p className="text-2xl md:text-4xl text-gray-400 leading-tight font-light">
                "To democratize automation for Indian manufacturers. World-class packaging technology shouldn't be a luxury—it should be the standard."
            </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
         <div className="grid md:grid-cols-3 gap-12">
             <div className="anim-flip delay-100 bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                 <Hammer className="w-10 h-10 text-orange-600 mb-6 anim-float" strokeWidth={1.5}/>
                 <h3 className="text-xl font-bold mb-3">Robust Build</h3>
                 <p className="text-gray-500 leading-relaxed">We use heavier gauge steel than competitors. Our machines are built to last decades, not just years.</p>
             </div>
             <div className="anim-flip delay-300 bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                 <Users className="w-10 h-10 text-orange-600 mb-6 anim-float-slow" strokeWidth={1.5}/>
                 <h3 className="text-xl font-bold mb-3">Customer First</h3>
                 <p className="text-gray-500 leading-relaxed">We don't sell and disappear. Our relationship begins after installation. Support is our #1 product.</p>
             </div>
             <div className="anim-flip delay-500 bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                 <Globe className="w-10 h-10 text-orange-600 mb-6 anim-float-fast" strokeWidth={1.5}/>
                 <h3 className="text-xl font-bold mb-3">Global Standards</h3>
                 <p className="text-gray-500 leading-relaxed">We build to ISO 9001:2015 quality standards while keeping pricing optimized for India.</p>
             </div>
         </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-[#1d1d1f]">Our Journey</h2>
            <p className="text-gray-500 text-lg">A decade of engineering excellence.</p>
        </div>
        
        <div className="relative">
            {/* Center Line */}
            <div className="anim-line absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>

            <div className="space-y-16">
                {milestones.map((item, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center justify-between group pl-20 md:pl-0">
                        
                        {/* Dot */}
                        <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-orange-500 z-10 transform -translate-x-1/2 shadow-sm mt-1.5 md:mt-0"></div>

                        {/* Left Side */}
                        <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                            {index % 2 === 0 ? (
                                <div>
                                    <span className="text-5xl font-bold text-gray-200 group-hover:text-orange-500 transition-colors duration-500">{item.year}</span>
                                </div>
                            ) : (
                                <div>
                                    <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            )}
                        </div>

                        {/* Right Side */}
                        <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:text-right md:pr-12'}`}>
                            {index % 2 === 0 ? (
                                <div>
                                    <h3 className="text-xl font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            ) : (
                                <div>
                                    <span className="text-5xl font-bold text-gray-200 group-hover:text-orange-500 transition-colors duration-500">{item.year}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold mb-4 text-[#1d1d1f]">Leadership</h2>
                 <p className="text-gray-500">The minds behind the machines.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {TEAM.map((member, i) => (
                    <div key={i} className="bg-white p-8 rounded-[2rem] shadow-lg flex items-center gap-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full object-cover grayscale flex-shrink-0"/>
                        <div>
                            <p className="font-bold text-xl text-[#1d1d1f]">{member.name}</p>
                            <p className="text-sm text-orange-600 font-bold uppercase tracking-wider mb-2">{member.role}</p>
                            <p className="text-sm text-gray-500">{member.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-white border border-gray-100 rounded-[3rem] p-12 text-center shadow-xl shadow-gray-200/80">
            <div className="inline-flex items-center justify-center p-3 bg-green-50 text-green-600 rounded-2xl mb-6">
               <ShieldCheck size={32} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-[#1d1d1f]">Certified Excellence</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-12">
              Our manufacturing operations are certified to ensure consistent quality, reliability, and process discipline.
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
               {['ISO 9001:2015'].map((cert, i) => (
                   <div key={i} className="flex items-center gap-2 font-bold text-gray-800 text-lg">
                       <CheckCircle2 size={20} className="text-orange-600"/> {cert}
                   </div>
               ))}
            </div>
        </div>
      </section>

    </div>
  );
};