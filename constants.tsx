
import React from 'react';
import { Brain, Calculator, Ruler, Code, Target, ShieldCheck, Globe, Zap, Briefcase, Compass, Rocket, TrendingUp, Shield, Users, Building2 } from 'lucide-react';
import { Service, NavLink, Testimonial, Partner } from './types';

/**
 * ============================================================================
 * SECTION 0: BRAND & SEO ASSETS
 * Replace these URLs with your hosted images or icons.
 * ============================================================================
 */
export const BRAND_ASSETS = {
  logoUrl: null, // Keep as null to use the custom SVG logo I built for you.
  faviconUrl: "https://simjung.com.np/favicon.ico",
  socialPreviewImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
};

export const CONTACT_CONFIG = {
  formspreeId: "mqakpjpz", // Get a free ID at formspree.io to receive emails.
  whatsappNumber: "+97714567890", 
};

/**
 * ============================================================================
 * SECTION 1: NAVIGATION
 * Change the labels for the menu links here.
 * ============================================================================
 */
export const NAV_LINKS: NavLink[] = [
  { label: 'Our Story', href: '#about' },
  { label: 'Verticals', href: '#services' },
  { label: 'Leadership', href: '#founders' },
  { label: 'Global Network', href: '#partners' },
  { label: 'The Edge', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

/**
 * ============================================================================
 * SECTION 2: HERO (The "First Impression" Text)
 * ============================================================================
 */
export const HERO_CONTENT = {
  badgeText: "Offshore Engineering Studio • Kathmandu",
  titlePart1: "Himalayan",
  titleItalic: "Rigour.", 
  titlePart2: "Global Reach.",
  subtitle: "Scaling your vision with the bespoke elegance of the peaks. We bridge the distance between Kathmandu and the world's leading boardrooms.",
  ctaText: "Start Your Ascent"
};

/**
 * ============================================================================
 * SECTION 3: THE STORY (Horizontal Scroll Chapters)
 * ============================================================================
 */
export const ABOUT_CHAPTERS = [
  {
    id: "01",
    title: "The Ascent",
    tag: "Origins",
    desc: "SimJung was born from a singular vision: to prove that world-class engineering isn't bound by geography. We treat every line of code like a lifeline—where precision is our primary oxygen and grace is our standard.",
    icon: Compass,
    color: "border-sky-300",
    accent: "text-sky-500",
    bg: "bg-sky-50/50",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "02",
    title: "Peak Precision",
    tag: "Execution",
    desc: "Our methodologies are forged in the quiet rigour of high altitude. We eliminate the noise of modern development to focus on absolute clarity, functional beauty, and the structural integrity of your digital foundations.",
    icon: Target,
    color: "border-orange-200",
    accent: "text-orange-400",
    bg: "bg-orange-50/50",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "03",
    title: "Global Reach",
    tag: "Impact",
    desc: "From the heart of Kathmandu to the boardrooms of Tokyo, London, and New York. We build architectures that survive the storm, ensuring your global operations move with the fluid elegance of a well-planned expedition.",
    icon: Zap,
    color: "border-purple-200",
    accent: "text-purple-400",
    bg: "bg-purple-50/50",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
  }
];

/**
 * ============================================================================
 * SECTION 4: VERTICALS (Service Details)
 * ============================================================================
 */
export interface DetailedService extends Service {
  features: string[];
  detailedOfferings: string[];
  caseStudy: {
    title: string;
    result: string;
  };
}

export const SERVICES: DetailedService[] = [
  {
    id: 'software',
    title: 'Software Development and Support',
    description: 'Engineering cloud-native architectures that thrive in the demanding digital stratosphere.',
    details: ['Full-stack Sprints', 'SaaS Modernization', 'API Engineering', 'Managed Support'],
    detailedOfferings: [
      'Custom SaaS & PaaS Architecture',
      'Legacy System Modernization',
      'Mobile App Development (iOS/Android)',
      'Enterprise API Ecosystems',
      '24/7 Global DevOps Support'
    ],
    features: ['Next-Gen Tech Ecosystems', 'Secure Code Architecture', 'Predictive Tech Support', 'Agile Deployment Cycles'],
    caseStudy: { title: 'European SaaS Leader', result: '99.99% Uptime Metrics' },
    icon: 'Code',
    color: 'sky'
  },
  {
    id: 'ai',
    title: 'AI Annotations',
    description: 'High-fidelity data mapping for the pioneers of neural intelligence.',
    details: ['Computer Vision', 'Semantic Labeling', 'LiDAR Expeditions', 'NLP Datasets'],
    detailedOfferings: [
      '2D/3D Bounding Box & Polygons',
      'Semantic & Instance Segmentation',
      'LiDAR Point Cloud Annotation',
      'Audio & Video Transcription',
      'NLP Sentiment & Entity Tagging'
    ],
    features: ['Edge-to-Edge Precision', 'Massive Dataset Velocity', 'ISO-certified Workflows', 'Domain-Specific Expertise'],
    caseStudy: { title: 'Autonomous Transit Group', result: '12M+ Verified Nodes' },
    icon: 'Brain',
    color: 'purple'
  },
  {
    id: 'back-office',
    title: 'Back Office solutions',
    description: 'Providing the operational oxygen and seamless workflow continuity for global enterprises.',
    details: ['Data Management', 'Workflow Optimization', 'Process Digitization', 'CX Support'],
    detailedOfferings: [
      'High-Volume Data Processing',
      'Multilingual Customer Support',
      'Digital Document Archiving',
      'Inventory & Supply Chain Admin',
      'HR & Payroll Operational Flow'
    ],
    features: ['24/7 Service Reliability', 'High-Speed Data Processing', 'Operational Efficiency Audits', 'Flexible Resource Scaling'],
    caseStudy: { title: 'Global Logistics Hub', result: '30% Throughput Increase' },
    icon: 'Briefcase',
    color: 'blue'
  },
  {
    id: 'finance',
    title: 'Bookkeeping and Accounting',
    description: 'Zen-like precision in financial reporting with absolute Himalayan rigour.',
    details: ['Global Ledgering', 'Tax Compliance', 'Audit Support', 'Payroll Management'],
    detailedOfferings: [
      'Multi-Country Accounts Payable/Receivable',
      'Tax Preparation & Filing Support',
      'Internal Audit & Gap Analysis',
      'Financial Statement Preparation',
      'Cloud-Based Inventory Accounting'
    ],
    features: ['Multi-currency Management', 'Real-time Financial Dashboards', 'GAAP & IFRS Standards', 'Zero-Error Record Keeping'],
    caseStudy: { title: 'Tokyo FinTech Core', result: '100% Audit Compliance' },
    icon: 'Calculator',
    color: 'orange'
  },
  {
    id: 'engineering',
    title: 'Civil Engineering and Architecture',
    description: 'Architecting physical and digital foundations through structural logic and BIM expertise.',
    details: ['BIM Level 3 Modeling', 'Digital Twins', 'Clash Resolution', 'Generative Design'],
    detailedOfferings: [
      '3D BIM Modeling (LOD 100-500)',
      'Structural Analysis & Design',
      'VDC & Clash Detection Reports',
      'Architecture & Interior Design Support',
      'Quantity Surveying & Estimation'
    ],
    features: ['Precision VDC Strategy', 'Sustainability Logic', 'LOD 500 Deliverables', 'Cross-Domain Synergy'],
    caseStudy: { title: 'Skyline Infrastructure UK', result: '14 Landmark Deliveries' },
    icon: 'Ruler',
    color: 'sky'
  }
];

/**
 * ============================================================================
 * SECTION 5: THE FOUNDERS (Leadership Bios)
 * ============================================================================
 */
export const FOUNDERS = [
  {
    name: "Manish Jung Thapa",
    role: "Chief Expedition Officer",
    bio: "Manish architected SimJung to be a bridge between the peaks of Nepal and the boardrooms of the world. He views software as an expedition—one that requires foresight, grit, and absolute clarity.",
    strengths: ["Strategic Cartography", "Global Scale", "Venture Vision"],
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
    accent: "sky"
  },
  {
    name: "Sushma Rijal",
    role: "Director of Peak Operations",
    bio: "Sushma is the guardian of Himalayan Rigour. Under her guidance, every project is a masterclass in precision, ensuring that 'offshore' never means 'distant' in quality or communication.",
    strengths: ["Precision Governance", "Quality Culture", "Operational Flow"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    accent: "orchid"
  }
];

/**
 * ============================================================================
 * SECTION 6: CLIENT FEEDBACK & PARTNERS
 * ============================================================================
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    text: "SimJung transformed our offshore operations from a cost-center to a strategic engine. Their precision in data labeling is unmatched.",
    author: "Sarah Jenkins",
    role: "Head of AI Operations",
    company: "Aether Systems (USA)",
    image: "https://i.pravatar.cc/100?img=32"
  },
  {
    text: "Working with SimJung feels like an extension of our own studio. Their BIM expertise saved us months of rework on our latest London project.",
    author: "David Chen",
    role: "Senior Architect",
    company: "Lumina Design (UK)",
    image: "https://i.pravatar.cc/100?img=12"
  },
  {
    text: "The financial BPO team's knowledge of Japanese tax compliance is exceptional. They've streamlined our multi-country payroll seamlessly.",
    author: "Yuki Tanaka",
    role: "CFO",
    company: "Vertex Retail (Japan)",
    image: "https://i.pravatar.cc/100?img=44"
  }
];

export const PARTNERS: Partner[] = [
  { country: "Israel", flag: "🇮🇱", name: "CyberSummit Labs", focus: "AI & Cybersecurity", description: "Collaborating on advanced neural network training and security-first data protocols." },
  { country: "United States", flag: "🇺🇸", name: "Nexus Strategy Group", focus: "Enterprise Growth", description: "Driving North American market expansion and high-level project management standards." },
  { country: "South Africa", flag: "🇿🇦", name: "Ubuntu Tech Hub", focus: "Emerging Markets BPO", description: "Scaling operational capacity and talent exchange programs for sub-Saharan projects." },
  { country: "Iceland", flag: "🇮🇸", name: "Glacier Cloud Solutions", focus: "Sustainable Infra", description: "Developing green cloud infrastructure and low-latency data pipelines for Nordic clients." }
];

export const CLIENT_LOGOS = [
  "https://cdn.worldvectorlogo.com/logos/google-2.svg",
  "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg",
  "https://cdn.worldvectorlogo.com/logos/amazon-2.svg",
  "https://cdn.worldvectorlogo.com/logos/tesla-9.svg",
  "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
  "https://cdn.worldvectorlogo.com/logos/shopify.svg",
];

/**
 * ============================================================================
 * SECTION 7: ADVANTAGES & CONTACT
 * ============================================================================
 */
export const WHY_US_ADVANTAGES = [
  { title: "Quality First (ISO 9001)", desc: "Our QMS is designed for international compliance, ensuring zero-defect deliverables in data and finance.", icon: ShieldCheck, color: "text-sky-500", bg: "bg-white" },
  { title: "Technical Talent", desc: "We hire from the top 5% of Nepal's engineers and BPO professionals, providing elite human-in-the-loop services.", icon: Users, color: "text-orange-500", bg: "bg-orange-50/50" },
  { title: "Geo-Strategic Advantage", desc: "Located in the +5:45 GMT zone, we perfectly overlap with Australia, Japan, and the EMEA regions.", icon: Globe, color: "text-sky-600", bg: "bg-white" },
  { title: "Cost to Value Peak", desc: "Achieve US-grade output at offshore rates, allowing your internal teams to focus on core innovation.", icon: Building2, color: "text-orange-500", bg: "bg-orange-50/50" }
];

export const CONTACT_DETAILS = {
  email: "hello@simjung.com.np",
  phone: "+977-1-4567890",
  address: "Lazimpat, Kathmandu, Nepal",
  zip: "44600"
};

export const ASCENT_PROCESS = [
  { title: "Base Camp", desc: "Discovery and alignment. We understand your vision, workflows, and quality standards.", icon: Shield, tag: "Phase 01" },
  { title: "Vertical Integration", desc: "Building your dedicated Himalayan team. Talent selection and domain-specific training.", icon: Rocket, tag: "Phase 02" },
  { title: "Peak Performance", desc: "ISO-certified delivery and continuous feedback loops for scaling precision.", icon: TrendingUp, tag: "Phase 03" }
];
