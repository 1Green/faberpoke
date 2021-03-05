import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Pagination, PaginationProps } from './Pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination,
  argTypes: {
    totalRecords: { control: 'number' },
  },
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
    totalRecords: 1342
}