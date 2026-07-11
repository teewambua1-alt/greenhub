import { motion } from 'motion/react';
import { BookOpen, Droplets, FlaskConical, Moon, Sprout, Newspaper } from 'lucide-react';

const categories = [
  { icon: BookOpen, name: 'Cannabis Basics', desc: 'Fundamentals for beginners.', count: '24 Articles', color: 'from-emerald-500/20' },
  { icon: Droplets, name: 'Consumption Methods', desc: 'How to use different products.', count: '18 Articles', color: 'from-blue-500/20' },
  { icon: FlaskConical, name: 'THC & CBD Science', desc: 'Understanding cannabinoids.', count: '32 Articles', color: 'from-purple-500/20' },
  { icon: Moon, name: 'Wellness & Lifestyle', desc: 'Health and daily benefits.', count: '45 Articles', color: 'from-pink-500/20' },
  { icon: Sprout, name: 'Strains Guide', desc: 'Deep dives into genetics.', count: '150+ Profiles', color: 'from-amber-500/20' },
  { icon: Newspaper, name: 'Industry News', desc: 'Regulations and market trends.', count: 'Weekly Updates', color: 'from-cyan-500/20' },
];

export function LearningCategories() {
  return (
    <section className="py-16 relative bg-black/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Learning Categories</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-8 relative overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${cat.color} to-transparent opacity-20 rounded-bl-full group-hover:scale-150 group-hover:opacity-30 transition-all duration-700`} />
              
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:bg-white/10 transition-colors">
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="font-bold text-xl mb-2 relative z-10">{cat.name}</h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10 flex-1">{cat.desc}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{cat.count}</span>
                <span className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">Explore &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
