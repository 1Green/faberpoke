import { Meta, Story } from '@storybook/react/types-6-0'

import { PokemonType, PokemonTypeProps } from './PokemonType'

export default {
    title: 'Pokemon Types',
    component: PokemonType,
    argTypes: {
        type: {
            typeOptions: 'select',
        },
    },
} as Meta

const Template: Story<PokemonTypeProps> = (args) => <PokemonType {...args} />

export const Example = Template.bind({})
Example.args = {
    type: {
        name: 'electric',
        url: 'https://pokeapi.co/api/v2/type/13/',
    },
    imageUrl: './img/electric.png',
}
