import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Loader2, Bot, X } from 'lucide-react';
import Markdown from 'react-markdown';

export function LearnHero() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim() || isLoading) return;
    
    setQuery(searchQuery);
    setIsLoading(true);
    setAnswer('');
    
    try {
      const res = await fetch('/api/learn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: searchQuery })
      });
      
      const data = await res.json();
      
      if (data.text) {
        setAnswer(data.text);
      } else {
        throw new Error(data.error || 'Failed to get an answer');
      }
    } catch (error) {
      console.error(error);
      setAnswer("I'm sorry, I couldn't process your question at the moment. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-[2rem] overflow-hidden bg-emerald-950/20 border border-primary/20 p-12 md:p-20 text-center min-h-[450px] flex flex-col justify-center items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-10" />
        
        {/* Abstract background graphics */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556817290-79883db13db8?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        
        <div className="relative z-20 max-w-3xl w-full">
          <AnimatePresence mode="wait">
            {!answer && !isLoading ? (
              <motion.div 
                key="header"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Learn Cannabis With Confidence</h1>
                <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
                  Explore expert guides, strain knowledge, wellness insights, product education, and industry updates.
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
          
          <div className="relative max-w-2xl mx-auto mb-10">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="What would you like to learn? Ask our AI..." 
              className="w-full pl-14 pr-16 py-5 bg-black/60 border border-white/10 rounded-full focus:outline-none focus:border-primary/50 text-white placeholder-gray-500 backdrop-blur-xl transition-all shadow-2xl text-lg"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {query && (
              <button 
                onClick={() => { setQuery(''); setAnswer(''); }}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
            
            <AnimatePresence>
              {!answer && !isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="hidden sm:flex absolute -bottom-8 left-0 right-0 justify-center gap-4 text-sm text-gray-400"
                >
                  <span className="hidden md:inline">Examples:</span>
                  <button onClick={() => handleSearch("What is THC?")} className="hover:text-primary transition-colors">What is THC?</button>
                  <button onClick={() => handleSearch("Best strains for sleep")} className="hover:text-primary transition-colors">Best strains for sleep</button>
                  <button onClick={() => handleSearch("CBD vs THC")} className="hover:text-primary transition-colors">CBD vs THC</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div 
                key="loading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center justify-center p-8 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 max-w-2xl mx-auto"
              >
                <Loader2 className="w-6 h-6 text-primary animate-spin mr-3" />
                <span className="text-gray-300">Searching knowledge base...</span>
              </motion.div>
            )}
            
            {answer && !isLoading && (
              <motion.div 
                key="answer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-left bg-black/60 backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-primary/30 shadow-2xl max-w-3xl mx-auto"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">GreenHub AI Educator</h3>
                    <p className="text-xs text-gray-400">Expert Answer</p>
                  </div>
                </div>
                
                <div className="prose prose-invert prose-emerald max-w-none text-gray-200">
                  <Markdown>{answer}</Markdown>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-center">
                  <button 
                    onClick={() => { setQuery(''); setAnswer(''); }}
                    className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white/5"
                  >
                    Ask Another Question
                  </button>
                </div>
              </motion.div>
            )}
            
            {!answer && !isLoading && (
              <motion.div 
                key="buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
              >
                <button className="bg-primary hover:bg-emerald-400 text-black px-8 py-4 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                  Explore Guides
                </button>
                <button className="glass hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all hover:scale-105 active:scale-95 text-white">
                  Browse Categories
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
