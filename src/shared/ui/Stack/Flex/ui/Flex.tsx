import {
  HTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames } from '@/shared/lib/classNames';
import {
  alignClasses,
  directionClasses,
  FlexAlign,
  FlexDirection,
  FlexGap,
  FlexJustify,
  gapClasses,
  justifyClasses,
} from '../model/types/types';
import styles from './Flex.module.scss';

type DivProps = HTMLAttributes<HTMLDivElement>;

export interface FlexProps extends DivProps {
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
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  return (
    <div
      className={classNames(styles.Flex, {
        [styles.fullWidth]: fullWidth,
      }, classes)}
      {...otherProps}
    >
      {children}
    </div>
  );
}

export default memo(Flex);
