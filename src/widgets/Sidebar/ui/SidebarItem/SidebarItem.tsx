import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';

import styles from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/types';

interface SidebarItemProps {
  item: SidebarItemType
  collapsed?: boolean;
}

function SidebarItem(props: SidebarItemProps) {
  const {
    item,
    collapsed,
  } = props;

  const isAuth = useSelector(getUserAuthData);

  const { t } = useTranslation();

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.INVERTED}
      to={item.path}
      className={classNames(styles.item, { [styles.collapsed]: collapsed })}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
}

export default memo(SidebarItem);
