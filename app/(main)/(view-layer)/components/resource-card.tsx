type ResourceCardProps = {
  items: {
    title: string
    description: string
    path: string
  }[]
}
function ResourceCard({ items }: ResourceCardProps) {
  return (
    <>
      {items.map((item) => (
        <a key={item.title} className="not-prose bg-gray-0 shadow-2xl group block space-y-2 rounded-md p-6 pt-5 transition-shadow duration-300 hover:shadow-xs" href={item.path}>
          <h3 className="group-hover:text-gray-1000 truncate text-lg font-medium leading-snug">{item.title}</h3>
          <div className="line-clamp-3 text-sm font-normal text-gray-900">{item.description}</div>
        </a>
      ))}
    </>
  )
}

export default ResourceCard