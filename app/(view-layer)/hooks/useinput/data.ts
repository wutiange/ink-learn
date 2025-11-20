export const useInputExample = `
import React, {useState} from 'react';
import {render, Box, Text, useInput} from 'ink';

const UserInput = () => {
	const [message, setMessage] = useState('按箭头键或按 "q" 试试');

	useInput((input, key) => {
		if (input === 'q') {
			setMessage('收到 "q"，这里通常会调用 exit() 结束程序');
			return;
		}

		if (key.leftArrow) {
			setMessage('← Left arrow pressed');
		} else if (key.rightArrow) {
			setMessage('→ Right arrow pressed');
		} else if (key.upArrow) {
			setMessage('↑ Up arrow pressed');
		} else if (key.downArrow) {
			setMessage('↓ Down arrow pressed');
		} else if (key.return) {
			setMessage('⏎ Enter pressed');
		}
	});

	return (
		<Box flexDirection="column">
			<Text color="green">{message}</Text>
			<Text dimColor>按方向键、Enter 或 "q" 观察上面的提示变化</Text>
		</Box>
	);
};

render(<UserInput />);
`.trim()

export type UseInputParamData = {
  name: string;
  types: string[];
  default?: string;
  description: string;
  allowedValues?: string[];
  example?: string;
  category: string;
}

export const useInputParamsData: UseInputParamData[] = [
  // 基本参数
  {
    name: 'inputHandler',
    types: ['Function'],
    description: '必填。核心回调函数 (input, key) => void，用来处理每次用户输入。',
    example: useInputExample,
    category: '参数 (Parameters)',
  },
  {
    name: 'options',
    types: ['object'],
    description: '可选配置对象，目前主要用于控制是否激活当前 useInput。',
    category: '参数 (Parameters)',
  },
  {
    name: 'options.isActive',
    types: ['boolean'],
    default: 'true',
    description: '是否启用当前 useInput。多个 useInput 同时存在时，可以通过它来避免重复处理同一份输入。',
    example: useInputExample,
    category: '参数 (Parameters)',
  },

  // 回调参数 input
  {
    name: 'input',
    types: ['string'],
    description: '用户本次输入的内容。如果一次粘贴了多个字符，input 会是整段字符串。',
    category: '回调参数 (Callback)',
  },

  // 回调参数 key 对象本身
  {
    name: 'key',
    types: ['object'],
    description: '关于本次按键的辅助信息，内部包含多个布尔字段，例如 leftArrow、return、escape 等。',
    category: '回调参数 (Callback)',
  },

  // 常用按键标志（下列字段都在 key 对象上）
  {
    name: 'key.leftArrow',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 ← 左方向键。',
    example: useInputExample,
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.rightArrow',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 → 右方向键。',
    example: useInputExample,
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.upArrow',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 ↑ 上方向键。',
    example: useInputExample,
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.downArrow',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 ↓ 下方向键。',
    example: useInputExample,
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.return',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 Enter/Return 键。',
    example: useInputExample,
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.escape',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 Escape 键。',
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.ctrl',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 Ctrl 键。',
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.shift',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 Shift 键。',
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.tab',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 Tab 键。',
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.backspace',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 Backspace 键。',
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.delete',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 Delete 键。',
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.pageUp',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 Page Up 键。',
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.pageDown',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 Page Down 键。',
    category: '键位标志 (Key flags)',
  },
  {
    name: 'key.meta',
    types: ['boolean'],
    default: 'false',
    description: '是否按下了 Meta 键（例如 Mac 上的 ⌘）。',
    category: '键位标志 (Key flags)',
  },
]


