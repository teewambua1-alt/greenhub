import { motion } from 'motion/react';
import { Star, Plus } from 'lucide-react';

const products = [
  {
    name: 'Blue Dream Reserve',
    brand: 'Aura Farms',
    type: 'Flower',
    thc: '24%',
    cbd: '0.1%',
    rating: 4.9,
    reviews: 128,
    price: 45,
    badge: 'Best Seller',
    image: 'bg-gradient-to-tr from-purple-900/40 to-emerald-900/40'
  },
  {
    name: 'Live Resin Cartridge',
    brand: 'Cloud Extracts',
    type: 'Vape',
    thc: '85%',
    cbd: '1.2%',
    rating: 4.8,
    reviews: 342,
    price: 35,
    badge: 'Premium',
    image: 'bg-gradient-to-tr from-orange-900/40 to-yellow-900/40'
  },
  {
    name: 'Watermelon Gummies',
    brand: 'Sweet Relief',
    type: 'Edibles',
    thc: '10mg',
    cbd: '5mg',
    rating: 4.7,
    reviews: 89,
    price: 25,
    badge: 'New',
    image: 'bg-gradient-to-tr from-pink-900/40 to-red-900/40'
  },
  {
    name: 'Granddaddy Purple',
    brand: 'Heritage Grow',
    type: 'Flower',
    thc: '22%',
    cbd: '0.5%',
    rating: 4.9,
    reviews: 215,
    price: 40,
    badge: 'Limited',
    image: 'bg-gradient-to-tr from-violet-900/40 to-fuchsia-900/40'
  }
];

export function FeaturedProducts() {
  return (
    <section className="py-24 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Hand-picked premium selections from our top-rated verified dispensaries.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className={`h-48 w-full ${product.image} relative p-4 flex flex-col justify-between border-b border-white/5`}>
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 text-xs font-semibold bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white">
                    {product.badge}
                  </span>
                  <button className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:text-black">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                {/* Abstract product representation */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm" />
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                  <span>{product.brand}</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{product.rating}</span>
                    <span className="text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-1 truncate">{product.name}</h3>
                <p className="text-sm text-primary mb-4">{product.type}</p>
                
                <div className="flex gap-2 mb-6">
                  <div className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5">
                    THC {product.thc}
                  </div>
                  <div className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5">
                    CBD {product.cbd}
                  </div>
                </div>
                
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button className="bg-white/10 hover:bg-primary hover:text-black transition-colors px-4 py-2 rounded-full text-sm font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
