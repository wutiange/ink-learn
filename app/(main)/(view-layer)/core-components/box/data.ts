export const boxExample = `
import {render, Box, Text} from 'ink';
const Example = () => (
	<Box margin={2}>
		<Text>This is a box with margin</Text>
	</Box>
);
render(<Example />);
`.trim()

export const boxWidthExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
    <Box width={4} borderColor="blue" borderStyle="classic">
      <Text>X</Text>
    </Box>

    <Box width={10} borderColor="blue" borderStyle="classic">
      <Box width="50%">
        <Text>X</Text>
      </Box>
      <Text>Y</Text>
    </Box>
  </>
);
render(<Example />);
`.trim()

export const boxheightExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
    <Box height={4} borderColor="blue" borderStyle="classic">
      <Text>X</Text>
    </Box>

    <Box height={6} flexDirection="column" borderColor="blue" borderStyle="classic">
      <Box height="50%">
        <Text>X</Text>
      </Box>
      <Text>Y</Text>
    </Box>
  </>
);
render(<Example />);
`.trim()

export const boxPaddingExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
    <Box paddingTop={2} borderColor="blue" borderStyle="classic"><Text>Top</Text></Box>
    <Box paddingBottom={2} borderColor="blue" borderStyle="classic"><Text>Bottom</Text></Box>
    <Box paddingLeft={2} borderColor="blue" borderStyle="classic"><Text>Left</Text></Box>
    <Box paddingRight={2} borderColor="blue" borderStyle="classic"><Text>Right</Text></Box>
    <Box paddingX={2} borderColor="blue" borderStyle="classic"><Text>Left and right</Text></Box>
    <Box paddingY={2} borderColor="blue" borderStyle="classic"><Text>Top and bottom</Text></Box>
    <Box padding={2} borderColor="blue" borderStyle="classic"><Text>Top, bottom, left and right</Text></Box>
  </>
);
render(<Example />);
`.trim()

export const boxMarginExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
    <Box marginTop={2} borderColor="blue" borderStyle="classic"><Text>Top</Text></Box>
    <Box marginBottom={2} borderColor="blue" borderStyle="classic"><Text>Bottom</Text></Box>
    <Box marginLeft={2} borderColor="blue" borderStyle="classic"><Text>Left</Text></Box>
    <Box marginRight={2} borderColor="blue" borderStyle="classic"><Text>Right</Text></Box>
    <Box marginX={2} borderColor="blue" borderStyle="classic"><Text>Left and right</Text></Box>
    <Box marginY={2} borderColor="blue" borderStyle="classic"><Text>Top and bottom</Text></Box>
    <Box margin={2} borderColor="blue" borderStyle="classic"><Text>Top, bottom, left and right</Text></Box>
  </>
);
render(<Example />);
`

export const boxGapExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
    <Box gap={1} width={3} flexWrap="wrap">
      <Text>A</Text>
      <Text>B</Text>
      <Text>C</Text>
    </Box>
  </>
);
render(<Example />);
`.trim()

export const boxColumnGapExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
    <Box columnGap={1}>
      <Text>A</Text>
      <Text>B</Text>
    </Box>
  </>
);
render(<Example />);
`.trim()

export const boxRowGapExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
    <Box flexDirection="column" rowGap={1}>
      <Text>A</Text>
      <Text>B</Text>
    </Box>
  </>
);
render(<Example />);
`.trim()

export const boxFlexGrowExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<Box>
		<Text>Label:</Text>
		<Box flexGrow={1}>
			<Text>Fills all remaining space</Text>
		</Box>
	</Box>
);

render(<Example />);
`.trim()

export const boxFlexShrinkExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<Box width={20}>
		<Box flexShrink={2} width={10}>
			<Text>Will be 1/4</Text>
		</Box>
		<Box width={10}>
			<Text>Will be 3/4</Text>
		</Box>
	</Box>
);

render(<Example />);
`.trim()

export const boxFlexBasisExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
		<Box width={6}>
			<Box flexBasis={3}>
				<Text>X</Text>
			</Box>
			<Text>Y</Text>
		</Box>

		<Box width={6}>
			<Box flexBasis="50%">
				<Text>X</Text>
			</Box>
			<Text>Y</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()

export const boxFlexDirectionExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
		<Box>
			<Box marginRight={1}>
				<Text>X</Text>
			</Box>
			<Text>Y</Text>
		</Box>

		<Box flexDirection="row-reverse">
			<Text>X</Text>
			<Box marginRight={1}>
				<Text>Y</Text>
			</Box>
		</Box>

		<Box flexDirection="column">
			<Text>X</Text>
			<Text>Y</Text>
		</Box>

		<Box flexDirection="column-reverse">
			<Text>X</Text>
			<Text>Y</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()

export const boxFlexWrapExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
		<Box width={2} flexWrap="wrap">
			<Text>A</Text>
			<Text>BC</Text>
		</Box>

		<Box flexDirection="column" height={2} flexWrap="wrap">
			<Text>A</Text>
			<Text>B</Text>
			<Text>C</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()

export const boxAlignItemsExample = `
import {render, Box, Text, Newline} from 'ink';

const Example = () => (
	<>
		<Box alignItems="flex-start">
			<Box marginRight={1}>
				<Text>X</Text>
			</Box>
			<Text>
				A
				<Newline/>
				B
				<Newline/>
				C
			</Text>
		</Box>

		<Box alignItems="center">
			<Box marginRight={1}>
				<Text>X</Text>
			</Box>
			<Text>
				A
				<Newline/>
				B
				<Newline/>
				C
			</Text>
		</Box>

		<Box alignItems="flex-end">
			<Box marginRight={1}>
				<Text>X</Text>
			</Box>
			<Text>
				A
				<Newline/>
				B
				<Newline/>
				C
			</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()

export const boxAlignSelfExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
		<Box height={3}>
			<Box alignSelf="flex-start">
				<Text>X</Text>
			</Box>
		</Box>

		<Box height={3}>
			<Box alignSelf="center">
				<Text>X</Text>
			</Box>
		</Box>

		<Box height={3}>
			<Box alignSelf="flex-end">
				<Text>X</Text>
			</Box>
		</Box>
	</>
);

render(<Example />);
`.trim()

export const boxJustifyContentExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
		<Box justifyContent="flex-start">
			<Text>X</Text>
		</Box>

		<Box justifyContent="center">
			<Text>X</Text>
		</Box>

		<Box justifyContent="flex-end">
			<Text>X</Text>
		</Box>

		<Box justifyContent="space-between">
			<Text>X</Text>
			<Text>Y</Text>
		</Box>

		<Box justifyContent="space-around">
			<Text>X</Text>
			<Text>Y</Text>
		</Box>
    
		<Box justifyContent="space-evenly">
			<Text>X</Text>
			<Text>Y</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()

export const boxBorderStyleExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
		<Box flexDirection="column">
			<Box>
				<Box borderStyle="single" marginRight={2}>
					<Text>single</Text>
				</Box>
				<Box borderStyle="double" marginRight={2}>
					<Text>double</Text>
				</Box>
				<Box borderStyle="round" marginRight={2}>
					<Text>round</Text>
				</Box>
				<Box borderStyle="bold">
					<Text>bold</Text>
				</Box>
			</Box>
			<Box marginTop={1}>
				<Box borderStyle="singleDouble" marginRight={2}>
					<Text>singleDouble</Text>
				</Box>
				<Box borderStyle="doubleSingle" marginRight={2}>
					<Text>doubleSingle</Text>
				</Box>
				<Box borderStyle="classic">
					<Text>classic</Text>
				</Box>
			</Box>
		</Box>
    
		<Box
			borderStyle={{
				topLeft: '↘',
				top: '↓',
				topRight: '↙',
				left: '→',
				bottomLeft: '↗',
				bottom: '↑',
				bottomRight: '↖',
				right: '←'
			}}
		>
			<Text>Custom</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()