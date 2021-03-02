import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Pokemon, PokemonProps } from './Pokemon';

export default {
  title: 'Pokemon Card',
  component: Pokemon,
  argTypes: {
    name: { control: 'text' },
    type: {
      typeOptions: 'select',
    },
    // TODO add argTypes for Pokemon
  },
} as Meta;

const Template: Story<PokemonProps> = (args) => <Pokemon {...args} />;

export const Example = Template.bind({});
Example.args = {
  name: 'Ditto',
  types: ['fire', 'water'],
  // TODO add args
};
