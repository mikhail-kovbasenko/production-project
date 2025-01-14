import { LoginModal } from 'features/AuthByUsername';
import {
  memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';
import { Text } from '../../../shared/ui/Text';
import { AppLink, AppLinkTheme } from '../../../shared/ui/AppLink';
import { RoutePath } from '../../../shared/config/router/config';
import { TextTheme } from '../../../shared/ui/Text/ui/Text';

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setAuthModal] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

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
        <Button
          className={styles.Links}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={handleLogout}
        >
          {t('Logout')}
        </Button>
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
