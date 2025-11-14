import PropDoc, { PropDocProps } from "@/app/components/prop-doc"
import CodePreviewer from "../../components/code-previewer"
import { boxExample, boxheightExample, boxPaddingExample, boxWidthExample } from "./data"
import Link from "next/link"

function BoxPage() {
  const propDocs: PropDocProps[] = [
    {
      name: 'width',
      type: ['number', 'string'],
      description: {
        text: 'Width of the element in spaces. You can also set it as a percentage, which will calculate the width based on the width of the parent element.'
      },
      example: boxWidthExample,
    },
    {
      name: 'height',
      type: ['number', 'string'],
      description: {
        text: 'Height of the element in lines (rows). You can also set it as a percentage, which will calculate the height based on the height of the parent element.'
      },
      example: boxheightExample,
    },
    {
      name: 'minWidth',
      type: ['number'],
      description: {
        text: <>Sets a minimum width of the element. Percentages aren&apos;t supported yet; see <Link href="https://github.com/facebook/yoga/issues/872" target="_blank" className="text-blue-500">facebook/yoga#872</Link>.</>
      }
    },
    {
      name: 'minHeight',
      type: ['number'],
      description: {
        text: <>Sets a minimum height of the element. Percentages aren&apos;t supported yet; see <Link href="https://github.com/facebook/yoga/issues/872" target="_blank" className="text-blue-500">facebook/yoga#872</Link>.</>
      }
    },
    {
      name: 'paddingTop',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: 'Top padding.'
      }
    },
    {
      name: 'paddingBottom',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: 'Bottom padding.'
      }
    },
    {
      name: 'paddingLeft',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: 'Left padding.'
      }
    },
    {
      name: 'paddingRight',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: 'Right padding.'
      }
    },
    {
      name: 'paddingX',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: <>Horizontal padding. Equivalent to setting <code>paddingLeft</code> and <code>paddingRight</code>.</>
      }
    },
    {
      name: 'paddingY',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: <>Vertical padding. Equivalent to setting <code>paddingTop</code> and <code>paddingBottom</code>.</>
      }
    },
    {
      name: 'padding',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: <>Padding on all sides. Equivalent to setting <code>paddingTop</code>, <code>paddingBottom</code>, <code>paddingLeft</code> and <code>paddingRight</code>.</>
      },
      example: boxPaddingExample,
    }
  ]
  return (
    <div className="w-full md:col-span-2 lg:col-span-3 gap-4 flex flex-col">
      <p><code>&lt;Box&gt;</code> is an essential Ink component to build your layout. It&apos;s like <code>&lt;div style=&quot;display: flex&quot;&gt;</code> in the browser.</p>
      <CodePreviewer className="flex-wrap" itemClassName="min-w-100 h-50" code={boxExample} />
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

export default BoxPage