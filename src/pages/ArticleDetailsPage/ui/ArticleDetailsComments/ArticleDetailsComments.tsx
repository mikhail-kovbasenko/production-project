import { useTranslation } from 'react-i18next';
import { Fragment, memo, useCallback } from 'react';
import { TextSize, Text } from 'shared/ui/Text';
import { AddCommentForm } from 'features/AddCommentForm';
import { CommentList } from 'entities/Comment';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import styles from '../ArticleDetailsPage.module.scss';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleComments } from '../../model/slice/articleDetailsCommentSlice';
import { getArticleCommentsLoading } from '../../model/selectors/comments';
import { fetchCommentsArticleById } from '../../model/services/fetchCommentByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
  id: string;
}

function ArticleDetailsComments(props: ArticleDetailsCommentsProps) {
  const {
    id,
  } = props;

  const { t } = useTranslation('article');

  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);

  const commentsIsLoading = useSelector(getArticleCommentsLoading);

  const handleSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id));
  });

  return (
    <Fragment>
      <Text
        size={TextSize.L}
        title={t('Comments')}
        className={styles.commentTitle}
      />
      <AddCommentForm onSendComment={handleSendComment} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </Fragment>
  );
}

export default memo(ArticleDetailsComments);
