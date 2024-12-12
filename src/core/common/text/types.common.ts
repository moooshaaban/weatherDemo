
import { TranslationProps, TranslationWord, TranslatorText, Variant } from '@src/core/utils';
import { TextStyle, ViewStyle } from 'react-native';
import { StyleProp, TextProps } from 'react-native';
import { AnimatedProps } from 'react-native-reanimated';

export enum TextAlign {
  LEFT = 'left',
  RIGHT = 'right',
}
export interface CustomTextProps extends Omit<TextProps, 'style'> {
  style?: StyleProp<TextStyle>;
  containerStyle?: ViewStyle | ViewStyle[] | StyleProp<ViewStyle>;
  alignment?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  title?: TranslatorText;
  lineHeight?: number;
  value?: string;
  variant?: Variant;
  size?: number;
  weight?:
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;
  styleMode?: "normal" | "italic"
}
export interface CustomAnimatedTextProps
  extends Omit<AnimatedProps<TextProps>, 'style'> {
  style?: StyleProp<TextStyle>;
  alignment?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  title?:
  | {
    locale: TranslationWord;
    localeProps?: TranslationProps;
  }
  | TranslationWord;
  lineHeight?: number;
  value?: string;
  variant?: Variant;
  size?: number;
  weight?:
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;
}
