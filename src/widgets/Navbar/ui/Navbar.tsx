import {
  memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from '@/features/AuthByUsername';
import {
  getUserAuthData,
} from '@/entities/User';
import { RoutePath } from '@/shared/config/router/config';
import { classNames } from '@/shared/lib/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Text, TextTheme } from '@/shared/ui/Text';

import { NotificationButton } from '@/features/NotificationButton';
import { HorizontalStack } from '@/shared/ui/Stack';
import { AvatarDropdown } from '../../../features/AvatarDropdown';
import styles from './Navbar.module.scss';
import { Drawer } from '../../../shared/ui/Drawer';
import { NotificationList } from '../../../entities/Notification';

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setAuthModal] = useState<boolean>(false);
  const authData = useSelector(getUserAuthData);

  const handleCloseModal = useCallback(() => {
    setAuthModal(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setAuthModal(true);
  }, []);

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
        <HorizontalStack gap="16" className={styles.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HorizontalStack>
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
