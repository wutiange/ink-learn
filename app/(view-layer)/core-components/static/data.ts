export const staticExample = `
import React, {useState, useEffect} from 'react';
import {render, Static, Box, Text} from 'ink';

const Example = () => {
	const [tests, setTests] = useState([]);

	useEffect(() => {
		let completedTests = 0;
		let timer;

		const run = () => {
			// Fake 10 completed tests
			if (completedTests++ < 10) {
				setTests(previousTests => [
					...previousTests,
					{
						id: previousTests.length,
						title: \`Test #\${previousTests.length + 1}\`
					}
				]);

				timer = setTimeout(run, 100);
			}
		};

		run();

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<>
			{/* This part will be rendered once to the terminal */}
			<Static items={tests}>
				{test => (
					<Box key={test.id}>
						<Text color="green">✔ {test.title}</Text>
					</Box>
				)}
			</Static>

			{/* This part keeps updating as state changes */}
			<Box marginTop={1}>
				<Text dimColor>Completed tests: {tests.length}</Text>
			</Box>
		</>
	);
};

render(<Example />);
`.trim()

export const staticItemsExample = `
import {render, Static, Box, Text} from 'ink';

const Example = () => (
	<Static items={['a', 'b', 'c']}>
		{(item, index) => (
			<Box key={index}>
				<Text>Item: {item}</Text>
			</Box>
		)}
	</Static>
);

render(<Example />);
`.trim()

export interface StaticPropData {
  name: string;
  types: string[];
  default?: string;
  description: string;
  allowedValues?: string[];
  example?: string;
  category: string;
}

export const staticPropsData: StaticPropData[] = [
  {
    name: 'items',
    types: ['Array'],
    description: '需要渲染的条目数组。每个条目会通过 children 函数映射为实际的 UI 元素。',
    example: staticItemsExample,
    category: '数据 (Data)'
  },
  {
    name: 'style',
    types: ['object'],
    description: '应用在 Static 容器上的样式对象。支持与 <Box> 相同的布局属性（padding、margin 等）。',
    example: `
import {render, Static, Text} from 'ink';

const Example = () => (
	<Static items={['Hello', 'World']} style={{padding: 1}}>
		{(item, index) => (
			<Text key={index}>{item}</Text>
		)}
	</Static>
);

render(<Example />);
    `.trim(),
    category: '样式 (Style)'
  },
  {
    name: 'children',
    types: ['Function'],
    description: '用于渲染每个 item 的函数，签名为 (item, index) => ReactNode。',
    example: staticItemsExample,
    category: '渲染 (Rendering)'
  },
]


