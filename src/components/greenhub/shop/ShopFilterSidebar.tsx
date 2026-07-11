'use client'

import { SlidersHorizontal } from 'lucide-react'
import { strainTypes, effectOptions, flavorOptions } from '@/lib/products'

export interface ShopFilters {
  strains: string[]
  effects: string[]
  flavors: string[]
  priceMax: number
  thcMax: number
  sellers: string[]
}

interface Props {
  filters: ShopFilters
  onChange: (filters: ShopFilters) => void
}

export function ShopFilterSidebar({ filters, onChange }: Props) {
  const toggle = (key: 'strains' | 'effects' | 'flavors' | 'sellers', value: string) => {
    const list = filters[key]
    onChange({
      ...filters,
      [key]: list.includes(value) ? list.filter((v) => v !== value) : [...list, value],
    })
  }

  const reset = () => {
    onChange({ strains: [], effects: [], flavors: [], priceMax: 16000, thcMax: 40, sellers: [] })
  }

  return (
    <div className="glass rounded-2xl p-6 lg:sticky lg:top-[100px]">
      <div className="flex items-center justify-between mb-6 text-white font-bold text-lg pb-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-primary" />
          Filters
        </div>
        <button
          onClick={reset}
          className="text-xs text-gray-400 hover:text-primary font-normal transition-colors"
        >
          Reset
        </button>
      </div>

      <div className="space-y-8 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
        {/* Strain Type */}
        <div>
          <h4 className="font-medium text-sm text-gray-300 mb-3 uppercase tracking-wider">Strain Type</h4>
          <div className="space-y-2">
            {strainTypes.map((type) => {
              const checked = filters.strains.includes(type)
              return (
                <button
                  key={type}
                  onClick={() => toggle('strains', type)}
                  className="flex items-center gap-3 cursor-pointer group w-full"
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      checked ? 'bg-primary border-primary' : 'border-white/20 group-hover:border-primary'
                    }`}
                  >
                    {checked && (
                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{type}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* THC Range */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium text-sm text-gray-300 uppercase tracking-wider">Max THC</h4>
            <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded">{filters.thcMax}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="40"
            value={filters.thcMax}
            onChange={(e) => onChange({ ...filters, thcMax: parseInt(e.target.value) })}
            className="w-full cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>0%</span>
            <span>40%+</span>
          </div>
        </div>

        {/* Effects */}
        <div>
          <h4 className="font-medium text-sm text-gray-300 mb-3 uppercase tracking-wider">Effects</h4>
          <div className="flex flex-wrap gap-2">
            {effectOptions.map((effect) => {
              const active = filters.effects.includes(effect)
              return (
                <button
                  key={effect}
                  onClick={() => toggle('effects', effect)}
                  className={`px-3 py-1.5 rounded-full border text-xs transition-colors ${
                    active
                      ? 'bg-primary text-black border-primary'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {effect}
                </button>
              )
            })}
          </div>
        </div>

        {/* Flavors */}
        <div>
          <h4 className="font-medium text-sm text-gray-300 mb-3 uppercase tracking-wider">Flavors</h4>
          <div className="flex flex-wrap gap-2">
            {flavorOptions.map((flavor) => {
              const active = filters.flavors.includes(flavor)
              return (
                <button
                  key={flavor}
                  onClick={() => toggle('flavors', flavor)}
                  className={`px-3 py-1.5 rounded-full border text-xs transition-colors ${
                    active
                      ? 'bg-primary text-black border-primary'
                      : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {flavor}
                </button>
              )
            })}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium text-sm text-gray-300 uppercase tracking-wider">Max Price</h4>
            <span className="text-primary text-xs font-bold bg-primary/10 px-2 py-1 rounded">KSH {filters.priceMax.toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="0"
            max="16000"
            step="100"
            value={filters.priceMax}
            onChange={(e) => onChange({ ...filters, priceMax: parseInt(e.target.value) })}
            className="w-full cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>KSH 0</span>
            <span>KSH 16,000+</span>
          </div>
        </div>

        {/* Seller */}
        <div>
          <h4 className="font-medium text-sm text-gray-300 mb-3 uppercase tracking-wider">Seller</h4>
          <div className="space-y-2">
            {['Verified Sellers Only', 'Local Sellers', 'Top Rated'].map((seller) => {
              const checked = filters.sellers.includes(seller)
              return (
                <button
                  key={seller}
                  onClick={() => toggle('sellers', seller)}
                  className="flex items-center gap-3 cursor-pointer group w-full"
                >
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      checked ? 'bg-primary border-primary' : 'border-white/20 group-hover:border-primary'
                    }`}
                  >
                    {checked && (
                      <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors text-sm">{seller}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
