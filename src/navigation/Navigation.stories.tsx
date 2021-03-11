import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Navigation, NavigationProps } from './Navigation';

export default {
    title: 'Navigation',
    component: Navigation,
    argTypes: {
    },
  } as Meta;

const Template: Story<NavigationProps> = (args) => (
    <Navigation {...args}> 
        <div key='a'></div>
        <div key='b'></div>
        <div key='c'></div>
        <div key='d'></div>
    </Navigation>
);

export const Default = Template.bind({});
