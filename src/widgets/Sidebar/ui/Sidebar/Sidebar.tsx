import { useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/router/config';
import AboutPageIcon from 'shared/assets/icons/about.svg';
import MainPageIcon from 'shared/assets/icons/home.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

function Sidebar(props: SidebarProps) {
  const [collapsed, setCollpased] = useState(false);
  const onToggle = () => setCollpased((prev) => !prev);

  const { t } = useTranslation();

  return (
    <div
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

        <AppLink
          theme={AppLinkTheme.INVERTED}
          to={RoutePath.main}
          className={styles.item}
        >
          <MainPageIcon className={styles.icon} />
          <span className={styles.link}>{t('main page')}</span>
        </AppLink>

        <AppLink theme={AppLinkTheme.INVERTED} to={RoutePath.about} className={styles.item}>
          <AboutPageIcon className={styles.icon} />
          <span className={styles.link}>{t('about page')}</span>
        </AppLink>

      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
}

export default Sidebar;
