import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VerticalStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import styles from './CommentCard.module.scss';
import { Comment } from '../../model/types/types';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

function CommentCard(props: CommentCardProps) {
  const {
    className,
    comment,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <VerticalStack
        fullWidth
        gap="8"
        className={classNames(styles.CommentCard, {}, [className,
          styles.loading,
        ])}
      >
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton height={16} width={100} className={styles.username} />
        </div>
        <Skeleton width="100%" height={50} className={styles.text} />
      </VerticalStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VerticalStack className={classNames(styles.CommentCard, {}, [className])} fullWidth gap="8">
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={styles.header}>
        {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} /> }
        <Text title={comment.user.username} className={styles.username} />
      </AppLink>
      <Text text={comment.text} className={styles.text} />
    </VerticalStack>
  );
}

export default CommentCard;
