import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { SectionTitle, SectionTitleProps } from './SectionTitle'

export default {
    title: 'Example/SectionTitle',
    component: SectionTitle,
    argTypes: {
        title: { control: 'text' },
        color: { control: 'color' },
    },
} as Meta

const Template: Story<SectionTitleProps> = (args) => <SectionTitle {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Pokédex',
    color: 'red',
}
