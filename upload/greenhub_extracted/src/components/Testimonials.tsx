import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Verified Buyer',
    review: 'GreenHub has completely changed how I purchase my wellness products. The delivery is always incredibly fast, and the quality is unmatched. I love the transparency and lab results.',
    rating: 5,
    initials: 'SJ'
  },
  {
    name: 'Marcus Chen',
    role: 'Medical Patient',
    review: 'The variety of strains available is incredible. Being able to filter by specific effects and THC/CBD ratios helps me find exactly what I need for my treatment plan.',
    rating: 5,
    initials: 'MC'
  },
  {
    name: 'Jessica Reynolds',
    role: 'Verified Buyer',
    review: 'Best cannabis marketplace out there. The app is so easy to use, and I love that I can track my delivery in real-time. The product recommendations are always spot on.',
    rating: 5,
    initials: 'JR'
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Thousands</h2>
          <p className="text-gray-400">Don't just take our word for it. Here's what our community says.</p>
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
              
              <p className="text-gray-300 leading-relaxed mb-8 italic">
                "{t.review}"
              </p>
              
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
  );
}
