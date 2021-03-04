import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { InputSearch, InputSearchProps } from "./InputSearch";

export default {
    title: 'Example/InputSearch',
    component: InputSearch,
    argTypes: {
      value: { control: 'text' },
      iconProps: { control: 'object' }
    },
} as Meta;

const Template: Story<InputSearchProps> = (args) => <InputSearch {...args} />;

export const Default = Template.bind({});

export const WithIconProps = Template.bind({});
WithIconProps.args = {
  iconProps: {
      color: "blue"
  },
};