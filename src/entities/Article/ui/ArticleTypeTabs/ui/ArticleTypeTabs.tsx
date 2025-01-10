import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs';
import { ArticleType } from '../../../model/types/types';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType,
  onChangeType: (type: ArticleType) => void;
}

function ArticleTypeTabs(props: ArticleTypeTabsProps) {
  const {
    className,
    value,
    onChangeType,
  } = props;

  const { t } = useTranslation('article');

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.IT,
      content: t('it'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('economics'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('science'),
    },
    {
      value: ArticleType.ALL,
      content: t('all'),
    },
  ], [t]);

  const onTabClick = useCallback(
    (tabItem: TabItem) => {
      onChangeType(tabItem.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      onTabClick={onTabClick}
      value={value}
    />
  );
}

export default memo(ArticleTypeTabs);
