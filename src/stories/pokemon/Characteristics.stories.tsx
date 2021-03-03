import { Meta, Story } from '@storybook/react/types-6-0';

import { PokemonCharacteristicProps, PokemonCharacteristic } from './Characteristics';

export default {
    title: 'Characteristic',
    component: PokemonCharacteristic,
    argTypes: {

    },
} as Meta;

const Template: Story<PokemonCharacteristicProps> = (args) => <PokemonCharacteristic {...args} />;

export const Card = Template.bind({});
Card.args = {
    characteristic: {
        text: "Loves to eat",
    }
};
