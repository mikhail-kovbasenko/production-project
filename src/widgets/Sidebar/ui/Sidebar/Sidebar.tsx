import { memo, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { useSelector } from 'react-redux';
import SidebarItem from '../SidebarItem/SidebarItem';
import styles from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems/getSidebarItems';

interface SidebarProps {
  className?: string;
}

function Sidebar(props: SidebarProps) {
  const [collapsed, setCollpased] = useState(false);
  const onToggle = () => setCollpased((prev) => !prev);

  const sidebarItemList = useSelector(getSidebarItems);

  const { t } = useTranslation();

  return (
    <menu
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
      <div className={styles.items}>
        {sidebarItemList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </menu>
  );
}

export default memo(Sidebar);
