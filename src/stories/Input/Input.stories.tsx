import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Input, { InputProps } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    value: { control: 'text' },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  value: '',
};

export const Filled = Template.bind({});
Filled.args = {
  value: 'pika pika',
};
