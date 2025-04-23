import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/Text';
import { VerticalStack } from '@/shared/ui/Stack';
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
      <VerticalStack className={classNames('', {}, [className])} gap="16" fullWidth>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VerticalStack>
    );
  }

  return (
    <VerticalStack gap="16" fullWidth className={classNames('', {}, [className])}>
      {
        comments?.length
          ? comments.map((comment) => (
            <CommentCard
              isLoading={isLoading}
              comment={comment}
              key={comment.id}
            />
          ))
          : <Text text={t('Comments not found')} />
      }
    </VerticalStack>
  );
}

export default CommentList;
