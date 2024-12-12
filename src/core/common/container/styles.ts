import { Colors } from '@core/utils';
import { StyleSheet } from 'react-native';

export const style = (colors: Colors) => {
  const { TextTitle } = colors;
  return StyleSheet.create({
    container: {
      flex: 1,
      alignSelf: "stretch",
    },
    groupContainer: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
    }

  });
};
