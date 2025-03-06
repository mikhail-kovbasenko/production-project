import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
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
    size?: TextSize
}

function Text(props: TextProps) {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const Header = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(
      styles.Text,
      {},
      [className, styles[theme], styles[align], styles[size]],
    )}
    >
      {title && <Header className={styles.title}>{title}</Header>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}

export default memo(Text);
