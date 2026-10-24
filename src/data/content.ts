import { GalleryProject, ServiceItem } from '../types';
import heroImg from '../assets/images/hero_paving_driveway_1792850636042.jpg';
import patioImg from '../assets/images/patio_paving_terrace_1792850636305.jpg';
import gardenImg from '../assets/images/garden_transformation_1792850636851.jpg';
import deckingImg from '../assets/images/decking_fencing_garden_1792850637446.jpg';
import blockPavingImg from '../assets/images/block_paving_detail_1792850637159.jpg';

export const BUSINESS_INFO = {
  name: 'DB Paving & Landscapes',
  tagline: 'Specialists in driveways, patios, fencing, garden transformations and all groundworks.',
  shortDescription: 'Professional landscaping, paving and groundworks based in Heanor, UK. Transforming outdoor spaces with quality workmanship and clean, durable finishes.',
  location: 'Heanor, United Kingdom',
  coverage: 'Heanor, Ripley, Langley Mill, Ilkeston, Derbyshire & surrounding East Midlands communities',
  email: 'dbpavinglandscapes@gmail.com',
  availability: 'Listed as always open',
  quotation: 'Free quotations available',
  facebookName: 'DB Paving & Landscapes',
  facebookSearchUrl: 'https://www.facebook.com/search/top?q=DB%20Paving%20%26%20Landscapes',
  colors: {
    lime: '#8DD75C',
    forest: '#173D27',
    charcoal: '#202720',
    white: '#FFFFFF',
    softGreen: '#F3F8EF',
    lightGrey: '#F5F6F3',
    mutedText: '#687168'
  }
};

export const IMAGES = {
  hero: heroImg,
  patio: patioImg,
  garden: gardenImg,
  decking: deckingImg,
  blockPaving: blockPavingImg,
};

export const TRUST_STRIP_ITEMS = [
  {
    title: 'Driveways & Paving',
    description: 'Block paving, stone & gravel solutions'
  },
  {
    title: 'Garden Transformations',
    description: 'Complete outdoor redesigns & care'
  },
  {
    title: 'Fencing & Decking',
    description: 'Boundary security & outdoor living'
  },
  {
    title: 'Free Quotations',
    description: 'Clear, no-obligation project pricing'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'driveways',
    title: 'Driveways',
    description: 'Create a clean, attractive entrance to your property with a professionally finished driveway.',
    iconName: 'CarFront',
    tag: 'Entrance & Parking',
    features: ['Block paving styles', 'Durable edge restraints', 'Prepared sub-bases']
  },
  {
    id: 'patios-paving',
    title: 'Patios & Paving',
    description: 'Upgrade your outdoor living area with attractive paving and a patio designed around your space.',
    iconName: 'Grid2X2',
    tag: 'Outdoor Living',
    features: ['Porcelain & sandstone', 'Clean pointing & drainage', 'Bespoke layouts']
  },
  {
    id: 'fencing',
    title: 'Fencing',
    description: 'Improve privacy, define boundaries and complete your garden with suitable fencing.',
    iconName: 'ShieldCheck',
    tag: 'Boundaries & Privacy',
    features: ['Timber boundary panels', 'Closeboard & slatted', 'Solid post foundation']
  },
  {
    id: 'garden-transformations',
    title: 'Garden Transformations',
    description: 'Refresh your outdoor space with a coordinated landscaping project that brings the garden together.',
    iconName: 'Trees',
    tag: 'Full Landscaping',
    features: ['Coordinated project plan', 'Levels & raised planters', 'Harmonised materials']
  },
  {
    id: 'groundworks',
    title: 'Groundworks',
    description: 'Prepare and improve outdoor areas with groundworks tailored to the requirements of your project.',
    iconName: 'Construction',
    tag: 'Site Preparation',
    features: ['Excavation & sub-bases', 'Site levelling & clearing', 'Drainage preparation']
  },
  {
    id: 'artificial-grass',
    title: 'Artificial Grass',
    description: 'Create a neat, green-looking outdoor area with artificial grass suited to your garden.',
    iconName: 'Sprout',
    tag: 'Low-Maintenance Lawn',
    features: ['Year-round green finish', 'Permeable underlay', 'Pet & child friendly']
  },
  {
    id: 'decking',
    title: 'Decking',
    description: 'Add a dedicated outdoor area for relaxing and enjoying your garden.',
    iconName: 'Layers',
    tag: 'Entertaining Areas',
    features: ['Timber & composite options', 'Elevated or ground-level', 'Clean seamless finish']
  },
  {
    id: 'turfing',
    title: 'Turfing',
    description: 'Give your garden a fresh start with new turf and a cleaner-looking lawn.',
    iconName: 'Leaf',
    tag: 'Natural Lawns',
    features: ['Lawn rotovation & prep', 'Fresh premium turf rolls', 'Established edge lines']
  }
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    id: 'proj-1',
    title: 'Herringbone Block Paved Driveway',
    category: 'Driveways',
    description: 'Precision herringbone block paving with sharp stone kerbs, integrated drainage line, and manicured perimeter borders.',
    imageUrl: IMAGES.blockPaving,
    aspect: 'col-span-12 md:col-span-6 lg:col-span-7'
  },
  {
    id: 'proj-2',
    title: 'Porcelain Terrace & Sunken Seating',
    category: 'Patios & Paving',
    description: 'Large-format light grey porcelain slabs with flush grouting, integrated planter walls, and open outdoor dining layout.',
    imageUrl: IMAGES.patio,
    aspect: 'col-span-12 md:col-span-6 lg:col-span-5'
  },
  {
    id: 'proj-3',
    title: 'Complete English Garden Transformation',
    category: 'Garden Transformations',
    description: 'Full garden redesign featuring fresh turfing, sleeper-retained floral beds, central stone walkway, and perimeter timber fencing.',
    imageUrl: IMAGES.garden,
    aspect: 'col-span-12 md:col-span-6 lg:col-span-5'
  },
  {
    id: 'proj-4',
    title: 'Contemporary Decking & Slatted Fencing',
    category: 'Decking & Fencing',
    description: 'Smooth charcoal composite deck with horizontal slatted screening, architectural planting bed, and clean gravel margin.',
    imageUrl: IMAGES.decking,
    aspect: 'col-span-12 md:col-span-6 lg:col-span-7'
  }
];

export const WHY_CHOOSE_POINTS = [
  {
    number: '01',
    title: 'Tailored to Your Space',
    description: 'Discuss your requirements and the improvements you want to make.'
  },
  {
    number: '02',
    title: 'A Range of Outdoor Services',
    description: 'From paving and fencing to turfing and groundworks, explore services for different outdoor projects.'
  },
  {
    number: '03',
    title: 'Free Quotations',
    description: 'Get in touch to discuss your project and request a free quotation.'
  }
];

export const SERVICE_OPTIONS = [
  'Driveways',
  'Patios & Paving',
  'Fencing',
  'Garden Transformations',
  'Groundworks',
  'Artificial Grass',
  'Decking',
  'Turfing',
  'Other'
];
