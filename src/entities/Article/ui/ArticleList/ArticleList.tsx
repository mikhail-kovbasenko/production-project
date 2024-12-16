import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/types';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView
}

const renderArticle = (article: Article, view: ArticleView) => (
  <ArticleListItem
    article={article}
    view={view}
    className={styles.card}
    key={article.id}
  />
);

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0).map((_, index) => (
    <ArticleListItemSkeleton
      view={view}
      // eslint-disable-next-line react/no-array-index-key
      key={index}
      className={styles.card}
    />
  ));

function ArticleList(props: ArticleListProps) {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
  } = props;

  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
      {
        articles.length > 0
          ? articles.map((article) => renderArticle(article, view))
          : null
      }
    </div>
  );
}

export default memo(ArticleList);
