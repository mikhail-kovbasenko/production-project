import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import styles from './CommentList.module.scss';
import { Comment } from '../../model/types/types';
import CommentCard from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

function CommentList(props: CommentListProps) {
  const {
    className,
    comments,
    isLoading,
  } = props;

  const { t } = useTranslation('article');

  if (isLoading) {
    return (
      <div className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames('', {}, [className])}>
      {
        comments?.length
          ? comments.map((comment) => (
            <CommentCard
              isLoading={isLoading}
              comment={comment}
              className={styles.comment}
              key={comment.id}
            />
          ))
          : <Text text={t('Comments not found')} />
      }
    </div>
  );
}

export default CommentList;
