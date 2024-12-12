"use client"

import { useState } from 'react'
import { useDrop } from 'react-dnd'
import type { DropTargetMonitor } from 'react-dnd'

interface Video {
  id: string
  title: string
  thumbnail: string
  duration: string
}

interface VideoCollectionProps {
  title: string
  description: string
}

const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Introdução ao Cadence',
    thumbnail: 'https://placehold.co/320x180',
    duration: '5:30'
  },
  {
    id: '2',
    title: 'Smart Contracts no Flow',
    thumbnail: 'https://placehold.co/320x180',
    duration: '8:45'
  },
  {
    id: '3',
    title: 'Deploy com CLI',
    thumbnail: 'https://placehold.co/320x180',
    duration: '6:15'
  }
]

export function VideoCollection({ title, description }: VideoCollectionProps) {
  const [videos, setVideos] = useState<Video[]>([])

  const [{ isOver }, dropRef] = useDrop<Video, void, { isOver: boolean }>(() => ({
    accept: 'video',
    drop: (item) => {
      setVideos((prev) => [...prev, item])
    },
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver()
    })
  }))

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div
        ref={(element: HTMLDivElement | null) => {
          dropRef(element)
        }}
        className={`border-2 border-dashed rounded-lg p-4 ${
          isOver ? 'border-primary bg-primary/5' : 'border-gray-200'
        }`}
      >
        {videos.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            This collection is empty. Drag tabs here.
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="rounded-lg overflow-hidden shadow-sm">
                <img src={video.thumbnail} alt={video.title} className="w-full" />
                <div className="p-2">
                  <h3 className="font-medium text-sm">{video.title}</h3>
                  <span className="text-xs text-gray-500">{video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 