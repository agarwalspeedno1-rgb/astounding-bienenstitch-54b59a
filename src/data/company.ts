export const COMPANY = {
  name: 'Agarwal Speed Packers & Movers',
  shortName: 'Agarwal Speed',
  tagline: 'Safe, Reliable & Fast Relocation Services',
  phone: '+91 91427 76932',
  phoneFormatted: '+919142776932',
  email: 'info@agarwalspeed.com',
  address:
    'Ambedkar Nagar Colony, Padmavathi Nagar Colony, Alwal, Hyderabad, Secunderabad, Telangana 500015',
  shortAddress: 'Padmavathi Nagar Colony, Alwal, Secunderabad - 500015',
  mapUrl:
    'https://maps.google.com/?q=Ambedkar+Nagar+Colony+Padmavathi+Nagar+Colony+Alwal+Secunderabad+Telangana+500015',
  siteUrl: 'https://agarwalspeed.com',
  whatsappNumber: '919142776932',
  hours: 'Monday - Sunday: 8:00 AM - 10:00 PM',
} as const

export function whatsappUrl(message: string) {
  return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export interface ServiceArea {
  name: string
  zone: string
  popular: boolean
}

export const SERVICE_AREAS: Array<ServiceArea> = [
  { name: 'Alwal & Padmavathi Nagar', zone: 'Secunderabad', popular: true },
  { name: 'Hitech City', zone: 'IT Corridor', popular: true },
  { name: 'Gachibowli', zone: 'Financial District', popular: true },
  { name: 'Madhapur', zone: 'IT Corridor', popular: true },
  { name: 'Kondapur', zone: 'IT Hub', popular: true },
  { name: 'Kukatpally & KPHB', zone: 'West Hyderabad', popular: true },
  { name: 'Jubilee Hills', zone: 'Central West', popular: true },
  { name: 'Banjara Hills', zone: 'Central West', popular: true },
  { name: 'Miyapur', zone: 'North West', popular: true },
  { name: 'Kompally', zone: 'North Hyderabad', popular: true },
  { name: 'Secunderabad Station Area', zone: 'Central', popular: true },
  { name: 'LB Nagar', zone: 'East Hyderabad', popular: true },
  { name: 'Begumpet', zone: 'Central', popular: false },
  { name: 'Uppal', zone: 'East Hyderabad', popular: false },
  { name: 'Manikonda', zone: 'West Hyderabad', popular: false },
  { name: 'Bachupally & Nizampet', zone: 'North West', popular: false },
  { name: 'Sainikpuri & A.S. Rao Nagar', zone: 'Secunderabad', popular: false },
  { name: 'Bowenpally', zone: 'Secunderabad', popular: false },
  { name: 'Tolichowki & Mehdipatnam', zone: 'South West', popular: false },
  { name: 'Dilsukhnagar', zone: 'East Hyderabad', popular: false },
  { name: 'Attapur', zone: 'South West', popular: false },
  { name: 'Lingampally & Chanda Nagar', zone: 'West Hyderabad', popular: false },
]

export interface PackingType {
  title: string
  subtitle: string
  image: string
  badge: string
  desc: string
}

export const PACKING_TYPES: Array<PackingType> = [
  {
    title: '3-Layer Bubble & Foam Wrapping',
    subtitle: 'For Delicate Glassware, TVs & Antiques',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    badge: 'Maximum Safety',
    desc: 'Multi-layered protective bubble film with corner guards to protect polished surfaces, electronics, and glassware.',
  },
  {
    title: 'Corrugated Box & Office Packing',
    subtitle: 'Desktops, Monitors, Files & Supplies',
    image:
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
    badge: 'Heavy Duty',
    desc: 'Heavy 5-ply double-walled corrugated boxes labeled item-wise for easy room sorting and swift relocation.',
  },
  {
    title: 'Furniture Dismantling & Assembly',
    subtitle: 'Cots, Wardrobes & Dining Tables',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    badge: 'Carpenter Included',
    desc: 'Expert carpenters to dismantle modular beds, wardrobes and re-fix them smoothly at your new home.',
  },
  {
    title: 'IT Equipment Anti-Static Packing',
    subtitle: 'Office Desktops, Servers & Monitors',
    image:
      'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80',
    badge: 'Corporate Grade',
    desc: 'Anti-static foam padding, color-coded tag labels, and sealed containers for server racks and IT infrastructure.',
  },
]

export interface Service {
  id: string
  category: string
  title: string
  shortDesc: string
  fullDesc: string
  image: string
  features: Array<string>
}

export const SERVICES: Array<Service> = [
  {
    id: 'household-shifting',
    category: 'Household',
    title: 'Household Goods Shifting',
    shortDesc:
      'Complete home relocation with 3-layer bubble wrapping, dismantling, and safe delivery in Hyderabad & Pan-India.',
    fullDesc:
      'Our household shifting service covers end-to-end packing, loading, transportation, unloading, and unpacking. We use high-grade multi-layer corrugated sheets, bubble wrap, stretch film, and heavy-duty cartons for fragile items, glassware, electronics, and wooden furniture.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Multi-layer Bubble & Foam Packing',
      'Furniture Dismantling & Assembly',
      'Dedicated Closed Container Vehicle',
      'Zero Damage Guarantee & Transit Cover',
    ],
  },
  {
    id: 'office-relocation',
    category: 'Commercial',
    title: 'Office & Corporate Relocation',
    shortDesc:
      'Systematic office moving with minimal downtime. Computers, servers, files, and furniture handled carefully.',
    fullDesc:
      'We specialize in corporate office movements in Hitech City, Gachibowli, Madhapur, and Secunderabad. We ensure color-coded desk labeling, anti-static foam wrapping for IT equipment, and weekend execution to avoid business disruption.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    features: [
      'IT Hardware & Server Protection',
      'Color-coded Box Labeling',
      'Weekend & Overnight Shifting',
      'Confidential Document Handling',
    ],
  },
  {
    id: 'car-bike-transport',
    category: 'Vehicles',
    title: 'Car & Bike Carrier Transport',
    shortDesc:
      'Enclosed hydraulic vehicle trailers for door-to-door car and bike shipping without a single scratch.',
    fullDesc:
      'Safely transport your hatchback, sedan, SUV, or luxury bike to any city in India. We use specialized car carrier trailers with wheel locking chocks and heavy-duty safety straps.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    features: [
      'Enclosed Hydraulic Trailers',
      'Doorstep Pickup & Delivery',
      'Physical Condition Check Report',
      'Transit Vehicle Tracking',
    ],
  },
  {
    id: 'warehousing-storage',
    category: 'Storage',
    title: 'Warehousing & Household Storage',
    shortDesc:
      'Clean, CCTV monitored, pest-controlled storage facilities in Secunderabad for short & long term needs.',
    fullDesc:
      'Secure storage units for temporary house renovations, overseas transfers, or delayed possession. Your goods are packed in heavy-duty wooden crates and stored in temperature-controlled, insured warehouses.',
    image:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    features: [
      '24/7 CCTV Surveillance',
      'Pest-Free Storage Bays',
      'Weekly Inspection Reports',
      'Flexible Monthly Plans',
    ],
  },
  {
    id: 'local-shifting-hyderabad',
    category: 'Household',
    title: 'Local Hyderabad Shifting',
    shortDesc:
      'Same-day house and apartment shifting across Alwal, Kukatpally, Secunderabad, Kondapur & LB Nagar.',
    fullDesc:
      'Fast and hassle-free intra-city movement within 24 hours. Dedicated floor staff for high-rise apartment elevator moving and narrow staircase handling.',
    image:
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80',
    features: [
      'Same-Day Delivery',
      'Dedicated Moving Fleet',
      'Unpacking & Rearranging',
      'Elevator & Staircase Care',
    ],
  },
  {
    id: 'intercity-moving',
    category: 'Intercity',
    title: 'Intercity Domestic Relocation',
    shortDesc:
      'Pan-India moving to Bangalore, Chennai, Mumbai, Delhi, Pune, Kolkata with full documentation and insurance.',
    fullDesc:
      'Seamless long-distance shifting with dedicated covered container trucks. Complete transit documentation, road permits, and full value transit insurance cover.',
    image:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80',
    features: [
      'Pan-India Network',
      'Direct Container Vehicle',
      'All-Risk Insurance',
      'Dedicated Shift Manager',
    ],
  },
]

export interface Review {
  name: string
  location: string
  rating: number
  date: string
  comment: string
}

export const REVIEWS: Array<Review> = [
  {
    name: 'Srikanth Reddy',
    location: 'Shifted from Alwal to Hitech City',
    rating: 5,
    date: '2 weeks ago',
    comment:
      'Excellent service by Agarwal Speed Packers! They packed my 3 BHK items using thick bubble wrap and cardboard sheets. Beds were dismantled and reassembled smoothly. Very punctual team from Padmavathi Nagar Colony branch.',
  },
  {
    name: 'Priyanka Sharma',
    location: 'Shifted from Kondapur to Gachibowli',
    rating: 5,
    date: '1 month ago',
    comment:
      'Handled our fragile glassware and 65-inch OLED TV with super high care. No hidden charges at all. Delivered everything same day within 6 hours. Highly recommended in Hyderabad!',
  },
  {
    name: 'Venkat Raman',
    location: 'Car Transport: Secunderabad to Bangalore',
    rating: 5,
    date: '3 weeks ago',
    comment:
      'Transported my Hyundai Creta in an enclosed vehicle trailer. Car was received in Bangalore without a single scratch or dust. Professional condition check document was given before loading.',
  },
]

export interface FaqItem {
  q: string
  a: string
}

export const FAQS: Array<FaqItem> = [
  {
    q: 'How far in advance should I book my move in Alwal, Hyderabad?',
    a: 'We recommend booking at least 2 to 4 days prior to your moving date. For weekend or month-end moves, booking 5 to 7 days in advance ensures slot availability.',
  },
  {
    q: 'Where is your head office located in Secunderabad?',
    a: 'Our main operational hub is located at Ambedkar Nagar Colony, Padmavathi Nagar Colony, Alwal, Hyderabad, Secunderabad, Telangana 500015.',
  },
  {
    q: 'Are my household goods insured during transit?',
    a: 'Yes! We offer full value transit insurance covering fire, accidents, and unexpected damage during road transportation.',
  },
  {
    q: 'How do you calculate the estimated shifting charges?',
    a: 'Charges are calculated based on item volume (CFT), distance (km), floor height, elevator accessibility, packing material type, and vehicle size.',
  },
  {
    q: 'Do you provide unpacking and furniture re-assembly at destination?',
    a: 'Yes, our team dismantles modular beds, wardrobes, and dining tables at origin and re-assembles them at your new home.',
  },
  {
    q: 'What items are prohibited for packing and transportation?',
    a: 'We do not transport hazardous materials, gas cylinders, inflammable liquids, jewelry, cash, original legal documents, or live plants on long intercity journeys.',
  },
]

export interface GalleryItem {
  title: string
  loc: string
  cat: string
  img: string
}

export const GALLERY_ITEMS: Array<GalleryItem> = [
  {
    title: '3-Layer Bubble Packaging',
    loc: 'Padmavathi Nagar, Alwal',
    cat: 'Packaging',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Box Labelling & Sorting',
    loc: 'Hitech City, Hyderabad',
    cat: 'Packaging',
    img: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Furniture Assembly Work',
    loc: 'Kondapur, Hyderabad',
    cat: 'Furniture',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Office Server Relocation',
    loc: 'Gachibowli, Hyderabad',
    cat: 'Corporate',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Enclosed Container Loading',
    loc: 'Alwal Hub, Secunderabad',
    cat: 'Vehicles',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Car Carrier Shipping',
    loc: 'Hyderabad to Bangalore Route',
    cat: 'Vehicles',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
]
