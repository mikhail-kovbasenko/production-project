import { memo, ReactNode, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames';

import styles from './Tabs.module.scss';
import { Card, CardTheme } from '../../Card';

export interface TabItem {
  value: string,
  content: ReactNode
}

interface TabsProps {
  className?: string;
  tabs: TabItem[],
  value: string,
  onTabClick: (tab: TabItem) => void;
}

function Tabs(props: TabsProps) {
  const {
    className,
    tabs,
    value,
    onTabClick,
  } = props;

  const handleClick = useCallback((tabItem: TabItem) => () => onTabClick(tabItem), [onTabClick]);

  return (
    <div className={classNames(styles.Tabs, {}, [className])}>
      {
        tabs.map((tabItem) => {
          const theme = tabItem.value === value
            ? CardTheme.NORMAL
            : CardTheme.OUTLINED;

          return (
            <Card
              theme={theme}
              className={styles.tabItem}
              key={tabItem.value}
              onClick={handleClick(tabItem)}
            >
              {tabItem.content}
            </Card>
          );
        })
      }
    </div>
  );
}

export default memo(Tabs);
