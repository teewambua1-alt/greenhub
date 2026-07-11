import { motion } from 'motion/react';
import { ShieldCheck, Truck, CreditCard, Leaf } from 'lucide-react';

const trustItems = [
  { icon: ShieldCheck, title: 'Lab Tested', desc: '100% verified products with COAs' },
  { icon: Leaf, title: 'Verified Sellers', desc: 'Strict vetting for all marketplace sellers' },
  { icon: CreditCard, title: 'Secure Checkout', desc: 'Bank-level encrypted transactions' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Discreet delivery in under 60 minutes' },
];

export function TrustSection() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4"
            >
              <div className="w-12 h-12 rounded-full glass border border-primary/20 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
