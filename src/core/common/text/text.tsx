import { Text, StyleSheet, TextStyle } from 'react-native';
import React, { FC, useMemo } from 'react';
import { CustomTextProps, TextAlign } from '.';
import { useColors, useFonts } from '@core/slices/theme.slice';
import { Lang, fontSize } from '@core/utils';
import { style as intStyle } from './styles';
import { useStyle } from '@core/hooks';
import { Row } from '../row';
import { useCurrentLangSelector, useDirection } from '@src/core/slices';
import { translate } from '@src/core/utils/translation.util';


/**
 * Image Component
 * 
 * This component handles text rendering in multiple ways and manages 
 * fonts dynamically. It also leverages the default text props 
 * from React Native. For instance, I noticed the availability of 
 * italic fonts in some files, and I’ve implemented a solution that 
 * automatically recognizes and retrieves the correct font if the client 
 * requests an italic style via the fontStyle prop.
 * 
 */
export const AppText: FC<CustomTextProps> = props => {
  const {
    children,
    title,
    value = '',
    style,
    variant,
    size,
    weight,
    styleMode,
    alignment,
    lineHeight,
    containerStyle,
    ...rest
  } = props;
  const colors = useColors();
  const { fonts, italicFonts } = useFonts();
  const lang = useCurrentLangSelector();
  const writingDirection = useDirection();
  const styles = useMemo(() => intStyle(colors), [colors]);
  const comingStyle = StyleSheet.flatten<TextStyle>(style);
  // to select font weight to update it with font family
  const fontWeight = comingStyle?.fontWeight;

  const fontStyleProps = comingStyle?.fontStyle;
  // to choose selected font weight and detect the type of compatible font
  const fontsList = [fontStyleProps, styleMode]?.includes("italic") ? italicFonts : fonts
  const fontFamily = fontsList[fontWeight || weight || '400'];
  const textAlign = useMemo(
    () => (lang == Lang.en ? TextAlign.LEFT : TextAlign.RIGHT),
    [lang],
  );
  // the default font size is 16
  const fontSizeResponsive = comingStyle?.fontSize
    ? fontSize(comingStyle?.fontSize as unknown as number)
    : size
      ? fontSize(size)
      : fontSize(16);
  //custom inline style depend on current language
  const textStyle = useStyle<TextStyle>(() => {
    return {
      writingDirection,
      textAlign: alignment ?? textAlign,
      fontSize: fontSizeResponsive,
      lineHeight: lineHeight,
    };
  }, [lang, comingStyle?.fontSize, size, alignment, lineHeight]);
  const textColorStyle = useStyle<TextStyle[]>(() => {
    return [
      {
        color: (variant && colors[variant]) || colors.TextTitle,
      },
    ];
  }, [variant]);
  //custom inline style depend on current language and font style
  const fontStyle = useStyle<TextStyle>(() => {
    return { fontFamily, fontWeight: undefined };
  }, [lang, fontWeight, weight, fonts]);

  const handelTextWithTranslation = useMemo(() => {
    if (title) {
      if (typeof title != 'string') {
        if (title.locale) {
          return translate(title.locale, title.localeProps);
        }
      } else {
        return translate(title);
      }
    }
  }, [title]);

  return (
    <Row style={[styles.wrapper, containerStyle]}>
      <Text
        {...rest}
        style={[styles.text, textStyle, textColorStyle, style, fontStyle]}>
        {value || handelTextWithTranslation}
      </Text>
    </Row>
  );
};
