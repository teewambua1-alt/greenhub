'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Leaf, Sprout, FlaskConical, Heart, BookOpen, Lightbulb, ArrowRight, Droplet, Wind, Sun } from 'lucide-react'

const topics = [
  {
    Icon: Sprout,
    title: 'What is Cannabis?',
    description: 'Cannabis is a flowering plant that has been used for thousands of years for medicinal, spiritual, and recreational purposes. The plant contains over 100 active compounds called cannabinoids that interact with the human body\'s endocannabinoid system.',
    points: ['Three main species: Cannabis Sativa, Indica, and Ruderalis', 'Contains 100+ cannabinoids and 200+ terpenes', 'Used medically for pain, nausea, anxiety, and more', 'Legal status varies by country and region'],
  },
  {
    Icon: FlaskConical,
    title: 'THC vs CBD',
    description: 'THC (tetrahydrocannabinol) and CBD (cannabidiol) are the two most prominent cannabinoids. THC is psychoactive and produces the "high", while CBD is non-intoxicating and known for its therapeutic, calming effects.',
    points: ['THC: psychoactive, produces euphoria and relaxation', 'CBD: non-intoxicating, reduces anxiety and inflammation', 'Full-spectrum products contain both for the "entourage effect"', 'Beginners should start with low THC (under 15%)'],
  },
  {
    Icon: Leaf,
    title: 'Indica vs Sativa vs Hybrid',
    description: 'Cannabis strains are broadly categorized by their effects. Indica strains are relaxing and body-focused, Sativa strains are uplifting and cerebral, while Hybrids combine characteristics of both.',
    points: ['Indica: relaxing, body high, great for evening and sleep', 'Sativa: energizing, head high, good for daytime and creativity', 'Hybrid: balanced effects combining both', 'Effects vary by individual and dosage'],
  },
]

const methods = [
  { Icon: Wind, name: 'Vaping', desc: 'Heats without combustion, smoother on lungs', onset: '1-3 min', duration: '2-4 hrs' },
  { Icon: Droplet, name: 'Oils & Tinctures', desc: 'Sublingual drops, precise dosing', onset: '15-45 min', duration: '4-8 hrs' },
  { Icon: Leaf, name: 'Flower/Smoking', desc: 'Traditional, fast-acting', onset: '1-3 min', duration: '1-3 hrs' },
  { Icon: FlaskConical, name: 'Edibles', desc: 'Long-lasting, body-focused effects', onset: '30-90 min', duration: '6-8 hrs' },
]

const tips = [
  { Icon: Lightbulb, title: 'Start Low, Go Slow', desc: 'Begin with a low dose (2-5mg THC) and wait at least 2 hours before taking more, especially with edibles.' },
  { Icon: Heart, title: 'Know Your Tolerance', desc: 'Everyone\'s endocannabinoid system is different. What works for a friend may be too much or too little for you.' },
  { Icon: Sun, title: 'Set and Setting', desc: 'Your mindset and environment matter. Choose a safe, comfortable space, especially for your first experiences.' },
  { Icon: BookOpen, title: 'Read the Label', desc: 'Always check THC/CBD content, serving size, and the Certificate of Analysis (COA) for lab verification.' },
]

export function LearnPage() {
  return (
    <div className="pt-24 pb-12">
      {/* Hero with mascot on the side */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <BookOpen className="w-4 h-4" />
              Cannabis Education
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Learn About <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">Cannabis</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              New to cannabis? You&apos;re in the right place. We&apos;ll walk you through the basics — what weed is, how it works, the difference between strains, and how to consume responsibly.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#what-is-cannabis"
                className="bg-primary hover:bg-emerald-400 text-black px-6 py-3 rounded-full font-medium transition-colors flex items-center gap-2"
              >
                Start Learning <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/shop"
                className="glass glass-hover text-white px-6 py-3 rounded-full font-medium"
              >
                Browse Products
              </Link>
            </div>
          </motion.div>

          {/* Cartoon mascot on the side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[500px] hidden lg:flex items-center justify-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-primary/20 rounded-full blur-[100px] -z-10" />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
              className="relative z-20"
            >
              <Image
                src="/images/mascot/mascot-learn.png"
                alt="GreenHub cartoon mascot — your guide to cannabis"
                width={380}
                height={665}
                className="object-contain drop-shadow-[0_0_40px_rgba(34,197,94,0.3)]"
              />
            </motion.div>
            {/* Speech bubble */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-8 right-4 glass rounded-2xl rounded-bl-sm p-4 max-w-[200px] z-30 border-primary/20"
            >
              <p className="text-sm text-gray-200">
                Hey! I&apos;m <span className="text-primary font-bold">Leaf</span> 🌿 your guide. Let&apos;s learn together!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Cannabis — main topics */}
      <section id="what-is-cannabis" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Basics</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three foundational concepts every cannabis consumer should understand.
            </p>
          </div>

          <div className="space-y-8">
            {topics.map((topic, i) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="glass rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-8 items-start"
              >
                <div className="md:col-span-1 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <topic.Icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{topic.title}</h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-300 leading-relaxed mb-6">{topic.description}</p>
                  <ul className="space-y-3">
                    {topic.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consumption methods */}
      <section className="py-20 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Consumption Methods</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Different ways to consume cannabis, each with its own onset time and duration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methods.map((method, i) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <method.Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{method.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{method.desc}</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Onset</span>
                    <span className="text-primary font-medium">{method.onset}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Duration</span>
                    <span className="text-white font-medium">{method.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for beginners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4">
              <Lightbulb className="w-4 h-4" />
              For Beginners
            </div>
            <h2 className="text-4xl font-bold mb-4">Tips for Responsible Use</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Start your cannabis journey on the right foot with these essential guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {tips.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <tip.Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{tip.desc}</p>
                </div>
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
            <div className="text-5xl mb-4">🌿</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              You&apos;ve got the basics. Now browse our curated selection of lab-tested products and find what works for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-primary hover:bg-emerald-400 text-black px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                Browse Products <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 glass glass-hover text-white px-8 py-4 rounded-full font-medium"
              >
                How It Works
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-gray-600 leading-relaxed">
            This content is for educational purposes only and is not medical advice. Cannabis affects everyone differently. Consult a healthcare professional before using cannabis for medical purposes. Keep out of reach of children and pets. Consume responsibly. 21+ only where required by law.
          </p>
        </div>
      </section>
    </div>
  )
}
