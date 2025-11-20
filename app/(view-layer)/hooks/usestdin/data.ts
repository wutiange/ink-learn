export const useStdinExample = `
import React, {useEffect} from 'react';
import {render, useStdin, Text} from 'ink';

const Example = () => {
	const {isRawModeSupported, setRawMode} = useStdin();

	useEffect(() => {
		if (isRawModeSupported) {
			setRawMode(true);
			return () => setRawMode(false);
		}
	}, [isRawModeSupported, setRawMode]);

	return (
		<Text>
			Raw mode supported: {isRawModeSupported ? 'Yes' : 'No'}
		</Text>
	);
};

render(<Example />);
`.trim()

export const useStdinParamsData = [
  {
    name: 'stdin',
    types: ['stream.Readable'],
    description: '标准输入流。默认为 process.stdin。',
    category: '返回值 (Returns)'
  },
  {
    name: 'isRawModeSupported',
    types: ['boolean'],
    description: '当前 stdin 是否支持 raw mode。',
    category: '返回值 (Returns)'
  },
  {
    name: 'setRawMode',
    types: ['(isRawModeEnabled: boolean) => void'],
    description: '设置是否启用 raw mode。',
    category: '返回值 (Returns)'
  }
]

