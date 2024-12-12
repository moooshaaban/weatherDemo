import AsyncStorage from '@react-native-async-storage/async-storage';
import {QueryClient} from '@tanstack/react-query';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {
  PersistQueryClientOptions,
  removeOldestQuery,
} from '@tanstack/react-query-persist-client';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'offlineFirst', // serve data from the cache when offline
      staleTime: 0, // Ensures users always see the most up-to-date information.
      cacheTime: 1000 * 60 * 30, //cache for  30 minutes ,
    },
  },
});

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
  retry: removeOldestQuery,
});
export const persistQueryClientOptions: Omit<
  PersistQueryClientOptions,
  'queryClient'
> = {
  persister: asyncStoragePersister,
  maxAge: 1000 * 60 * 30, // the cached data automatically removed by the persister after 30 minutes
};
