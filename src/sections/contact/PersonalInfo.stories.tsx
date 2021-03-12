import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { contactDetails } from './Contact'
import { PersonalInfo, PersonalInfoProps } from "./PersonalInfo";

export default {
    title: 'Personal Info',
    component: PersonalInfo,
    argTypes: {
        imgUrl: { control: 'text' },
        name: { control: 'text' },
        role: { control: 'text' },
        email: { control: 'text' },
    },
} as Meta;

const Template: Story<PersonalInfoProps> = (args) => <PersonalInfo {...args} />;

export const Ruben = Template.bind({});
Ruben.args = contactDetails[0];
export const William = Template.bind({});
William.args = contactDetails[1];

