import StoreProvider from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type {
  StateSchema,
  ReduxStoreWithManager,
  StateSchemaKey,
  ThunkExtraArg,
  ThunkConfig,
} from './config/StateSchema';

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
