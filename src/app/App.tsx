import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import 'app/styles/index.scss';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { getUserInited, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { USER_LOCALSTORAGE_KEY } from '../shared/const/localeStorage';

// function Component() {
//   const { t, i18n } = useTranslation();
//   const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
//   const dispatch = useDispatch();

//   return (
//     <>
//       <button type="button" onClick={toggleLanguage}>{t('translate')}</button>
//       <div style={{ color: 'red' }}>{t('test translate')}</div>
//     </>
//   );
// }

function App() {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        {/* <Component /> */}
        <div className="content-page">
          <Sidebar />
          { inited && <AppRouter /> }
        </div>
      </Suspense>
    </div>
  );
}

export default App;
