import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/types';
import { Code } from '../../../../shared/ui/Code';
import { Button } from '../../../../shared/ui/Button';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock
}

function ArticleCodeBlockComponent(props: ArticleCodeBlockComponentProps) {
  const {
    className,
    block,
  } = props;

  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
}

export default memo(ArticleCodeBlockComponent);
