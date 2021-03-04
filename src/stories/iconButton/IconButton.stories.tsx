import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { IconButton, IconButtonProps } from "./IconButton";

export default {
    title: 'Example/IconButton',
    component: IconButton,
    argTypes: {
        rounded: { control: 'boolean' },
        simple: { control: 'boolean' }
    },
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    iconProps: {
        name: 'search',
        size: 'large'
    }
};

