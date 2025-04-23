import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { VerticalStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import NotificationItem from '../NotificationItem/NotificationItem';

interface NotificationListProps {
    className?: string;
}

function NotificationList(props: NotificationListProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 5000,
  });

  if (isLoading) {
    return (
      <VerticalStack gap="16" fullWidth className={classNames('', {}, [className])}>
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VerticalStack>
    );
  }

  return (
    <VerticalStack className={classNames('', {}, [className])} gap="16" fullWidth>
      {data?.map((item) => <NotificationItem key={item.id} item={item} />)}
    </VerticalStack>
  );
}

export default NotificationList;
