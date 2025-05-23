import { HTMLAttributes, memo, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames';

import styles from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  className?: string;
  children: ReactNode,
  theme?: CardTheme,
  fullWidth?: boolean;
}

function Card(props: CardProps) {
  const {
    className,
    children,
    fullWidth,
    theme = CardTheme.NORMAL,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(styles.Card, {
        [styles.fullWidth]: fullWidth,
      }, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default memo(Card);
