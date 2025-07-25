import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n-test';

export default function renderWithTranslation(component: ReactNode) {
  return render(
    <I18nextProvider i18n={i18n}>{component}</I18nextProvider>,
  );
}
