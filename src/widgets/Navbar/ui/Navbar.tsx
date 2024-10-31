import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Modal } from 'shared/ui/Modal';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const { t } = useTranslation();
  const [isAuthModal, setAuthModal] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setAuthModal((prev) => !prev);
  }, []);
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button className={styles.Links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
        {t('Login')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Deserunt recusandae possimus nemo modi unde fuga, quod numquam
        architecto vitae sapiente! Maiores quidem molestiae, voluptatem
        error placeat culpa quis ratione dolorem.
      </Modal>
    </div>
  );
}
