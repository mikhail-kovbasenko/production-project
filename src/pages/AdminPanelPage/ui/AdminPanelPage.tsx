import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Page } from '@/widgets/Page';
import styles from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
  className?: string;
}

function AdminPanelPage(props: AdminPanelPageProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation('adminPanel');

  return (
    <Page className={classNames(styles.AdminPanePage, {}, [className])}>
      {t('Admin panel')}
    </Page>
  );
}

export default memo(AdminPanelPage);
