import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/types';
import { Text } from '../../../../shared/ui/Text';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock
}

function ArticleTextBlockComponent(props: ArticleTextBlockComponentProps) {
  const {
    className,
    block,
  } = props;

  const { t } = useTranslation();

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
