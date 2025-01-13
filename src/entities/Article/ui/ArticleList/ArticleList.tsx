import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { t } from 'i18next';
import { Text } from 'shared/ui/Text';
import { TextSize } from 'shared/ui/Text/ui/Text';
import { Article, ArticleView } from '../../model/types/types';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView,
  target?: HTMLAttributeAnchorTarget
}

const renderArticle = (article: Article, view: ArticleView, target?: HTMLAttributeAnchorTarget) => (
  <ArticleListItem
    article={article}
    view={view}
    className={styles.card}
    key={article.id}
    target={target}
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
    target,
  } = props;

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        <Text title={t('articles not found')} size={TextSize.L} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
      {
        articles.length > 0
          ? articles.map((article) => renderArticle(article, view, target))
          : null
      }
      {isLoading && getSkeletons(view)}
    </div>
  );
}

export default memo(ArticleList);
