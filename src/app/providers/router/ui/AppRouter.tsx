import { memo, Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { AppRoutesProps } from '@/shared/types/router';
import { PageLoader } from '@/widgets/PageLoader';

import RequireAuth from './RequireAuth';
import RequireRoles from './RequireRoles';
import { routeConfig } from '../config/config';

const renderWithWrapper = (route: AppRoutesProps) => {
  const element = (
    <Suspense fallback={<PageLoader />}>
      {route.element}
    </Suspense>
  );

  return (
    <Route
      key={route.path}
      path={route.path}
      element={route.authOnly
        ? (
          <RequireAuth>
            <RequireRoles roles={route.roles}>
              {element}
            </RequireRoles>
          </RequireAuth>
        )
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
