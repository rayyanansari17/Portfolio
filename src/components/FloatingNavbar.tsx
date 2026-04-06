"use client"

import React from "react"
import { Home, Wrench, Briefcase, GitBranch, Folder, Edit2 } from "lucide-react"

export function FloatingNavbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-6 px-8 py-3 rounded-full bg-white/85 backdrop-blur-md border border-zinc-300/70 shadow-lg transition-colors duration-300 dark:bg-zinc-900/60 dark:border-white/5">
        <a href="#home" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300 dark:text-zinc-400 dark:hover:text-white">
          <Home className="w-4 h-4" />
        </a>
        <a href="#tools" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300 dark:text-zinc-400 dark:hover:text-white">
          <Wrench className="w-4 h-4" />
        </a>
        <a href="#experience" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300 dark:text-zinc-400 dark:hover:text-white">
          <Briefcase className="w-4 h-4" />
        </a>
        <a href="#github" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300 dark:text-zinc-400 dark:hover:text-white">
          <GitBranch className="w-4 h-4" />
        </a>
        <a href="#projects" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300 dark:text-zinc-400 dark:hover:text-white">
          <Folder className="w-4 h-4" />
        </a>
        <a href="#thoughts" className="text-zinc-600 hover:text-zinc-900 transition-colors duration-300 dark:text-zinc-400 dark:hover:text-white">
          <Edit2 className="w-4 h-4" />
        </a>
      </nav>
    </div>
  )
}
