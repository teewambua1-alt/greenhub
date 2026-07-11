'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/lib/products'

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-gray-400">Don&apos;t just take our word for it. Here&apos;s what our community says.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, index) => (
                  <Star key={index} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 italic">&ldquo;{t.review}&rdquo;</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-emerald-900 flex items-center justify-center font-bold text-white border border-white/10">
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
