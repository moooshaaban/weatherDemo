import { Colors, width } from '@core/utils';
import { StyleSheet } from 'react-native';

export const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "stretch",
      padding: width(16)
    },
    flex: {
      flex: 1,

    },
    button: {
      alignSelf: "flex-end",
      margin: width(16)
    }

  });
