import { motion } from 'motion/react';

export function ShopHeroBanner() {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-[2rem] overflow-hidden bg-emerald-950/20 border border-primary/20 p-12 md:p-16 flex items-center min-h-[300px]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        
        {/* Abstract background graphics */}
        <div className="absolute right-0 inset-y-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1603909223429-69bb7101f420?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
        
        <div className="relative z-20 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Cannabis Marketplace</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            Explore thousands of lab-tested cannabis products from verified sellers, delivered safely to your door.
          </p>
          <button className="bg-primary hover:bg-emerald-400 text-black px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            Browse Products
          </button>
        </div>
      </motion.div>
    </div>
  );
}
