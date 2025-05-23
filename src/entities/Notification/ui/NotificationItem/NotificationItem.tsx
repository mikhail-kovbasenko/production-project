import { classNames } from '@/shared/lib/classNames';

import styles from './NotificationItem.module.scss';
import { Card, CardTheme } from '../../../../shared/ui/Card';
import { Text } from '../../../../shared/ui/Text';
import { Notification } from '../../model/types/types';

interface NotificationItemProps {
    className?: string;
    item: Notification
}

function NotificationItem(props: NotificationItemProps) {
  const {
    className,
    item,
  } = props;

  const content = (
    <Card className={classNames(styles.NotificationItem, {}, [className])} theme={CardTheme.OUTLINED}>
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a target="_blank" href={item.href} className={styles.link} rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Card className={classNames(styles.NotificationItem, {}, [className])} theme={CardTheme.OUTLINED}>
      <Text title={item.title} text={item.description} />
    </Card>
  );
}

export default NotificationItem;
