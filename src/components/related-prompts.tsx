"use client"

import { useState } from 'react'
import Link from 'next/link'

const prompts = [
  {
    icon: "/flow-icon.png",
    title: "Flow Brasil Chain",
    link: "/flow"
  },
  {
    icon: "/cadence-icon.png",
    title: "Cadence 1.0",
    link: "/cadence"
  },
  {
    icon: "/cli-icon.png",
    title: "Flow CLI",
    link: "/cli"
  },
  {
    icon: "/evm-icon.png",
    title: "EVM on Flow",
    link: "/evm"
  }
]

export function RelatedPrompts() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="fixed right-0 top-0 w-72 h-screen border-l border-gray-200 bg-white/80 backdrop-blur-sm p-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-medium">Prompt Relacionado</h3>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-500 hover:text-gray-700"
        >
          {isOpen ? "×" : "▼"}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-2">
          {prompts.map((prompt, index) => (
            <Link
              key={index}
              href={prompt.link}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <img 
                src={prompt.icon} 
                alt="" 
                className="w-6 h-6 object-contain"
              />
              <span className="text-sm text-gray-700">{prompt.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 