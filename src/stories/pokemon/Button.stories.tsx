import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Button Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    className: { control: 'text' },
    label: { control: 'text' },
    onClick: { control: 'object' }
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Shiny = Template.bind({});
Shiny.args = {
  label: 'Shiny',
};
export const Gender = Template.bind({});
Gender.args = {
  label: 'Gender',
};
