import { Colors, height, width } from '@core/utils';
import { StyleSheet } from 'react-native';

export const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      height: height(56),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingStart: 16,
      paddingEnd: 6,
    },
    historyItemContainer: {
      height: height(56),
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingStart: 16,
      paddingEnd: 6,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    infoIcon: {
      height: height(24),
      width: width(24),
    },
    space: {
      width: 24,
    },
    space16: {
      width: 16,
    },

    infoContainer: {
      height: height(30),
      width: width(30),
      borderRadius: width(30) / 2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    iconCloud: {
      width: width(40),
      height: height(45),
      alignSelf: 'center',
      marginTop: height(10),
    },
  });
