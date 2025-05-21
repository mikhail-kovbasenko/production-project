import {
  ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames';
import { useModal, useTheme } from '../../../lib/hooks';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 200;

function Modal(props: ModalProps) {
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
    animationDelay: ANIMATION_DELAY,
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
      <div className={classNames(styles.Modal, mods, [className, theme, 'app_modal'])}>
        {/* <div className={styles.overlay} onClick={closeHandler}> */}
        <Overlay onClick={close} />
        <div className={styles.content}>{children}</div>
        {/* </div> */}
      </div>
    </Portal>
  );
}

export default Modal;
