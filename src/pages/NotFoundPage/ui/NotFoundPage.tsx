import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

function NotFoundPage(props: NotFoundPageProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.NotFoundPage, {}, [props.className])}>
      {t('Page not found')}
    </div>
  );
}

export default NotFoundPage;
