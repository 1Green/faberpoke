import { Meta, Story } from '@storybook/react/types-6-0';

import { PokemonType, PokemonTypeProps } from './PokemonType';

export default {
    title: 'Pokemon Types',
    component: PokemonType,
    argTypes: {
        type: {
            typeOptions: 'select',
        },
    },
} as Meta;

const Template: Story<PokemonTypeProps> = (args) => <PokemonType {...args} />;

export const Card = Template.bind({});
Card.args = {
    type: {
        "name": "fire",
        "url": "https://pokeapi.co/api/v2/type/10/"
    }
};
