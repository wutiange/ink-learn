export const useAppExample = `
import React, {useEffect} from 'react';
import {render, useApp, Text} from 'ink';

const Example = () => {
	const {exit} = useApp();

	useEffect(() => {
		const timer = setTimeout(() => {
			exit();
		}, 3000);

    return () => clearTimeout(timer);
	}, []);

	return <Text color="green">应用将在 3 秒后自动退出...</Text>;
};

render(<Example />);
`.trim()

export const useAppParamsData = [
  {
    name: 'exit',
    types: ['(error?: Error) => void'],
    description: '调用此方法可手动退出（卸载）整个 Ink 应用。',
    example: useAppExample,
    category: '返回值 (Returns)'
  },
  {
    name: 'error',
    types: ['Error'],
    description: 'exit 方法的可选参数。如果传递了错误对象，waitUntilExit Promise 将会 reject 该错误。',
    category: 'exit 方法参数'
  }
]

