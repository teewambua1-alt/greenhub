import { motion } from 'motion/react';

const categories = [
  { name: 'Flower', count: '12.5k', emoji: '🌿', color: 'from-emerald-500/20' },
  { name: 'Vapes', count: '8.2k', emoji: '💨', color: 'from-blue-500/20' },
  { name: 'Edibles', count: '5.1k', emoji: '🍬', color: 'from-pink-500/20' },
  { name: 'Concentrates', count: '3.4k', emoji: '🧪', color: 'from-yellow-500/20' },
  { name: 'Oils', count: '4.8k', emoji: '💧', color: 'from-cyan-500/20' },
  { name: 'Pre-Rolls', count: '9.3k', emoji: '🚬', color: 'from-orange-500/20' },
];

export function Categories() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-400 max-w-xl">Find exactly what you're looking for from our extensive collection of premium cannabis products.</p>
          </div>
          <button className="text-primary hover:text-white transition-colors font-medium flex items-center gap-2 mt-4 md:mt-0">
            View All Categories &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass glass-hover rounded-2xl p-6 cursor-pointer group flex flex-col items-center justify-center text-center transition-all"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${cat.color} to-transparent border border-white/5 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {cat.emoji}
              </div>
              <h3 className="font-semibold text-lg mb-1">{cat.name}</h3>
              <p className="text-xs text-gray-500">{cat.count} Products</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
