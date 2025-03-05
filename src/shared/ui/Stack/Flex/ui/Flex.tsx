import { classNames } from 'shared/lib/classNames';
import { memo, ReactNode } from 'react';
import styles from './Flex.module.scss';
import {
  alignClasses,
  justifyClasses,
  directionClasses,
  FlexAlign,
  FlexDirection,
  FlexJustify,
  FlexGap,
  gapClasses,
} from '../model/types/types';

export interface FlexProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  fullWidth?: boolean;
}

function Flex(props: FlexProps) {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    fullWidth,
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  return (
    <div className={classNames(styles.Flex, {
      [styles.fullWidth]: fullWidth,
    }, classes)}
    >
      {children}
    </div>
  );
}

export default memo(Flex);
