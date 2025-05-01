import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/RatingCard';
import { useGetArticleRatingQuery, useRateArticleMutation } from '../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '../../../shared/ui/Skeleton';

export interface ArticleRatingProps {
  articleId: string;
  className?: string;
}

function ArticleRating(props: ArticleRatingProps) {
  const {
    className,
    articleId,
  } = props;

  const { t } = useTranslation('article');
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRatingQuery({
    userId: userData?.id ?? '',
    articleId,
  });

  const [rateArticleMutation] = useRateArticleMutation();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: userData?.id || '',
        articleId,
        rate: starsCount,
        feedback,
      });
    } catch (error) {
      console.log(error);
    }
  }, [userData, articleId, rateArticleMutation]);

  const onCancel = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);
  const onAccept = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      rate={rating?.rate}
      className={className}
      title={t('review article')}
      feedBackTitle={t('feedback article')}
      hasFeedback
    />
  );
}

export default memo(ArticleRating);
