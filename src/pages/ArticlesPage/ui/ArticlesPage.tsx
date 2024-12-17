import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useSelector } from 'react-redux';
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks';
import {
  articlesPageActions,
  articlesPageReducers,
  getArticles,
} from '../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageError,
  getArticlesPageLoading,
  getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { ArticleViewSelector } from '../../../features/ArticleViewSelector';

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
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('', {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  );
}

export default memo(ArticlesPage);
