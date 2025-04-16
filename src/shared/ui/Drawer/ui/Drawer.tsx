import { classNames, Mods } from 'shared/lib/classNames';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Drawer.module.scss';
import { Portal } from '../../Portal';
import { Overlay } from '../../Overlay';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

function Drawer(props: DrawerProps) {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const { theme } = useTheme();

  const mods: Mods = {
    [styles.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={classNames(styles.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={onClose} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default memo(Drawer);
