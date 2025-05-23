import { memo, useMemo } from 'react';

import { useTranslation } from 'react-i18next';

import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames';
import { SortOrder } from '@/shared/types/types';
import { Select } from '@/shared/ui/Select';
import { SelectOption } from '@/shared/ui/Select/ui/Select';

import styles from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  sort: ArticleSortField,
  order: SortOrder
}

function ArticleSortSelector(props: ArticleSortSelectorProps) {
  const {
    className,
    onChangeOrder,
    onChangeSort,
    sort,
    order,
  } = props;

  const { t } = useTranslation('article');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('asc'),
    },
    {
      value: 'desc',
      content: t('desc'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('created'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views'),
    },
  ], [t]);

  return (
    <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
      <Select label={t('Sort')} options={sortFieldOptions} value={sort} onChange={onChangeSort} />
      <Select
        label={t('by')}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
        className={styles.order}
      />
    </div>
  );
}

export default memo(ArticleSortSelector);
