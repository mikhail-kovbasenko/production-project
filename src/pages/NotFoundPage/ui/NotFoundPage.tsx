import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Page } from '@/widgets/Page';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

function NotFoundPage(props: NotFoundPageProps) {
  const { t } = useTranslation();

  return (
    <Page className={classNames(styles.NotFoundPage, {}, [props.className])}>
      {t('Page not found')}
    </Page>
  );
}

export default NotFoundPage;
