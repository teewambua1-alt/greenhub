'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Truck, CreditCard, Headphones, Leaf, Lock } from 'lucide-react'

const trustFeatures = [
  { Icon: ShieldCheck, title: 'Lab Verified', description: 'Every product comes with a Certificate of Analysis from accredited labs.' },
  { Icon: Truck, title: 'Discreet Delivery', description: 'Climate-controlled, unmarked vehicles with real-time GPS tracking.' },
  { Icon: CreditCard, title: 'Secure Payments', description: 'Bank-grade encryption with cannabis-compliant payment gateways.' },
  { Icon: Headphones, title: '24/7 Support', description: 'Our knowledgeable budtenders are always one message away.' },
  { Icon: Leaf, title: 'Sustainably Sourced', description: 'Partner brands committed to organic, eco-friendly cultivation.' },
  { Icon: Lock, title: 'Privacy First', description: 'Your data and orders are never shared with third parties.' },
]

export function TrustSection() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose GreenHub</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We set the standard for safe, premium, and reliable cannabis retail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <feature.Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
