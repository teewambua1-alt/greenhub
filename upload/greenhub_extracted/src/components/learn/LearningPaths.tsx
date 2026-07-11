import { motion } from 'motion/react';
import { BookOpen, ArrowRight } from 'lucide-react';

const paths = [
  {
    level: 'Beginner Path',
    title: 'First-Time Experiences',
    desc: 'Everything you need to know before your first dispensary visit.',
    steps: [
      'Cannabis Basics',
      'Understanding THC',
      'Understanding CBD',
      'Consumption Methods',
      'Product Types'
    ],
    color: 'from-emerald-500/20'
  },
  {
    level: 'Intermediate Path',
    title: 'Finding Your Perfect Strain',
    desc: 'Dive deeper into the science of strains and their specific effects.',
    steps: [
      'Strain Science',
      'Terpenes',
      'Cannabinoids',
      'Dosage Education',
      'Product Selection'
    ],
    color: 'from-blue-500/20'
  },
  {
    level: 'Advanced Path',
    title: 'Cultivation & Industry',
    desc: 'Learn about the business, regulations, and production processes.',
    steps: [
      'Cultivation',
      'Extraction Methods',
      'Industry Regulations',
      'Market Trends',
      'Cannabis Research'
    ],
    color: 'from-purple-500/20'
  }
];

export function LearningPaths() {
  return (
    <section className="py-24 relative bg-black/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Learning Paths</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Follow our structured educational roadmaps designed for every experience level.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {paths.map((path, i) => (
            <motion.div
              key={path.level}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass glass-hover rounded-3xl p-8 relative overflow-hidden group flex flex-col"
            >
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${path.color} to-transparent opacity-20 rounded-bl-full`} />
              
              <div className="mb-8 relative z-10">
                <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-300 border border-white/10 mb-4 inline-block">
                  {path.level}
                </span>
                <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                <p className="text-gray-400 text-sm">{path.desc}</p>
              </div>
              
              <div className="relative z-10 flex-1">
                <div className="absolute left-3 top-2 bottom-2 w-px bg-white/10" />
                <ul className="space-y-6">
                  {path.steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="flex items-center gap-4 relative">
                      <div className="w-6 h-6 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center shrink-0 z-10 group-hover:border-primary transition-colors">
                        <span className="text-[10px] text-gray-500 group-hover:text-primary">{stepIdx + 1}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 pt-6 border-t border-white/10 relative z-10">
                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-primary hover:text-black transition-colors font-semibold flex items-center justify-center gap-2 text-sm">
                  Start Path <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
