import { Colors, ElevationStyle, height, width } from '@core/utils';
import { StyleSheet } from 'react-native';

export const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      height: height(150),
      backgroundColor: colors.primary,
      marginBottom: 10,
      ...ElevationStyle,
    },
    innerContainer: {
      backgroundColor: colors.primary,
      height: height(150),
      justifyContent: 'space-between',
    },
    backIconContainer: {
      height: width(30),
      width: width(30),
      marginStart: 14,
      borderRadius: width(60) / 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flexContainer: {
      flex: 1,
      justifyContent: 'center',
    },
    titleContainer: {
      marginStart: width(72),
    },
    icon: {
      height: height(45),
      width: width(45),
    },
  });
