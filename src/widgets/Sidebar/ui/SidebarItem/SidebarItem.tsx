import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { AppLink, AppLinkTheme } from '../../../../shared/ui/AppLink';
import { SidebarItemType } from '../../model/types';
import styles from './SidebarItem.module.scss';
import { classNames } from '../../../../shared/lib/classNames';

interface SidebarItemProps {
  item: SidebarItemType
  collapsed?: boolean;
}

function SidebarItem(props: SidebarItemProps) {
  const {
    item,
    collapsed,
  } = props;

  const { t } = useTranslation();

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
