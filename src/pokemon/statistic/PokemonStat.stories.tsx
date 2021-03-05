import { Meta, Story } from '@storybook/react/types-6-0';

import { PokemonStatProps, PokemonStat } from './PokemonStat';

export default {
    title: 'Stat',
    component: PokemonStat,
    argTypes: {

    },
} as Meta;

const Template: Story<PokemonStatProps> = (args) => <PokemonStat {...args} />;

export const Card = Template.bind({});
Card.args = {
    name: "hp",
    value: 35,

};
