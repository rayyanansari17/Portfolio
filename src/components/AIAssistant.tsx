"use client"

import React, { useState, useEffect, useRef } from "react"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  role: "bot" | "user"
  content: string
}

const KNOWLEDGE_BASE: Record<string, string> = {
  "hello": "Hi there! I'm Aaabad's AI assistant. Ask me anything about his experience, projects, or skills!",
  "hi": "Hi there! I'm Aaabad's AI assistant. Ask me anything about his experience, projects, or skills!",
  "experience": "Aaabad has over 12 years of experience. He is currently leading the design team at PixelForge Studios, and previously worked at BlueWave Innovators and TrendCraft Solutions.",
  "projects": "Some of Aaabad's recent projects include NajmAI (a SaaS Framer Template), Damas (Free Framer Template), and Faseelh.",
  "skills": "Aaabad specializes in Dynamic Animation, Motion Design, Framer, Figma, WordPress, and ReactJS.",
  "contact": "You can reach Aaabad via the contact section, or follow him on Dribbble, Twitter, Instagram, and YouTube.",
  "default": "That's an interesting question! While I don't have the exact answer in my limited knowledge base, Aaabad would love to discuss it with you. Feel free to use the contact button!"
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hello! I'm Aaabad's AI Assistant. How can I help you learn more about his portfolio?" }
  ])
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages(prev => [...prev, { role: "user", content: userMessage }])
    setInput("")

    // Simple keyword matching AI simulation
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase()
      let botResponse = KNOWLEDGE_BASE["default"]
      
      for (const [key, response] of Object.entries(KNOWLEDGE_BASE)) {
        if (key !== "default" && lowerInput.includes(key)) {
          botResponse = response
          break
        }
      }

      setMessages(prev => [...prev, { role: "bot", content: botResponse }])
    }, 600)
  }

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-2xl bg-orange-600 hover:bg-orange-500 hover:scale-105 transition-all p-0 flex items-center justify-center z-50"
      >
        <MessageSquare className="w-6 h-6 text-white" />
      </Button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[350px] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-10">
          {/* Header */}
          <div className="bg-zinc-800/50 p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500/20 p-2 rounded-full">
                <Bot className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">Portfolio Assistant</h3>
                <p className="text-zinc-400 text-xs text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block" /> Online
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-zinc-800 rounded-full h-8 w-8 text-zinc-400" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Chat Area */}
          <ScrollArea className="h-[320px] p-4 bg-zinc-950/50" ref={scrollRef}>
            <div className="flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === "user" ? "bg-zinc-800" : "bg-orange-600"}`}>
                    {msg.role === "user" ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-white" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-zinc-800 text-white rounded-tr-sm" : "bg-zinc-800/60 text-zinc-300 rounded-tl-sm"} max-w-[80%]`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-zinc-900 border-t border-white/5 flex gap-2">
            <Input 
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask me something..."
              className="bg-zinc-950/50 border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-orange-500 h-10 shadow-inner"
            />
            <Button type="submit" size="icon" className="h-10 w-10 bg-orange-600 hover:bg-orange-500 shadow-md">
              <Send className="w-4 h-4 text-white" />
            </Button>
          </form>
        </div>
      )}
    </>
  )
}
