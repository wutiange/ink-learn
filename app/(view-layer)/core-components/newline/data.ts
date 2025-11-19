export const newlineExample = `
import {render, Text, Newline} from 'ink';

const Example = () => (
	<Text>
		<Text color="green">Hello</Text>
		<Newline />
		<Text color="red">World</Text>
	</Text>
);

render(<Example />);
`.trim()

export interface NewlinePropData {
  name: string;
  types: string[];
  default?: string;
  description: string;
  allowedValues?: string[];
  example?: string;
  category: string;
}

export const newlinePropsData: NewlinePropData[] = [
  {
    name: 'count',
    types: ['number'],
    default: '1',
    description: '要插入的换行符数量，默认插入 1 行换行。',
    example: newlineExample,
    category: '行为 (Behavior)',
  },
]


