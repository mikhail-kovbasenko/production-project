import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { classNames } from '@/shared/lib/classNames';
import { SidebarItemType } from '../../model/types/types';
import styles from './SidebarItem.module.scss';

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
