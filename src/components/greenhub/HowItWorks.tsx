'use client'

import { motion } from 'framer-motion'
import { PackageSearch, ShoppingBag, MapPin } from 'lucide-react'

const steps = [
  {
    Icon: PackageSearch,
    title: 'Choose Products',
    description: 'Browse our curated selection of lab-tested cannabis products from premium brands.',
    color: 'from-cyan-500/20',
  },
  {
    Icon: ShoppingBag,
    title: 'Place Order',
    description: 'Securely check out with multiple payment options and real-time order tracking.',
    color: 'from-emerald-500/20',
  },
  {
    Icon: MapPin,
    title: 'Receive Delivery',
    description: 'Get your products delivered discreetly to your door in under 60 minutes.',
    color: 'from-purple-500/20',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
            From dispensary to your door in three simple steps.
          </p>
        </div>

        <div className="relative grid sm:grid-cols-3 gap-8 sm:gap-12">
          {/* Connector Line */}
          <div className="hidden sm:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${step.color} to-transparent border border-white/10 flex items-center justify-center mb-6 sm:mb-8 relative z-10 glass group-hover:scale-110 transition-transform duration-500`}
              >
                <step.Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary text-black font-bold flex items-center justify-center text-sm border-4 border-[#050505]">
                  {i + 1}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{step.title}</h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
