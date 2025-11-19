export const spacerExample = `
import {render, Box, Text, Spacer} from 'ink';

const Example = () => (
	<>
		<Box>
			<Text>Left</Text>
			<Spacer />
			<Text>Right</Text>
		</Box>

		<Box flexDirection="column" height={10}>
			<Text>Top</Text>
			<Spacer />
			<Text>Bottom</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()

export interface SpacerPropData {
  name: string;
  types: string[];
  default?: string;
  description: string;
  allowedValues?: string[];
  example?: string;
  category: string;
}

// Spacer 本身没有额外 props，这里预留一个空数组，仍然让文档结构统一
export const spacerPropsData: SpacerPropData[] = []


