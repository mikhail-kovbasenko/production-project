import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserRoles, UserRole } from '@/entities/User';
import { RoutePath } from '@/shared/const/router';

interface RequireRolesProps {
  roles?: UserRole[],
  children: JSX.Element
}

function RequireRoles(props: RequireRolesProps) {
  const { roles, children } = props;
  const userRoles = useSelector(getUserRoles);
  const location = useLocation();

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((role) => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!hasRequiredRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return children;
}

export default RequireRoles;
