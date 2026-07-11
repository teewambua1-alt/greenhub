import { motion } from 'motion/react';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';

const trending = [
  { name: 'Skywalker OG', brand: 'Cosmic Farms', type: 'Indica', thc: '26%', cbd: '0.2%', rating: 4.9, reviews: 890, price: 50, badge: 'Trending', verified: true, image: 'bg-gradient-to-tr from-blue-900/40 to-cyan-900/40' },
  { name: 'Mango Haze V-Pen', brand: 'Island Botanicals', type: 'Vape', thc: '80%', cbd: '2.0%', rating: 4.7, reviews: 412, price: 40, badge: 'Staff Pick', verified: true, image: 'bg-gradient-to-tr from-yellow-800/40 to-orange-700/40' },
  { name: 'Cherry Bomb Chocolates', brand: 'Sweet Relief', type: 'Edibles', thc: '50mg', cbd: '10mg', rating: 4.8, reviews: 320, price: 30, badge: 'Customer Fav', verified: true, image: 'bg-gradient-to-tr from-red-900/40 to-pink-900/40' },
  { name: 'Northern Lights Live Resin', brand: 'Cloud Extracts', type: 'Concentrates', thc: '88%', cbd: '1.5%', rating: 5.0, reviews: 156, price: 60, badge: 'Premium', verified: true, image: 'bg-gradient-to-tr from-indigo-900/40 to-purple-900/40' },
];

export function TrendingProducts() {
  return (
    <section className="py-16 border-t border-white/5 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Trending This Week</h2>
            <p className="text-gray-400">The most popular products right now across the marketplace.</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-primary hover:text-emerald-400 font-medium transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:snap-none md:overflow-visible md:pb-0 md:px-0 md:mx-0">
          {trending.map((product, i) => (
            <div key={product.name} className="min-w-[280px] snap-center">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
