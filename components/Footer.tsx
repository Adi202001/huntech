import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';
import { ViewState } from '../types';
import { COMPANY_INFO } from '../constants';

interface FooterProps {
    onNavigate: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0b0b0d] border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/assests/logo/logo.png"
                alt="HE"
                className="h-9 w-auto object-contain"
              />
              <span className="font-bold text-lg tracking-tight text-white leading-none">Huntech Engineers</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              {COMPANY_INFO.tagline}
            </p>
            <div className="flex gap-4">
               <a href="https://www.facebook.com/share/1BMxKuzwLR/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors"><Facebook size={20}/></a>
               <a href="https://www.linkedin.com/in/nirbhay-gupta-1064551b1?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors"><Linkedin size={20}/></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-gray-400 mb-4 uppercase tracking-wider">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><button onClick={() => onNavigate(ViewState.PRODUCTS)} className="hover:text-orange-500 transition-colors">VFFS Machines</button></li>
              <li><button onClick={() => onNavigate(ViewState.PRODUCTS)} className="hover:text-orange-500 transition-colors">Multi-Head Weighers</button></li>
              <li><button onClick={() => onNavigate(ViewState.PRODUCTS)} className="hover:text-orange-500 transition-colors">Auger Fillers</button></li>
              <li><button onClick={() => onNavigate(ViewState.PRODUCTS)} className="hover:text-orange-500 transition-colors">Flow Wrap</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-gray-400 mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><button onClick={() => onNavigate(ViewState.ABOUT)} className="hover:text-orange-500 transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate(ViewState.SPARES)} className="hover:text-orange-500 transition-colors">Services & Spares</button></li>
              <li><button onClick={() => onNavigate(ViewState.CONTACT)} className="hover:text-orange-500 transition-colors">Contact</button></li>
              <li><button className="hover:text-orange-500 transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold text-sm text-gray-400 mb-4 uppercase tracking-wider">Contact</h4>
             <p className="text-sm text-gray-500 mb-2">{COMPANY_INFO.address}</p>
             <p className="text-sm text-gray-500">{COMPANY_INFO.email}</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-xs text-gray-600">© 2025 Huntech Engineers Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
