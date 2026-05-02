import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageSquare, ClipboardCheck, Wrench, Truck, CheckCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Button } from '../components/Button';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) return;
    const subject = `Quote request: ${form.product || 'General enquiry'}`;
    const body =
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Email: ${form.email}\n` +
      `Company: ${form.company || '-'}\n` +
      `Product Interest: ${form.product || '-'}\n\n` +
      `Message:\n${form.message || '-'}\n`;
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

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
                        {COMPANY_INFO.address}
                      </p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY_INFO.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-orange-600 hover:underline"
                      >
                        Get Directions &rarr;
                      </a>
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
                      
                      {submitted ? (
                          <div className="text-center py-8">
                              <div className="w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-6">
                                  <CheckCircle size={32} />
                              </div>
                              <h4 className="text-xl font-bold text-[#1d1d1f] mb-2">Email opened.</h4>
                              <p className="text-gray-500 max-w-md mx-auto mb-6">
                                  Your email client should now have a draft pre-filled with your details. Send it and our team will reply within 24 hours. If nothing opened, email us directly at <a className="text-orange-600 font-semibold" href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>.
                              </p>
                              <button
                                  onClick={() => setSubmitted(false)}
                                  className="text-sm font-semibold text-gray-500 hover:text-black"
                              >
                                  Send another message
                              </button>
                          </div>
                      ) : (
                      <form className="space-y-6" onSubmit={handleSubmit}>
                          <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                  <label htmlFor="contact-name" className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Full Name</label>
                                  <input id="contact-name" type="text" required value={form.name} onChange={handleChange('name')} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all" placeholder="John Doe"/>
                              </div>
                              <div className="space-y-2">
                                  <label htmlFor="contact-phone" className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Phone Number</label>
                                  <input id="contact-phone" type="tel" required value={form.phone} onChange={handleChange('phone')} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all" placeholder="+91 98765 43210"/>
                              </div>
                          </div>

                          <div className="space-y-2">
                              <label htmlFor="contact-email" className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Email Address</label>
                              <input id="contact-email" type="email" required value={form.email} onChange={handleChange('email')} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all" placeholder="john@company.com"/>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                  <label htmlFor="contact-product" className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Product Interest</label>
                                  <select id="contact-product" value={form.product} onChange={handleChange('product')} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all appearance-none">
                                      <option value="">Select a machine...</option>
                                      <option>Multi-Head Weigher</option>
                                      <option>4 Head Linear Weigher</option>
                                      <option>Auger Filler System</option>
                                      <option>Manual Auger Filler</option>
                                      <option>Cup Filler Machine</option>
                                      <option>Pneumatic Filler (Saturn)</option>
                                      <option>Bagger Machine</option>
                                      <option>Form Fill Seal (FFS)</option>
                                      <option>FFS High Speed Machine</option>
                                      <option>FFS Liquid Packaging</option>
                                      <option>Horizontal Flow Wrapper</option>
                                      <option>Multi Track Liquid Machine</option>
                                      <option>Tea Bag Packaging Machine</option>
                                      <option>Bend Sealer Machine</option>
                                      <option>Mini Collar Auger Filler</option>
                                      <option>Mini Collar Cup Filler</option>
                                      <option>Filter Khaini Machine</option>
                                      <option>Other / Custom</option>
                                  </select>
                              </div>
                              <div className="space-y-2">
                                  <label htmlFor="contact-company" className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Company Name</label>
                                  <input id="contact-company" type="text" value={form.company} onChange={handleChange('company')} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all" placeholder="Your Company Ltd."/>
                              </div>
                          </div>

                          <div className="space-y-2">
                              <label htmlFor="contact-message" className="text-xs font-bold text-gray-500 ml-1 uppercase tracking-wider">Message</label>
                              <textarea id="contact-message" rows={5} value={form.message} onChange={handleChange('message')} className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 text-gray-900 focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none resize-none transition-all" placeholder="Tell us about your product (e.g., chips, 50g pouch) and required speed..."></textarea>
                          </div>

                          <button type="submit" className="w-full justify-center bg-[#1d1d1f] text-white hover:bg-gray-800 transition-colors rounded-full text-lg font-medium py-4 shadow-lg shadow-blue-900/10">
                              Send Inquiry
                          </button>
                      </form>
                      )}
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