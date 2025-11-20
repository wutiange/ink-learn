import Link from "next/link"
import { ExternalLink } from "lucide-react"

type ResourceCardProps = {
  items: {
    title: string
    description: string
    path: string
  }[]
}

function ResourceCard({ items }: ResourceCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-6">
      {items.map((item) => {
        const isExternal = item.path.startsWith("http");
        return (
          <Link 
            key={item.title} 
            className="not-prose bg-white shadow-md hover:shadow-xl group flex flex-col justify-between rounded-xl p-6 transition-all duration-300 border border-gray-100" 
            href={item.path}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="group-hover:text-blue-600 truncate text-lg font-semibold leading-snug text-gray-900 transition-colors">
                  {item.title}
                </h3>
                {isExternal && <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />}
              </div>
              <p className="line-clamp-3 text-sm font-normal text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ResourceCard
