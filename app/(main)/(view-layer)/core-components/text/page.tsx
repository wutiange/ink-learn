import CodePreviewer from "../../components/code-previewer"
import { textStyleExample } from "./data"

function TextPage() {
  return (
    <div className="w-full md:col-span-2 lg:col-span-3">
      <p>This component can display text and change its style to make it bold, underlined, italic, or strikethrough.</p>
      <CodePreviewer className="flex-wrap mt-4" itemClassName="min-w-100 h-100" code={textStyleExample} />
    </div>
  )
}

export default TextPage