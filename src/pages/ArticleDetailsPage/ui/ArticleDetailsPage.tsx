import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useDispatch, useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { useInitialEffect } from 'shared/lib/hooks';
import { AddCommentForm } from 'features/AddCommentForm';
import styles from './ArticleDetailsPage.module.scss';
import {
  articleDetailCommentReducers,
  getArticleComments,
} from '../model/slice/articleDetailsCommentSlice';
import { getArticleCommentsError, getArticleCommentsLoading } from '../model/selectors/comments';
import { fetchCommentsArticleById }
  from '../model/services/fetchCommentByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailCommentReducers,
};

function ArticleDetailsPage(props: ArticleDetailsPageProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();

  const comments = useSelector(getArticleComments.selectAll);

  const commentsIsLoading = useSelector(getArticleCommentsLoading);
  const commentsError = useSelector(getArticleCommentsError);

  const dispatch = useDispatch();

  const handleSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id));
  });

  if (!id) {
    return (
      <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        {t('article not found')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader removeAfterOnMount reducers={reducers}>
      <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t('Comments')} className={styles.commentTitle} />
        <AddCommentForm onSendComment={handleSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </div>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
