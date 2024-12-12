import { isAndroid } from '@core/utils';

/* prettier-ignore */ // This line of code disables Prettier formatting for the next lines of code
export const LIGHT_FONTS_EN = {
  // 'Thin': isAndroid ? 'Roboto-Thin' : 'Roboto Thin',
  // 'Thin-Italic': isAndroid ? 'Roboto-ThinItalic' : 'Roboto Thin Italic',

  // 'Light': isAndroid ? 'Roboto-Light' : 'Roboto Light',
  // 'Light-Italic': isAndroid ? 'Roboto-LightItalic' : 'Roboto Light Italic',

  // 'Regular': isAndroid ? 'Roboto-Regular' : 'Roboto',
  // 'Regular-Italic': isAndroid ? 'Roboto-Italic' : 'Roboto Italic',

  // 'Medium': isAndroid ? 'Roboto-Medium' : 'Roboto Medium',
  // 'Medium-Italic': isAndroid ? 'Roboto-MediumItalic' : 'Roboto Medium Italic',

  // 'Bold': isAndroid ? 'Roboto-Bold' : 'Roboto Bold',
  // 'Bold-Italic': isAndroid ? 'Roboto-BoldItalic' : 'Roboto Bold Italic',

  // 'Black': isAndroid ? 'Roboto-Black' : 'Roboto Black',
  // 'Black-Italic': isAndroid ? 'Roboto-BlackItalic' : 'Roboto Black Italic',

  '100': isAndroid ? 'Roboto-Thin' : 'Roboto Thin',
  '200': isAndroid ? 'Roboto-Thin' : 'Roboto Thin',
  '300': isAndroid ? 'Roboto-Light' : 'Roboto Light',
  '400': isAndroid ? 'Roboto-Regular' : 'Roboto',
  '500': isAndroid ? 'Roboto-Medium' : 'Roboto Medium',
  '600': isAndroid ? 'Roboto-Medium' : 'Roboto Medium',
  '700': isAndroid ? 'Roboto-Bold' : 'Roboto Bold',
  '800': isAndroid ? 'Roboto-Bold' : 'Roboto Bold',
  '900': isAndroid ? 'Roboto-Black' : 'Roboto Black',
  bold: isAndroid ? 'Roboto-Bold' : 'Roboto Bold',
  normal: isAndroid ? 'Roboto-Regular' : 'Roboto',
};


export const LIGHT_FONTS_EN_Italic = {

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
