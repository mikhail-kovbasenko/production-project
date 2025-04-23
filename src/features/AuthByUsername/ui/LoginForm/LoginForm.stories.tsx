import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook';
import LoginForm from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: {
    username: '123',
    password: 'dksfds',
  },
})];

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {};
PrimaryWithError.decorators = [StoreDecorator({
  loginForm: {
    username: '123',
    password: 'dksfds',
    error: 'Error!',
  },
})];

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {};
PrimaryLoading.decorators = [StoreDecorator({
  loginForm: {
    isLoading: true,
  },
})];
