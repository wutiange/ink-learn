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