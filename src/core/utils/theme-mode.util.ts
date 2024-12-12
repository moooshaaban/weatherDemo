import { LIGHT_COLORS, } from '@core/themes';
export type Colors = typeof LIGHT_COLORS;
export type Variant = keyof Colors;

export enum ThemeMode {
  DARK_MODE = 'darkMode',
  LIGHT_MODE = 'lightMode',
  SYSTEM_MODE = 'systemMode',
}

