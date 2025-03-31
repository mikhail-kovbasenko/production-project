import { addDecorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
  RouterDecorator, StyleDecorator, ThemeDecorator,
} from 'shared/config/storybook';
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

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
addDecorator(SuspenseDecorator);
