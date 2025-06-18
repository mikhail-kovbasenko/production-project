import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames';

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
    <div
      className={classNames(styles.ForbiddenPage, {}, [className])}
      data-testid="ForbiddenPage"
    >
      {t('Not available')}
    </div>
  );
}

export default memo(ForbiddenPage);
