'use client'

import { motion } from 'framer-motion'
import { brands } from '@/lib/products'

export function FeaturedBrands() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Featured Brands</h2>
          <p className="text-sm sm:text-base text-gray-400">Partnering with the most trusted names in cannabis.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className={`glass glass-hover rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br ${brand.color}`}
            >
              <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{brand.logo}</div>
              <h3 className="font-bold text-xs sm:text-sm mb-1">{brand.name}</h3>
              <p className="text-[10px] sm:text-xs text-gray-400">{brand.tagline}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
