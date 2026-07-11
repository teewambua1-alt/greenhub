import { ChevronDown, Grid2X2, List } from 'lucide-react';
import { ProductCard } from './ProductCard';

const products = [
  { name: 'Blue Dream Reserve', brand: 'Aura Farms', type: 'Hybrid', thc: '24%', cbd: '0.1%', rating: 4.9, reviews: 128, price: 45, badge: 'Best Seller', verified: true, image: 'bg-gradient-to-tr from-purple-900/40 to-emerald-900/40' },
  { name: 'Live Resin Cartridge', brand: 'Cloud Extracts', type: 'Vape', thc: '85%', cbd: '1.2%', rating: 4.8, reviews: 342, price: 35, badge: 'Premium', verified: true, image: 'bg-gradient-to-tr from-orange-900/40 to-yellow-900/40' },
  { name: 'Watermelon Gummies', brand: 'Sweet Relief', type: 'Edibles', thc: '10mg', cbd: '5mg', rating: 4.7, reviews: 89, price: 25, badge: 'Organic', verified: true, image: 'bg-gradient-to-tr from-pink-900/40 to-red-900/40' },
  { name: 'Granddaddy Purple', brand: 'Heritage Grow', type: 'Indica', thc: '22%', cbd: '0.5%', rating: 4.9, reviews: 215, price: 40, badge: 'Limited Edition', verified: false, image: 'bg-gradient-to-tr from-violet-900/40 to-fuchsia-900/40' },
  { name: 'Pineapple Express', brand: 'Island Botanicals', type: 'Sativa', thc: '21%', cbd: '0.2%', rating: 4.6, reviews: 412, price: 38, badge: '', verified: true, image: 'bg-gradient-to-tr from-yellow-700/40 to-green-800/40' },
  { name: 'CBD Sleep Drops', brand: 'Nightwell', type: 'Oils', thc: '0%', cbd: '1000mg', rating: 4.8, reviews: 56, price: 65, badge: 'New', verified: true, image: 'bg-gradient-to-tr from-blue-900/40 to-indigo-900/40' },
  { name: 'Sour Diesel Pre-Roll', brand: 'Aura Farms', type: 'Sativa', thc: '23%', cbd: '0.1%', rating: 4.5, reviews: 890, price: 15, badge: 'Best Seller', verified: true, image: 'bg-gradient-to-tr from-orange-800/40 to-red-800/40' },
  { name: 'Muscle Relief Balm', brand: 'Green Remedies', type: 'Topicals', thc: '50mg', cbd: '500mg', rating: 4.7, reviews: 34, price: 45, badge: '', verified: true, image: 'bg-gradient-to-tr from-emerald-900/40 to-cyan-900/40' },
  { name: 'Glass Water Pipe', brand: 'Elevate', type: 'Accessories', thc: 'N/A', cbd: 'N/A', rating: 4.9, reviews: 112, price: 120, badge: 'Premium', verified: true, image: 'bg-gradient-to-tr from-gray-800/40 to-slate-700/40' },
  { name: 'Rosin Press Concentrate', brand: 'Cloud Extracts', type: 'Concentrates', thc: '78%', cbd: '2.5%', rating: 4.9, reviews: 67, price: 55, badge: 'Organic', verified: true, image: 'bg-gradient-to-tr from-amber-700/40 to-yellow-600/40' },
  { name: 'Calm Pet Drops', brand: 'Pawsitive', type: 'CBD Pets', thc: '0%', cbd: '250mg', rating: 4.8, reviews: 203, price: 30, badge: '', verified: true, image: 'bg-gradient-to-tr from-teal-900/40 to-emerald-800/40' },
  { name: 'Jack Herer', brand: 'Heritage Grow', type: 'Sativa', thc: '19%', cbd: '0.1%', rating: 4.7, reviews: 45, price: 35, badge: '', verified: false, image: 'bg-gradient-to-tr from-green-800/40 to-emerald-600/40' }
];

export function ShopProductGrid() {
  return (
    <div>
      {/* Product Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 glass rounded-2xl p-4 border border-white/5">
        <div className="text-sm text-gray-400 font-medium mb-4 sm:mb-0">
          <span className="text-white font-bold">3,500</span> Products Found
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-2 text-sm bg-black/40 border border-white/10 rounded-lg px-4 py-2 hover:bg-white/5 transition-colors text-white">
              <span className="text-gray-400">Sort by:</span> Popular
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          
          <div className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-lg p-1">
            <button className="p-1.5 rounded-md bg-white/10 text-white">
              <Grid2X2 className="w-4 h-4" />
            </button>
            <button className="p-1.5 rounded-md text-gray-500 hover:text-white transition-colors">
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <ProductCard key={product.name} product={product} index={i} />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="mt-12 flex justify-center">
         <div className="flex gap-2">
            <button className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 border-white/10 disabled:opacity-50" disabled>&lt;</button>
            <button className="w-10 h-10 rounded-lg bg-primary text-black font-bold flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 border-white/10">2</button>
            <button className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 border-white/10">3</button>
            <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
            <button className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 border-white/10">24</button>
            <button className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 border-white/10">&gt;</button>
         </div>
      </div>
    </div>
  );
}
