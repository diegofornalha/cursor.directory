import Link from 'next/link'

const spaces = [
  { name: "Starred Collections", icon: "⭐" },
  { name: "My Collections", icon: "🔒" },
  { name: "CADENCE", icon: "📑" },
  { name: "@flowbrasilchain", icon: "📑" },
  { name: "ProjetosBR", icon: "📑" },
  { name: "PHIZ", icon: "📑" },
  { name: "XFX", icon: "📑" }
]

export function VideosSidebar() {
  return (
    <div className="w-64 bg-gray-50 p-4 h-screen">
      <div className="flex items-center mb-6">
        <span className="text-xl font-bold">Flow</span>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-lg bg-white"
          />
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-sm">SPACES</span>
          <button className="text-primary">+</button>
        </div>
        {spaces.map((space, index) => (
          <Link
            key={index}
            href="#"
            className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-gray-100"
          >
            <span>{space.icon}</span>
            <span>{space.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
} 