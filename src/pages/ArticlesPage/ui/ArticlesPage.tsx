import { ArticleList } from 'entities/Article';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Page } from 'widgets/Page';
import { useSearchParams } from 'react-router-dom';
import styles from './ArticlesPage.module.scss';
import {
  getArticlesPageLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage/initArticlesPage';
import {
  articlesPageReducers,
  getArticles,
} from '../model/slice/articlesPageSlice';
import ArticlesPageFilter from './ArticlesPageFilter/ArticlesPageFilter';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducers,
};

function ArticlesPage(props: ArticlesPageProps) {
  const { className } = props;

  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);

  const isLoading = useSelector(getArticlesPageLoading);
  const view = useSelector(getArticlesPageView);

  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterOnMount={false}>
      <Page
        className={classNames(styles.ArticlesPage, {}, [className])}
        onScrollEnd={!isLoading ? onLoadNextPart : undefined}
      >
        <ArticlesPageFilter />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={styles.list}
        />
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticlesPage);
