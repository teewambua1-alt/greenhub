import { Leaf, Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Leaf className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">GreenHub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              The premier marketplace for premium cannabis products. Curated, lab-tested, and delivered with discretion.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors text-gray-400">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors text-gray-400">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors text-gray-400">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors text-gray-400">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 hover:text-primary transition-colors text-gray-400">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Flower</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vaporizers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Edibles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Concentrates</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CBD Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliates</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>Copyright &copy; {new Date().getFullYear()} GreenHub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
