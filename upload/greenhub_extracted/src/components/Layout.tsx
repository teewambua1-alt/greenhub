import { motion } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Newsletter } from './Newsletter';
import { CartDrawer } from './CartDrawer';
import { AIAssistantWidget } from './shop/AIAssistantWidget';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Layout() {
  const { pathname } = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30 selection:text-white flex flex-col">
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Newsletter />
      <Footer />
      <AIAssistantWidget />
    </div>
  );
}
