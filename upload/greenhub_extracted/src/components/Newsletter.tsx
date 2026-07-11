import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-12 relative px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10 md:max-w-md">
            <h2 className="text-3xl font-bold mb-3">Stay Updated</h2>
            <p className="text-gray-400">
              Join our newsletter for exclusive deals, new strain drops, and cannabis education.
            </p>
          </div>
          
          <div className="relative z-10 w-full md:w-auto flex-1 max-w-md">
            <form className="flex relative" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full pl-12 pr-32 py-4 bg-black/40 border border-white/10 rounded-full focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 backdrop-blur-md transition-colors"
                required
              />
              <button 
                type="submit" 
                className="absolute inset-y-1.5 right-1.5 px-6 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center md:text-left">
              By subscribing, you agree to our Terms of Service & Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
