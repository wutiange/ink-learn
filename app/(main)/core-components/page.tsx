function CoreComponentsPage() {
  const coreComponents = [
    {
      title: "Text",
      description: "This component can display text and change its style to make it bold, underlined, italic, or strikethrough.",
      path: "/core-components/text",
    },
    {
      title: "Box",
      description: "<Box> is an essential Ink component to build your layout. It's like <div style=\"display: flex\"> in the browser.",
      path: "/core-components/box",
    },
    {
      title: "Newline",
      description: "Adds one or more newline (\n) characters. Must be used within <Text> components.",
      path: "/core-components/newline",
    },
    {
      title: "Spacer",
      description: "A flexible space that expands along the major axis of its containing layout. It's useful as a shortcut for filling all the available space between elements.\
\
For example, using <Spacer> in a <Box> with default flex direction (row) will position \"Left\" on the left side and will push \"Right\" to the right side.",
      path: "/core-components/spacer",
    },
    {
      title: "Static",
      description: "<Static> component permanently renders its output above everything else. It's useful for displaying activity like completed tasks or logs - things that don't change after they're rendered (hence the name \"Static\").\
\
It's preferred to use <Static> for use cases like these when you can't know or control the number of items that need to be rendered.\
\
For example, Tap uses <Static> to display a list of completed tests. Gatsby uses it to display a list of generated pages while still displaying a live progress bar.",
      path: "/core-components/static",
    },
    {
      title: "Transform",
      description: "Transform a string representation of React components before they're written to output. For example, you might want to apply a gradient to text, add a clickable link, or create some text effects. These use cases can't accept React nodes as input; they expect a string. That's what the <Transform> component does: it gives you an output string of its child components and lets you transform it in any way.",
      path: "/core-components/transform",
    },
  ]
  return (
    <>
      {coreComponents.map((component) => (
        <a key={component.title} className="not-prose bg-gray-0 shadow-2xl group block space-y-2 rounded-md p-6 pt-5 transition-shadow duration-300 hover:shadow-xs" href={component.path}>
          <h3 className="group-hover:text-gray-1000 truncate text-lg font-medium leading-snug">{component.title}</h3>
          <div className="line-clamp-3 text-sm font-normal text-gray-900">{component.description}</div>
        </a>
      ))}
    </>
  )
}

export default CoreComponentsPage;