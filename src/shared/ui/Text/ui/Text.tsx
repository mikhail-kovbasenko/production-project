import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './Text.module.scss';
import {
  mapSizeToHeaderTag, TextAlign, TextSize, TextTheme,
} from '../model/types/types';

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign
    size?: TextSize;

    'data-testid'?: string;
}

function Text(props: TextProps) {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text',
  } = props;

  const Header = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(
      styles.Text,
      {},
      [className, styles[theme], styles[align], styles[size]],
    )}
    >
      {title && (
      <Header
        className={styles.title}
        data-testid={`${dataTestId}.Header`}
      >
        {title}
      </Header>
      )}
      {text && (
      <p
        className={styles.text}
        data-testid={`${dataTestId}.Paragraph`}
      >
        {text}
      </p>
      )}
    </div>
  );
}

export default memo(Text);
