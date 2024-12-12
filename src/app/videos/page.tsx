"use client"

import { useState } from 'react'
import { VideoCollection } from '@/components/video-collection'

export default function VideosPage() {
  const [collections] = useState([
    {
      title: "VIDEOS CADENCE 1.0",
      description: "Coleção de vídeos sobre Cadence 1.0"
    },
    {
      title: "VIDEOS EVM ON FLOW",
      description: "Vídeos sobre EVM no Flow"
    },
    {
      title: "VIDEOS CLI",
      description: "Tutoriais e guias sobre CLI"
    }
  ])

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">CADENCE</h1>
        <div className="flex gap-4">
          <button className="text-primary hover:text-primary/80">SHARE</button>
          <button className="text-primary hover:text-primary/80">OPEN TABS</button>
        </div>
      </div>

      <div className="space-y-8">
        {collections.map((collection, index) => (
          <VideoCollection 
            key={index}
            title={collection.title}
            description={collection.description}
          />
        ))}
      </div>
    </div>
  )
} 