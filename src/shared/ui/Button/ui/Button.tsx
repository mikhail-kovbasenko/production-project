import { ButtonHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';

import 'app/styles/index.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

function Button(props: ButtonProps) {
  const {
    className,
    theme,
    children,
    square,
    size,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
  };

  return (
    <button
      type="button"
      className={classNames(styles.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
