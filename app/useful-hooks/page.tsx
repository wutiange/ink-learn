import ResourceCard from "@/app/(view-layer)/components/resource-card"

export default function UsefulHooksPage() {
  const hooks = [
    {
      title: "ink-use-stdout-dimensions",
      description: "Subscribe to stdout dimensions.",
      path: "https://github.com/cameronhunter/ink-monorepo/tree/master/packages/ink-use-stdout-dimensions"
    }
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">实用 Hooks (Useful Hooks)</h1>
        <p className="text-lg text-gray-600">
          社区维护的 Ink Hooks。
        </p>
      </div>
      <ResourceCard items={hooks} />
    </div>
  )
}
