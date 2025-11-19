export const transformExample = `
import {render, Transform, Text} from 'ink';

const Example = () => (
	<Transform transform={output => output.toUpperCase()}>
		<Text>Hello World</Text>
	</Transform>
);

render(<Example />);
`.trim()

export const transformHangingIndentExample = `
import {render, Transform, Text} from 'ink';

const HangingIndent = ({content, indent = 4, children, ...props}) => (
	<Transform
		transform={(line, index) =>
			index === 0 ? line : ' '.repeat(indent) + line
		}
		{...props}
	>
		{children}
	</Transform>
);

const text =
	'WHEN I WROTE the following pages, or rather the bulk of them, ' +
	'I lived alone, in the woods, a mile from any neighbor, in a ' +
	'house which I had built myself, on the shore of Walden Pond, ' +
	'in Concord, Massachusetts, and earned my living by the labor ' +
	'of my hands only. I lived there two years and two months. At ' +
	'present I am a sojourner in civilized life again.';

const Example = () => (
	<HangingIndent>
		<Text dimColor>{text}</Text>
	</HangingIndent>
);

render(<Example />);
`.trim()

export interface TransformPropData {
  name: string;
  types: string[];
  default?: string;
  description: string;
  allowedValues?: string[];
  example?: string;
  category: string;
}

export const transformPropsData: TransformPropData[] = [
  {
    name: 'transform',
    types: ['Function'],
    description: '接收每一行输出字符串并返回转换后的字符串，签名为 (outputLine, index) => string。',
    example: transformExample,
    category: '行为 (Behavior)'
  },
  {
    name: 'children',
    types: ['ReactNode'],
    description: '需要被转换为最终字符串输出的子节点。通常应只包含 <Text> 组件，以避免破坏布局尺寸。',
    example: transformHangingIndentExample,
    category: '渲染 (Rendering)'
  },
]


