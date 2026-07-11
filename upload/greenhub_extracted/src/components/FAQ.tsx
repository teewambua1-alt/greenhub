import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is GreenHub legal?',
    answer: 'Yes, GreenHub operates strictly within jurisdictions where cannabis is legally permitted for medical and/or recreational use. All our partner dispensaries and sellers are fully licensed and verified in compliance with local and state laws.'
  },
  {
    question: 'How does delivery work?',
    answer: 'Once you place an order, it is routed to the nearest partner dispensary. A verified driver picks up your order in a discrete, climate-controlled vehicle and delivers it directly to your address. You can track the driver in real-time via the GreenHub app.'
  },
  {
    question: 'How are products verified?',
    answer: 'Every product listed on GreenHub must include a Certificate of Analysis (COA) from an independent, state-accredited testing laboratory. This ensures accurate cannabinoid profiles and guarantees the product is free from pesticides, heavy metals, and mold.'
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept various secure payment methods including debit cards, ACH bank transfers, and specialized secure payment gateways designed specifically for the legal cannabis industry. Cash on delivery is also available in select markets.'
  },
  {
    question: 'How do sellers join?',
    answer: 'Licensed dispensaries and brands can apply via our "Become a Seller" portal. Our compliance team will review your state licenses, product catalog, and lab testing protocols. Once approved, you get access to our seller dashboard to manage inventory and orders.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about the product and billing.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
