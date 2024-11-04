import { addDecorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
  RouterDecorator, StyleDecorator, ThemeDecorator,
} from 'shared/config/storybook';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
