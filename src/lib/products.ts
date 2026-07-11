export interface Product {
  id: string
  name: string
  brand: string
  category: string
  type: string
  thc: string
  cbd: string
  price: number
  oldPrice?: number
  rating: number
  reviews: number
  badge?: string
  effects: string[]
  flavors: string[]
  gradient: string
  image: string
  verified?: boolean
  featured?: boolean
  trending?: boolean
}

export interface Category {
  name: string
  count: string
  emoji: string
  color: string
}

// Format a number as Kenyan Shillings (KSH)
export function formatKSH(amount: number): string {
  return 'KSH ' + Math.round(amount).toLocaleString('en-KE')
}

export const categories: Category[] = [
  { name: 'Flower', count: '12.5k', emoji: '🌿', color: 'from-emerald-500/20' },
  { name: 'Vapes', count: '8.2k', emoji: '💨', color: 'from-cyan-500/20' },
  { name: 'Edibles', count: '5.1k', emoji: '🍬', color: 'from-pink-500/20' },
  { name: 'Concentrates', count: '3.4k', emoji: '🧪', color: 'from-amber-500/20' },
  { name: 'Oils', count: '4.8k', emoji: '💧', color: 'from-teal-500/20' },
  { name: 'Pre-Rolls', count: '9.3k', emoji: '🚬', color: 'from-orange-500/20' },
]

export const brands = [
  { name: 'Aura Farms', logo: '🌿', tagline: 'Premium Organic Flower', color: 'from-emerald-500/20 to-green-700/20' },
  { name: 'Cloud Extracts', logo: '💨', tagline: 'Master Extractors', color: 'from-cyan-500/20 to-blue-700/20' },
  { name: 'Sweet Relief', logo: '🍬', tagline: 'Artisan Edibles', color: 'from-pink-500/20 to-rose-700/20' },
  { name: 'Heritage Grow', logo: '🌱', tagline: 'Legacy Genetics', color: 'from-amber-500/20 to-orange-700/20' },
  { name: 'Nightwell', logo: '🌙', tagline: 'CBD Wellness', color: 'from-indigo-500/20 to-purple-700/20' },
  { name: 'Elevate', logo: '✨', tagline: 'Premium Accessories', color: 'from-slate-500/20 to-gray-700/20' },
]

export const strainTypes = ['Indica', 'Sativa', 'Hybrid']
export const effectOptions = ['Relaxed', 'Focused', 'Happy', 'Sleepy', 'Creative', 'Uplifted', 'Energetic']
export const flavorOptions = ['Citrus', 'Earthy', 'Pine', 'Sweet', 'Berry', 'Diesel']

export const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Verified Buyer',
    review: 'GreenHub has completely changed how I purchase my wellness products. The delivery is always incredibly fast, and the quality is unmatched. I love the transparency and lab results.',
    rating: 5,
    initials: 'SJ',
  },
  {
    name: 'Marcus Chen',
    role: 'Medical Patient',
    review: 'The variety of strains available is incredible. Being able to filter by specific effects and THC/CBD ratios helps me find exactly what I need for my treatment plan.',
    rating: 5,
    initials: 'MC',
  },
  {
    name: 'Jessica Reynolds',
    role: 'Verified Buyer',
    review: 'Best cannabis marketplace out there. The app is so easy to use, and I love that I can track my delivery in real-time. The product recommendations are always spot on.',
    rating: 5,
    initials: 'JR',
  },
]

export const faqs = [
  {
    question: 'Is GreenHub legal?',
    answer: 'Yes, GreenHub operates strictly within jurisdictions where cannabis is legally permitted for medical and/or recreational use. All our partner dispensaries and sellers are fully licensed and verified in compliance with local and state laws.',
  },
  {
    question: 'How does delivery work?',
    answer: 'Once you place an order, it is routed to the nearest partner dispensary. A verified driver picks up your order in a discrete, climate-controlled vehicle and delivers it directly to your address. You can track the driver in real-time via the GreenHub app.',
  },
  {
    question: 'How are products verified?',
    answer: 'Every product listed on GreenHub must include a Certificate of Analysis (COA) from an independent, state-accredited testing laboratory. This ensures accurate cannabinoid profiles and guarantees the product is free from pesticides, heavy metals, and mold.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept various secure payment methods including debit cards, ACH bank transfers, and specialized secure payment gateways designed specifically for the legal cannabis industry. Cash on delivery is also available in select markets.',
  },
  {
    question: 'How do sellers join?',
    answer: 'Licensed dispensaries and brands can apply via our "Become a Seller" portal. Our compliance team will review your state licenses, product catalog, and lab testing protocols. Once approved, you get access to our seller dashboard to manage inventory and orders.',
  },
]
