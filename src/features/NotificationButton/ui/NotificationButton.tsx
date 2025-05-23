import { Fragment, useState } from 'react';

import { NotificationList } from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Popover } from '@/shared/ui/Popups';

import styles from './NotificationButton.module.scss';
import { useDevice } from '../../../shared/lib/hooks';
import { Drawer } from '../../../shared/ui/Drawer';

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
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>

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
