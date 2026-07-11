'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { PackageSearch, ShoppingBag, MapPin, ShieldCheck, Truck, CreditCard, Leaf, ArrowRight, CheckCircle2, Clock, Package } from 'lucide-react'

const steps = [
  {
    Icon: PackageSearch,
    title: 'Choose Products',
    description: 'Browse our curated selection of lab-tested cannabis products from premium brands. Filter by strain type, effects, flavors, and THC/CBD content to find your perfect match.',
    color: 'from-cyan-500/20',
    details: ['Lab-verified product listings', 'Detailed cannabinoid profiles', 'Real customer reviews', 'Filter by desired effects'],
  },
  {
    Icon: ShoppingBag,
    title: 'Place Order',
    description: 'Securely check out with multiple payment options. Your order is instantly routed to the nearest partner dispensary for preparation.',
    color: 'from-emerald-500/20',
    details: ['Encrypted secure checkout', 'M-Pesa & card payments', 'Real-time order tracking', 'Instant dispensary routing'],
  },
  {
    Icon: MapPin,
    title: 'Receive Delivery',
    description: 'A verified driver picks up your order in a discrete, climate-controlled vehicle and delivers it directly to your address in under 60 minutes.',
    color: 'from-purple-500/20',
    details: ['Under 60-minute delivery', 'Discreet unmarked vehicles', 'Live GPS driver tracking', 'Climate-controlled transport'],
  },
]

const timeline = [
  { time: '0 min', title: 'Order Placed', desc: 'Your order is confirmed and routed', Icon: CheckCircle2 },
  { time: '5 min', title: 'Dispensary Prep', desc: 'Partner dispensary prepares your order', Icon: Package },
  { time: '15 min', title: 'Driver Assigned', desc: 'A verified driver picks up your order', Icon: ShoppingBag },
  { time: '30 min', title: 'On The Way', desc: 'Track your driver in real-time via the app', Icon: Truck },
  { time: '< 60 min', title: 'Delivered', desc: 'Discreet delivery to your door', Icon: MapPin },
]

const guarantees = [
  { Icon: ShieldCheck, title: 'Lab Verified', description: 'Every product comes with a Certificate of Analysis from accredited independent labs.' },
  { Icon: Truck, title: 'Discreet Delivery', description: 'Climate-controlled, unmarked vehicles with real-time GPS tracking.' },
  { Icon: CreditCard, title: 'Secure Payments', description: 'Bank-grade encryption with cannabis-compliant payment gateways.' },
  { Icon: Clock, title: '60-Min Promise', description: 'Fast delivery guaranteed, or your delivery fee is on us.' },
]

export function HowItWorksPage() {
  return (
    <div className="pt-24 pb-12">
      {/* Hero */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[100px]" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
              <Leaf className="w-4 h-4" />
              Simple &amp; Transparent
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              How <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">GreenHub</span> Works
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From dispensary to your door in three simple steps. Premium cannabis, delivered with discretion in under 60 minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link
                href="/shop"
                className="bg-primary hover:bg-emerald-400 text-black px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                Start Shopping <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/learn"
                className="glass glass-hover text-white px-8 py-4 rounded-full font-medium"
              >
                Learn About Cannabis
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative grid md:grid-cols-3 gap-12">
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} to-transparent border border-white/10 flex items-center justify-center mb-8 relative z-10 glass group-hover:scale-110 transition-transform duration-500`}>
                  <step.Icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-black font-bold flex items-center justify-center border-4 border-[#050505]">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm mb-6">{step.description}</p>
                <ul className="space-y-2 text-left w-full max-w-xs">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Timeline */}
      <section className="py-20 relative bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Delivery Timeline</h2>
            <p className="text-gray-400">What happens after you place your order.</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-white/10 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 hidden md:block" />
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 relative z-10 glass">
                  <item.Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 glass rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-0.5 rounded">{item.time}</span>
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Guarantees</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We set the standard for safe, premium, and reliable cannabis retail.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <g.Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold mb-2">{g.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{g.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Browse thousands of lab-tested products from verified dispensaries and get delivery in under an hour.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary hover:bg-emerald-400 text-black px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Browse Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
