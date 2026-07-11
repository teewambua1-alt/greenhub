import { ShopHeroBanner } from '../components/shop/ShopHeroBanner';
import { ShopFilterSidebar } from '../components/shop/ShopFilterSidebar';
import { ShopProductGrid } from '../components/shop/ShopProductGrid';
import { TrendingProducts } from '../components/shop/TrendingProducts';
import { FeaturedBrands } from '../components/shop/FeaturedBrands';
import { TrustSection } from '../components/shop/TrustSection';
import { Filter, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Shop() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <main className="pt-24 pb-12">
      <ShopHeroBanner />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button 
            onClick={() => setIsMobileFilterOpen(true)}
            className="w-full flex items-center justify-center gap-2 glass py-3 rounded-xl border-white/10 hover:bg-white/5 transition-colors"
          >
            <Filter className="w-5 h-5 text-primary" />
            <span className="font-medium">Filter Products</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="hidden lg:block w-64 shrink-0">
            <ShopFilterSidebar />
          </div>
          <div className="flex-1">
            <ShopProductGrid />
          </div>
        </div>
      </div>
      
      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
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
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <ShopFilterSidebar />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <TrendingProducts />
      <FeaturedBrands />
      <TrustSection />
    </main>
  );
}
