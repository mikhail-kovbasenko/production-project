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
      avatar: __PROJECT__ !== 'storybook'
        ? avatar
        : 'https://sun9-9.userapi.com/impg/Fqdlfrwzee2yuRWLCjaH4aq25C88Er_fGLyRkA/kRYaaXS-LNg.jpg?size=1024x1280&quality=95&sign=1e13c17cd6867e41a10aafeb337409f8&type=album',
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
