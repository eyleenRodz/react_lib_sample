import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../../src/Inputs/Checkbox';
import { CheckboxProps } from '@mantine/core'

export default {
	title: 'Inputs/Checkbox',
	component: Checkbox,
	argTypes: {
		label: {
			control :'text'
		},
		mainLabel: {
			control :'text'
		},
		color: {
			options: ["pink", "dark", 'gray', 'red']
		}
	}
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	label: 'He leido todo',
 mainLabel: 'T&C',
	color: 'pink'
};

export const NoMainLabel = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoMainLabel.args = {
	label: 'He leido todo jiji',
	color: 'pink'
};