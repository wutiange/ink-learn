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

export const boxBorderColorExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
		<Box borderStyle="round" borderColor="green">
			<Text>Green Rounded Box</Text>
		</Box>
		<Box borderStyle="round" borderTopColor="green">
			<Text>Top green border</Text>
		</Box>
		<Box borderStyle="round" borderRightColor="green">
			<Text>Right green border</Text>
		</Box>
		<Box borderStyle="round" borderBottomColor="green">
			<Text>Bottom green border</Text>
		</Box>
		<Box borderStyle="round" borderLeftColor="green">
			<Text>Left green border</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()

export const boxBorderDimExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
		<Box borderStyle="round" borderDimColor>
			<Text>Dim border</Text>
		</Box>
		<Box borderStyle="round" borderTopDimColor>
			<Text>Top dim border</Text>
		</Box>
		<Box borderStyle="round" borderBottomDimColor>
			<Text>Bottom dim border</Text>
		</Box>
		<Box borderStyle="round" borderLeftDimColor>
			<Text>Left dim border</Text>
		</Box>
		<Box borderStyle="round" borderRightDimColor>
			<Text>Right dim border</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()

export const boxBackgroundColorExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<Box flexDirection="column">
		<Box backgroundColor="red" width={20} height={5} alignSelf="flex-start">
			<Text>Red background</Text>
		</Box>

		<Box backgroundColor="#FF8800" width={20} height={3} marginTop={1} alignSelf="flex-start">
			<Text>Orange background</Text>
		</Box>

		<Box backgroundColor="rgb(0, 255, 0)" width={20} height={3} marginTop={1} alignSelf="flex-start">
			<Text>Green background</Text>
		</Box>

		<Box backgroundColor="blue" alignSelf="flex-start">
			<Text>Blue inherited </Text>
			<Text backgroundColor="yellow">Yellow override </Text>
			<Text>Blue inherited again</Text>
		</Box>

		<Box backgroundColor="cyan" borderStyle="round" padding={1} alignSelf="flex-start">
			<Text>Background with border and padding</Text>
		</Box>
	</Box>
);

render(<Example />);
`.trim()

export const boxDisplayExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
		<Box>
			<Text>Visible</Text>
		</Box>
		<Box display="none">
			<Text>Hidden</Text>
		</Box>
		<Box>
			<Text>Visible again</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()

export const boxOverflowExample = `
import {render, Box, Text} from 'ink';

const Example = () => (
	<>
		<Box width={10} overflow="hidden" borderStyle="round">
			<Text>This is a very long text that will overflow</Text>
		</Box>
		<Box width={10} overflow="visible" borderStyle="round">
			<Text>This is a very long text that will overflow</Text>
		</Box>
	</>
);

render(<Example />);
`.trim()

// 定义属性数据类型
export interface BoxPropData {
  name: string;
  types: string[];
  default?: string;
  description: string;
  allowedValues?: string[];
  example?: string;
  category: string;
}

// Box 组件的所有属性数据
export const boxPropsData: BoxPropData[] = [
  // Dimensions
  {
    name: 'width',
    types: ['number', 'string'],
    description: '设置元素的宽度（以空格为单位）。也可以设置为百分比，会基于父元素的宽度计算。',
    example: 'boxWidthExample',
    category: '尺寸 (Dimensions)'
  },
  {
    name: 'height',
    types: ['number', 'string'],
    description: '设置元素的高度（以行为单位）。也可以设置为百分比，会基于父元素的高度计算。',
    example: 'boxheightExample',
    category: '尺寸 (Dimensions)'
  },
  {
    name: 'minWidth',
    types: ['number'],
    description: '设置元素的最小宽度。注意：暂不支持百分比。',
    category: '尺寸 (Dimensions)'
  },
  {
    name: 'minHeight',
    types: ['number'],
    description: '设置元素的最小高度。注意：暂不支持百分比。',
    category: '尺寸 (Dimensions)'
  },
  
  // Padding
  {
    name: 'paddingTop',
    types: ['number'],
    default: '0',
    description: '顶部内边距。',
    example: 'boxPaddingExample',
    category: '内边距 (Padding)'
  },
  {
    name: 'paddingBottom',
    types: ['number'],
    default: '0',
    description: '底部内边距。',
    example: 'boxPaddingExample',
    category: '内边距 (Padding)'
  },
  {
    name: 'paddingLeft',
    types: ['number'],
    default: '0',
    description: '左侧内边距。',
    example: 'boxPaddingExample',
    category: '内边距 (Padding)'
  },
  {
    name: 'paddingRight',
    types: ['number'],
    default: '0',
    description: '右侧内边距。',
    example: 'boxPaddingExample',
    category: '内边距 (Padding)'
  },
  {
    name: 'paddingX',
    types: ['number'],
    default: '0',
    description: '水平内边距。等同于同时设置 paddingLeft 和 paddingRight。',
    example: 'boxPaddingExample',
    category: '内边距 (Padding)'
  },
  {
    name: 'paddingY',
    types: ['number'],
    default: '0',
    description: '垂直内边距。等同于同时设置 paddingTop 和 paddingBottom。',
    example: 'boxPaddingExample',
    category: '内边距 (Padding)'
  },
  {
    name: 'padding',
    types: ['number'],
    default: '0',
    description: '四周内边距。等同于同时设置 paddingTop、paddingBottom、paddingLeft 和 paddingRight。',
    example: 'boxPaddingExample',
    category: '内边距 (Padding)'
  },
  
  // Margin
  {
    name: 'marginTop',
    types: ['number'],
    default: '0',
    description: '顶部外边距。',
    example: 'boxMarginExample',
    category: '外边距 (Margin)'
  },
  {
    name: 'marginBottom',
    types: ['number'],
    default: '0',
    description: '底部外边距。',
    example: 'boxMarginExample',
    category: '外边距 (Margin)'
  },
  {
    name: 'marginLeft',
    types: ['number'],
    default: '0',
    description: '左侧外边距。',
    example: 'boxMarginExample',
    category: '外边距 (Margin)'
  },
  {
    name: 'marginRight',
    types: ['number'],
    default: '0',
    description: '右侧外边距。',
    example: 'boxMarginExample',
    category: '外边距 (Margin)'
  },
  {
    name: 'marginX',
    types: ['number'],
    default: '0',
    description: '水平外边距。等同于同时设置 marginLeft 和 marginRight。',
    example: 'boxMarginExample',
    category: '外边距 (Margin)'
  },
  {
    name: 'marginY',
    types: ['number'],
    default: '0',
    description: '垂直外边距。等同于同时设置 marginTop 和 marginBottom。',
    example: 'boxMarginExample',
    category: '外边距 (Margin)'
  },
  {
    name: 'margin',
    types: ['number'],
    default: '0',
    description: '四周外边距。等同于同时设置 marginTop、marginBottom、marginLeft 和 marginRight。',
    example: 'boxMarginExample',
    category: '外边距 (Margin)'
  },
  
  // Gap
  {
    name: 'gap',
    types: ['number'],
    default: '0',
    description: '元素的列和行之间的间距大小。是 columnGap 和 rowGap 的简写。',
    example: 'boxGapExample',
    category: '间距 (Gap)'
  },
  {
    name: 'columnGap',
    types: ['number'],
    default: '0',
    description: '元素的列之间的间距大小。',
    example: 'boxColumnGapExample',
    category: '间距 (Gap)'
  },
  {
    name: 'rowGap',
    types: ['number'],
    default: '0',
    description: '元素的行之间的间距大小。',
    example: 'boxRowGapExample',
    category: '间距 (Gap)'
  },
  
  // Flex
  {
    name: 'flexGrow',
    types: ['number'],
    default: '0',
    description: '定义元素的放大比例。如果所有元素的 flexGrow 都为 1，则它们将等分剩余空间。',
    example: 'boxFlexGrowExample',
    category: '弹性布局 (Flex)'
  },
  {
    name: 'flexShrink',
    types: ['number'],
    default: '1',
    description: '定义元素的缩小比例。如果空间不足，元素将根据 flexShrink 的值进行缩小。',
    example: 'boxFlexShrinkExample',
    category: '弹性布局 (Flex)'
  },
  {
    name: 'flexBasis',
    types: ['number', 'string'],
    description: '定义在分配剩余空间之前元素的默认大小。可以是数字或百分比。',
    example: 'boxFlexBasisExample',
    category: '弹性布局 (Flex)'
  },
  {
    name: 'flexDirection',
    types: ['string'],
    allowedValues: ['row', 'row-reverse', 'column', 'column-reverse'],
    description: '定义主轴的方向，决定子元素的排列方向。',
    example: 'boxFlexDirectionExample',
    category: '弹性布局 (Flex)'
  },
  {
    name: 'flexWrap',
    types: ['string'],
    allowedValues: ['nowrap', 'wrap', 'wrap-reverse'],
    description: '定义如果一行放不下所有元素时，是否换行以及如何换行。',
    example: 'boxFlexWrapExample',
    category: '弹性布局 (Flex)'
  },
  {
    name: 'alignItems',
    types: ['string'],
    allowedValues: ['flex-start', 'center', 'flex-end'],
    description: '定义子元素在交叉轴（垂直于主轴）上的对齐方式。',
    example: 'boxAlignItemsExample',
    category: '弹性布局 (Flex)'
  },
  {
    name: 'alignSelf',
    types: ['string'],
    default: 'auto',
    allowedValues: ['auto', 'flex-start', 'center', 'flex-end'],
    description: '允许单个元素有与其他元素不同的交叉轴对齐方式，覆盖 alignItems 的值。',
    example: 'boxAlignSelfExample',
    category: '弹性布局 (Flex)'
  },
  {
    name: 'justifyContent',
    types: ['string'],
    allowedValues: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    description: '定义子元素在主轴上的对齐方式。',
    example: 'boxJustifyContentExample',
    category: '弹性布局 (Flex)'
  },
  
  // Visibility
  {
    name: 'display',
    types: ['string'],
    default: 'flex',
    allowedValues: ['flex', 'none'],
    description: '设置为 none 可以隐藏元素。',
    example: 'boxDisplayExample',
    category: '可见性 (Visibility)'
  },
  {
    name: 'overflowX',
    types: ['string'],
    default: 'visible',
    allowedValues: ['visible', 'hidden'],
    description: '元素在水平方向上的溢出行为。',
    example: 'boxOverflowExample',
    category: '可见性 (Visibility)'
  },
  {
    name: 'overflowY',
    types: ['string'],
    default: 'visible',
    allowedValues: ['visible', 'hidden'],
    description: '元素在垂直方向上的溢出行为。',
    example: 'boxOverflowExample',
    category: '可见性 (Visibility)'
  },
  {
    name: 'overflow',
    types: ['string'],
    default: 'visible',
    allowedValues: ['visible', 'hidden'],
    description: '同时设置 overflowX 和 overflowY 的简写。',
    example: 'boxOverflowExample',
    category: '可见性 (Visibility)'
  },
  
  // Borders
  {
    name: 'borderStyle',
    types: ['string', 'BoxStyle'],
    allowedValues: ['single', 'double', 'round', 'bold', 'singleDouble', 'doubleSingle', 'classic'],
    description: '添加指定样式的边框。如果未定义（默认），则不会添加边框。也可以传入自定义边框对象。',
    example: 'boxBorderStyleExample',
    category: '边框 (Borders)'
  },
  {
    name: 'borderColor',
    types: ['string'],
    description: '更改边框颜色。是同时设置 borderTopColor、borderRightColor、borderBottomColor 和 borderLeftColor 的简写。',
    example: 'boxBorderColorExample',
    category: '边框 (Borders)'
  },
  {
    name: 'borderTopColor',
    types: ['string'],
    description: '更改顶部边框颜色。接受与 <Text> 组件中 color 相同的值。',
    example: 'boxBorderColorExample',
    category: '边框 (Borders)'
  },
  {
    name: 'borderRightColor',
    types: ['string'],
    description: '更改右侧边框颜色。接受与 <Text> 组件中 color 相同的值。',
    example: 'boxBorderColorExample',
    category: '边框 (Borders)'
  },
  {
    name: 'borderBottomColor',
    types: ['string'],
    description: '更改底部边框颜色。接受与 <Text> 组件中 color 相同的值。',
    example: 'boxBorderColorExample',
    category: '边框 (Borders)'
  },
  {
    name: 'borderLeftColor',
    types: ['string'],
    description: '更改左侧边框颜色。接受与 <Text> 组件中 color 相同的值。',
    example: 'boxBorderColorExample',
    category: '边框 (Borders)'
  },
  {
    name: 'borderDimColor',
    types: ['boolean'],
    default: 'false',
    description: '使边框颜色变暗。是同时设置 borderTopDimColor、borderBottomDimColor、borderLeftDimColor 和 borderRightDimColor 的简写。',
    example: 'boxBorderDimExample',
    category: '边框 (Borders)'
  },
  {
    name: 'borderTopDimColor',
    types: ['boolean'],
    default: 'false',
    description: '使顶部边框颜色变暗。',
    example: 'boxBorderDimExample',
    category: '边框 (Borders)'
  },
  {
    name: 'borderBottomDimColor',
    types: ['boolean'],
    default: 'false',
    description: '使底部边框颜色变暗。',
    example: 'boxBorderDimExample',
    category: '边框 (Borders)'
  },
  {
    name: 'borderLeftDimColor',
    types: ['boolean'],
    default: 'false',
    description: '使左侧边框颜色变暗。',
    example: 'boxBorderDimExample',
    category: '边框 (Borders)'
  },
  {
    name: 'borderRightDimColor',
    types: ['boolean'],
    default: 'false',
    description: '使右侧边框颜色变暗。',
    example: 'boxBorderDimExample',
    category: '边框 (Borders)'
  },
  {
    name: 'borderTop',
    types: ['boolean'],
    default: 'true',
    description: '确定是否显示顶部边框。',
    category: '边框 (Borders)'
  },
  {
    name: 'borderRight',
    types: ['boolean'],
    default: 'true',
    description: '确定是否显示右侧边框。',
    category: '边框 (Borders)'
  },
  {
    name: 'borderBottom',
    types: ['boolean'],
    default: 'true',
    description: '确定是否显示底部边框。',
    category: '边框 (Borders)'
  },
  {
    name: 'borderLeft',
    types: ['boolean'],
    default: 'true',
    description: '确定是否显示左侧边框。',
    category: '边框 (Borders)'
  },
  
  // Background
  {
    name: 'backgroundColor',
    types: ['string'],
    description: '元素的背景色。接受与 <Text> 组件中 color 相同的值。背景色会填充整个 <Box> 区域，并被子 <Text> 组件继承，除非它们指定自己的 backgroundColor。',
    example: 'boxBackgroundColorExample',
    category: '背景 (Background)'
  }
]

// 导出示例代码映射
export const exampleCodeMap: Record<string, string> = {
  boxExample,
  boxWidthExample,
  boxheightExample,
  boxPaddingExample,
  boxMarginExample,
  boxGapExample,
  boxColumnGapExample,
  boxRowGapExample,
  boxFlexGrowExample,
  boxFlexShrinkExample,
  boxFlexBasisExample,
  boxFlexDirectionExample,
  boxFlexWrapExample,
  boxAlignItemsExample,
  boxAlignSelfExample,
  boxJustifyContentExample,
  boxBorderStyleExample,
  boxBorderColorExample,
  boxBorderDimExample,
  boxBackgroundColorExample,
  boxDisplayExample,
  boxOverflowExample
}