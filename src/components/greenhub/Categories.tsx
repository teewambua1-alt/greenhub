'use client'

import { motion } from 'framer-motion'
import { categories } from '@/lib/products'

export function Categories() {
  const scrollToShop = () => {
    document.querySelector('#shop')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-400 max-w-xl">
              Find exactly what you&apos;re looking for from our extensive collection of premium cannabis products.
            </p>
          </div>
          <button
            onClick={scrollToShop}
            className="text-primary hover:text-white transition-colors font-medium flex items-center gap-2 mt-4 md:mt-0"
          >
            View All Categories &rarr;
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.name}
              onClick={scrollToShop}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass glass-hover rounded-2xl p-6 cursor-pointer group flex flex-col items-center justify-center text-center"
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${cat.color} to-transparent border border-white/5 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {cat.emoji}
              </div>
              <h3 className="font-semibold text-lg mb-1">{cat.name}</h3>
              <p className="text-xs text-gray-500">{cat.count} Products</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
