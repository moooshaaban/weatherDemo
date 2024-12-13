import { Colors, fontSize, height, width } from '@core/utils';
import { StyleSheet } from 'react-native';

export const style = (colors: Colors) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: height(56),
      alignItems: 'center',
      paddingStart: 12,
      paddingEnd: 16,
      borderBottomColor: colors.borderColor,
      borderBottomWidth: 1,
    },
    input: {
      fontSize: fontSize(14),
      flex: 1,
    },
    icon: {
      height: width(24),
      width: width(24),
    },
    space: {
      width: 18,
    },
  });
};
