import Link from "next/link"
import CodePreviewer from "../../components/code-previewer"
import { textBackgroundColorExample, textColorExample, textDimColorExample, textInverseExample, textStyleExample, textWrapExample } from "./data"
import PropDoc, { PropDocProps } from "@/app/components/prop-doc"

function TextPage() {
  const propDocs: PropDocProps[] = [
    {
      name: "color",
      type: ["string"],
      description: {
        text: <>Change text color. Ink uses <Link href="https://github.com/chalk/chalk" target="_blank" className="text-blue-500">chalk</Link> under the hood, so all its functionality is supported.</>,
      },
      example: textColorExample,
    },
    {
      name: "backgroundColor",
      type: ["string"],
      description: {
        text: <>Same as <code>color</code> above, but for background.</>,
      },
      example: textBackgroundColorExample,
    },  
    {
      name: "dimColor",
      type: ["boolean"],
      defaultVal: "false",
      description: {
        text: "Dim the color (make it less bright).",
      },
      example: textDimColorExample,
    },
    {
      name: "bold",
      type: ["boolean"],
      defaultVal: "false",
      description: {
        text: "Make the text bold.",
      },
    },
    {
      name: "italic",
      type: ["boolean"],
      defaultVal: "false",
      description: {
        text: "Make the text italic.",
      },
    },
    {
      name: "underline",
      type: ["boolean"],
      defaultVal: "false",
      description: {
        text: "Make the text underlined.",
      },
    },
    {
      name: "strikethrough",
      type: ["boolean"],
      defaultVal: "false",
      description: {
        text: "Make the text crossed with a line.",
      },
    },
    {
      name: "inverse",
      type: ["boolean"],
      defaultVal: "false",
      description: {
        text: "Invert background and foreground colors.",
      },
      example: textInverseExample,
    },
    {
      name: "wrap",
      type: ["string"],
      allowedValues: ["wrap", "truncate", "truncate-start", "truncate-middle", "truncate-end"],
      defaultVal: "wrap",
      description: {
        text: <>This property tells Ink to wrap or truncate text if its width is larger than the container. If <code>wrap</code> is passed (the default), Ink will wrap text and split it into multiple lines. If <code>truncate-*</code> is passed, Ink will truncate text instead, resulting in one line of text with the rest cut off.</>,
      },
      example: textWrapExample,
    }
  ]

  return (
    <div className="w-full md:col-span-2 lg:col-span-3 gap-4 flex flex-col">
      <p>This component can display text and change its style to make it bold, underlined, italic, or strikethrough.</p>
      <CodePreviewer className="flex-wrap" itemClassName="min-w-100 h-90" code={textStyleExample} />
      <p>Note: <code>&lt;Text&gt;</code> allows only text nodes and nested <code>&lt;Text&gt;</code> components inside of it. For example, <code>&lt;Box&gt;</code> component can&apos;t be used inside <code>&lt;Text&gt;</code>.</p>
      {propDocs.map((propDoc) => (
        <PropDoc 
          key={propDoc.name} 
          name={propDoc.name} 
          type={propDoc.type} 
          defaultVal={propDoc.defaultVal} 
          description={propDoc.description} 
          example={propDoc.example} 
          allowedValues={propDoc.allowedValues}
        />
      ))}
    </div>
  )
}

export default TextPage