import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Shiny, ShinyProps } from './Shiny';

export default {
  title: 'Shiny Button',
  component: Shiny,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    shiny: { control: 'boolean' }
  },
} as Meta;

const Template: Story<ShinyProps> = (args) => <Shiny {...args} />;

export const Example = Template.bind({});
Example.args = {
  label: 'Shiny',
};
