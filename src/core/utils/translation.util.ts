import I18n from 'react-native-i18n';
import ar from '../translations/ar.translation';
export type Words = typeof ar;
export type TranslationWord = keyof Words;
export interface TranslationProps {
  params?: {} | undefined;
  _key?: string;
}
export const translate = <Translation extends TranslationWord>(
  word: Translation,
  props?: TranslationProps,
) => {
  return props?._key !== undefined
    ? I18n.t(word, props.params)[props._key]
    : I18n.t(word, props?.params);
};
export type TranslateType = typeof translate;
export type Translate =
  | {
    locale: TranslationWord;
    localeProps?: TranslationProps;
  }
  | TranslationWord;
