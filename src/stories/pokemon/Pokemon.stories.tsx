import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Pokemon, PokemonProps } from './Pokemon';

export default {
  title: 'Pokemon Card',
  component: Pokemon,
  argTypes: {
    name: { control: 'text' },
    types: {
      typeOptions: 'select',
    },
    abilities: { control: 'object' },
    shiny: { control: 'boolean' },
    gender: { control: 'boolean' },
    // TODO add argTypes for Pokemon
  },
} as Meta;

const Template: Story<PokemonProps> = (args) => <Pokemon {...args} />;

export const Front = Template.bind({});
Front.args = {
  name: 'Ditto',
  types: [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  abilities: [
    { name: 'limber', url: 'https://pokeapi.co/api/v2/ability/7/' },
    { name: 'lorem', url: 'https://pokeapi.co/api/v2/ability/7/' },
    { name: 'ipsum', url: 'https://pokeapi.co/api/v2/ability/7/' },
    { name: 'dolor', url: 'https://pokeapi.co/api/v2/ability/7/' },
  ],
  // TODO add args
};
export const Back = Template.bind({});
Back.args = {
  name: 'Ditto',
  types: [
    {
      "slot": 1,
      "type": {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
      }
    },
    {
      "slot": 2,
      "type": {
        "name": "flying",
        "url": "https://pokeapi.co/api/v2/type/3/"
      }
    }
  ],
  abilities: [
    { name: 'limber', url: 'https://pokeapi.co/api/v2/ability/7/' },
    { name: 'lorem', url: 'https://pokeapi.co/api/v2/ability/7/' },
    { name: 'ipsum', url: 'https://pokeapi.co/api/v2/ability/7/' },
    { name: 'dolor', url: 'https://pokeapi.co/api/v2/ability/7/' },
  ],
  // TODO add args
};
