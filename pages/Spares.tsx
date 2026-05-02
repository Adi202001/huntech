import React from 'react';
import {
  Wrench,
  Phone,
  Mail,
  Clock,
  Settings,
  GraduationCap,
  ShieldCheck,
  PackageCheck,
  MapPin,
  Truck,
} from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const services = [
  {
    icon: Settings,
    title: 'Installation & Commissioning',
    desc: 'On-site setup, calibration, and trial runs at your facility — handled by our own engineers, not a third party.',
  },
  {
    icon: PackageCheck,
    title: 'Genuine Spare Parts',
    desc: 'Wear parts, sealing jaws, cutters, gear motors, AC drives, sensors, pneumatic cylinders, and PLC components — sourced from the original vendors used in our machines.',
  },
  {
    icon: Wrench,
    title: 'Annual Maintenance Contracts',
    desc: 'Preventive maintenance schedules tailored to your production load, with priority response and discounted spares.',
  },
  {
    icon: Truck,
    title: 'On-Site Service Visits',
    desc: 'Engineer visits across North India for breakdowns, upgrades, or production audits — typically within 24 hours from Faridabad.',
  },
  {
    icon: GraduationCap,
    title: 'Operator Training',
    desc: 'Hands-on training for your line operators and maintenance staff so daily issues never need a service call.',
  },
  {
    icon: ShieldCheck,
    title: 'Post-Warranty Support',
    desc: 'Long-term support for machines well beyond the warranty period — many Huntech machines have run reliably for 10+ years.',
  },
];

const components = [
  'Heating elements & sealing jaws',
  'Cutters & knives',
  'Gear motors (Crompton / Bonfiglioli)',
  'AC drives & PLCs (L&T / DELTA)',
  'Pneumatic cylinders (Festo / SMC / Camozzi)',
  'Photo sensors & encoders',
  'Conveyor belts & chains',
  'SS food-grade contact parts',
  'Auger screws & funnels',
  'Cup-filler cups & dosing wheels',
  'Film draw rollers & clutches',
  'Solenoid valves & regulators',
];

export const Spares: React.FC = () => {
  return (
    <div className="pt-8 pb-20 bg-white animate-in fade-in duration-700">
      {/* Header */}
      <section className="relative overflow-hidden mb-20 pt-24 pb-16 text-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.92) 70%, white 100%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-8">
            <Wrench size={12} className="text-orange-500" />
            <span className="text-xs font-semibold text-orange-600 tracking-wide uppercase">
              After-Sales Support
            </span>
          </div>
          <h1 className="anim-blur-in text-5xl md:text-7xl font-bold tracking-tighter text-[#1d1d1f] mb-6">
            Services &amp; <br />
            <span className="shimmer-text">Spares.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Buying a Huntech machine is the start of the relationship, not the end. Our Faridabad-based team keeps your line running with on-site service, genuine spares, and long-term support.
          </p>
        </div>
      </section>

      {/* Quick stats */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Clock, label: 'Response Time', value: '< 24 hrs' },
            { icon: MapPin, label: 'Service Base', value: 'Faridabad, NCR' },
            { icon: ShieldCheck, label: 'Certified', value: 'ISO 9001:2015' },
            { icon: PackageCheck, label: 'Spares', value: 'Genuine & Tested' },
          ].map(({ icon: Icon, label, value }, i) => (
            <div
              key={i}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 text-center"
            >
              <Icon className="text-orange-500 mx-auto mb-3" size={22} />
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                {label}
              </p>
              <p className="font-bold text-gray-900 text-lg">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f] tracking-tight">
            What we offer.
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Six ways we keep your packaging line productive after dispatch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6">
                <Icon className="text-orange-600" size={22} />
              </div>
              <h3 className="text-lg font-bold mb-3 text-[#1d1d1f]">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Component Catalogue */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-gray-50 border border-gray-100 rounded-[2rem] p-10 md:p-14">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f] tracking-tight">
              Spare components we stock.
            </h2>
            <p className="text-gray-500 text-lg font-light">
              The same vendors and grades used during original assembly — no
              substitutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {components.map((c, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                <p className="text-gray-700 text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-[#1d1d1f] text-white rounded-[2rem] p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a part or a service visit?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Share your machine model and the issue — we'll quote spares or
            schedule an engineer the same day.
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
    </div>
  );
};
