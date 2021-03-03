import { Meta, Story } from '@storybook/react/types-6-0';

import { PokemonAbilityProps, PokemonAbility } from './Ability';

export default {
    title: 'Abilities',
    component: PokemonAbility,
    argTypes: {

    },
} as Meta;

const Template: Story<PokemonAbilityProps> = (args) => <PokemonAbility {...args} />;

export const Card = Template.bind({});
Card.args = {
    ability: {
        name: "limber",
        url: "https://pokeapi.co/api/v2/ability/7/"
    }
};
