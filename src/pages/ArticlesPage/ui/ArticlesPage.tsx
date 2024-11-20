import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticlesPageProps {
  className?: string;
}

function ArticlesPage(props: ArticlesPageProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation('article');

  return (
    <div className={classNames('', {}, [className])}>
      ARTICLES PAGE
    </div>
  );
}

export default memo(ArticlesPage);
