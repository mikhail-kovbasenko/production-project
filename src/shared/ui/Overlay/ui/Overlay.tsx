import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import styles from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

function Overlay(props: OverlayProps) {
  const {
    className,
    onClick,
  } = props;

  return (
    <div className={classNames(styles.Overlay, {}, [className])} onClick={onClick} />
  );
}

export default memo(Overlay);
