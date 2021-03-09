import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { RosterCard, RosterCardProps } from './RosterCard';

export default {
  title: 'Example/RosterCard',
  component: RosterCard,
  argTypes: {
    color: { control: {
      type: 'select',
      options: ['red', 'orange', 'blue', 'yellow', 'green']
    }},
  },
} as Meta;

const Template: Story<RosterCardProps> = (args) => <RosterCard {...args} />;

export const RedCard = Template.bind({});
RedCard.args = {
  color: 'red',
};
