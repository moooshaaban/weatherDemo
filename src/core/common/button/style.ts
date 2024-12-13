import { Colors, height, width } from '@core/utils';
import { StyleSheet } from 'react-native';

export const style = (colors: Colors) =>
  StyleSheet.create({
    floatingButton: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      height: height(56),
      width: width(137),
      borderRadius: width(28),
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      lineHeight: height(56),
      color: colors.white,
    },
    space: {
      width: 10,
    },
  });
