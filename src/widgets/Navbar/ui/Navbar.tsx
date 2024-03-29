import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.Links}>
        <AppLink
          theme={AppLinkTheme.INVERTED}
          to="/"
          className={styles.MainLink}
        >
          MAIN
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to="/about">
          New Age
        </AppLink>
      </div>
    </div>
  );
}
