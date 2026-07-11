'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, Send, Loader2 } from 'lucide-react'
import ReactMarkdown from 'react-markdown'

interface Message {
  id: string
  role: 'assistant' | 'user'
  text?: string
}

const initialMessage: Message = {
  id: '1',
  role: 'assistant',
  text: "Hi there! I'm **Leaf**, your virtual budtender at GreenHub 🌿. How are you feeling today, and what are you looking for? I can recommend strains, explain THC/CBD ratios, or help you pick the perfect product.",
}

const quickPrompts = [
  'Recommend a relaxing strain',
  'Help me sleep better',
  'Best product for focus',
  'Explain indica vs sativa',
]

export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasNewBadge, setHasNewBadge] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isLoading])

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)
    setHasNewBadge(false)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, text: m.text })),
        }),
      })

      const data = await res.json()

      if (data.text) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: 'assistant',
            text: data.text,
          },
        ])
      } else {
        throw new Error(data.error || 'Failed to get response')
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment. 🌱",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(true)
          setHasNewBadge(false)
        }}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)] z-50 hover:bg-emerald-400 transition-colors"
        aria-label="Open AI assistant"
      >
        <Sparkles className="w-6 h-6" />
        {hasNewBadge && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#050505] animate-pulse" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] sm:w-[380px] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden max-h-[600px] h-[80vh]"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center relative">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border-2 border-[#0a0a0a]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm flex items-center gap-1.5">
                    Leaf AI
                    <span className="text-[9px] font-normal text-primary bg-primary/10 px-1.5 py-0.5 rounded-full">BUDTENDER</span>
                  </h3>
                  <p className="text-[10px] text-gray-400">Online · Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors text-gray-400 hover:text-white"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto bg-black/40">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col gap-1 max-w-[90%] ${
                    msg.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                  }`}
                >
                  {msg.text && (
                    <div
                      className={`rounded-2xl p-3 text-sm ${
                        msg.role === 'user'
                          ? 'bg-primary text-black rounded-tr-sm'
                          : 'bg-white/10 text-gray-200 rounded-tl-sm'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <div className="prose prose-invert prose-sm max-w-none [&_p]:my-0 [&_ul]:my-1 [&_li]:my-0 [&_strong]:text-primary">
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                      ) : (
                        msg.text
                      )}
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="mr-auto items-start max-w-[85%]">
                  <div className="bg-white/10 rounded-2xl rounded-tl-sm p-3 text-sm text-gray-200 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    Finding the perfect match...
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
                    {quickPrompts.map((prompt) => (
                      <button
                        key={prompt}
                        onClick={() => handleSend(prompt)}
                        className="text-xs px-3 py-1.5 rounded-full border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-colors text-gray-300"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                  placeholder="Ask Leaf for recommendations..."
                  className="w-full bg-black border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-primary/50 text-white placeholder-gray-500"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-primary text-black flex items-center justify-center hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
