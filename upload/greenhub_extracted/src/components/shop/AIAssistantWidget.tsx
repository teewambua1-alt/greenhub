import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send, Bot, User, Loader2 } from 'lucide-react';
import Markdown from 'react-markdown';

interface Recommendation {
  name: string;
  category: string;
  description: string;
  thc_level: string;
  cbd_level: string;
}

interface Message {
  id: string;
  role: 'assistant' | 'user';
  text?: string;
  recommendations?: Recommendation[];
}

export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      text: "Hi there! I'm your virtual budtender. How are you feeling today, and what are you looking for?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages.map(m => ({ role: m.role, text: m.text })) })
      });
      
      const data = await res.json();
      
      if (data.text) {
        setMessages(prev => [
          ...prev, 
          { 
            id: (Date.now() + 1).toString(), 
            role: 'assistant', 
            text: data.text
          }
        ]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: "I'm sorry, I'm having trouble connecting right now. Please try again later."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] z-50 hover:bg-emerald-400 transition-colors"
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[380px] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden max-h-[600px] h-[80vh]"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">GreenHub AI</h3>
                  <p className="text-[10px] text-gray-400">Budtender Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-black/40">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col gap-1 max-w-[90%] ${msg.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'}`}>
                  {msg.text && (
                    <div className={`rounded-2xl p-3 text-sm ${msg.role === 'user' ? 'bg-primary text-black rounded-tr-sm' : 'bg-white/10 text-gray-200 rounded-tl-sm'}`}>
                      {msg.role === 'assistant' ? (
                        <div className="prose prose-invert prose-sm max-w-none">
                          <Markdown>{msg.text}</Markdown>
                        </div>
                      ) : (
                        msg.text
                      )}
                    </div>
                  )}
                  {msg.recommendations && (
                    <div className="space-y-2 mt-2 w-full">
                      {msg.recommendations.map((rec, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
                          <div className="flex justify-between items-start">
                            <span className="font-bold text-sm text-primary">{rec.name}</span>
                            <span className="text-[10px] uppercase tracking-wider text-gray-400 bg-white/10 px-2 py-0.5 rounded-full">{rec.category}</span>
                          </div>
                          <p className="text-xs text-gray-300 leading-relaxed">{rec.description}</p>
                          <div className="flex gap-3 mt-1 pt-2 border-t border-white/5">
                            <span className="text-[10px] text-gray-400">THC: <span className="text-white">{rec.thc_level}</span></span>
                            <span className="text-[10px] text-gray-400">CBD: <span className="text-white">{rec.cbd_level}</span></span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="mr-auto items-start max-w-[85%]">
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 text-sm text-gray-200 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    Finding the perfect matches...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-white/10 bg-white/[0.02]">
               {messages.length === 1 && !isLoading && (
                <div className="mb-3 space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => handleSend("Track my order")} className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-gray-300">
                      Track my order
                    </button>
                    <button onClick={() => handleSend("Recommend products")} className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-gray-300">
                      Recommend products
                    </button>
                    <button onClick={() => handleSend("Find my favorite strain")} className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-gray-300">
                      Find my favorite strain
                    </button>
                    <button onClick={() => handleSend("Show reward points")} className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-gray-300">
                      Show reward points
                    </button>
                    <button onClick={() => handleSend("Continue learning")} className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-gray-300">
                      Continue learning
                    </button>
                  </div>
                </div>
              )}
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                  placeholder="Ask for recommendations..." 
                  className="w-full bg-black border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-primary/50 text-white placeholder-gray-500"
                />
                <button 
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-primary text-black flex items-center justify-center hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
