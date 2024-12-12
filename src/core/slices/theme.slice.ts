import { useSelector } from 'react-redux';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  LIGHT_COLORS,
  DARK_COLORS,
  DARK_FONTS_EN,
  LIGHT_FONTS_EN,
} from '@core/themes';
import { RootStore } from '@core/store';
import { Lang } from '@core/utils';

export interface StatsBarState {
  statusBarBackgroundColor: string;
  navigationBarColor: string;
  statusBarStyle: 'light-content' | 'dark-content';
  statusBarTranslucent: boolean;
}
interface ThemeState {
  colors: typeof LIGHT_COLORS | typeof DARK_COLORS;
  fonts: typeof LIGHT_FONTS_EN | typeof DARK_FONTS_EN;
  systemMode?: 'dark' | 'light' | undefined | 'no-preference';
  statusBar: StatsBarState;
}
interface SystemModeChangePayload {
  systemMode: 'dark' | 'light' | undefined | 'no-preference';
  lang: Lang;
}

const initialState: ThemeState = {
  colors: LIGHT_COLORS,
  fonts: LIGHT_FONTS_EN,
  systemMode: 'light',
  statusBar: {
    statusBarBackgroundColor: 'transparent',
    navigationBarColor: 'transparent',
    statusBarStyle: 'dark-content',
    statusBarTranslucent: true,
  },
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    onSystemModeChange(
      state,
      { payload: { lang, systemMode } }: PayloadAction<SystemModeChangePayload>,
    ) {
      if (systemMode == 'dark') {
        state.colors = DARK_COLORS;
        state.fonts = DARK_FONTS_EN;
        state.systemMode = systemMode;
      } else {
        state.colors = LIGHT_COLORS;
        state.fonts = LIGHT_FONTS_EN;
        state.systemMode = systemMode;
      }
    },
    onSetStatusBar(state, { payload }: PayloadAction<Partial<StatsBarState>>) {
      state.statusBar = { ...state.statusBar, ...payload };
    },
    onReSetStatusBar(state) {
      state.statusBar = initialState.statusBar;
    },
  },
});

export const { onSystemModeChange, onReSetStatusBar, onSetStatusBar } =
  themeSlice.actions;

export default themeSlice.reducer;

export const useTheme = () => {
  const theme = useSelector((state: RootStore) => state.theme);

  return theme;
};

export const useColors = () => {
  const colors = useSelector((state: RootStore) => state.theme.colors);
  return colors;
};

export const useFonts = () => {
  const font = useSelector((state: RootStore) => state.theme.fonts);
  return font;
};

export const useStatusBarSelector = () => {
  const statusBar = useSelector((state: RootStore) => state.theme.statusBar);

  return statusBar;
};
