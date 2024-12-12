import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  combineReducers,
  Action,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import {
  LangReducer,
  ThemeReducer,
} from '@core/slices';

const reducers = combineReducers({
  lang: LangReducer,
  theme: ThemeReducer,
  // cities: CitiesReducer,
});

export type RootState = ReturnType<typeof reducers>;

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['lang', 'theme', 'cities'],
};

export const rootReducer = persistReducer(persistConfig, reducers);

export type RootStore = ReturnType<typeof reducers>;
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;
export type AppDispatch = ThunkDispatch<RootState, AppThunk, Action<string>>;
