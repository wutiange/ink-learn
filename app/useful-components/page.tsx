import ResourceCard from "@/app/(view-layer)/components/resource-card"

export default function UsefulComponentsPage() {
  const components = [
    {
      title: "ink-text-input",
      description: "Text input.",
      path: "https://github.com/vadimdemedes/ink-text-input"
    },
    {
      title: "ink-spinner",
      description: "Spinner.",
      path: "https://github.com/vadimdemedes/ink-spinner"
    },
    {
      title: "ink-select-input",
      description: "Select (dropdown) input.",
      path: "https://github.com/vadimdemedes/ink-select-input"
    },
    {
      title: "ink-link",
      description: "Link.",
      path: "https://github.com/sindresorhus/ink-link"
    },
    {
      title: "ink-gradient",
      description: "Gradient color.",
      path: "https://github.com/sindresorhus/ink-gradient"
    },
    {
      title: "ink-big-text",
      description: "Awesome text.",
      path: "https://github.com/sindresorhus/ink-big-text"
    },
    {
      title: "ink-picture",
      description: "Display images.",
      path: "https://github.com/endernoke/ink-picture"
    },
    {
      title: "ink-tab",
      description: "Tab.",
      path: "https://github.com/jdeniau/ink-tab"
    },
    {
      title: "ink-color-pipe",
      description: "Create color text with simpler style strings.",
      path: "https://github.com/LitoMore/ink-color-pipe"
    },
    {
      title: "ink-multi-select",
      description: "Select one or more values from a list.",
      path: "https://github.com/karaggeorge/ink-multi-select"
    },
    {
      title: "ink-divider",
      description: "A divider.",
      path: "https://github.com/JureSotosek/ink-divider"
    },
    {
      title: "ink-progress-bar",
      description: "Progress bar.",
      path: "https://github.com/brigand/ink-progress-bar"
    },
    {
      title: "ink-table",
      description: "Table.",
      path: "https://github.com/maticzav/ink-table"
    },
    {
      title: "ink-ascii",
      description: "Awesome text component with more font choices, based on Figlet.",
      path: "https://github.com/hexrcs/ink-ascii"
    },
    {
      title: "ink-markdown",
      description: "Render syntax highlighted Markdown.",
      path: "https://github.com/cameronhunter/ink-markdown"
    },
    {
      title: "ink-quicksearch-input",
      description: "Select component with fast, quicksearch-like navigation.",
      path: "https://github.com/Eximchain/ink-quicksearch-input"
    },
    {
      title: "ink-confirm-input",
      description: "Yes/No confirmation input.",
      path: "https://github.com/kevva/ink-confirm-input"
    },
    {
      title: "ink-syntax-highlight",
      description: "Code syntax highlighting.",
      path: "https://github.com/vsashyn/ink-syntax-highlight"
    },
    {
      title: "ink-form",
      description: "Form.",
      path: "https://github.com/lukasbach/ink-form"
    },
    {
      title: "ink-task-list",
      description: "Task list.",
      path: "https://github.com/privatenumber/ink-task-list"
    },
    {
      title: "ink-spawn",
      description: "Spawn child processes.",
      path: "https://github.com/kraenhansen/ink-spawn"
    },
    {
      title: "ink-titled-box",
      description: "Box with a title.",
      path: "https://github.com/mishieck/ink-titled-box"
    },
    {
      title: "ink-chart",
      description: "Sparkline and bar chart.",
      path: "https://github.com/pppp606/ink-chart"
    }
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">实用组件 (Useful Components)</h1>
        <p className="text-lg text-gray-600">
          社区维护的 Ink 组件库，可以帮助你快速构建 CLI 应用。
        </p>
      </div>
      <ResourceCard items={components} />
    </div>
  )
}
