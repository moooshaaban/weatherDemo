import * as assets from '@core/assets/images';

export const AppAssets = {
  ...assets,
};
export type AssetsType = keyof typeof AppAssets;

export const appAssets = AppAssets;
