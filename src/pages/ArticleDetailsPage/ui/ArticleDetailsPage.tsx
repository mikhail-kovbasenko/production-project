import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components';

import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { VerticalStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../model/slice';
import { ArticleDetailsComments } from './ArticleDetailsComments';
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

  // const commentsError = useSelector(getArticleCommentsError);

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
        <VerticalStack gap="16" fullWidth>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ArticleRecommendationsList />
          <ArticleDetailsComments id={id} />
        </VerticalStack>
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticleDetailsPage);
