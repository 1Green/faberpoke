import { Meta, Story } from '@storybook/react/types-6-0';

import { PokemonStatisticProps, PokemonStatistic } from './PokemonStatistic';

export default {
    title: 'Statistic',
    component: PokemonStatistic,
    argTypes: {

    },
} as Meta;

const Template: Story<PokemonStatisticProps> = (args) => <PokemonStatistic {...args} />;

export const Example = Template.bind({});
Example.args = {
    name: "hp",
    value: 35,

};
