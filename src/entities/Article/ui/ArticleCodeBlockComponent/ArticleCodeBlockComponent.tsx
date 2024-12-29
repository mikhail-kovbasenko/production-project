import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Code } from 'shared/ui/Code';
import { ArticleCodeBlock } from '../../model/types/types';
import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
}

function ArticleCodeBlockComponent(props: ArticleCodeBlockComponentProps) {
  const {
    className,
    block,
  } = props;

  return (
    <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
}

export default memo(ArticleCodeBlockComponent);
