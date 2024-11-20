import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

interface ArticleDetailsPageProps {
  className?: string;
}

function ArticleDetailsPage(props: ArticleDetailsPageProps) {
  const {
    className,
  } = props;

  const { t } = useTranslation('article');

  return (
    <div className={classNames('', {}, [className])}>
      ARTICLE DETAILS PAGE
    </div>
  );
}

export default memo(ArticleDetailsPage);
