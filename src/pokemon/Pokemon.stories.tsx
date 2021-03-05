import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import pikachuJson from '../json/pikachu.json';
import charizardJson from '../json/charizard.json';
import { PokemonParser, PokemonParserProps } from './PokemonParser';

export default {
  title: 'Pokemon Card',
  component: PokemonParser,
  argTypes: {
    name: { control: 'text' },
    types: {
      typeOptions: 'select',
    },
    abilities: { control: 'object' },
    gender: { control: 'boolean' },
    shiny: { control: 'boolean' },
    orientation: { control: 'boolean' },

  },
} as Meta;

const Template: Story<PokemonParserProps> = (args) => <PokemonParser {...args} />;

export const Pikachu = Template.bind({});
Pikachu.args = {
  jsonFromApi: pikachuJson
};
export const Charizard = Template.bind({});
Charizard.args = {
  jsonFromApi: charizardJson
};
