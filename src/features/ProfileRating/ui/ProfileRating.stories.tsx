import { ComponentStory, ComponentMeta } from '@storybook/react';

import withMock from 'storybook-addon-mock';
import ProfileRating from './ProfileRating';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/ProfileRating',
  component: ProfileRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withMock],
} as ComponentMeta<typeof ProfileRating>;

const Template: ComponentStory<typeof ProfileRating> = (args) => <ProfileRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  profileId: '1',
};
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
];
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
  profileId: '1',
};
WithoutRate.decorators = [
  StoreDecorator({
    user: {
      authData: { id: '1' },
    },
  }),
];
WithoutRate.parameters = {
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};
