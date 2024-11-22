import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/types';
import { Text } from '../../../../shared/ui/Text';
import { TextAlign } from '../../../../shared/ui/Text/ui/Text';

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
