import { classNames, Mods } from 'shared/lib/classNames';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Drawer.module.scss';
import { Portal } from '../../Portal';
import { Overlay } from '../../Overlay';
import { useModal } from '../../../lib/hooks';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

function Drawer(props: DrawerProps) {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const { theme } = useTheme();

  const {
    close,
    isClosing,
    isMounted,
  } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.Drawer, mods, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default memo(Drawer);
