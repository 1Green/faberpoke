import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { RosterCard, RosterCardProps } from './RosterCard';

export default {
  title: 'Example/RosterCard',
  component: RosterCard,
  argTypes: {
  },
} as Meta;

const Template: Story<RosterCardProps> = (args) => <RosterCard {...args} />;

export const Charizard = Template.bind({});
Charizard.args = {
  pokemonName: 'charizard',
  pokemonImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  empty: false,
  color: 'red',
};
export const Pikachu = Template.bind({});
Pikachu.args = {
  pokemonName: 'pikachu', pokemonImageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', empty: false, color: 'yellow'
};
