import { Fragment } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Flex from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <Fragment>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </Fragment>
  ),
};

export const Column = Template.bind({});
Column.args = {
  children: (
    <Fragment>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </Fragment>
  ),
  direction: 'column',
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  children: (
    <Fragment>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </Fragment>
  ),
  gap: '4',
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  children: (
    <Fragment>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </Fragment>
  ),
  gap: '16',
};

export const ColumnGap24 = Template.bind({});
ColumnGap24.args = {
  children: (
    <Fragment>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
      <div>Text</div>
    </Fragment>
  ),
  gap: '24',
  direction: 'column',
};
