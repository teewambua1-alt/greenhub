'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/products'

export function Categories() {
  return (
    <section className="py-16 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 sm:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Shop by Category</h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Find exactly what you&apos;re looking for from our extensive collection of premium cannabis products.
            </p>
          </div>
          <Link
            href="/shop"
            className="text-primary hover:text-white transition-colors font-medium flex items-center gap-2 shrink-0"
          >
            View All Categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href="/shop"
                className="glass glass-hover rounded-2xl p-4 sm:p-6 cursor-pointer group flex flex-col items-center justify-center text-center block"
              >
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${cat.color} to-transparent border border-white/5 flex items-center justify-center text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {cat.emoji}
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">{cat.name}</h3>
                <p className="text-xs text-gray-500">{cat.count} Products</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
