export const useFocusManagerExample = `
import React, {useEffect} from 'react';
import {render, useFocus, useFocusManager, Text, Box, useInput} from 'ink';

const Item = ({id, label}) => {
	const {isFocused} = useFocus({id});
	return <Text color={isFocused ? 'green' : 'white'}>{label}{isFocused ? ' (Focused)' : ''}</Text>;
};

const Example = () => {
	const {focusNext, focusPrevious, focus} = useFocusManager();

	useInput((input) => {
		if (input === 'n') focusNext();
		if (input === 'p') focusPrevious();
		if (input === '1') focus('item-1');
		if (input === '2') focus('item-2');
		if (input === '3') focus('item-3');
	});

	return (
		<Box flexDirection="column">
			<Text dimColor>按下 'n' 下一个, 'p' 上一个, 或 1/2/3 跳转</Text>
			<Box flexDirection="column" borderStyle="round" padding={1}>
				<Item id="item-1" label="Item 1" />
				<Item id="item-2" label="Item 2" />
				<Item id="item-3" label="Item 3" />
			</Box>
		</Box>
	);
};

render(<Example />);
`.trim()

export const useFocusManagerParamsData = [
  {
    name: 'enableFocus',
    types: ['() => void'],
    description: '为所有组件启用焦点管理。（默认已启用，仅在手动禁用后需要调用）',
    category: '方法 (Methods)'
  },
  {
    name: 'disableFocus',
    types: ['() => void'],
    description: '禁用所有组件的焦点管理。当前激活的组件将失去焦点。',
    category: '方法 (Methods)'
  },
  {
    name: 'focusNext',
    types: ['() => void'],
    description: '将焦点切换到下一个可聚焦组件。等同于 Tab 键。',
    category: '方法 (Methods)'
  },
  {
    name: 'focusPrevious',
    types: ['() => void'],
    description: '将焦点切换到上一个可聚焦组件。等同于 Shift+Tab 键。',
    category: '方法 (Methods)'
  },
  {
    name: 'focus',
    types: ['(id: string) => void'],
    description: '将焦点切换到具有指定 ID 的组件。如果没有找到 ID，焦点将切换到下一个组件。',
    category: '方法 (Methods)'
  }
]

