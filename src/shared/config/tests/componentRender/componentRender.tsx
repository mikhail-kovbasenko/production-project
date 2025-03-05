import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from '../../i18n/i18n-test';

export interface componentRenderOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>
}

export default function componentRender(
  component: ReactNode,
  options: componentRenderOptions = {},
) {
  const { route = '/', initialState } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
}
