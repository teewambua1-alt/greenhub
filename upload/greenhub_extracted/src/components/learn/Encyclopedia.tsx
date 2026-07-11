import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { useState } from 'react';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const topics = [
  { term: 'Anxiety', desc: 'How certain cannabinoid ratios can alleviate or exacerbate anxiety symptoms.' },
  { term: 'Buds', desc: 'The flowering part of the female cannabis plant that contains cannabinoids.' },
  { term: 'Cannabinoids', desc: 'Chemical compounds secreted by cannabis flowers that provide relief.' },
  { term: 'Delivery', desc: 'The various methods by which cannabinoids are introduced to the body.' },
  { term: 'Edibles', desc: 'Food items infused with cannabis extract.' },
  { term: 'Flower', desc: 'The dried and cured female cannabis buds.' },
  { term: 'THC', desc: 'Tetrahydrocannabinol, the principal psychoactive constituent of cannabis.' },
  { term: 'Vapes', desc: 'Devices that heat cannabis extract to produce vapor.' }
];

export function Encyclopedia() {
  const [activeLetter, setActiveLetter] = useState('C');

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">Cannabis Encyclopedia</h2>
            <p className="text-gray-400">Your interactive A-Z knowledge center for cannabis terminology and science.</p>
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search terms..." 
              className="w-full bg-black/50 border border-white/10 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-primary/50 text-white"
            />
          </div>
        </div>

        <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
          
          {/* Alphabet Index */}
          <div className="flex flex-wrap gap-2 mb-10 pb-8 border-b border-white/10">
            {alphabet.map((letter) => (
              <button 
                key={letter}
                onClick={() => setActiveLetter(letter)}
                className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${
                  activeLetter === letter 
                    ? 'bg-primary text-black' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Term List */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {topics.map((topic, i) => (
              <motion.div 
                key={topic.term}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="flex items-baseline gap-4 mb-2">
                  <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{topic.term}</h4>
                  <div className="flex-1 border-b border-white/10 border-dashed" />
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{topic.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              View all {activeLetter} terms &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
