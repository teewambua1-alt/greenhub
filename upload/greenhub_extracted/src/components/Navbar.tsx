import { Link, NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, ShoppingCart, User, Leaf } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar({ onCartClick }: { onCartClick?: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold tracking-tight">GreenHub</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <NavLink to="/" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>Home</NavLink>
          <NavLink to="/shop" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>Shop</NavLink>
          <NavLink to="/learn" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>Learn</NavLink>
        </div>

        <div className="flex items-center gap-6 text-gray-300">
          <button className="hover:text-white transition-colors"><Search className="w-5 h-5" /></button>
          <NavLink to="/profile" className={({isActive}) => isActive ? "text-white" : "hover:text-white transition-colors"}>
            <User className="w-5 h-5" />
          </NavLink>
          <button onClick={onCartClick} className="relative hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-primary text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">3</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
