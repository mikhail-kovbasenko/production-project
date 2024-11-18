import { ComponentMeta, ComponentStory } from '@storybook/react';

import avatar from 'shared/assets/tests/storybook_avatar.jpg';
import { CountryType } from '../../../Country';
import { CurrencyType } from '../../../Currency';
import ProfileCard from './ProfileCard';

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
    avatar,
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
