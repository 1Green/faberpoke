import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Contact, contactDetails, ContactProps } from './Contact'

export default {
    title: 'Contact',
    component: Contact,
    argTypes: {
        contactArray: { control: 'object' },
    },
} as Meta;

const Template: Story<ContactProps> = (args) => <Contact {...args} />;

export const Page = Template.bind({});
Page.args = { contactArray: contactDetails };
