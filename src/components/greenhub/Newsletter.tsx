'use client'

import { motion } from 'framer-motion'
import { Mail, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setEmail('')
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="py-8 sm:py-12 relative px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8"
        >
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-500/10 rounded-full blur-[80px]" />

          <div className="relative z-10 md:max-w-md text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Stay Updated</h2>
            <p className="text-sm sm:text-base text-gray-400">
              Join our newsletter for exclusive deals, new strain drops, and cannabis education.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto flex-1 max-w-md">
            <form className="flex relative" onSubmit={handleSubmit}>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-28 sm:pr-32 py-3.5 sm:py-4 bg-black/40 border border-white/10 rounded-full focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 backdrop-blur-md transition-colors text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="absolute inset-y-1.5 right-1.5 px-4 sm:px-6 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors disabled:opacity-70 text-xs sm:text-sm"
              >
                {status === 'loading' ? '...' : status === 'success' ? 'Done!' : 'Subscribe'}
              </button>
            </form>
            {status === 'success' && (
              <p className="text-xs text-primary mt-3 text-center md:text-left flex items-center justify-center md:justify-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                You&apos;re subscribed! Check your inbox.
              </p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-400 mt-3 text-center md:text-left">
                Something went wrong. Please try again.
              </p>
            )}
            <p className="text-xs text-gray-500 mt-3 text-center md:text-left">
              By subscribing, you agree to our Terms of Service &amp; Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
