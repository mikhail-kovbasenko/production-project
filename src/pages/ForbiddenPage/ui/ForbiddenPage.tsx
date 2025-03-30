import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
  className?: string;
}

function ForbiddenPage(props: ForbiddenPageProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ForbiddenPage, {}, [className])}>
      {t('Not available')}
    </div>
  );
}

export default memo(ForbiddenPage);
