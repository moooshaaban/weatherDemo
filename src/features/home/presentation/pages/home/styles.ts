import { Colors, width } from '@core/utils';
import { StyleSheet } from 'react-native';

export const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "stretch"
    },
    flex: {
      flex: 1,
      padding: width(16)
    },
    button: {
      alignSelf: "flex-end"
    }

  });
