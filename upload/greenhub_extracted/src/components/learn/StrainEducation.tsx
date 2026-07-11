import { motion } from 'motion/react';

const strains = [
  {
    name: 'Indica',
    desc: 'Known for their physically sedating effects, perfect for relaxing with a movie or as a nightcap before bed.',
    effects: ['Relaxing', 'Sleep Inducing', 'Pain Relief'],
    popular: ['Granddaddy Purple', 'Northern Lights', 'Bubba Kush'],
    color: 'from-indigo-600',
    time: 'Nighttime'
  },
  {
    name: 'Sativa',
    desc: 'Tends to provide more invigorating, uplifting cerebral effects that pair well with physical activity or creative projects.',
    effects: ['Uplifting', 'Energetic', 'Creative'],
    popular: ['Sour Diesel', 'Jack Herer', 'Green Crack'],
    color: 'from-orange-500',
    time: 'Daytime'
  },
  {
    name: 'Hybrid',
    desc: 'Bred to combine the qualities of both indica and sativa strains, offering a balanced effect profile.',
    effects: ['Balanced', 'Euphoric', 'Versatile'],
    popular: ['Blue Dream', 'Gelato', 'Wedding Cake'],
    color: 'from-emerald-500',
    time: 'Anytime'
  }
];

export function StrainEducation() {
  return (
    <section className="py-24 relative bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Understanding Strain Types</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {strains.map((strain, i) => (
            <motion.div
              key={strain.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-bl ${strain.color} to-transparent opacity-20 rounded-full group-hover:scale-150 transition-transform duration-700`} />
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block">{strain.time} Use</span>
                <h3 className="text-3xl font-bold">{strain.name}</h3>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-8 min-h-[80px]">
                {strain.desc}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Common Effects</h4>
                  <div className="flex flex-wrap gap-2">
                    {strain.effects.map(effect => (
                      <span key={effect} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white">
                        {effect}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Popular Examples</h4>
                  <ul className="space-y-2">
                    {strain.popular.map(pop => (
                      <li key={pop} className="text-sm text-gray-400 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                        {pop}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
