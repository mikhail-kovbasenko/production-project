import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';

import styles from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/types';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock
}

function ArticleImageBlockComponent(props: ArticleImageBlockComponentProps) {
  const {
    className,
    block,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
      <img src={block.src} className={styles.img} alt={block.title} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
}

export default memo(ArticleImageBlockComponent);
