'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Truck, CreditCard } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/20 rounded-full blur-[100px] md:blur-[120px] opacity-50 animate-blob" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-emerald-900/30 rounded-full blur-[80px] md:blur-[100px] opacity-50 animate-blob" style={{ animationDelay: '5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6 sm:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full glass border-primary/20 text-xs sm:text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="text-primary font-medium">Now delivering in 100+ cities</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Discover Premium <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
              Cannabis
            </span>{' '}
            <br />
            To Your Door
          </h1>

          <p className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed">
            Browse thousands of lab-tested products from trusted dispensaries and verified sellers. Experience the future of cannabis retail.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Link
              href="/shop"
              className="bg-primary hover:bg-emerald-400 text-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] text-sm sm:text-base"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/how-it-works"
              className="glass glass-hover text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium flex items-center gap-2 text-sm sm:text-base"
            >
              How It Works
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 border-t border-white/10">
            {[
              { Icon: ShieldCheck, label: 'Lab Tested' },
              { Icon: Truck, label: 'Fast Delivery' },
              { Icon: CreditCard, label: 'Secure Payments' },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 sm:gap-3">
                <Icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-300">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cartoon mascot — visible from tablet up */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] sm:h-[500px] lg:h-[600px] hidden sm:flex items-center justify-center"
        >
          {/* Glow behind mascot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] bg-primary/20 rounded-full blur-[80px] md:blur-[100px] -z-10" />

          {/* Floating badges around mascot — hidden on small tablet to avoid crowding */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="absolute z-30 right-0 lg:right-2 top-8 lg:top-16 glass p-3 sm:p-4 rounded-2xl w-40 sm:w-48 shadow-2xl backdrop-blur-xl border-white/20"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-lg shrink-0">🌿</span>
              <div className="min-w-0">
                <div className="text-xs text-gray-400">Top Pick</div>
                <div className="text-sm font-bold truncate">Blue Dream</div>
              </div>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full mb-1.5">
              <div className="h-2 w-3/4 bg-primary rounded-full" />
            </div>
            <div className="text-[10px] text-gray-400">THC 24% · Hybrid</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut', delay: 1 }}
            className="absolute z-30 left-0 bottom-16 lg:bottom-24 glass p-3 sm:p-4 rounded-2xl w-44 sm:w-52 shadow-2xl backdrop-blur-xl border-white/20"
          >
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-lg shrink-0">⭐</span>
              <div>
                <div className="text-xs text-gray-400">Rated</div>
                <div className="text-sm font-bold">4.9 / 5.0</div>
              </div>
            </div>
          </motion.div>

          {/* Mascot image */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut', delay: 0.5 }}
            className="relative z-20 h-full w-full"
          >
            <Image
              src="/images/mascot/mascot-hero.png"
              alt="GreenHub cartoon mascot character"
              width={440}
              height={768}
              priority
              sizes="(max-width: 1024px) 50vw, 440px"
              className="object-contain w-full h-full drop-shadow-[0_0_40px_rgba(34,197,94,0.3)]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
      </motion.div>
    </section>
  )
}
