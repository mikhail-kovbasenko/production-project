import { Theme, useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from 'shared/ui/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(styles.ThemeSwitcherProps, {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
}

export default ThemeSwitcher;
