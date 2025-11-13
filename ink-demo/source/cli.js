#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import Example from './app.js';

const cli = meow(
	`
		Usage
		  $ ink-demo

		Options
			--name  Your name

		Examples
		  $ ink-demo --name=Jane
		  Hello, Jane
	`,
	{
		importMeta: import.meta,
	},
);

render(<Example />);
