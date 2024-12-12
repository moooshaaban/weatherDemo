import { isAndroid } from '@core/utils';

/* prettier-ignore */ // This line of code disables Prettier formatting for the next lines of code
export const LIGHT_FONTS_EN = {
  'Thin': isAndroid ? 'Roboto-Thin' : 'Roboto Thin',
  'Thin-Italic': isAndroid ? 'Roboto-ThinItalic' : 'Roboto Thin Italic',

  'Light': isAndroid ? 'Roboto-Light' : 'Roboto Light',
  'Light-Italic': isAndroid ? 'Roboto-LightItalic' : 'Roboto Light Italic',

  'Regular': isAndroid ? 'Roboto-Regular' : 'Roboto',
  'Regular-Italic': isAndroid ? 'Roboto-Italic' : 'Roboto Italic',

  'Medium': isAndroid ? 'Roboto-Medium' : 'Roboto Medium',
  'Medium-Italic': isAndroid ? 'Roboto-MediumItalic' : 'Roboto Medium Italic',

  'Bold': isAndroid ? 'Roboto-Bold' : 'Roboto Bold',
  'Bold-Italic': isAndroid ? 'Roboto-BoldItalic' : 'Roboto Bold Italic',

  'Black': isAndroid ? 'Roboto-Black' : 'Roboto Black',
  'Black-Italic': isAndroid ? 'Roboto-BlackItalic' : 'Roboto Black Italic',
};

/**
-- optional -- 

* Define a list of fonts specific to a language  
* make sure the list of fonts fo each language should contain all fonts in DARK_FONTS

export const DARK_FONTS_AR  = {
 ...add the required fonts here
};

 * use this font list in theme reducer as following 
onSystemModeChange(
      state,
      {payload: {lang, systemMode}}: PayloadAction<SystemModeChangePayload>,
    ) {
      if (systemMode == 'dark') {
        state.colors = DARK_COLORS;
        state.fonts = lang == Lang.ar ? DARK_FONTS_AR : DARK_FONTS_EN;
        state.systemMode = systemMode;
      } else {
        state.colors = LIGHT_COLORS;
        state.fonts = lang == Lang.ar ? LIGHT_FONTS_AR : LIGHT_FONTS_EN;
        state.systemMode = systemMode;
      }
    },
    
    
 */
