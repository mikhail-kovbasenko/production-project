import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook';
import { Theme } from 'app/providers/ThemeProvider';
import { CountryType } from 'entities/Country';
import { CurrencyType } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook_avatar.jpg';
import ProfilePage from './ProfilePage';

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {

};

Normal.decorators = [StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 24,
      country: CountryType.Russia,
      lastname: 'semenov',
      first: 'oleg',
      city: 'Moscow',
      currency: CurrencyType.EUR,
      avatar,
    },
  },
})];

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  profile: {
    form: {
      username: 'admin',
      age: 24,
      country: CountryType.Russia,
      lastname: 'semenov',
      first: 'oleg',
      city: 'Moscow',
      currency: CurrencyType.EUR,
      avatar,
    },
  },
})];
