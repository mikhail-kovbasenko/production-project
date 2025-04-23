import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

function PageError(props: PageErrorProps) {
  const { t } = useTranslation();

  // eslint-disable-next-line no-restricted-globals
  const reloadPage = () => location.reload();

  return (
    <div className={classNames(styles.PageError, {}, [props.className])}>
      <p>{t('Error')}</p>
      <Button onClick={reloadPage}>
        {t('Refresh')}
      </Button>
    </div>
  );
}

export default PageError;
