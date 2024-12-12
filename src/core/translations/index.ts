import I18n from 'react-native-i18n';
import en from './en.translation'; // English translations
import ar from './ar.translation'; // Arabic translations
import { Direction, Lang } from '@core/utils'; // Utility types for direction and language
import { store } from '@core/store'; // Redux store
import { changeDirection } from '@core/slices'; // Redux action to change text direction

// Object containing available languages and their translations
export const availableLanguages = {
  ar,
  en,
};

// Configuration function for setting up language and text direction
export const langConfig = (lang?: Lang) => {
  // Enable fallbacks to default locale if translations are missing
  I18n.fallbacks = true;

  let defaultLang = lang;

  // Get the current locale from I18n, and extract the language code (e.g., "en" from "en-US")
  let currentLang = I18n.currentLocale()?.split('-')[0];

  if (!Lang[currentLang as Lang]) {
    currentLang = Lang.ar;
  }

  I18n.translations = availableLanguages;

  // Dispatch action to change text direction based on the selected language
  store.dispatch(
    changeDirection(defaultLang === Lang.ar ? Direction.rtl : Direction.ltr),
  );

  // Set the locale for I18n based on the provided language or fallback to current language
  I18n.locale = defaultLang || lang || currentLang;

  // Set the default locale to the current locale
  I18n.defaultLocale = I18n.locale;

  // Return the configured locale
  return I18n.locale;
};
