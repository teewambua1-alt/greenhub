'use client'

import { motion } from 'framer-motion'
import { Smartphone, CheckCircle2 } from 'lucide-react'

const features = [
  'Real-time delivery tracking',
  'Personalized product recommendations',
  'Exclusive app-only deals and rewards',
  'One-click secure reordering',
]

export function AppPromo() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Phone Mockup */}
            <div className="w-[300px] h-[600px] rounded-[3rem] border-[8px] border-white/10 bg-black relative overflow-hidden glass shadow-2xl z-10 flex flex-col">
              <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 flex justify-center">
                <div className="w-32 h-6 bg-black rounded-b-3xl" />
              </div>
              <div className="flex-1 p-6 pt-12 flex flex-col gap-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xs">🌿</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                </div>
                <div className="h-32 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-transparent border border-emerald-500/30" />
                <div className="h-6 w-3/4 bg-white/10 rounded-md" />
                <div className="flex gap-2">
                  <div className="flex-1 h-24 rounded-xl bg-white/5 border border-white/5" />
                  <div className="flex-1 h-24 rounded-xl bg-white/5 border border-white/5" />
                </div>
                <div className="h-6 w-1/2 bg-white/10 rounded-md mt-4" />
                <div className="flex-1 rounded-xl bg-white/5 border border-white/5" />
              </div>
              <div className="h-16 border-t border-white/10 bg-black/50 backdrop-blur-md flex justify-around items-center px-4">
                <div className="w-6 h-6 rounded-md bg-primary" />
                <div className="w-6 h-6 rounded-md bg-white/20" />
                <div className="w-6 h-6 rounded-md bg-white/20" />
                <div className="w-6 h-6 rounded-md bg-white/20" />
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Smartphone className="w-4 h-4" />
              GreenHub Mobile App
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Take GreenHub <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Anywhere You Go
              </span>
            </h2>

            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-lg text-gray-300">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="flex items-center justify-center gap-3 glass glass-hover px-6 py-3 rounded-xl border-white/20">
                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold leading-tight">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 glass glass-hover px-6 py-3 rounded-xl border-white/20">
                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-white">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] leading-tight text-gray-400">GET IT ON</div>
                  <div className="text-sm font-semibold leading-tight">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
