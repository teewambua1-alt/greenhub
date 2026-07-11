import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export function ShopFilterSidebar() {
  const [price, setPrice] = useState(150);
  const [thc, setThc] = useState(25);
  const [cbd, setCbd] = useState(5);

  return (
    <div className="glass rounded-2xl p-6 lg:sticky lg:top-[160px]">
      <div className="flex items-center gap-2 mb-6 text-white font-bold text-lg pb-4 border-b border-white/10">
        <SlidersHorizontal className="w-5 h-5 text-primary" />
        Filters
      </div>

      <div className="space-y-8">
        {/* Strain Type */}
        <div>
          <h4 className="font-medium text-sm text-gray-300 mb-3 uppercase tracking-wider">Strain Type</h4>
          <div className="space-y-2">
            {['Indica', 'Sativa', 'Hybrid'].map(type => (
              <label key={type} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <div className="w-2 h-2 rounded-sm bg-transparent" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* THC Range */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium text-sm text-gray-300 uppercase tracking-wider">THC Range</h4>
            <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded">{thc}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="40" 
            value={thc} 
            onChange={(e) => setThc(parseInt(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>0%</span>
            <span>40%</span>
          </div>
        </div>

        {/* Effects */}
        <div>
          <h4 className="font-medium text-sm text-gray-300 mb-3 uppercase tracking-wider">Effects</h4>
          <div className="flex flex-wrap gap-2">
            {['Relaxed', 'Focused', 'Happy', 'Sleepy', 'Creative', 'Uplifted'].map(effect => (
              <button key={effect} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                {effect}
              </button>
            ))}
          </div>
        </div>

        {/* Flavor Profiles */}
        <div>
          <h4 className="font-medium text-sm text-gray-300 mb-3 uppercase tracking-wider">Flavors</h4>
          <div className="flex flex-wrap gap-2">
            {['Citrus', 'Earthy', 'Pine', 'Sweet', 'Berry', 'Diesel'].map(flavor => (
              <button key={flavor} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:bg-white/10 hover:text-white transition-colors">
                {flavor}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
           <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium text-sm text-gray-300 uppercase tracking-wider">Price</h4>
            <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded">${price}</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="500" 
            value={price} 
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
        
        {/* Seller Filter */}
        <div>
          <h4 className="font-medium text-sm text-gray-300 mb-3 uppercase tracking-wider">Seller</h4>
           <div className="space-y-2">
            {['Verified Sellers Only', 'Local Sellers', 'Top Rated'].map(seller => (
              <label key={seller} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-4 h-4 rounded border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                  <div className="w-2 h-2 rounded-sm bg-transparent" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{seller}</span>
              </label>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
