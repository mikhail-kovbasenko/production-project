import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { NotificationList } from 'entities/Notification';
import { classNames } from 'shared/lib/classNames';
import { Fragment, useState } from 'react';
import styles from './NotificationButton.module.scss';
import { Drawer } from '../../../shared/ui/Drawer';
import { useDevice } from '../../../shared/lib/hooks';
import AnimationProvider from '../../../shared/lib/components/AnimationProvider/AnimationProvider';

interface NotificationButtonProps {
    className?: string;
}

function NotificationButton(props: NotificationButtonProps) {
  const {
    className,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = () => setIsOpen(true);
  const onCloseDrawer = () => setIsOpen(false);

  const trigger = (
    <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  const isMobile = useDevice();

  if (isMobile) {
    return (
      <Fragment>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </Fragment>
    );
  }

  return (
    <Popover
      className={classNames(styles.NotificationButton, {}, [className])}
      trigger={trigger}
      direction="bottom left"
    >
      <NotificationList className={styles.notifications} />
    </Popover>
  );
}

export default NotificationButton;
