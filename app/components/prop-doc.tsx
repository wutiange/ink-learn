import { cn } from "@/lib/utils"
import CodePreviewer from "../(main)/(view-layer)/components/code-previewer"

export type PropDocProps = {
  name: string
  type?: string
  defaultVal?: string
  description?: {
    text: string | React.ReactNode
    list?: string[]
  }
  example?: string
  className?: string
  allowedValues?: string[]
}


function PropDoc({ name, type, defaultVal, description, example, className, allowedValues }: PropDocProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h3 className="text-lg font-bold">{name}</h3>
      {type && <p>Type: <code>{type}</code></p>}
      {allowedValues && <p className="flex flex-row gap-2">
        Allowed values: 
        <div className="flex flex-row gap-2">
          {allowedValues.map((value) => <code key={value}>{value}</code>)}
        </div>
      </p>}
      {defaultVal && <p>Default: <code>{defaultVal}</code></p>}
      {description && <p>{description.text}</p>}
      {description?.list && <ul>
        {description?.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>}
      {example && <CodePreviewer className="flex-wrap" itemClassName={`min-w-100 h-${example.split("\n").length * 5.5}`} code={example} />}
    </div>
  )
}

export default PropDoc;