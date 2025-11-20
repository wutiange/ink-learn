import ResourceCard from "@/app/(view-layer)/components/resource-card"

export default function ExamplesPage() {
  const examples = [
    {
      title: "Jest",
      description: "Implementation of basic Jest UI.",
      path: "https://github.com/vadimdemedes/ink/blob/master/examples/jest/jest.tsx"
    },
    {
      title: "Counter",
      description: "A simple counter that increments every 100ms.",
      path: "https://github.com/vadimdemedes/ink/blob/master/examples/counter/counter.tsx"
    },
    {
      title: "Form with validation",
      description: "Manage form state using Final Form.",
      path: "https://github.com/final-form/rff-cli-example"
    },
    {
      title: "Borders",
      description: "Add borders to the <Box> component.",
      path: "https://github.com/vadimdemedes/ink/blob/master/examples/borders/borders.tsx"
    },
    {
      title: "Suspense",
      description: "Use React Suspense.",
      path: "https://github.com/vadimdemedes/ink/blob/master/examples/suspense/suspense.tsx"
    },
    {
      title: "Table",
      description: "Renders a table with multiple columns and rows.",
      path: "https://github.com/vadimdemedes/ink/blob/master/examples/table/table.tsx"
    },
    {
      title: "Focus management",
      description: "Use the useFocus hook to manage focus between components.",
      path: "https://github.com/vadimdemedes/ink/blob/master/examples/use-focus/use-focus.tsx"
    },
    {
      title: "User input",
      description: "Listen for user input.",
      path: "https://github.com/vadimdemedes/ink/blob/master/examples/use-input/use-input.tsx"
    },
    {
      title: "Write to stdout",
      description: "Write to stdout, bypassing main Ink output.",
      path: "https://github.com/vadimdemedes/ink/blob/master/examples/use-stdout/use-stdout.tsx"
    },
    {
      title: "Write to stderr",
      description: "Write to stderr, bypassing main Ink output.",
      path: "https://github.com/vadimdemedes/ink/blob/master/examples/use-stderr/use-stderr.tsx"
    },
    {
      title: "Static",
      description: "Use the <Static> component to render permanent output.",
      path: "https://github.com/vadimdemedes/ink/blob/master/examples/static/static.tsx"
    },
    {
      title: "Child process",
      description: "Renders output from a child process.",
      path: "https://github.com/vadimdemedes/ink/tree/master/examples/subprocess-output"
    }
  ]

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">示例 (Examples)</h1>
        <p className="text-lg text-gray-600">
          官方提供的 Ink 使用示例，涵盖了从基础到高级的各种场景。
        </p>
      </div>
      <ResourceCard items={examples} />
    </div>
  )
}
