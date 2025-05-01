import { memo, SVGProps, VFC } from 'react';
import { classNames } from '@/shared/lib/classNames';
import styles from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement>{
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
    ...otherProps
  } = props;

  return (
    <Svg
      className={classNames(styles.Icon, {
        [styles.clearFill]: clearFill,
        [styles.inverted]: inverted,
      }, [className])}
      {...otherProps}
    />
  );
}

export default memo(Icon);
