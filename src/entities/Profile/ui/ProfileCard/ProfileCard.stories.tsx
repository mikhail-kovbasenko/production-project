import { ComponentMeta, ComponentStory } from '@storybook/react';

import avatar from '@/shared/assets/tests/storybook_avatar.jpg';

import ProfileCard from './ProfileCard';
import { CountryType } from '../../../Country';
import { CurrencyType } from '../../../Currency';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 24,
    country: CountryType.Russia,
    lastname: 'semenov',
    first: 'oleg',
    city: 'Moscow',
    currency: CurrencyType.EUR,
    avatar: __PROJECT__ !== 'storybook'
      ? avatar
      : 'https://sun9-9.userapi.com/impg/Fqdlfrwzee2yuRWLCjaH4aq25C88Er_fGLyRkA/kRYaaXS-LNg.jpg?size=1024x1280&quality=95&sign=1e13c17cd6867e41a10aafeb337409f8&type=album',
  },
};

export const Error = Template.bind({});
Error.args = {
  error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};
