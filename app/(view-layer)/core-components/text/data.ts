export const textExample = `
import {render, Text} from 'ink';

const Example = () => (
	<>
		<Text color="green">I am green</Text>
		<Text color="black" backgroundColor="white">
			I am black on white
		</Text>
		<Text color="#ffffff">I am white</Text>
		<Text bold>I am bold</Text>
		<Text italic>I am italic</Text>
		<Text underline>I am underline</Text>
		<Text strikethrough>I am strikethrough</Text>
		<Text inverse>I am inversed</Text>
	</>
);

render(<Example />);
`.trim()

export const textColorExample = `
import {render, Text} from 'ink';

const Example = () => (
	<>
		<Text color="green">Green</Text>
		<Text color="#005cc5">Blue</Text>
		<Text color="rgb(232, 131, 136)">Red</Text>
	</>
);

render(<Example />);
`.trim()

export const textBackgroundColorExample = `
import {render, Text} from 'ink';

const Example = () => (
	<>
		<Text backgroundColor="green" color="white">Green</Text>
		<Text backgroundColor="#005cc5" color="white">Blue</Text>
		<Text backgroundColor="rgb(232, 131, 136)" color="white">Red</Text>
	</>
);

render(<Example />);
`.trim()

export const textDimColorExample = `
import {render, Text} from 'ink';

const Example = () => (
	<Text color="red" dimColor>
		Dimmed Red
	</Text>
);

render(<Example />);
`.trim()

// 展示 bold / italic / underline / strikethrough / inverse 的综合示例
export const textStyleFlagsExample = `
import {render, Text} from 'ink';

const Example = () => (
	<>
		<Text bold>I am bold</Text>
		<Text italic>I am italic</Text>
		<Text underline>I am underline</Text>
		<Text strikethrough>I am strikethrough</Text>
		<Text inverse color="yellow">Inversed Yellow</Text>
	</>
);

render(<Example />);
`.trim()

export const textWrapExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
		<Box width={7}>
			<Text>Hello World</Text>
		</Box>

		<Box width={7}>
			<Text wrap="truncate">Hello World</Text>
		</Box>

		<Box width={7}>
			<Text wrap="truncate-middle">Hello World</Text>
		</Box>

		<Box width={7}>
			<Text wrap="truncate-start">Hello World</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()

// Text 组件属性数据类型
export interface TextPropData {
  name: string;
  types: string[];
  default?: string;
  description: string;
  allowedValues?: string[];
  // 直接存放示例代码字符串
  example?: string;
  category: string;
}

// Text 组件的所有属性数据
export const textPropsData: TextPropData[] = [
  // 颜色与基础样式
  {
    name: 'color',
    types: ['string'],
    description: '文本颜色。Ink 底层使用 chalk，所以可以使用所有 chalk 支持的颜色格式（名称、十六进制、rgb 等）。',
    example: textColorExample,
    category: '样式 (Style)'
  },
  {
    name: 'backgroundColor',
    types: ['string'],
    description: '文本背景色。用法与 color 相同，但作用于背景。',
    example: textBackgroundColorExample,
    category: '样式 (Style)'
  },
  {
    name: 'dimColor',
    types: ['boolean'],
    default: 'false',
    description: '使颜色变暗（降低亮度）。通常配合 color 一起使用。',
    example: textDimColorExample,
    category: '样式 (Style)'
  },

  // 文本装饰
  {
    name: 'bold',
    types: ['boolean'],
    default: 'false',
    description: '将文本设置为粗体。',
    example: textStyleFlagsExample,
    category: '文本装饰 (Decoration)'
  },
  {
    name: 'italic',
    types: ['boolean'],
    default: 'false',
    description: '将文本设置为斜体。',
    example: textStyleFlagsExample,
    category: '文本装饰 (Decoration)'
  },
  {
    name: 'underline',
    types: ['boolean'],
    default: 'false',
    description: '为文本添加下划线。',
    example: textStyleFlagsExample,
    category: '文本装饰 (Decoration)'
  },
  {
    name: 'strikethrough',
    types: ['boolean'],
    default: 'false',
    description: '为文本添加删除线效果。',
    example: textStyleFlagsExample,
    category: '文本装饰 (Decoration)'
  },
  {
    name: 'inverse',
    types: ['boolean'],
    default: 'false',
    description: '反转前景色和背景色。',
    example: textStyleFlagsExample,
    category: '文本装饰 (Decoration)'
  },

  // 文本换行与截断
  {
    name: 'wrap',
    types: ['string'],
    default: 'wrap',
    allowedValues: ['wrap', 'truncate', 'truncate-start', 'truncate-middle', 'truncate-end'],
    description: '控制当文本宽度超过容器时的行为：是自动换行还是以不同方式截断文本。',
    example: textWrapExample,
    category: '文本折行 (Wrapping)'
  },
]


