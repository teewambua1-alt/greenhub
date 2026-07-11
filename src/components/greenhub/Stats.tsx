'use client'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 1000, suffix: '+', format: true, label: 'Verified Sellers' },
  { value: 50000, suffix: '+', format: true, label: 'Products' },
  { value: 100, suffix: '+', format: false, label: 'Cities Served' },
  { value: 1, suffix: 'M+', format: false, label: 'Orders Delivered' },
]

function Counter({ value, suffix, format }: { value: number; suffix: string; format: boolean }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [display, setDisplay] = useState('0')

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const startTime = performance.now()

      const updateCounter = (currentTime: number) => {
        const elapsedTime = currentTime - startTime
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration
          const easeProgress = 1 - Math.pow(1 - progress, 3)
          const currentVal = Math.floor(easeProgress * value)
          setDisplay(format ? currentVal.toLocaleString() : currentVal.toString())
          requestAnimationFrame(updateCounter)
        } else {
          setDisplay(format ? value.toLocaleString() : value.toString())
        }
      }

      requestAnimationFrame(updateCounter)
    }
  }, [inView, value, format])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-20 border-y border-white/5 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} format={stat.format} />
              </div>
              <div className="text-sm font-medium text-primary tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
