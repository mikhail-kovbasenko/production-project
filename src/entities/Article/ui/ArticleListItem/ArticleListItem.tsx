import { Fragment, HTMLAttributeAnchorTarget, memo } from 'react';

import { useTranslation } from 'react-i18next';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import { RoutePath } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';

import styles from './ArticleListItem.module.scss';
import { Skeleton } from '../../../../shared/ui/Skeleton';
import { Article, ArticleBlockType, ArticleView } from '../../model/types/types';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string;
  article: Article,
  view: ArticleView,
  target?: HTMLAttributeAnchorTarget
}

function ArticleListItem(props: ArticleListItemProps) {
  const {
    className,
    article,
    view,
    target,
  } = props;
  const { t } = useTranslation('article');
  // const navigate = useNavigate();

  // const onOpenArticle = useCallback(() => {
  //   navigate(RoutePath.article_details + article.id);
  // }, [navigate, article.id]);

  const views = (
    <Fragment>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Svg={EyeIcon} />
    </Fragment>
  );
  const types = <Text text={article.type.join(', ')} className={styles.types} />;

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT);

    return (
      <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={styles.username} />
            <Text text={article.createdAt} className={styles.date} />
          </div>
          <Text title={article.title} className={styles.title} />
          {types}
          <AppImage
            src={article.img}
            className={styles.img}
            alt={article.title}
            fallback={<Skeleton width="100%" height={250} />}
          />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
          )}
          <div className={styles.footer}>

            <AppLink to={RoutePath.article_details + article.id} target={target}>
              <Button theme={ButtonTheme.OUTLINE}>
                {t('read more')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
      to={RoutePath.article_details + article.id}
      target={target}
    >
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <AppImage
            src={article.img}
            className={styles.img}
            alt={article.title}
            fallback={<Skeleton width={200} height={200} />}
          />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={styles.title} />
      </Card>
    </AppLink>
  );
}

export default memo(ArticleListItem);
