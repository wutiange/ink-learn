

export const textStyleExample = `
import {Text, render} from 'ink';

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
import {Text, render} from 'ink';

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
import {Text, render} from 'ink';

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
import {Text, render} from 'ink';

const Example = () => (
	<>
		<Text color="red" dimColor>
			Dimmed Red
		</Text>
	</>
);
render(<Example />);
`.trim()

export const textInverseExample = `
import {Text, render} from 'ink';

const Example = () => (
	<>
		<Text inverse color="yellow">
			Inversed Yellow
		</Text>
	</>
);
render(<Example />);
`.trim()

export const textWrapExample = `
import {Text, render, Box} from 'ink';

const Example = () => (
	<>
		<Box width={7} borderColor="blue" borderStyle="classic">
			<Text>Hello World</Text>
		</Box>

		<Box width={7} borderColor="blue" borderStyle="classic">
			<Text wrap="truncate">Hello World</Text>
		</Box>

		<Box width={7} borderColor="blue" borderStyle="classic">
			<Text wrap="truncate-middle">Hello World</Text>
		</Box>

		<Box width={7} borderColor="blue" borderStyle="classic">
			<Text wrap="truncate-start">Hello World</Text>
		</Box>
	</>
);
render(<Example />);
`.trim()