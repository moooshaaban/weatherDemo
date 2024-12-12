import React, { useEffect } from 'react';
import { persist, store } from '@core/store';
import { Provider } from 'react-redux';
import dayjs from 'dayjs';
require('dayjs/locale/ar');
import { PersistGate } from 'redux-persist/integration/react';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Lang, persistQueryClientOptions, queryClient } from '@core/utils';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { NavigationContainerWrapper } from '@core/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { langConfig } from '@core/translations';

dayjs.extend(relativeTime);
dayjs.extend(duration);

function App(): JSX.Element {
  useEffect(() => {
    langConfig(Lang.en);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <PersistQueryClientProvider
            client={queryClient}
            persistOptions={persistQueryClientOptions}>
            <SafeAreaProvider>
              <NavigationContainerWrapper />
            </SafeAreaProvider>
          </PersistQueryClientProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
