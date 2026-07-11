'use client'

import { motion } from 'framer-motion'
import { Flame } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Product } from '@/lib/products'
import { ProductCard } from './ProductCard'

export function TrendingProducts() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('/api/products?trending=true')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setProducts(data.slice(0, 4))
      })
      .catch(() => {})
  }, [])

  if (products.length === 0) return null

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Trending Now</h2>
            <p className="text-gray-400 text-xs sm:text-sm">The hottest products this week</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
