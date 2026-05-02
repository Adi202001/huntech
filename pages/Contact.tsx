import React from 'react';
import { Mail, MapPin, Phone, MessageSquare, ClipboardCheck, Wrench, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  return (
    <div className="pt-8 pb-20 bg-[#f5f5f7] min-h-screen">
       <div className="max-w-7xl mx-auto px-6">
          
          {/* Hero Header */}
          <div className="text-center mb-16 pt-10">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-[#1d1d1f]">Let's Engineer <br/>Your Success.</h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                  Ready to upgrade your production line? Visit our factory in Faridabad or get a digital consultation today.
              </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mb-24">
              
              {/* Left Column: Contact Cards (4 Cols) */}
              <div className="lg:col-span-4 space-y-6">
                  {/* Address Card */}
                  <div className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100/80 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-colors group">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                          <MapPin className="text-gray-900 group-hover:text-orange-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-[#1d1d1f]">Factory Visit</h3>
                      <p className="text-gray-500 leading-relaxed text-sm mb-4">
                        {COMPANY_INFO.address}<br/>
                        <span className="text-gray-400">Opposite Railway Line</span>
                      </p>
                      <a href="#" className="text-sm font-bold text-orange-600 hover:underline">Get Directions &rarr;</a>
                  </div>

                  {/* Sales Card */}
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-green-200 transition-colors group">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-50 transition-colors">
                          <Phone className="text-gray-900 group-hover:text-green-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-[#1d1d1f]">Sales Inquiry</h3>
                      <p className="text-gray-500 leading-relaxed text-sm mb-4">
                        Monday - Saturday, 9am - 7pm
                      </p>
                      <p className="text-2xl font-bold text-[#1d1d1f]">{COMPANY_INFO.phone}</p>
                  </div>

                  {/* Support Card */}
                  <div className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100/80 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-colors group">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                          <Mail className="text-gray-900 group-hover:text-orange-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-[#1d1d1f]">Email Support</h3>
                      <p className="text-gray-500 leading-relaxed text-sm mb-4">
                        For quotes and technical specs.
                      </p>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-[#1d1d1f] break-all hover:text-orange-600 transition-colors">{COMPANY_INFO.email}</a>
                  </div>
              </div>

              {/* Right Column: Inquiry Form (8 Cols) */}
              <div className="lg:col-span-8">
                  <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 h-full">
                      <div className="mb-10">
                          <h3 className="text-3xl font-bold mb-3 text-[#1d1d1f]">Request a Quote</h3>
                          <p className="text-gray-500">Fill out the form below and our engineering team will get back to you within 24 hours.</p>
                      </div>
                      
                      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                          <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                  <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Full Name</label>
                                  <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all" placeholder="John Doe"/>
                              </div>
                              <div className="space-y-2">
                                  <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Phone Number</label>
                                  <input type="tel" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all" placeholder="+91 98765 43210"/>
                              </div>
                          </div>
                          
                          <div className="space-y-2">
                              <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Email Address</label>
                              <input type="email" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all" placeholder="john@company.com"/>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                  <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Product Interest</label>
                                  <select className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all appearance-none">
                                      <option>Select a machine...</option>
                                      <option>VFFS Pouch Packing</option>
                                      <option>Multi-Head Weigher</option>
                                      <option>Auger Filler</option>
                                      <option>Liquid Packing</option>
                                      <option>Flow Wrap Machine</option>
                                      <option>Other / Custom</option>
                                  </select>
                              </div>
                              <div className="space-y-2">
                                  <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Company Name</label>
                                  <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all" placeholder="Your Company Ltd."/>
                              </div>
                          </div>

                          <div className="space-y-2">
                              <label className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Message</label>
                              <textarea rows={5} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none resize-none transition-all" placeholder="Tell us about your product (e.g., chips, 50g pouch) and required speed..."></textarea>
                          </div>

                          <Button className="w-full justify-center !py-4 text-lg shadow-lg shadow-blue-900/10">Send Inquiry</Button>
                      </form>
                  </div>
              </div>
          </div>

          {/* Map Section */}
          <div className="mb-24 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100">
            <iframe
              title="Huntech Engineers Location"
              src="https://maps.google.com/maps?q=Plot+No.+97,+Street+No.+1,+Friends+Colony,+Old+Faridabad,+Faridabad,+Haryana+121002&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* New Section: The Process */}
          <div className="mb-24">
             <div className="text-center mb-16">
                 <h2 className="text-3xl font-bold mb-4 text-[#1d1d1f]">What Happens Next?</h2>
                 <p className="text-gray-500">Our transparent engagement process.</p>
             </div>
             
             <div className="grid md:grid-cols-4 gap-8">
                 {[
                    { icon: MessageSquare, title: "1. Consultation", desc: "We discuss your product, pouch size, and speed requirements." },
                    { icon: ClipboardCheck, title: "2. Proposal", desc: "We send a detailed technical quotation with best pricing." },
                    { icon: Wrench, title: "3. Fabrication", desc: "Upon advance, we begin manufacturing. Lead time: 2-3 weeks." },
                    { icon: Truck, title: "4. Install", desc: "We deliver, install, and train your operators on-site." }
                 ].map((step, i) => (
                    <div key={i} className="relative group">
                        <div className={`anim-flip delay-${i === 0 ? '100' : i === 1 ? '200' : i === 2 ? '300' : '400'} bg-white p-8 rounded-3xl border border-gray-100 shadow-lg h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                           <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
                               <step.icon size={24} />
                           </div>
                           <h4 className="font-bold text-lg mb-2 text-[#1d1d1f]">{step.title}</h4>
                           <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                        {i < 3 && (
                            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                <span className="text-gray-300 text-2xl font-light">→</span>
                            </div>
                        )}
                    </div>
                 ))}
             </div>
          </div>

       </div>
    </div>
  );
};