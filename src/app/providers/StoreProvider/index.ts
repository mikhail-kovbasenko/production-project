import type {
  StateSchema,
  ReduxStoreWithManager,
  StateSchemaKey,
  ThunkExtraArg,
  ThunkConfig,
} from './config/StateSchema';
import { createReduxStore } from './config/store';
import StoreProvider from './ui/StoreProvider';

export type { AppDispatch } from './config/store';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ReduxStoreWithManager,
  StateSchemaKey,
  ThunkExtraArg,
  ThunkConfig,
};
