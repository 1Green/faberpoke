import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
  argTypes: {},
} as Meta;

const Template: Story = () => <Header />;

export const Default = Template.bind({});