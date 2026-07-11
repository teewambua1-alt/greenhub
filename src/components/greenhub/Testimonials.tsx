'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/lib/products'

export function Testimonials() {
  return (
    <section id="reviews" className="py-16 sm:py-24 relative overflow-hidden bg-black">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[100px] md:blur-[120px]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-sm sm:text-base text-gray-400">Don&apos;t just take our word for it. Here&apos;s what our community says.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass p-6 sm:p-8 rounded-2xl relative"
            >
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(t.rating)].map((_, index) => (
                  <Star key={index} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8 italic">&ldquo;{t.review}&rdquo;</p>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-primary to-emerald-900 flex items-center justify-center font-bold text-white border border-white/10 shrink-0">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold truncate">{t.name}</h4>
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
