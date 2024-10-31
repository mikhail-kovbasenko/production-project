import { Suspense, useState } from 'react';
import 'app/styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';

function Component() {
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  return (
    <>
      <button type="button" onClick={toggleLanguage}>{t('translate')}</button>
      <div style={{ color: 'red' }}>{t('test translate')}</div>
    </>
  );
}

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <Component />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
