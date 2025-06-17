import { memo, useCallback } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
  ArticleSortField, ArticleType, ArticleView,
} from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { classNames } from '@/shared/lib/classNames';
import { useAppDispatch, useDebounce } from '@/shared/lib/hooks';
import { SortOrder } from '@/shared/types/types';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';

import styles from './ArticlesPageFilter.module.scss';
import {
  getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';

interface ArticlesPageFilterProps {
  className?: string;
}

function ArticlesPageFilter(props: ArticlesPageFilterProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation('article');
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debounceFetchData = useDebounce(fetchData, 500);

  const toFirstPage = useCallback(() => {
    dispatch(articlesPageActions.setPage(1));
  }, [dispatch]);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
      toFirstPage();
      debounceFetchData();
    },
    [dispatch, toFirstPage, debounceFetchData],
  );
  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      toFirstPage();
      debounceFetchData();
    },
    [dispatch, toFirstPage, debounceFetchData],
  );
  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      toFirstPage();
      debounceFetchData();
    },
    [dispatch, toFirstPage, debounceFetchData],
  );
  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      toFirstPage();
      debounceFetchData();
    },
    [dispatch, toFirstPage, debounceFetchData],
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      toFirstPage();
      fetchData();
    },
    [dispatch, toFirstPage, fetchData],
  );

  return (
    <div className={classNames(styles.ArticlesPageFilter, {}, [className])}>
      <div className={styles.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={styles.search}>
        <Input
          placeholder={t('search')}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={styles.tabs}
      />
    </div>
  );
}

export default memo(ArticlesPageFilter);
