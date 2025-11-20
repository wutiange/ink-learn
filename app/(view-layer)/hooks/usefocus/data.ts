export const useFocusExample = `
import React from 'react';
import {render, useFocus, Text, Box} from 'ink';

const FocusableComponent = ({label}) => {
	const {isFocused} = useFocus();
	return (
		<Text>
			{label} {isFocused ? <Text color="green" bold> (Focused)</Text> : <Text color="gray"> (Not focused)</Text>}
		</Text>
	);
};

const Example = () => (
	<Box flexDirection="column" padding={1}>
		<Text underline>按 Tab 键切换焦点：</Text>
		<Box flexDirection="column" marginTop={1}>
			<FocusableComponent label="First Item" />
			<FocusableComponent label="Second Item" />
			<FocusableComponent label="Third Item" />
		</Box>
	</Box>
);

render(<Example />);
`.trim()

export const useFocusParamsData = [
  {
    name: 'isFocused',
    types: ['boolean'],
    description: '当前组件是否获得焦点。',
    category: '返回值 (Returns)'
  },
  {
    name: 'autoFocus',
    types: ['boolean'],
    default: 'false',
    description: '如果当前没有激活（聚焦）的组件，则自动聚焦此组件。',
    category: '配置选项 (Options)'
  },
  {
    name: 'isActive',
    types: ['boolean'],
    default: 'true',
    description: '启用或禁用此组件的焦点功能，同时保留其在可聚焦组件列表中的位置。适用于暂时禁用的输入框。',
    category: '配置选项 (Options)'
  },
  {
    name: 'id',
    types: ['string'],
    description: '设置组件的焦点 ID，可用于通过 useFocusManager 编程方式聚焦该组件。',
    category: '配置选项 (Options)'
  }
]

