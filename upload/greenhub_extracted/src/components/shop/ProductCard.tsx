import { Heart, Maximize2, Star, ShoppingBag, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: {
    name: string;
    brand: string;
    type: string;
    thc: string;
    cbd: string;
    rating: number;
    reviews: number;
    price: number;
    badge?: string;
    image: string;
    verified?: boolean;
  };
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass glass-hover rounded-2xl overflow-hidden group flex flex-col relative"
    >
      {/* Top Section / Image area */}
      <div className={`h-48 w-full ${product.image} relative p-4 flex flex-col justify-between border-b border-white/5 overflow-hidden`}>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors z-10" />
        
        <div className="flex justify-between items-start relative z-20">
          {product.badge ? (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-white">
              {product.badge}
            </span>
          ) : <div />}
          <div className="flex flex-col gap-2">
            <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/30 transition-all">
              <Heart className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white/20 -translate-x-4 group-hover:translate-x-0">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Abstract product shape */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-500">
           <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.1)]" />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-4 flex-1 flex flex-col relative z-20 bg-black/40">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
          <div className="flex items-center gap-1">
            <span>{product.brand}</span>
            {product.verified && <CheckCircle2 className="w-3 h-3 text-primary" />}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-white font-medium">{product.rating}</span>
            <span className="text-gray-500">({product.reviews})</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg leading-tight mb-2 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
        
        <div className="flex items-center gap-2 mb-3 text-[10px] font-bold uppercase tracking-wider">
           <span className="text-primary">{product.type}</span>
           <span className="w-1 h-1 rounded-full bg-white/20" />
           <span className="text-gray-400">THC {product.thc}</span>
           <span className="w-1 h-1 rounded-full bg-white/20" />
           <span className="text-gray-400">CBD {product.cbd}</span>
        </div>
        
        <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 line-through">${product.price + 15}</span>
            <span className="text-xl font-bold">${product.price}</span>
          </div>
          
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors">
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button className="px-4 h-10 rounded-xl bg-primary hover:bg-emerald-400 text-black text-sm font-bold transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
