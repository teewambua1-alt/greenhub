import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

// Image mapping by category
const img = {
  Flower: '/images/products/flower.png',
  Vapes: '/images/products/vapes.png',
  Edibles: '/images/products/edibles.png',
  Concentrates: '/images/products/concentrates.png',
  Oils: '/images/products/oils.png',
  'Pre-Rolls': '/images/products/pre-rolls.png',
  Topicals: '/images/products/topicals.png',
  Accessories: '/images/products/accessories.png',
}

// Prices are in Kenyan Shillings (KSH)
const products = [
  { name: 'Blue Dream Reserve', brand: 'Aura Farms', category: 'Flower', type: 'Hybrid', thc: '24%', cbd: '0.1%', price: 5800, oldPrice: 7700, rating: 4.9, reviews: 128, badge: 'Best Seller', effects: 'Relaxed,Creative,Happy', flavors: 'Berry,Sweet,Earthy', gradient: 'from-purple-900/40 to-emerald-900/40', image: img.Flower, featured: true, trending: true },
  { name: 'Live Resin Cartridge', brand: 'Cloud Extracts', category: 'Vapes', type: 'Vape', thc: '85%', cbd: '1.2%', price: 4500, oldPrice: 6400, rating: 4.8, reviews: 342, badge: 'Premium', effects: 'Focused,Uplifted', flavors: 'Citrus,Diesel', gradient: 'from-orange-900/40 to-yellow-900/40', image: img.Vapes, featured: true, trending: true },
  { name: 'Watermelon Gummies', brand: 'Sweet Relief', category: 'Edibles', type: 'Edibles', thc: '10mg', cbd: '5mg', price: 3200, oldPrice: 5100, rating: 4.7, reviews: 89, badge: 'New', effects: 'Relaxed,Happy', flavors: 'Sweet,Watermelon', gradient: 'from-pink-900/40 to-red-900/40', image: img.Edibles, featured: true, trending: false },
  { name: 'Granddaddy Purple', brand: 'Heritage Grow', category: 'Flower', type: 'Indica', thc: '22%', cbd: '0.5%', price: 5100, oldPrice: 7000, rating: 4.9, reviews: 215, badge: 'Limited', effects: 'Sleepy,Relaxed', flavors: 'Grape,Berry,Sweet', gradient: 'from-violet-900/40 to-fuchsia-900/40', image: img.Flower, featured: true, trending: true },
  { name: 'Pineapple Express', brand: 'Island Botanicals', category: 'Flower', type: 'Sativa', thc: '21%', cbd: '0.2%', price: 4900, oldPrice: 6800, rating: 4.6, reviews: 412, badge: '', effects: 'Energetic,Creative,Uplifted', flavors: 'Pineapple,Tropical,Pine', gradient: 'from-yellow-700/40 to-green-800/40', image: img.Flower, featured: false, trending: true },
  { name: 'CBD Sleep Drops', brand: 'Nightwell', category: 'Oils', type: 'Oils', thc: '0%', cbd: '1000mg', price: 8300, oldPrice: 10200, rating: 4.8, reviews: 56, badge: 'New', effects: 'Sleepy,Relaxed', flavors: 'Mint,Earthy', gradient: 'from-blue-900/40 to-indigo-900/40', image: img.Oils, featured: false, trending: false },
  { name: 'Sour Diesel Pre-Roll', brand: 'Aura Farms', category: 'Pre-Rolls', type: 'Sativa', thc: '23%', cbd: '0.1%', price: 1900, oldPrice: 3800, rating: 4.5, reviews: 890, badge: 'Best Seller', effects: 'Energetic,Focused,Uplifted', flavors: 'Diesel,Citrus,Pungent', gradient: 'from-orange-800/40 to-red-800/40', image: img['Pre-Rolls'], featured: false, trending: true },
  { name: 'Muscle Relief Balm', brand: 'Green Remedies', category: 'Topicals', type: 'Topicals', thc: '50mg', cbd: '500mg', price: 5800, oldPrice: 7700, rating: 4.7, reviews: 34, badge: '', effects: 'Relaxed', flavors: 'Menthol,Herbal', gradient: 'from-emerald-900/40 to-cyan-900/40', image: img.Topicals, featured: false, trending: false },
  { name: 'Glass Water Pipe', brand: 'Elevate', category: 'Accessories', type: 'Accessories', thc: 'N/A', cbd: 'N/A', price: 15400, oldPrice: 17300, rating: 4.9, reviews: 112, badge: 'Premium', effects: '', flavors: '', gradient: 'from-gray-800/40 to-slate-700/40', image: img.Accessories, featured: false, trending: false },
  { name: 'Rosin Press Concentrate', brand: 'Cloud Extracts', category: 'Concentrates', type: 'Concentrates', thc: '78%', cbd: '2.5%', price: 7100, oldPrice: 9000, rating: 4.9, reviews: 67, badge: 'Organic', effects: 'Focused,Relaxed', flavors: 'Pine,Earthy', gradient: 'from-amber-700/40 to-yellow-600/40', image: img.Concentrates, featured: false, trending: true },
  { name: 'Calm Pet Drops', brand: 'Pawsitive', category: 'Oils', type: 'CBD Pets', thc: '0%', cbd: '250mg', price: 3800, oldPrice: 5700, rating: 4.8, reviews: 203, badge: '', effects: 'Relaxed', flavors: 'Bacon,Earthy', gradient: 'from-teal-900/40 to-emerald-800/40', image: img.Oils, featured: false, trending: false },
  { name: 'Jack Herer', brand: 'Heritage Grow', category: 'Flower', type: 'Sativa', thc: '19%', cbd: '0.1%', price: 4500, oldPrice: 6400, rating: 4.7, reviews: 45, badge: '', effects: 'Energetic,Focused,Creative', flavors: 'Pine,Spicy,Earthy', gradient: 'from-green-800/40 to-emerald-600/40', image: img.Flower, featured: false, trending: false },
  { name: 'OG Kush Reserve', brand: 'Aura Farms', category: 'Flower', type: 'Hybrid', thc: '26%', cbd: '0.2%', price: 6400, oldPrice: 8300, rating: 4.9, reviews: 567, badge: 'Premium', effects: 'Relaxed,Happy,Sleepy', flavors: 'Earthy,Pine,Woody', gradient: 'from-emerald-900/50 to-green-800/40', image: img.Flower, featured: true, trending: true },
  { name: 'Strawberry Cough Vape', brand: 'Cloud Extracts', category: 'Vapes', type: 'Sativa', thc: '82%', cbd: '0.5%', price: 5100, oldPrice: 7000, rating: 4.7, reviews: 234, badge: 'New', effects: 'Energetic,Uplifted', flavors: 'Strawberry,Sweet', gradient: 'from-red-800/40 to-pink-700/40', image: img.Vapes, featured: false, trending: false },
  { name: 'Mango Edible Bar', brand: 'Sweet Relief', category: 'Edibles', type: 'Edibles', thc: '20mg', cbd: '0mg', price: 2800, oldPrice: 4500, rating: 4.6, reviews: 78, badge: '', effects: 'Happy,Relaxed', flavors: 'Mango,Tropical', gradient: 'from-orange-700/40 to-amber-600/40', image: img.Edibles, featured: false, trending: false },
  { name: 'Northern Lights', brand: 'Heritage Grow', category: 'Flower', type: 'Indica', thc: '20%', cbd: '0.3%', price: 5400, oldPrice: 7300, rating: 4.8, reviews: 189, badge: 'Classic', effects: 'Sleepy,Relaxed', flavors: 'Sweet,Earthy,Pine', gradient: 'from-indigo-900/40 to-purple-800/40', image: img.Flower, featured: false, trending: true },
]

async function main() {
  console.log('Seeding database...')

  await db.product.deleteMany()
  await db.newsletterSubscriber.deleteMany()

  for (const p of products) {
    await db.product.create({ data: p })
  }

  console.log(`Seeded ${products.length} products`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
