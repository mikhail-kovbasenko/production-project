import { ArticleList, ArticleView } from 'entities/Article';
import { ArticleViewSelector } from 'features/ArticleViewSelector';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import { Page } from 'shared/ui/Page';
import {
  getArticlesPageLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage }
  from '../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
  articlesPageActions,
  articlesPageReducers,
  getArticles,
} from '../model/slice/articlesPageSlice';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducers,
};

function ArticlesPage(props: ArticlesPageProps) {
  const { className } = props;

  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const articles = useSelector(getArticles.selectAll);

  const isLoading = useSelector(getArticlesPageLoading);
  const view = useSelector(getArticlesPageView);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({
      page: 1,
    }));
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        className={classNames('', {}, [className])}
        onScrollEnd={!isLoading ? onLoadNextPart : undefined}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
}

export default memo(ArticlesPage);
