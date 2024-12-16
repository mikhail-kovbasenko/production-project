import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Card } from 'shared/ui/Card';
import { Skeleton } from 'shared/ui/Skeleton';
import styles from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/types';

interface ArticleListItemSkeletonProps {
  view: ArticleView,
  className?: string
}

function ArticleListItemSkeleton(props: ArticleListItemSkeletonProps) {
  const { view, className } = props;

  if (view === ArticleView.BIG) {
    return (
      <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} className={styles.username} />
            <Skeleton width={150} height={16} className={styles.date} />
          </div>
          <Skeleton width={250} height={24} className={styles.title} />
          <Skeleton className={styles.img} height={200} />
          <div className={styles.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} className={styles.img} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} />
      </Card>
    </div>
  );
}

export default memo(ArticleListItemSkeleton);
