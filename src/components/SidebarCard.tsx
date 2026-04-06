import React from "react"
import { Flame, Globe, MessageCircle, Mail, FileText } from "lucide-react"

export function SidebarCard() {
  return (
    <div className="bg-zinc-50 dark:bg-white rounded-[2rem] p-6 lg:p-8 flex flex-col items-center shadow-xl lg:sticky lg:top-24 max-w-sm mx-auto h-fit transition-colors duration-300">
      <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-5 bg-orange-600">
        <img 
          src="/profile.png" 
          alt="Aaabad Ahmed" 
          className="object-cover w-full h-full mix-blend-overlay opacity-80"
        />
        {/* The original had a solid orange background out of which the greyscale portrait popped out. The generated image already has an orange bg, so we just show it. */}
        <img 
          src="/profile.png" 
          alt="Aaabad Ahmed" 
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      <div className="relative w-full flex justify-center mb-5">
        <div className="absolute top-1/2 h-px w-24 bg-orange-400/50 -z-10" />
        <div className="bg-orange-500 rounded-full p-2 text-white shadow-md shadow-orange-500/20">
          <Flame className="w-4 h-4 fill-current" />
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 text-orange-500">
        <a href="#" className="hover:text-orange-600 transition-colors duration-300">
          <Globe className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-orange-600 transition-colors duration-300">
          <MessageCircle className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-orange-600 transition-colors duration-300">
          <Mail className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-orange-600 transition-colors duration-300">
          <FileText className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
