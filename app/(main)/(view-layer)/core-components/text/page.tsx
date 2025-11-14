import Link from "next/link"
import CodePreviewer from "../../components/code-previewer"
import { textBackgroundColorExample, textColorExample, textDimColorExample, textInverseExample, textStyleExample, textWrapExample } from "./data"

function TextPage() {
  return (
    <div className="w-full md:col-span-2 lg:col-span-3 gap-4 flex flex-col">
      <p>This component can display text and change its style to make it bold, underlined, italic, or strikethrough.</p>
      <CodePreviewer className="flex-wrap" itemClassName="min-w-100 h-90" code={textStyleExample} />
      <p>Note: <code>&lt;Text&gt;</code> allows only text nodes and nested <code>&lt;Text&gt;</code> components inside of it. For example, <code>&lt;Box&gt;</code> component can&apos;t be used inside <code>&lt;Text&gt;</code>.</p>
      
      <h3 className="text-lg font-bold mt-4">color</h3>
      <p>Type: <code>string</code></p>
      <p>Change text color. Ink uses <Link href="https://github.com/chalk/chalk" target="_blank" className="text-blue-500">chalk</Link> under the hood, so all its functionality is supported.</p>
      <CodePreviewer className="flex-wrap" itemClassName="min-w-100 h-55" code={textColorExample} />

      <h3 className="text-lg font-bold mt-4">backgroundColor</h3>
      <p>Type: <code>string</code></p>
      <p>Same as <code>color</code> above, but for background.</p>
      <CodePreviewer className="flex-wrap" itemClassName="min-w-100 h-55" code={textBackgroundColorExample} />

      <h3 className="text-lg font-bold mt-4">dimColor</h3>
      <p>Type: <code>boolean</code></p>
      <p>Default: <code>false</code></p>
      <p>Dim the color (make it less bright).</p>
      <CodePreviewer className="flex-wrap" itemClassName="min-w-100 h-55" code={textDimColorExample} />

      <h3 className="text-lg font-bold mt-4">bold</h3>
      <p>Type: <code>boolean</code></p>
      <p>Default: <code>false</code></p>
      <p>Make the text bold.</p>

      <h3 className="text-lg font-bold mt-4">italic</h3>
      <p>Type: <code>boolean</code></p>
      <p>Default: <code>false</code></p>
      <p>Make the text italic.</p>

      <h3 className="text-lg font-bold mt-4">underline</h3>
      <p>Type: <code>boolean</code></p>
      <p>Default: <code>false</code></p>
      <p>Make the text underlined.</p>

      <h3 className="text-lg font-bold mt-4">strikethrough</h3>
      <p>Type: <code>boolean</code></p>
      <p>Default: <code>false</code></p>
      <p>Make the text crossed with a line.</p>

      <h3 className="text-lg font-bold mt-4">inverse</h3>
      <p>Type: <code>boolean</code></p>
      <p>Default: <code>false</code></p>
      <p>Invert background and foreground colors.</p>
      <CodePreviewer className="flex-wrap" itemClassName="min-w-100 h-55" code={textInverseExample} />

      <h3 className="text-lg font-bold mt-4">wrap</h3>
      <p>Type: <code>string</code></p>
      <p>Allowed values: <code>wrap</code> <code>truncate</code> <code>truncate-start</code> <code>truncate-middle</code> <code>truncate-end</code></p>
      <p>Default: <code>wrap</code></p>
      <p>This property tells Ink to wrap or truncate text if its width is larger than the container. If <code>wrap</code> is passed (the default), Ink will wrap text and split it into multiple lines. If <code>truncate-*</code> is passed, Ink will truncate text instead, resulting in one line of text with the rest cut off.</p>
      <CodePreviewer className="flex-wrap" itemClassName="min-w-100 h-120" code={textWrapExample} />
    </div>
  )
}

export default TextPage