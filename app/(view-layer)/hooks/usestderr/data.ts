export const useStderrExample = `
import React, {useEffect} from 'react';
import {render, useStderr, Text} from 'ink';

const Example = () => {
	const {write} = useStderr();

	useEffect(() => {
		// Write a single message to stderr, above Ink's output
		write('Hello from Ink to stderr\\n');
	}, []);

	return <Text>Look above ^</Text>;
};

render(<Example />);
`.trim()

export const useStderrParamsData = [
  {
    name: 'stderr',
    types: ['stream.Writable'],
    description: '标准错误流。默认为 process.stderr。',
    category: '返回值 (Returns)'
  },
  {
    name: 'write',
    types: ['(data: string) => void'],
    description: '直接向 stderr 写入字符串，同时保留 Ink 的输出。',
    category: '返回值 (Returns)'
  }
]

