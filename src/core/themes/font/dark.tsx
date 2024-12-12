import { isAndroid } from '@core/utils';

/* prettier-ignore */ //=====> This line of code disables Prettier formatting for the next lines of code

export const DARK_FONTS_EN = {
  '100': isAndroid ? 'Roboto-Thin' : 'Roboto Thin',
  '200': isAndroid ? 'Roboto-Thin' : 'Roboto Thin',
  '300': isAndroid ? 'Roboto-Light' : 'Roboto Light',
  '400': isAndroid ? 'Roboto-Regular' : 'Roboto',
  '500': isAndroid ? 'Roboto-Medium' : 'Roboto Medium',
  '600': isAndroid ? 'Roboto-Medium' : 'Roboto Medium',
  '700': isAndroid ? 'Roboto-Bold' : 'Roboto Bold',
  '800': isAndroid ? 'Roboto-Bold' : 'Roboto Bold',
  '900': isAndroid ? 'Roboto-Black' : 'Roboto Black',
  bold: isAndroid ? 'Roboto-Black' : 'Roboto Black',
};

export const DARK_FONTS_EN_Italic = {

  '100': isAndroid ? 'Roboto-ThinItalic' : 'Roboto Thin Italic',
  '200': isAndroid ? 'Roboto-ThinItalic' : 'Roboto Thin Italic',
  '300': isAndroid ? 'Roboto-LightItalic' : 'Roboto Light Italic',
  '400': isAndroid ? 'Roboto-Italic' : 'Roboto Italic',
  '500': isAndroid ? 'Roboto-MediumItalic' : 'Roboto Medium Italic',
  '600': isAndroid ? 'Roboto-MediumItalic' : 'Roboto Medium Italic',
  '700': isAndroid ? 'Roboto-BoldItalic' : 'Roboto Bold Italic',
  '800': isAndroid ? 'Roboto-BoldItalic' : 'Roboto Bold Italic',
  '900': isAndroid ? 'Roboto-BlackItalic' : 'Roboto Black Italic',
  bold: isAndroid ? 'Roboto-BoldItalic' : 'Roboto Bold Italic',
  normal: isAndroid ? 'Roboto-Italic' : 'Roboto Italic',
};


