import { Fragment, ReactNode, useEffect } from 'react';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';

interface withDynamicModuleLoaderProps {
    name: StateSchemaKey,
    reducer: Reducer
}

function withDynamicModuleLoader(component: ReactNode) {
  return (props: withDynamicModuleLoaderProps) => {
    const {
      name,
      reducer,
    } = props;

    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
      store.reducerManager.add(name, reducer);

      dispatch({ type: `@INIT ${name}` });

      return () => {
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name}` });
      };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <Fragment>
        {component}
      </Fragment>
    );
  };
}

export default withDynamicModuleLoader;
