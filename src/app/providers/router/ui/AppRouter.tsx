import { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PageLoader } from 'widgets/PageLoader';

import { AppRoutesProps, routeConfig } from 'shared/config/router/config';
import RequireAuth from './RequireAuth';

const renderWithWrapper = (route: AppRoutesProps) => {
  const element = (
    <Suspense fallback={<PageLoader />}>
      <div className="page-wrapper">
        {route.element}
      </div>
    </Suspense>
  );

  return (
    <Route
      key={route.path}
      path={route.path}
      element={route.authOnly
        ? <RequireAuth>{element}</RequireAuth>
        : element}
    />
  );
};

function AppRouter() {
  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
}

export default memo(AppRouter);
