import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { NotificationList } from 'entities/Notification';
import { classNames } from 'shared/lib/classNames';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

function NotificationButton(props: NotificationButtonProps) {
  const {
    className,
  } = props;

  return (
    <Popover
      className={classNames(styles.NotificationButton, {}, [className])}
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
                  )}
      direction="bottom left"
    >
      <NotificationList className={styles.notifications} />
    </Popover>
  );
}

export default NotificationButton;
