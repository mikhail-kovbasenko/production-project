import { classNames } from 'shared/lib/classNames';
import {
  memo, MutableRefObject, ReactNode, useRef,
} from 'react';
import styles from './Page.module.scss';
import { useInfiniteScroll } from '../../../lib/hooks';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

function Page(props: PageProps) {
  const {
    className,
    children,
    onScrollEnd,
  } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  return (
    <div ref={wrapperRef} className={classNames(styles.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </div>
  );
}

export default Page;
