import { ArticleList } from 'entities/Article';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { VerticalStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text';
import { useGetArticleRecommendationsQuery } from '../api/articleRecommendationsApi';
import styles from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
  className?: string;
}

function ArticleRecommendationsList(props: ArticleRecommendationsListProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation('article');

  const { isLoading, data: articles } = useGetArticleRecommendationsQuery(4);

  if (isLoading) {
    return null;
  }

  return (
    <VerticalStack className={classNames('', {}, [className])} gap="8">
      <Text
        size={TextSize.L}
        title={t('recommendations')}
        className={styles.commentTitle}
      />
      <ArticleList
        articles={articles}
        target="_blank"
        className={styles.recommendations}
        isLoading={isLoading}
      />
    </VerticalStack>
  );
}

export default ArticleRecommendationsList;
