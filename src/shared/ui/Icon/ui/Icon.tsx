import { classNames } from 'shared/lib/classNames';
import { memo, SVGProps, VFC } from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: VFC<SVGProps<SVGSVGElement>>;
  clearFill?: boolean;
  inverted?: boolean;
}

function Icon(props: IconProps) {
  const {
    className,
    Svg,
    clearFill,
    inverted,
  } = props;

  return (
    <Svg className={classNames(styles.Icon, {
      [styles.clearFill]: clearFill,
      [styles.inverted]: inverted,
    }, [className])}
    />
  );
}

export default memo(Icon);
