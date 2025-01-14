import { ArticleDetails, ArticleList } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/AddCommentForm';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useInitialEffect } from 'shared/lib/hooks';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { Page } from 'widgets/Page';
import { getArticleCommentsLoading } from '../model/selectors/comments';
import { getArticleRecommendationsLoading } from '../model/selectors/recommendations';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsArticleById } from '../model/services/fetchCommentByArticleId/fetchCommentsByArticleId';
import { fetchRecommendations } from '../model/services/fetchRecommendations/fetchRecommendations';
import { articleDetailsPageReducer } from '../model/slice';
import {
  getArticleComments,
} from '../model/slice/articleDetailsCommentSlice';
import { getArticleRecommendations } from '../model/slice/articleDetailsRecommendationsSlice';
import styles from './ArticleDetailsPage.module.scss';
import ArticleDetailsPageHeader from './ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

function ArticleDetailsPage(props: ArticleDetailsPageProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();

  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);

  const commentsIsLoading = useSelector(getArticleCommentsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsLoading);
  // const commentsError = useSelector(getArticleCommentsError);

  const dispatch = useDispatch();

  const handleSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsArticleById(id));
    dispatch(fetchRecommendations());
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
      <Page className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text
          size={TextSize.L}
          title={t('recommendations')}
          className={styles.commentTitle}
        />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={styles.recommendations}
          target="_blank"
        />
        <Text
          size={TextSize.L}
          title={t('Comments')}
          className={styles.commentTitle}
        />
        <AddCommentForm onSendComment={handleSendComment} />
        <CommentList comments={comments} isLoading={commentsIsLoading} />
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
