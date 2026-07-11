'use client'

import { useEffect, useMemo, useState } from 'react'
import { ChevronDown, Grid2X2, List, SlidersHorizontal, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { ProductCard } from './ProductCard'
import { ShopFilterSidebar, ShopFilters } from './ShopFilterSidebar'
import { Product } from '@/lib/products'

const defaultFilters: ShopFilters = {
  strains: [],
  effects: [],
  flavors: [],
  priceMax: 500,
  thcMax: 40,
  sellers: [],
}

export function ShopProductGrid() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<ShopFilters>(defaultFilters)
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [view, setView] = useState<'grid' | 'list'>('grid')

  useEffect(() => {
    fetch('/api/products')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setProducts(data)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      // Strain filter
      if (filters.strains.length > 0 && !filters.strains.includes(p.type)) return false
      // Price filter
      if (p.price > filters.priceMax) return false
      // THC filter (extract numeric)
      const thcNum = parseInt(p.thc)
      if (!isNaN(thcNum) && thcNum > filters.thcMax) return false
      // Effects filter
      if (filters.effects.length > 0) {
        const hasEffect = filters.effects.some((e) => p.effects.includes(e))
        if (!hasEffect) return false
      }
      // Flavors filter
      if (filters.flavors.length > 0) {
        const hasFlavor = filters.flavors.some((f) => p.flavors.includes(f))
        if (!hasFlavor) return false
      }
      // Seller filter
      if (filters.sellers.includes('Verified Sellers Only') && p.verified === false) return false
      return true
    })

    // Sort
    result = [...result]
    if (sortBy === 'price-low') result.sort((a, b) => a.price - b.price)
    else if (sortBy === 'price-high') result.sort((a, b) => b.price - a.price)
    else if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [products, filters, sortBy])

  const activeFilterCount =
    filters.strains.length +
    filters.effects.length +
    filters.flavors.length +
    filters.sellers.length +
    (filters.priceMax < 500 ? 1 : 0) +
    (filters.thcMax < 40 ? 1 : 0)

  return (
    <div>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setMobileFilterOpen(true)}
          className="w-full flex items-center justify-center gap-2 glass py-3 rounded-xl border-white/10 hover:bg-white/5 transition-colors"
        >
          <SlidersHorizontal className="w-5 h-5 text-primary" />
          <span className="font-medium">Filter Products</span>
          {activeFilterCount > 0 && (
            <span className="bg-primary text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="hidden lg:block w-64 shrink-0">
          <ShopFilterSidebar filters={filters} onChange={setFilters} />
        </div>

        <div className="flex-1">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 glass rounded-2xl p-4 border border-white/5 gap-4">
            <div className="text-sm text-gray-400 font-medium">
              <span className="text-white font-bold">{filtered.length}</span> Products Found
            </div>

            <div className="flex items-center gap-4">
              <div className="relative group">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="flex items-center gap-2 text-sm bg-black/40 border border-white/10 rounded-lg px-4 py-2 hover:bg-white/5 transition-colors text-white appearance-none cursor-pointer pr-8"
                >
                  <option value="popular" className="bg-[#0a0a0a]">Popular</option>
                  <option value="price-low" className="bg-[#0a0a0a]">Price: Low to High</option>
                  <option value="price-high" className="bg-[#0a0a0a]">Price: High to Low</option>
                  <option value="rating" className="bg-[#0a0a0a]">Top Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-lg p-1">
                <button
                  onClick={() => setView('grid')}
                  className={`p-1.5 rounded-md transition-colors ${view === 'grid' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
                  aria-label="Grid view"
                >
                  <Grid2X2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setView('list')}
                  className={`p-1.5 rounded-md transition-colors ${view === 'list' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="glass rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-48 bg-white/5" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-white/5 rounded w-1/2" />
                    <div className="h-5 bg-white/5 rounded w-3/4" />
                    <div className="h-8 bg-white/5 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="glass rounded-2xl p-16 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your filters to see more results.</p>
              <button
                onClick={() => setFilters(defaultFilters)}
                className="bg-primary hover:bg-emerald-400 text-black px-6 py-2 rounded-full font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[300px] bg-[#0a0a0a] border-r border-white/10 z-[70] lg:hidden overflow-y-auto"
            >
              <div className="p-4 border-b border-white/10 flex items-center justify-between sticky top-0 bg-[#0a0a0a] z-10">
                <h3 className="font-bold text-lg">Filters</h3>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <ShopFilterSidebar filters={filters} onChange={setFilters} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
