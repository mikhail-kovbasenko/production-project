import { classNames } from '@/shared/lib/classNames';
import { Loader } from '@/shared/ui/Loader';

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

function PageLoader(props: PageLoaderProps) {
  return (
    <div className={classNames(styles.PageLoader, {}, [props.className])}>
      <Loader />
    </div>
  );
}

export default PageLoader;
