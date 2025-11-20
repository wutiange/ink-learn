export const useStdoutExample = `
import React, {useEffect} from 'react';
import {render, useStdout, Text} from 'ink';

const Example = () => {
	const {write} = useStdout();

	useEffect(() => {
		// Write a single message to stdout, above Ink's output
		write('Hello from Ink to stdout\\n');
	}, []);

	return <Text>Look above ^</Text>;
};

render(<Example />);
`.trim()

export const useStdoutParamsData = [
  {
    name: 'stdout',
    types: ['stream.Writable'],
    description: '标准输出流。默认为 process.stdout。',
    category: '返回值 (Returns)'
  },
  {
    name: 'write',
    types: ['(data: string) => void'],
    description: '直接向 stdout 写入字符串，同时保留 Ink 的输出。类似于 <Static> 但只接受字符串。',
    category: '返回值 (Returns)'
  }
]

