import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Fragment, memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Icon } from 'shared/ui/Icon';
import { Card } from 'shared/ui/Card';
import { useHover } from 'shared/lib/hooks';
import { Avatar } from 'shared/ui/Avatar';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/router/config';
import styles from './ArticleListItem.module.scss';
import { Article, ArticleBlockType, ArticleView } from '../../model/types/types';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
  className?: string;
  article: Article,
  view: ArticleView
}

function ArticleListItem(props: ArticleListItemProps) {
  const {
    className,
    article,
    view,
  } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  // const [isHover, bindHover] = useHover();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [navigate, article.id]);

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
          <img src={article.img} className={styles.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
          )}
          <div className={styles.footer}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onOpenArticle}>
              {t('read more')}
            </Button>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
      <Card className={styles.card} onClick={onOpenArticle}>
        <div className={styles.imageWrapper}>
          <img src={article.img} className={styles.img} alt={article.title} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={styles.title} />
      </Card>
    </div>
  );
}

export default memo(ArticleListItem);
