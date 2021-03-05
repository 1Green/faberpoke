import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { ButtonImg, ButtonImgProps } from './ButtonImg';

export default {
  title: 'Button',
  component: ButtonImg,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { control: 'object' },
    imgUrl: { control: 'object' },
  },
} as Meta;

const Template: Story<ButtonImgProps> = (args) => <ButtonImg {...args} />;

export const Shiny = Template.bind({});
Shiny.args = {
  img: 'shiny',
};
export const Gender = Template.bind({});
Gender.args = {
  img: 'gender',
};
export const Orientation = Template.bind({});
Orientation.args = {
  img: 'orientation',
};
