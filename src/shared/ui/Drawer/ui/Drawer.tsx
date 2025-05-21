import {
  ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from '@/shared/lib/classNames';

import AnimationProvider, { AnimationContextPayload, useAnimationLibs } from '../../../lib/components/AnimationProvider/AnimationProvider';
import { useTheme } from '../../../lib/hooks';
import { Overlay } from '../../Overlay';
import { Portal } from '../../Portal';
import styles from './Drawer.module.scss';
// import { useModal } from '../../../lib/hooks';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

function DrawerContent(props: DrawerProps) {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;
  const { Spring, Gesture } = useAnimationLibs() as Required<AnimationContextPayload>;

  const { theme } = useTheme();
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(({
    last,
    velocity: [, vy],
    direction: [, dy],
    movement: [, my],
    cancel,
  }) => {
    if (my < -70) cancel();

    if (last) {
      if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
        close();
      } else {
        openDrawer();
      }
    } else {
      api.start({ y: my, immediate: true });
    }
  }, {
    from: () => [0, y.get()],
    filterTaps: true,
    bounds: { top: 0 },
    rubberband: true,
  });

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  // const {
  //   close,
  //   isClosing,
  //   isMounted,
  // } = useModal({
  //   animationDelay: 300,
  //   onClose,
  //   isOpen,
  // });

  // const mods: Mods = {
  //   [styles.opened]: isOpen,
  //   [styles.isClosing]: isClosing,
  // };

  // if (lazy && !isMounted) {
  //   return null;
  // }

  return (
    <Portal>
      <div className={classNames(styles.Drawer, {}, [className, theme, 'app_drawer'])}>
        <Overlay onClick={close} />
        <Spring.a.div
          className={styles.sheet}
          style={{
            display,
            bottom: `calc(-100vh + ${height - 100}px)`,
            y,
          }}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...bind()}
        >
          {children}
        </Spring.a.div>
        {/* <div className={styles.content}>
          {children}
        </div> */}
      </div>
    </Portal>
  );
}

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

const Drawer = (props: DrawerProps) => (
  <AnimationProvider>
    <DrawerAsync {...props} />
  </AnimationProvider>
);

export default Drawer;
