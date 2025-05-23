import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListBox from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  value: 'click',
  defaultValue: 'click',
  items: [
    {
      content: 'first item',
      value: '1',
    },
    {
      content: 'second item',
      value: '2',
    },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  value: 'click',
  defaultValue: 'click',
  items: [
    {
      content: 'first item',
      value: '1',
    },
    {
      content: 'second item',
      value: '2',
    },
  ],
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  value: 'click',
  defaultValue: 'click',
  items: [
    {
      content: 'first item',
      value: '1',
    },
    {
      content: 'second item',
      value: '2',
    },
  ],
};

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  value: 'click',
  defaultValue: 'click',
  items: [
    {
      content: 'first item',
      value: '1',
    },
    {
      content: 'second item',
      value: '2',
    },
  ],
};
