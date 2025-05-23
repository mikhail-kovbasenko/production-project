import { Suspense, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './styles/index.scss';
import { getUserInited, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

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
