'use client'

import { Heart, Star, ShoppingBag, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Product } from '@/lib/products'
import { useCart } from '@/lib/cart-store'
import { useToast } from '@/hooks/use-toast'

interface ProductCardProps {
  product: Product
  index: number
}

export function ProductCard({ product, index }: ProductCardProps) {
  const addItem = useCart((s) => s.addItem)
  const setOpen = useCart((s) => s.setOpen)
  const { toast } = useToast()

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      brand: product.brand,
      type: product.type,
      price: product.price,
      thc: product.thc,
      cbd: product.cbd,
      gradient: product.gradient,
    })
    toast({
      title: 'Added to cart',
      description: `${product.name} is now in your cart.`,
    })
  }

  const handleBuyNow = () => {
    handleAdd()
    setOpen(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass glass-hover rounded-2xl overflow-hidden group flex flex-col relative"
    >
      {/* Image area */}
      <div
        className={`h-48 w-full bg-gradient-to-tr ${product.gradient} relative p-4 flex flex-col justify-between border-b border-white/5 overflow-hidden`}
      >
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors z-10" />

        <div className="flex justify-between items-start relative z-20">
          {product.badge ? (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white">
              {product.badge}
            </span>
          ) : (
            <div />
          )}
          <button
            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30 transition-all"
            aria-label="Save to wishlist"
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Abstract product shape */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-500">
          <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col relative z-20 bg-black/40">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
          <div className="flex items-center gap-1">
            <span>{product.brand}</span>
            {product.verified !== false && <CheckCircle2 className="w-3 h-3 text-primary" />}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-white font-medium">{product.rating}</span>
            <span className="text-gray-500">({product.reviews})</span>
          </div>
        </div>

        <h3 className="font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-wider flex-wrap">
          <span className="text-primary">{product.type}</span>
          {product.thc !== 'N/A' && (
            <>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-gray-400">THC {product.thc}</span>
            </>
          )}
          {product.cbd !== 'N/A' && (
            <>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-gray-400">CBD {product.cbd}</span>
            </>
          )}
        </div>

        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-gray-500 line-through">${product.oldPrice}</span>
            )}
            <span className="text-xl font-bold">${product.price}</span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleAdd}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
              aria-label="Add to cart"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button
              onClick={handleBuyNow}
              className="px-4 h-10 rounded-xl bg-primary hover:bg-emerald-400 text-black text-sm font-bold transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
