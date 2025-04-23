import { CSSProperties, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string
}

function Avatar(props: AvatarProps) {
  const {
    className,
    src,
    size = 100,
    alt = '',
  } = props;

  const mods: Mods = {};

  const cssStyles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      src={src}
      className={classNames(styles.Avatar, mods, [className])}
      style={cssStyles}
      alt={alt}
    />
  );
}

export default Avatar;
