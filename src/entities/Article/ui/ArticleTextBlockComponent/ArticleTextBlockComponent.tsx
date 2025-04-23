import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Text } from '@/shared/ui/Text';
import { ArticleTextBlock } from '../../model/types/types';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

function ArticleTextBlockComponent(props: ArticleTextBlockComponentProps) {
  const {
    className,
    block,
  } = props;

  return (
    <div className={classNames(styles.ArticleTextBlockComponent, {}, [className])}>
      {block.title && (
        <Text title={block.title} className={styles.title} />
      )}
      {block.paragraphs.map((paragraph) => (
        <Text key={paragraph} text={paragraph} className={styles.paragraph} />
      ))}
    </div>
  );
}

export default memo(ArticleTextBlockComponent);
