import { HTMLAttributeAnchorTarget, memo } from 'react';
import { t } from 'i18next';
import {
  List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { classNames } from '@/shared/lib/classNames';
import { Text, TextSize } from '@/shared/ui/Text';

import { PAGE_ID } from '@/widgets/Page/ui/Page';
import { Article, ArticleView } from '../../model/types/types';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView,
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
}

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
    virtualized = true,
  } = props;

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        <Text title={t('articles not found')} size={TextSize.L} />
      </div>
    );
  }

  const isBig = view === ArticleView.BIG;

  const itemsPerRow = isBig ? 1 : 4;
  const rowCount = isBig ? articles.length : articles.length / itemsPerRow;

  const rowRenderer = ({
    index, key, style,
  }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(<ArticleListItem
        article={articles[index]}
        view={view}
        className={styles.card}
        target={target}
        key={articles[index].id}
      />);
    }
    return (
      <div style={style} key={key} className={styles.row}>
        {items}
      </div>
    );
  };

  return (
    <WindowScroller
      scrollElement={document.getElementById(PAGE_ID) as Element}
    >
      {({
        height, width, registerChild, onChildScroll, scrollTop,
      }) => (

        <div
          className={classNames(styles.ArticleList, {}, [className, styles[view]])}
          ref={registerChild}
        >
          {
            virtualized
              ? (
                <List
                  rowHeight={isBig ? 700 : 330}
                  height={height ?? 700}
                  width={width ? width - 80 : 700}
                  rowCount={rowCount}
                  rowRenderer={rowRenderer}
                  autoHeight
                  onScroll={onChildScroll}
                  scrollTop={scrollTop}
                />
              )
              : articles.map((article) => (
                <ArticleListItem
                  article={article}
                  view={view}
                  target={target}
                  key={article.id}
                  className={styles.card}
                />
              ))
          }
          {isLoading && getSkeletons(view)}
        </div>

      )}

    </WindowScroller>
  );
}

export default memo(ArticleList);
