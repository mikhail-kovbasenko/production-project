import { ButtonHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames';
import styles from './Button.module.scss';

import 'app/styles/index.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

function Button(props: ButtonProps) {
  const {
    className, theme, children, ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
