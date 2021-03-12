import { Meta, Story } from '@storybook/react/types-6-0'

import { PokemonAbilityProps, PokemonAbility } from './PokemonAbility'

export default {
    title: 'Abilities',
    component: PokemonAbility,
    argTypes: {},
} as Meta

const Template: Story<PokemonAbilityProps> = (args) => (
    <PokemonAbility {...args} />
)

export const Example = Template.bind({})
Example.args = {
    name: 'limber',
    abilityText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}
