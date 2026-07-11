'use client'

import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Product, formatKSH } from '@/lib/products'
import { useCart } from '@/lib/cart-store'
import { useToast } from '@/hooks/use-toast'

export function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const addItem = useCart((s) => s.addItem)
  const setOpen = useCart((s) => s.setOpen)
  const { toast } = useToast()

  useEffect(() => {
    fetch('/api/products?featured=true')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setProducts(data)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  const handleAdd = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      brand: product.brand,
      type: product.type,
      price: product.price,
      thc: product.thc,
      cbd: product.cbd,
      gradient: product.gradient,
      image: product.image,
    })
    toast({ title: 'Added to cart', description: `${product.name} is now in your cart.` })
  }

  return (
    <section className="py-24 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
            <Star className="w-4 h-4 fill-primary" />
            Hand-picked
          </div>
          <h2 className="text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hand-picked premium selections from our top-rated verified dispensaries.
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-white/5" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-white/5 rounded w-1/2" />
                  <div className="h-5 bg-white/5 rounded w-3/4" />
                  <div className="h-8 bg-white/5 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl overflow-hidden group flex flex-col"
              >
                <div className={`h-48 w-full bg-gradient-to-tr ${product.gradient} relative p-4 flex flex-col justify-between border-b border-white/5 overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-contain p-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    />
                  </div>
                  <div className="flex justify-between items-start relative z-20">
                    {product.badge ? (
                      <span className="px-2.5 py-1 text-xs font-semibold bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-white">
                        {product.badge}
                      </span>
                    ) : (
                      <div />
                    )}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                    <span>{product.brand}</span>
                    <div className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{product.rating}</span>
                      <span className="text-gray-500">({product.reviews})</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-1 truncate">{product.name}</h3>
                  <p className="text-sm text-primary mb-4">{product.type}</p>

                  <div className="flex gap-2 mb-6">
                    <div className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5">
                      THC {product.thc}
                    </div>
                    <div className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/5">
                      CBD {product.cbd}
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-xl font-bold text-primary">{formatKSH(product.price)}</span>
                    <button
                      onClick={() => {
                        handleAdd(product)
                        setOpen(true)
                      }}
                      className="bg-white/10 hover:bg-primary hover:text-black transition-colors px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5"
                    >
                      Add to Cart <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 glass glass-hover px-6 py-3 rounded-full font-medium"
          >
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
