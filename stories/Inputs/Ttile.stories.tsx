import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Title from '../../src/Inputs/Title';

export default {
	title: 'Inputs/Title',
	component: Title,
	argTypes: {
		title: {
			control :'text'
		},
		level: {
			options: [1,2,3,4,5,6]
		}
	}
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	title: 'Hello World',
	level: 1
};