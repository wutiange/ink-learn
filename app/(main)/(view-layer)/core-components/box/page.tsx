import PropDoc, { PropDocProps } from "@/app/components/prop-doc"
import CodePreviewer from "../../components/code-previewer"
import {
  boxExample,
  boxheightExample,
  boxPaddingExample,
  boxWidthExample,
  boxMarginExample,
  boxGapExample,
  boxRowGapExample,
  boxColumnGapExample,
  boxFlexGrowExample,
  boxFlexShrinkExample,
  boxFlexBasisExample,
  boxFlexDirectionExample,
  boxFlexWrapExample,
  boxAlignItemsExample,
  boxAlignSelfExample,
  boxJustifyContentExample,
  boxBorderStyleExample,
} from "./data"
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
    },
    {
      name: 'marginTop',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: 'Top margin.'
      },
    },
    {
      name: 'marginBottom',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: 'Bottom margin.'
      },
    },
    {
      name: 'marginLeft',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: 'Left margin.'
      }
    },
    {
      name: 'marginRight',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: 'Right margin.'
      },
    },
    {
      name: 'marginX',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: <>Horizontal margin. Equivalent to setting <code>marginLeft</code> and <code>marginRight</code>.</>
      },
    },
    {
      name: 'marginY',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: <>Vertical margin. Equivalent to setting <code>marginTop</code> and <code>marginBottom</code>.</>
      }
    },
    {
      name: 'margin',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: <>Margin on all sides. Equivalent to setting <code>marginTop</code>, <code>marginBottom</code>, <code>marginLeft</code> and <code>marginRight</code>.</>
      },
      example: boxMarginExample
    },
    {
      name: 'gap',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: <>Size of the gap between an element&apos;s columns and rows. A shorthand for <code>columnGap</code> and <code>rowGap</code>.</>
      },
      example: boxGapExample,
    },
    {
      name: 'columnGap',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: 'Size of the gap between an element&apos;s columns.'
      },
      example: boxColumnGapExample
    },
    {
      name: 'rowGap',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: 'Size of the gap between an element&apos;s rows.'
      },
      example: boxRowGapExample
    },
    {
      name: 'flexGrow',
      type: ['number'],
      defaultVal: '0',
      description: {
        text: <>See <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow" target="_blank" className="text-blue-500">flex-grow</Link>.</>
      },
      example: boxFlexGrowExample,
    },
    {
      name: 'flexShrink',
      type: ['number'],
      defaultVal: '1',
      description: {
        text: <>See <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink" target="_blank" className="text-blue-500">flex-shrink</Link>.</>
      },
      example: boxFlexShrinkExample,
    },
    {
      name: 'flexBasis',
      type: ['number', 'string'],
      description: {
        text: <>See <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis" target="_blank" className="text-blue-500">flex-basis</Link>.</>
      },
      example: boxFlexBasisExample,
    },
    {
      name: 'flexDirection',
      type: ['string'],
      allowedValues: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: {
        text: <>See <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction" target="_blank" className="text-blue-500">flex-direction</Link>.</>
      },
      example: boxFlexDirectionExample,
    },
    {
      name: 'flexWrap',
      type: ['string'],
      allowedValues: ['nowrap', 'wrap', 'wrap-reverse'],
      description: {
        text: <>See <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap" target="_blank" className="text-blue-500">flex-wrap</Link>.</>
      },
      example: boxFlexWrapExample,
    },
    {
      name: 'alignItems',
      type: ['string'],
      allowedValues: ['flex-start', 'center', 'flex-end'],
      description: {
        text: <>See <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-items" target="_blank" className="text-blue-500">align-items</Link>.</>
      },
      example: boxAlignItemsExample,
    },
    {
      name: 'alignSelf',
      type: ['string'],
      defaultVal: 'auto',
      allowedValues: ['auto', 'flex-start', 'center', 'flex-end'],
      description: {
        text: <>See <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/align-self" target="_blank" className="text-blue-500">align-self</Link>.</>
      },
      example: boxAlignSelfExample,
    },
    {
      name: 'justifyContent',
      type: ['string'],
      allowedValues: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
      description: {
        text: <>See <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content" target="_blank" className="text-blue-500">justify-content</Link>.</>
      },
      example: boxJustifyContentExample,
    },
    {
      name: 'display',
      type: ['string'],
      defaultVal: 'flex',
      allowedValues: ['flex', 'none'],
      description: {
        text: 'Set this property to none to hide the element.'
      },
    },
    {
      name: 'overflowX',
      type: ['string'],
      defaultVal: 'visible',
      allowedValues: ['visible', 'hidden'],
      description: {
        text: "Behavior for an element's overflow in the horizontal direction."
      },
    },
    {
      name: 'overflowY',
      type: ['string'],
      defaultVal: 'visible',
      allowedValues: ['visible', 'hidden'],
      description: {
        text: "Behavior for an element's overflow in the vertical direction."
      },
    },
    {
      name: 'overflow',
      type: ['string'],
      defaultVal: 'visible',
      allowedValues: ['visible', 'hidden'],
      description: {
        text: 'A shortcut for setting overflowX and overflowY at the same time.'
      },
    },
    {
      name: 'borderStyle',
      type: ['string', 'BoxStyle'],
      allowedValues: ['single', 'double', 'round', 'bold', 'singleDouble', 'doubleSingle', 'classic'],
      description: {
        text: <>Add a border with a specified style. If borderStyle is undefined (the default), no border will be added. Ink uses border styles from the <Link href="https://github.com/sindresorhus/cli-boxes" target="_blank" className="text-blue-500">cli-boxes</Link> module. See example in <code>examples/borders</code>.</>
      },
      example: boxBorderStyleExample,
      extra: <p>See example in <Link href="https://github.com/vadimdemedes/ink/blob/master/examples/borders/borders.tsx" target="_blank" className="text-blue-500">examples/borders</Link>.</p>
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
          extra={propDoc.extra}
        />
      ))}
    </div>
  )
}

export default BoxPage