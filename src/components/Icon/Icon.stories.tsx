import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Icon, IconProps } from "./Icon";

export default {
    title: 'Example/Icon',
    component: Icon,
    argTypes: {
      color: { control: 'color' },
      style: { control: 'object' },
      name: { control: 'select' }
    },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  name: 'search',
};

