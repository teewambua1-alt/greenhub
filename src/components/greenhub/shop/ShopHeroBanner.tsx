'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Truck, Award } from 'lucide-react'

export function ShopHeroBanner() {
  return (
    <section className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                3,500+ Products Available
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Shop</span>
              </h1>
              <p className="text-gray-400 text-lg">
                Browse lab-tested cannabis products from verified dispensaries. Filter by strain, effect, and price.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full md:w-auto">
              {[
                { Icon: ShieldCheck, label: 'Lab Tested', value: '100% Verified' },
                { Icon: Truck, label: 'Delivery', value: 'Under 60 min' },
                { Icon: Award, label: 'Quality', value: 'Premium Grade' },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 glass rounded-xl px-4 py-3 min-w-[200px]">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">{label}</div>
                    <div className="text-sm font-semibold">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
