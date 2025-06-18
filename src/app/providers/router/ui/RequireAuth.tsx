import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getUserAuthData } from '@/entities/User';
import { getRouteMain } from '@/shared/const/router';

interface RequireAuthProps {
  children: JSX.Element
}

function RequireAuth(props: RequireAuthProps) {
  const { children } = props;

  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;
