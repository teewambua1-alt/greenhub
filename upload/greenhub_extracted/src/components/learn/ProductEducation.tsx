import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const comparisons = [
  {
    title: 'Flower vs Vapes',
    item1: {
      name: 'Flower',
      pros: ['Full spectrum of terpenes', 'Traditional experience', 'Immediate onset'],
      cons: ['Strong odor', 'Requires equipment', 'Harsh on lungs'],
      audience: 'Purists & traditionalists'
    },
    item2: {
      name: 'Vapes',
      pros: ['Discreet & odorless', 'Highly portable', 'Controlled dosing'],
      cons: ['Battery dependent', 'Higher cost per use', 'Artificial flavors'],
      audience: 'On-the-go consumers'
    }
  },
  {
    title: 'Indica vs Sativa',
    item1: {
      name: 'Indica',
      pros: ['Deep relaxation', 'Sleep aid', 'Muscle relief'],
      cons: ['"Couch-lock" effect', 'Decreased energy', 'Drowsiness'],
      audience: 'Evening/Nighttime users'
    },
    item2: {
      name: 'Sativa',
      pros: ['Energetic & uplifting', 'Promotes creativity', 'Focus enhancement'],
      cons: ['Can cause anxiety', 'Potential paranoia', 'Restlessness'],
      audience: 'Daytime/Active users'
    }
  }
];

export function ProductEducation() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Compare & Learn</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Make informed decisions by understanding the key differences between products and strains.</p>
        </div>

        <div className="space-y-12">
          {comparisons.map((comp, i) => (
            <motion.div 
              key={comp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-[2rem] p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold text-center mb-8">{comp.title}</h3>
              
              <div className="grid md:grid-cols-2 gap-8 relative">
                {/* VS Divider */}
                <div className="hidden md:flex absolute inset-y-0 left-1/2 -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center font-bold text-gray-500 text-sm z-10">
                    VS
                  </div>
                  <div className="absolute inset-y-0 w-px bg-white/5" />
                </div>

                {/* Item 1 */}
                <div className="bg-black/30 rounded-2xl p-6 border border-white/5">
                  <h4 className="text-xl font-bold mb-6 text-center text-emerald-400">{comp.item1.name}</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Pros</h5>
                      <ul className="space-y-2">
                        {comp.item1.pros.map(pro => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Cons</h5>
                      <ul className="space-y-2">
                        {comp.item1.cons.map(con => (
                          <li key={con} className="flex items-start gap-2 text-sm text-gray-300">
                            <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Best For: </span>
                      <span className="text-sm font-medium text-white">{comp.item1.audience}</span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="bg-black/30 rounded-2xl p-6 border border-white/5">
                  <h4 className="text-xl font-bold mb-6 text-center text-blue-400">{comp.item2.name}</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Pros</h5>
                      <ul className="space-y-2">
                        {comp.item2.pros.map(pro => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">Cons</h5>
                      <ul className="space-y-2">
                        {comp.item2.cons.map(con => (
                          <li key={con} className="flex items-start gap-2 text-sm text-gray-300">
                            <XCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Best For: </span>
                      <span className="text-sm font-medium text-white">{comp.item2.audience}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
