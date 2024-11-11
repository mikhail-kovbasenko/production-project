import StoreProvider from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
  StateSchema,
  ReduxStoreWithManager,
  StateSchemaKey,
  ThunkExtraArg,
  ThunkConfig,
} from './config/StateSchema';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  StateSchemaKey,
  AppDispatch,
  ThunkExtraArg,
  ThunkConfig,
};
