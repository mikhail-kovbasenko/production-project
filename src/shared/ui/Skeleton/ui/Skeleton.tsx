import { CSSProperties } from 'react';

import { classNames } from '@/shared/lib/classNames';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

function Skeleton(props: SkeletonProps) {
  const {
    className,
    height,
    width,
    border,
  } = props;

  const cssStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={classNames(styles.Skeleton, {}, [className])} style={cssStyles} />
  );
}

export default Skeleton;
