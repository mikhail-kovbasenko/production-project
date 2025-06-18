import { useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';

import styles from './AvatarDropdown.module.scss';

interface AvatarDropdownProps {
    className?: string;
}

function AvatarDropdown(props: AvatarDropdownProps) {
  const {
    className,
  } = props;

  const authData = useSelector(getUserAuthData);

  const dispatch = useAppDispatch();

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const { t } = useTranslation();

  if (authData) {
    const dropDownItems = [
      {
        content: t('UserProfile'),
        href: RoutePath.profile + authData.id,
      },
      {
        content: t('Logout'),
        onClick: handleLogout,
      },
    ];

    if (isAdminPanelAvailable) {
      dropDownItems.unshift({
        content: t('Admin'),
        href: RoutePath.admin_panel,
      });
    }

    return (
      <Dropdown
        direction="bottom left"
        items={dropDownItems}
        trigger={<Avatar size={30} src={authData.avatar} fallbackInverted />}
        className={classNames(styles.AvatarDropdown, {}, [className])}
      />

    );
  }

  return null;
}

export default AvatarDropdown;
