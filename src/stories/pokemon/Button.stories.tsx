import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { control: 'object' },
    imgUrl: { control: 'object' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Shiny = Template.bind({});
Shiny.args = {
  label: 'Shiny',
};
export const Female = Template.bind({});
Female.args = {
  label: 'Gender',
  imgUrl: '/img/female.png'
};

// Assume image.png is located in the "public" directory.
export const withAnImage = () => (
  <img src="/img/female.png" alt="test" />
);
