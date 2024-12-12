import I18n from 'react-native-i18n';
import en from '../translations/en.translation';

// Defines the type for the translations object. 'en' is expected to be an object containing translation keys and values.
export type Words = typeof en;

// Interface representing the optional parameters for translation.
export interface TranslationProps<Translation> {
  params?: Record<string, any>; // Optional parameters to be used in the translation.
  _key?: string; // Optional key to access a specific part of the translation result.
}

// Translation function to fetch and return the translated text.
export const translate = <Translation extends keyof Words>(
  word: Translation, // The key for the translation string.
  props?: TranslationProps<Translation>, // Optional parameters for the translation.
): string | undefined => {
  // If _key is defined in props, use it to access a specific part of the translation.
  return props?._key !== undefined
    ? I18n.t(word, props.params)[props._key]
    : I18n.t(word, props?.params); // Otherwise, return the entire translation.
};

// Example usage of the translate function.
/**
 * 
//Translates 'welcome_message' and returns the string.
// (en/ar file)-> welcome_message: 'Hello ',
const greeting = translate('welcome_message'); 
result--->  Hello

//Translates 'welcome_message' with a specific key .
//(en/ar file)-> welcome_message: {
greeting: 'Hello and welcome ',
hello : 'Hello '
},
const personalizedGreetingWithKey = translate('welcome_message', { _key: 'greeting'}); 

result--->  Hello and welcome 

//Translates 'welcome_message' with a specific param .
// (en/ar file)-> greeting_with_name: 'Hello {{name}}'

const personalizedGreeting =    translate('welcome_message',{params:{name:'ahmed'}})

result--->  Hello ahmed

*/
