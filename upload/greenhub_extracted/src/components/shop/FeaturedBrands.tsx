import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const brands = [
  { name: 'Aura Farms', initials: 'AF', products: 124, rating: 4.9, color: 'from-emerald-500/20' },
  { name: 'Cloud Extracts', initials: 'CE', products: 86, rating: 4.8, color: 'from-blue-500/20' },
  { name: 'Sweet Relief', initials: 'SR', products: 210, rating: 4.7, color: 'from-pink-500/20' },
  { name: 'Heritage Grow', initials: 'HG', products: 156, rating: 4.9, color: 'from-amber-500/20' },
  { name: 'Island Botanicals', initials: 'IB', products: 94, rating: 4.6, color: 'from-cyan-500/20' },
  { name: 'Nightwell', initials: 'NW', products: 45, rating: 4.8, color: 'from-indigo-500/20' },
];

export function FeaturedBrands() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Brands</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${brand.color} to-transparent border border-white/10 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform`}>
                {brand.initials}
              </div>
              <h3 className="font-semibold text-sm mb-1">{brand.name}</h3>
              <div className="flex items-center gap-1 text-xs text-gray-400 mb-2">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>{brand.rating}</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gray-500">{brand.products} Products</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
