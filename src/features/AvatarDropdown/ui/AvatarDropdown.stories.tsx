import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import AvatarDropdown from './AvatarDropdown';
import { StoreDecorator } from '../../../shared/config/storybook';

export default {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1',
      avatar: 'https://sun9-17.userapi.com/impg/N29uhUg7rirCuolXqWYOASJmZcwTjuFvPM-Bbw/rORyk9zEwz8.jpg?size=1080x1350&quality=96&sign=f6104d9986476d462fed2bf38c1355a9&type=album',
    },
  },
})];
