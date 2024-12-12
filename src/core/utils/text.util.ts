import { TranslationProps, TranslationWord } from '@core/utils';

export type TranslatorText =
  | {
    locale: TranslationWord;
    localeProps?: TranslationProps;
  }
  | TranslationWord;
