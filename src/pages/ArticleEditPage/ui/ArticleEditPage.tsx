import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { classNames } from '@/shared/lib/classNames';
import { Page } from '@/widgets/Page';

import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

function ArticleEditPage(props: ArticleEditPageProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation('article');

  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames(styles.ArticleEditPage, {}, [className])}>
      {isEdit ? `ARTICLE_EDIT_PAGE_WITH_ID=${id}` : 'ARTICLE_NEW_PAGE'}
    </Page>
  );
}

export default memo(ArticleEditPage);
