import { classNames } from 'shared/lib/classNames';
import {
  memo, MutableRefObject, ReactNode, useRef, UIEvent,
} from 'react';
import { useAppDispatch, useInfiniteScroll, useInitialEffect } from 'shared/lib/hooks';
import { scrollPositionSaveActions }
  from 'features/ScrollPositionSave/model/slice/scrollPositionSaveSlice';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getScrollPositionByPath } from 'features/ScrollPositionSave';
import { StateSchema } from 'app/providers/StoreProvider';
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle';
import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const PAGE_ID = 'PAGE_ID';

function Page(props: PageProps) {
  const {
    className,
    children,
    onScrollEnd,
  } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollPositionByPath(state, pathname));

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(scrollPositionSaveActions.setScrollPosition({
      position: e.currentTarget.scrollTop,
      path: pathname,
    }));
  }, 2500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(styles.Page, {}, [className])}
      onScroll={handleScroll}
      id={PAGE_ID}
    >
      {children}
      {
        onScrollEnd ? <div ref={triggerRef} className={styles.trigger} /> : null
      }
    </section>
  );
}

export default Page;
