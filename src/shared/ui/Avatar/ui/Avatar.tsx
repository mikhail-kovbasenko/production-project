import { CSSProperties, useMemo } from 'react';

import { classNames, Mods } from '@/shared/lib/classNames';

import styles from './Avatar.module.scss';
import UserIconDefault from '../../../assets/icons/user-avatar-filled.svg';
import { AppImage } from '../../AppImage';
import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
}

function Avatar(props: AvatarProps) {
  const {
    className,
    src,
    size = 100,
    alt = '',
    fallbackInverted,
  } = props;

  const mods: Mods = {};

  const cssStyles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  const errorFallback = <Icon Svg={UserIconDefault} width={size} height={size} inverted={fallbackInverted} />;
  const fallback = <Skeleton border="50%" width={size} height={size} />;

  return (
    <AppImage
      src={src}
      className={classNames(styles.Avatar, mods, [className])}
      style={cssStyles}
      alt={alt}
      errorFallback={errorFallback}
      fallback={fallback}
    />
  );
}

export default Avatar;
