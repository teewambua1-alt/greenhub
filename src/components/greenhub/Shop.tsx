'use client'

import { ShopHeroBanner } from './shop/ShopHeroBanner'
import { ShopProductGrid } from './shop/ShopProductGrid'
import { TrendingProducts } from './shop/TrendingProducts'
import { FeaturedBrands } from './shop/FeaturedBrands'
import { TrustSection } from './shop/TrustSection'

export function Shop() {
  return (
    <section id="shop" className="relative pb-12">
      <ShopHeroBanner />
      <div className="max-w-7xl mx-auto px-6 py-8">
        <ShopProductGrid />
      </div>
      <TrendingProducts />
      <FeaturedBrands />
      <TrustSection />
    </section>
  )
}
