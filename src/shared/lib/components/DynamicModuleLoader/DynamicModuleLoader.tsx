import {
  Fragment, PropsWithChildren, ReactNode, useEffect,
} from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList,
  removeAfterOnMount?: boolean;
}

function DynamicModuleLoader(props: PropsWithChildren<DynamicModuleLoaderProps>) {
  const {
    children,
    reducers,
    removeAfterOnMount = true,
  } = props;
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();

    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];

      if (!mounted) {
        store.reducerManager.add(name as StateSchemaKey, reducer);

        dispatch({ type: `@INIT ${name}` });
      }
    });

    return () => {
      if (removeAfterOnMount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name}` });
        });
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {children}
    </Fragment>
  );
}

export default DynamicModuleLoader;
