import { LoginModal } from 'features/AuthByUsername';
import {
  memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/router/config';

import { Dropdown } from 'shared/ui/Dropdown';
import { Avatar } from 'shared/ui/Avatar';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setAuthModal] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const isAdminPanelAvailable = isAdmin || isManager;

  const handleCloseModal = useCallback(() => {
    setAuthModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setAuthModal(true);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

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
      <header className={classNames(styles.Navbar, {}, [className])}>
        <Text className={styles.appName} title={t('appName')} theme={TextTheme.INVERTED} />
        <AppLink
          to={`${RoutePath.article_create}`}
          theme={AppLinkTheme.INVERTED}
          className={styles.createBtn}
        >
          {t('create article')}
        </AppLink>
        <Dropdown
          className={styles.dropdown}
          direction="bottom left"
          items={dropDownItems}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
      </header>
    );
  }

  return (
    <header className={classNames(styles.Navbar, {}, [className])}>
      <Button className={styles.Links} theme={ButtonTheme.CLEAR_INVERTED} onClick={handleOpenModal}>
        {t('Login')}
      </Button>
      {
        isAuthModal && <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
      }
    </header>
  );
}

export default memo(Navbar);
