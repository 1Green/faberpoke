import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { ButtonImage, ButtonImageProps } from './ButtonImage'

export default {
    title: 'Button',
    component: ButtonImage,
    argTypes: {
        backgroundColor: { control: 'color' },
        label: { control: 'text' },
        onClick: { control: 'object' },
        imgUrl: { control: 'object' },
    },
} as Meta

const Template: Story<ButtonImageProps> = (args) => <ButtonImage {...args} />

export const Shiny = Template.bind({})
Shiny.args = {
    name: 'shiny',
}
export const Male = Template.bind({})
Male.args = {
    name: 'default',
}
export const Female = Template.bind({})
Female.args = {
    name: 'female',
}
export const Orientation = Template.bind({})
Orientation.args = {
    name: 'orientation',
}
