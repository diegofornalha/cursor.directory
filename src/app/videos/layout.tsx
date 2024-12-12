import { VideosSidebar } from '@/components/videos-sidebar'
import { RelatedPrompts } from '@/components/related-prompts'
import { DndProviderWrapper } from '@/components/dnd-provider-wrapper'

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DndProviderWrapper>
      <div className="flex relative">
        <VideosSidebar />
        <main className="flex-1">{children}</main>
        <div className="w-72" />
        <RelatedPrompts />
      </div>
    </DndProviderWrapper>
  )
} 