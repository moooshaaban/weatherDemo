import { Colors, height, screenHeight, screenWidth } from '@core/utils';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const style = (color: Colors) => {
  const { top } = useSafeAreaInsets()
  return StyleSheet.create({
    fullSize: {
      height: screenHeight + top,
      width: screenWidth,
    },
    flexing: {
      flex: 1,
    },
    overlay: { backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 100 },
    container: {
      flex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: -height(20),
      zIndex: 1,
    },
    modal: {
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
      marginBottom: 0,
    },
    handleIndicatorStyle: {
      height: 0,
    },
    handleIStyle: {
      paddingTop: 0,
      padding: 0,
    },
    backgroundStyle: {
      borderRadius: 0,
    },
  });
};
