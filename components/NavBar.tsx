import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';

interface NavBarProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ currentView, onChangeView }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', view: ViewState.HOME },
    { label: 'Products', view: ViewState.PRODUCTS },
    { label: 'About', view: ViewState.ABOUT },
    { label: 'Services & Spares', view: ViewState.SPARES },
    { label: 'Contact', view: ViewState.CONTACT },
  ];

  const handleNav = (view: ViewState) => {
    onChangeView(view);
    setIsMobileMenuOpen(false);
  };

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`sticky top-0 z-[100] w-full glass-panel border-b border-white/20 transition-shadow duration-300 ${scrolled ? 'shadow-xl shadow-black/10' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative z-[101]">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => handleNav(ViewState.HOME)}
          >
            <img
              src="/assets/logo/logo.png"
              alt="HE"
              className="h-9 w-auto object-contain"
            />
            <span className="font-bold text-lg tracking-tight text-black leading-none">Huntech Engineers</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.view)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentView === link.view ? 'text-black' : 'text-gray-500 hover:text-black'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNav(ViewState.CONTACT)}
              className="bg-black text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            className="md:hidden p-2 text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
            className={`fixed inset-0 z-[100] bg-white transition-all duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
            style={{ top: '64px', height: 'calc(100vh - 64px)' }} 
        >
          <div className="flex flex-col p-8 space-y-6 flex-1 overflow-y-auto">
            {navLinks.map((link, idx) => (
              <button 
                key={link.label} 
                onClick={() => handleNav(link.view)}
                className={`text-left text-3xl font-bold tracking-tight py-4 border-b border-gray-100 transition-all duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className={currentView === link.view ? 'text-black' : 'text-gray-400'}>
                    {link.label}
                </span>
              </button>
            ))}
            <button 
                onClick={() => handleNav(ViewState.CONTACT)}
                className={`mt-8 bg-black text-white text-lg font-bold py-4 rounded-2xl shadow-xl transition-all duration-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: '300ms' }}
            >
                Request a Quote
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};