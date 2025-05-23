import { memo, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames';
import Button, { ButtonSize, ButtonTheme } from '@/shared/ui/Button/ui/Button';
import { LanguageSwitcher } from '@/shared/ui/LanguageSwitcher';
import { VerticalStack } from '@/shared/ui/Stack';

import styles from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

function Sidebar(props: SidebarProps) {
  const [collapsed, setCollpased] = useState(false);
  const onToggle = () => setCollpased((prev) => !prev);

  const sidebarItemList = useSelector(getSidebarItems);

  const { t } = useTranslation();

  return (
    <aside
      data-testid="sidebar"
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        // eslint-disable-next-line react/destructuring-assignment
        props.className,
      ])}
    >
      <Button
        type="button"
        onClick={onToggle}
        data-testid="sidebar-toggle"
        className={styles.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.XL}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VerticalStack className={styles.items} gap="16" role="navigation">
        {sidebarItemList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </VerticalStack>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </aside>
  );
}

export default memo(Sidebar);
