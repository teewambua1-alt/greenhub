'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useCart } from '@/lib/cart-store'
import { useToast } from '@/hooks/use-toast'
import { formatKSH } from '@/lib/products'

export function CartDrawer() {
  const { items, isOpen, setOpen, removeItem, updateQuantity, clearCart, totalPrice } = useCart()
  const [checkingOut, setCheckingOut] = useState(false)
  const [done, setDone] = useState(false)
  const { toast } = useToast()

  const subtotal = totalPrice()
  const delivery = subtotal > 6000 ? 0 : 500
  const total = subtotal + delivery

  const handleCheckout = async () => {
    if (items.length === 0) return
    setCheckingOut(true)
    await new Promise((r) => setTimeout(r, 1800))
    setCheckingOut(false)
    setDone(true)
    toast({
      title: 'Order placed!',
      description: `Your order of ${formatKSH(total)} is being prepared.`,
    })
    setTimeout(() => {
      clearCart()
      setDone(false)
      setOpen(false)
    }, 2500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full sm:w-[440px] bg-[#0a0a0a] border-l border-white/10 z-[70] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Your Cart</h3>
                  <p className="text-xs text-gray-400">{items.length} item{items.length !== 1 ? 's' : ''}</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-4xl">🛒</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Your cart is empty</h4>
                    <p className="text-sm text-gray-400">Browse the shop and add some premium products.</p>
                  </div>
                  <button
                    onClick={() => {
                      setOpen(false)
                      window.location.href = '/shop'
                    }}
                    className="bg-primary hover:bg-emerald-400 text-black px-6 py-2.5 rounded-full font-medium transition-colors"
                  >
                    Browse Shop
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="glass rounded-2xl p-3 flex gap-3"
                  >
                    <div className={`relative w-20 h-20 rounded-xl bg-gradient-to-tr ${item.gradient} border border-white/10 shrink-0 overflow-hidden`}>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <div className="min-w-0">
                          <h4 className="font-semibold text-sm truncate">{item.name}</h4>
                          <p className="text-xs text-gray-400">{item.brand} · {item.type}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-500 hover:text-red-400 transition-colors shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2 bg-white/5 rounded-full p-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-medium w-5 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-bold text-sm text-primary">{formatKSH(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-white/10 p-6 space-y-4 bg-black/40">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span className="text-white">{formatKSH(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Delivery</span>
                    <span className="text-white">
                      {delivery === 0 ? <span className="text-primary">FREE</span> : formatKSH(delivery)}
                    </span>
                  </div>
                  {delivery > 0 && (
                    <p className="text-xs text-gray-500">
                      Add {formatKSH(6000 - subtotal)} more for free delivery
                    </p>
                  )}
                  <div className="flex justify-between text-base font-bold pt-2 border-t border-white/10">
                    <span>Total</span>
                    <span className="text-primary">{formatKSH(total)}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={checkingOut || done}
                  className="w-full bg-primary hover:bg-emerald-400 text-black py-3.5 rounded-full font-bold transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {done ? (
                    <>✓ Order Confirmed</>
                  ) : checkingOut ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                      />
                      Processing...
                    </>
                  ) : (
                    <>
                      Checkout <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  Secure encrypted checkout
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
