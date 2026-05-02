import { Product, TeamMember } from './types';

export const COMPANY_INFO = {
  name: "Huntech Engineers",
  established: "2010 (Operations), 2025 (Incorporated)",
  location: "Old Faridabad, Haryana, India",
  address: "Plot No. 97, Street No. 1, Friends Colony, Old Faridabad, Faridabad, Haryana 121002",
  phone: "+91 99117 96296",
  email: "huntechengineers@gmail.com",
  tagline: "Success in Every Seal."
};

export const PRODUCTS: Product[] = [
  {
    id: 'multi-head-weigher',
    name: 'Multi-Head Weigher',
    tagline: 'Precision in Every Gram.',
    category: 'Weighing Systems',
    description: 'Huntech Engineers manufactures multihead weigher packing machines for efficiently weighing food products before packaging. Built with high-grade stainless steel contact parts and quality-tested components to ensure smooth operation and extended functional life. Available in 2, 4, 10, and 14 head configurations.',
    features: [
      'L&T or DELTA AC drive with PLC & Micro view controls',
      'All contact parts in stainless steel',
      'Center side seal configuration',
      'Quick speed adjustment via AC drive',
      'Clutch and brake film drive mechanism',
      'Compatible with 450mm or 700mm film rolls'
    ],
    specs: {
      'Heads': '2 / 4 / 10 / 14',
      'Weight Range': '10g to 1kg',
      'Packing Speed': '25–100 PPM',
      'Power': '3 × 380V, 3 KW',
      'Motor': '1 HP Crompton / Servo',
      'Air': '10 CFM @ 6 BAR',
      'Machine Weight': '~1200 kg',
      'Max Film Width': '450 / 700 mm'
    },
    imageUrl: '/assets/MULTIHEAD/MULTIHEAD.png',
    images: [
      '/assets/MULTIHEAD/MULTIHEAD.png',
      '/assets/MULTIHEAD/MULTIHEAD2.png',
      '/assets/MULTIHEAD/MULTIHEAD3.png',
      '/assets/MULTIHEAD/14-HEAD.png'
    ],
    suitableFor: ['Snacks', 'Dry Fruits', 'Chips', 'Frozen Food', 'Hardware'],
    priceRange: '₹12 Lakh - ₹25 Lakh'
  },
  {
    id: '4-head-weigher',
    name: '4 Head Linear Weigher',
    tagline: 'Compact Precision.',
    category: 'Weighing Systems',
    description: 'Compact linear weigher ideal for small to medium production lines. Available in 2-head and 4-head configurations for versatile weighing applications.',
    features: ['Linear weighing system', 'Compact footprint', 'Easy integration', 'Digital display control'],
    specs: {
      'Heads': '2 / 4',
      'Accuracy': '+/- 1g',
      'Speed': '40-60 WPM',
      'Suitable For': 'Granules, Seeds, Dry items'
    },
    imageUrl: '/assets/4-HEAD/4-HEAD.jpeg',
    images: [
      '/assets/4-HEAD/4-HEAD.jpeg',
      '/assets/4-HEAD/2-HEAD.jpeg'
    ],
    suitableFor: ['Seeds', 'Granules', 'Small Snacks', 'Dry Fruits'],
    priceRange: '₹3 Lakh - ₹6 Lakh'
  },
  {
    id: 'auger-filler',
    name: 'Auger Filler System',
    tagline: 'Mastering Powders.',
    category: 'Filling Systems',
    description: 'Collar-type auger filler for packing free-flowing and non-free-flowing powders including spices, flour, glucose, coffee, condensed milk, cosmetic powders, and pharmaceutical products. SS food-grade hopper with gear motor film draw and advanced PLC controls.',
    features: [
      'L&T or DELTA AC drive with PLC & Micro view',
      'SS food-grade hopper',
      'Gear motor film draw system',
      'Center side seal configuration',
      'Festo/Camozzi/SMC cylinders',
      'Quick speed adjustment via AC drive'
    ],
    specs: {
      'Filling Range': '10g to 10kg',
      'Packing Speed': '20–60 PPM',
      'Power': '3-phase, 380V, 3 KW',
      'Motor': '1 HP Crompton / Servo',
      'Air': '10 CFM @ 6 BAR',
      'Machine Weight': '~1200 kg',
      'Max Film Width': '450 / 700 mm'
    },
    imageUrl: '/assets/AUGOR/AUGOR-10.jpeg',
    images: [
      '/assets/AUGOR/AUGOR-10.jpeg',
      '/assets/AUGOR/AUGOR11.jpeg',
      '/assets/AUGOR/AUGOR12.jpeg',
      '/assets/AUGOR/COLLOR-AUGOR.png'
    ],
    suitableFor: ['Spices', 'Atta / Flour', 'Coffee', 'Milk Powder', 'Cosmetic Powders', 'Pharmaceuticals'],
    priceRange: '₹5 Lakh - ₹12 Lakh'
  },
  {
    id: 'manual-auger',
    name: 'Manual Auger Filler',
    tagline: 'Simple & Effective.',
    category: 'Filling Systems',
    description: 'Manual powder filling machine designed for flexibility to accommodate various budgets and quality requirements. Allows filling weight adjustments within the range without requiring mechanical modifications — ideal for small-scale operations and startups.',
    features: [
      'Adjustable filling without reconfiguration',
      'Single-phase or three-phase motor options',
      'Cost-effective for small production volumes',
      'Consistent accuracy across fill sizes',
      'Low maintenance design'
    ],
    specs: {
      'Filling Range': '5g to 1000g',
      'Speed': '2000–2500 fills/hr',
      'Accuracy': '±2% up to 1000g; ±1% above 50g',
      'Motor': '0.75 kW AC',
      'Power': 'Single or Three Phase'
    },
    imageUrl: '/assets/MANUAL-AUGOR/MANUAL-AUGOR.jpeg',
    images: [
      '/assets/MANUAL-AUGOR/MANUAL-AUGOR.jpeg',
      '/assets/MANUAL-AUGOR/MANUAL-AUGOR-2.jpeg',
      '/assets/MANUAL-AUGOR/MANUAL-AUGOR-3.jpeg'
    ],
    suitableFor: ['Small Businesses', 'Startups', 'Spices', 'Powders', 'Hing'],
    priceRange: '₹1.5 Lakh - ₹3 Lakh'
  },
  {
    id: 'cup-filler',
    name: 'Cup Filler Machine',
    tagline: 'Volumetric Excellence.',
    category: 'Filling Systems',
    description: 'Collar-type cup filler packaging machine maintaining high tolerance for consistent performance. Built with premium stainless steel and food-grade plastic components, adaptable to customer specifications for size, form, and design. Features continuous center-seal mechanism for reliable output.',
    features: [
      'High-tolerance industrial design',
      'SS & food-grade plastic contact parts',
      'Center seal continuous mechanism',
      '8 ft chain conveyor with pusher/rod',
      'Adaptable to custom specifications',
      '1 HP gear motor drive'
    ],
    specs: {
      'Packing Speed': '80 pouches/min',
      'Sealing Type': 'Center Seal',
      'Power': '3 KW',
      'Motor': '1 HP gear motor, single phase',
      'Max Film Width': '450 / 700 mm',
      'Machine Weight': '~1200 kg',
      'Conveyor': '8 ft chain with pusher'
    },
    imageUrl: '/assets/CUP-FILLER/CUP-FILLER.JPG',
    images: [
      '/assets/CUP-FILLER/CUP-FILLER.JPG',
      '/assets/CUP-FILLER/CUPFILLER2.png',
      '/assets/CUP-FILLER/CUP-FILLER-3.png',
      '/assets/CUP-FILLER/CUP-FILLER-4.JPG'
    ],
    suitableFor: ['Dry Fruits', 'Spices', 'Namkeen', 'Corn Flakes', 'Pulses', 'Rice', 'Frozen Foods'],
    priceRange: '₹2 Lakh - ₹5 Lakh'
  },
  {
    id: 'pneumatic-filler',
    name: 'Pneumatic Filler (Saturn)',
    tagline: 'Air-Powered Precision.',
    category: 'Filling Systems',
    description: 'Half pneumatic packing machine serving the snacks, spices, and food packaging industries. Customizable for individual requirements with high-speed operation comparable to global standards. Features cup filling with continuous 3/4-sided sealing for small-portion packaging at exceptional speeds.',
    features: [
      'Customizable design for individual requirements',
      'High-speed operation up to 450 pouches/min',
      '3/4-sided seal configuration',
      'SS contact parts throughout',
      '½ HP Bonfiglioli/Crompton gear motor',
      'MS body with powder coating'
    ],
    specs: {
      'Capacity': '2g to 100g',
      'Sealing Type': '3/4-sided seal',
      'Speed': '100–450 pouches/min',
      'Max Film Width': '200 mm',
      'Motor': '½ HP gear motor, single phase',
      'Power': '3 KW',
      'Machine Weight': '~700 kg'
    },
    imageUrl: '/assets/PNEUMATIC/SATURN.png',
    images: [
      '/assets/PNEUMATIC/SATURN.png',
      '/assets/PNEUMATIC/SATURN2.png',
      '/assets/PNEUMATIC/SATURN3.JPG',
      '/assets/PNEUMATIC/PNEUMATIC.jpeg'
    ],
    suitableFor: ['Snacks', 'Spices', 'Food Products', 'Small Sachets'],
    priceRange: '₹4 Lakh - ₹8 Lakh'
  },
  {
    id: 'bagger-machine',
    name: 'Bagger Machine',
    tagline: 'Bulk Bagging Simplified.',
    category: 'Bagging Systems',
    description: 'Heavy-duty bagging machine designed for bulk packaging applications. Ideal for 5kg to 50kg bags with integrated weighing and sealing.',
    features: ['Bulk bagging capability', 'Integrated weighing', 'Heavy-duty construction', 'Auto bag clamp'],
    specs: {
      'Bag Size': '5kg - 50kg',
      'Speed': '4-8 bags/min',
      'Accuracy': '+/- 0.1%',
      'Bag Types': 'PP, HDPE, Kraft'
    },
    imageUrl: '/assets/BAGGER/BAGGER.jpeg',
    images: [
      '/assets/BAGGER/BAGGER.jpeg'
    ],
    suitableFor: ['Cement', 'Fertilizers', 'Grains', 'Animal Feed'],
    priceRange: '₹8 Lakh - ₹15 Lakh'
  },
  {
    id: 'ffs-machine',
    name: 'Form Fill Seal (FFS)',
    tagline: 'Complete Packaging Solution.',
    category: 'Pouch Packing',
    description: 'Wide range of FFS machines customized to meet specific customer needs. Durable MS fabricated body with powder coating and all product-contact components in stainless steel. Features continuous sealing mechanism with cup filling system for consistent quality across whole spices, tea, sugar, detergent, cereals, and grains.',
    features: [
      'Fully customizable to customer requirements',
      'Continuous sealing mechanism',
      'Cup filling system',
      'Center seal & 3/4-sided seal options',
      'SS contact parts, MS powder-coated body',
      '½ HP gear motor drive'
    ],
    specs: {
      'Capacity': '2g to 200g',
      'Sealing Type': 'Center seal / 3/4-sided',
      'Speed': '30–80 pouches/min',
      'Max Film Width': '300 mm',
      'Motor': '½ HP gear motor',
      'Power': '2 KW',
      'Machine Weight': '~500 kg'
    },
    imageUrl: '/assets/FFS/Gemini_Generated_Image_gtsxh7gtsxh7gtsx.png',
    images: [
      '/assets/FFS/Gemini_Generated_Image_gtsxh7gtsxh7gtsx.png'
    ],
    suitableFor: ['Whole Spices', 'Tea', 'Sugar', 'Detergent', 'Cereals', 'Grains'],
    priceRange: '₹6 Lakh - ₹15 Lakh'
  },
  {
    id: 'ffs-high-speed',
    name: 'FFS High Speed Machine',
    tagline: 'Flagship Speed. Zero Compromise.',
    category: 'Pouch Packing',
    description: 'Our flagship FFS High-Speed Machine built primarily on gears, motors, servos, and drives with no compromises on component quality. The electrical system is engineered for extended operational life with minimal maintenance. Delivers 100–450 pouches per minute for high-volume production lines.',
    features: [
      'Flagship gear & servo-based design',
      'Continuous sealing mechanism',
      'Cup filling system',
      '3/4-sided seal capability',
      'SS contact parts, powder-coated body',
      '½ HP Bonfiglioli/Crompton gear motor'
    ],
    specs: {
      'Capacity': '2g to 100g',
      'Packing Speed': '100–450 pouches/min',
      'Max Film Width': '200 mm',
      'Motor': '½ HP gear motor, single phase',
      'Power': '3 KW',
      'Machine Weight': '~700 kg'
    },
    imageUrl: '/assets/machines/ffs-high-speed.jpg',
    images: [
      '/assets/machines/ffs-high-speed.jpg'
    ],
    suitableFor: ['Snacks', 'Spices', 'Sachets', 'Food Products'],
    priceRange: '₹8 Lakh - ₹18 Lakh'
  },
  {
    id: 'ffs-liquid',
    name: 'FFS Liquid Packaging Machine',
    tagline: 'Precise Liquid Filling.',
    category: 'Liquid Packaging',
    description: 'Top-quality FFS Liquid Packing Machine manufactured using high-quality raw materials and contemporary machinery per industry standards. Features piston dosage filling for precise liquid dispensing with continuous sealing for volumes from 2ml to 100ml.',
    features: [
      'Piston dosage filling mechanism',
      '3/4-sided or center seal options',
      'Continuous sealing operation',
      'SS contact parts throughout',
      'Powder-coated fabricated steel body',
      'Heat-sealable laminated film'
    ],
    specs: {
      'Capacity': '2ml to 100ml',
      'Speed': '50–60 pouches/min',
      'Max Film Width': '150 mm',
      'Motor': '½ HP gear motor, single phase',
      'Power': '2 KW',
      'Machine Weight': '~700 kg'
    },
    imageUrl: '/assets/machines/ffs-liquid.jpg',
    images: [
      '/assets/machines/ffs-liquid.jpg'
    ],
    suitableFor: ['Water', 'Juice', 'Ketchup', 'Hair Oil', 'Shampoo', 'Liquid Medicines'],
    priceRange: '₹5 Lakh - ₹10 Lakh'
  },
  {
    id: 'horizontal-flow-wrapper',
    name: 'Horizontal Flow Wrapper',
    tagline: 'Wrap Everything.',
    category: 'Flow Wrapping',
    description: 'Horizontal Flow Wrapper for packaging rectangular, triangular, cubical, and square-shaped items including cakes, chocolates, noodles, and cookies. Features user-friendly operation with adjustable pouching, L&T PLC controls, and intermittent center-side sealing.',
    features: [
      'L&T AC drive/PLC/Micro view controls',
      'Center side seal, intermittent mechanism',
      'Modifiable/replaceable pouching',
      'SS-316 food-grade hopper',
      'Festo/Camozzi/SMC cylinders',
      'Quick speed adjustment via AC drive'
    ],
    specs: {
      'Capacity': '100g to 1kg',
      'Packing Speed': 'Up to 80 PPM',
      'Max Film Width': '450 mm',
      'Motor': '1 HP Crompton, 3-phase / servo',
      'Power': '3 × 380V, 3 KW',
      'Air': '10 CFM @ 6 BAR',
      'Machine Weight': '~1200 kg'
    },
    imageUrl: '/assets/machines/horizontal-flow.jpg',
    images: [
      '/assets/machines/horizontal-flow.jpg'
    ],
    suitableFor: ['Cakes', 'Chocolates', 'Noodles', 'Cookies', 'Biscuits', 'Soap Bars'],
    priceRange: '₹7 Lakh - ₹14 Lakh'
  },
  {
    id: 'multi-track-liquid',
    name: 'Multi Track Liquid Machine',
    tagline: 'More Tracks. More Output.',
    category: 'Liquid Packaging',
    description: 'Multi-track packaging machines with 2–10 tracks and four-side seals for packing products at fast speeds. Features electromagnetic clutch & brake film draw and pneumo-hydraulic web edge controller. Handles liquids, powders, and semi-liquids across two models for different production capacities.',
    features: [
      '2–10 track configurations',
      'Four-side seal capability',
      'Electromagnetic clutch & brake film draw',
      'Pneumo-hydraulic web edge controller',
      'Handles liquids and powders',
      'Two models: HUN 812.1 & HUN 812.2'
    ],
    specs: {
      'Packing Range': '1ml to 200ml/g',
      'Speed (HUN 812.1)': 'Up to 65 SPM, 6 tracks',
      'Speed (HUN 812.2)': 'Up to 60 SPM, 4 tracks',
      'Power (HUN 812.1)': '7.6 KW',
      'Power (HUN 812.2)': '5.0 KW',
      'Weight (HUN 812.1)': '1500 kg',
      'Air': '2 CFM @ 6 kg/cm²'
    },
    imageUrl: '/assets/machines/multi-track.jpg',
    images: [
      '/assets/machines/multi-track.jpg'
    ],
    suitableFor: ['Tea', 'Coffee', 'Ketchup', 'Hair Oil', 'Shampoo', 'Mouth Freshener', 'Powders'],
    priceRange: '₹10 Lakh - ₹20 Lakh'
  },
  {
    id: 'tea-bag-machine',
    name: 'Tea Bag Packaging Machine',
    tagline: 'Perfect Every Bag.',
    category: 'Specialty Packaging',
    description: 'Tea bag packing machine for filling and sealing tea bags with a three-sided closure plastic outer bag and interior filter bag. Manufactured for tea, coffee, medicinal products, and nutraceuticals with precise fill volumes of 3–5g per bag.',
    features: [
      'Three-sided closure outer bag',
      'Interior filter bag system',
      'Consistent 3–5g fill accuracy',
      'Compact machine footprint',
      'Suitable for medicinal & nutraceutical use'
    ],
    specs: {
      'Filling Capacity': '3g–5g',
      'Inner Bag Size': '50 × 50 mm',
      'Outer Bag Size': '90 × 75 mm',
      'Speed': '30–40 pouches/min',
      'Power': '3.5 KW',
      'Air': '6.0 kg/sq.cm',
      'Dimensions': '900 × 610 × 1500 mm'
    },
    imageUrl: '/assets/machines/tea-bag.jpg',
    images: [
      '/assets/machines/tea-bag.jpg'
    ],
    suitableFor: ['Tea', 'Coffee', 'Herbal Powders', 'Medicines', 'Nutraceuticals'],
    priceRange: '₹6 Lakh - ₹12 Lakh'
  },
  {
    id: 'bend-sealer',
    name: 'Bend Sealer Machine',
    tagline: 'Seal It Right.',
    category: 'Sealing Systems',
    description: 'Leading manufacturer and supplier of bend sealing machines and secondary packaging equipment including strapping machines, label applicators, carton taping & sealing machines, and carton stretch wrapping machines. Ideal for post-fill sealing and secondary packaging operations.',
    features: [
      'Bend sealing mechanism',
      'Compatible with strapping & labelling lines',
      'Carton taping & sealing integration',
      'Stretch wrapping capability',
      'SS contact parts, MS powder-coated body',
      'L&T / DELTA AC drive & PLC controls'
    ],
    specs: {
      'Weight Range': '10g to 1kg',
      'Packing Speed': '25–100 PPM',
      'Sealing Type': 'Center side seal',
      'Motor': '1 HP Crompton, 3-phase / servo',
      'Power': '3 × 380V, 3 KW',
      'Air': '10 CFM @ 6 BAR',
      'Machine Weight': '~1200 kg'
    },
    imageUrl: '/assets/machines/bend-sealer.jpg',
    images: [
      '/assets/machines/bend-sealer.jpg'
    ],
    suitableFor: ['Cartons', 'Boxes', 'Secondary Packaging', 'FMCG Products'],
    priceRange: '₹3 Lakh - ₹8 Lakh'
  },
  {
    id: 'mini-auger-filler',
    name: 'Mini Collar Auger Filler',
    tagline: 'Compact. Capable.',
    category: 'Filling Systems',
    description: 'High-quality Mini Collar-type auger filler packing machine for diverse products including shampoo, lubricating oil, wine, syrup, juice, powder, tea, detergent, snacks, rice, pulses, and free-flowing liquids. Features center seal with intermittent mechanism and manual feeding on an 8-ft chain conveyor.',
    features: [
      'SS contact parts throughout',
      'Center seal intermediate mechanism',
      '8-ft chain conveyor with pusher/rod',
      'Manual feeding system',
      '1 HP Bonfiglioli/Crompton gear motor',
      'Compatible with 450/700mm film rolls'
    ],
    specs: {
      'Packing Speed': '80 pouches/min',
      'Sealing Type': 'Center seal',
      'Max Film Width': '450 / 700 mm',
      'Motor': '1 HP gear motor, single phase',
      'Machine Weight': '~1200 kg',
      'Conveyor': '8 ft chain with pusher'
    },
    imageUrl: '/assets/machines/mini-auger.jpg',
    images: [
      '/assets/machines/mini-auger.jpg'
    ],
    suitableFor: ['Tea', 'Detergent', 'Snacks', 'Rice', 'Pulses', 'Juice', 'Shampoo'],
    priceRange: '₹3 Lakh - ₹7 Lakh'
  },
  {
    id: 'mini-cup-filler',
    name: 'Mini Collar Cup Filler',
    tagline: 'Automated Dry Goods Packing.',
    category: 'Filling Systems',
    description: 'Fully automated Mini Collar Type Cup Filler machine widely used to package Rice, Kurkure, Frames, Rings, Soya Chunks, Tea, Pulses, Sugar, Detergent, Cereals, Namkeen, whole spices and grains. Multiple quality tests before installation ensure reliable performance.',
    features: [
      'Fully automated operation',
      'High-quality SS contact parts',
      'Multi-stage quality testing',
      'Center seal, intermediate mechanism',
      '8-ft conveyor with pusher/rod',
      'Compatible with 450/700mm film'
    ],
    specs: {
      'Packing Speed': '80 pouches/min',
      'Sealing Type': 'Center seal',
      'Max Film Width': '450 / 700 mm',
      'Motor': '1 HP gear motor',
      'Power': '3 KW',
      'Machine Weight': '~1200 kg'
    },
    imageUrl: '/assets/machines/mini-cup.jpg',
    images: [
      '/assets/machines/mini-cup.jpg'
    ],
    suitableFor: ['Rice', 'Kurkure', 'Soya Chunks', 'Tea', 'Pulses', 'Sugar', 'Namkeen', 'Spices'],
    priceRange: '₹3 Lakh - ₹7 Lakh'
  },
  {
    id: 'filter-khaini',
    name: 'Filter Khaini Machine',
    tagline: 'Precision for Every Sachet.',
    category: 'Specialty Packaging',
    description: 'Filter Khaini Packing Machine manufactured using high-quality materials for filling and packing tobacco, khaini, granules, and similar products. Creates perfectly sealed packets without surface heat transfer during sealing. Features Mitsubishi PLC/HMI, Italian Bonvario gear motor, Fuji AC drive, Festo/SMC pneumatics, and P&F sensors for world-class reliability.',
    features: [
      'No surface heat transfer while sealing',
      'Mitsubishi Japan PLC & HMI',
      'Italian Bonvario gear motor',
      'Fuji Japanese AC drive',
      'Festo (German) & SMC (Japanese) pneumatics',
      'Auto counting & conveyor system',
      'SS 304 food-grade contact parts',
      'Omron PID temperature controller'
    ],
    specs: {
      'Pouch Width': '12–18 mm',
      'Pouch Length': '25–35 mm',
      'Film Width': '30–40 mm',
      'Fill Volume': '0.2–1.0 g',
      'Speed': 'Up to 300 pouches/min',
      'Air': '6 Bar',
      'Power': '2.5 KW, 440V AC',
      'Machine Weight': '525 kg',
      'Packing Material': 'Non-woven fabrics'
    },
    imageUrl: '/assets/machines/filter-khaini.jpg',
    images: [
      '/assets/machines/filter-khaini.jpg'
    ],
    suitableFor: ['Khaini', 'Tobacco', 'Granules', 'Small Sachets'],
    priceRange: '₹8 Lakh - ₹15 Lakh'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Satish Panwar",
    role: "Founder & CEO",
    bio: "Head of Strategic Innovation with over 15 years in VFFS R&D.",
    imageUrl: "/satish.jpeg"
  },
  {
    name: "Nirbhay Gupta",
    role: "Founder & MD",
    bio: "Expert in client relations and custom machinery requirements.",
    imageUrl: "/nirbhay.jpeg"
  }
];