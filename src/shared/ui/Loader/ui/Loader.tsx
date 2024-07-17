import { classNames } from 'shared/lib/classNames';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

function Loader(props: LoaderProps) {
  return (
    <div className={classNames(styles['lds-spinner'], {}, [props.className])}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}

export default Loader;
