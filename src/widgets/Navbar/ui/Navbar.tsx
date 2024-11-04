import { LoginModal } from 'features/AuthByUsername';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
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
      <div className={classNames(styles.Navbar, {}, [className])}>
        <Button
          className={styles.Links}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={handleLogout}
        >
          {t('Logout')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button className={styles.Links} theme={ButtonTheme.CLEAR_INVERTED} onClick={handleOpenModal}>
        {t('Login')}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={handleCloseModal} />
    </div>
  );
}
