import { Colors, ElevationStyle, height, width } from '@core/utils';
import { StyleSheet } from 'react-native';

export const style = (colors: Colors) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      marginTop: -height(50),
      ...ElevationStyle,
    },
    innerContainer: {
      backgroundColor: colors.white,
      height: height(423),
      width: width(296),
      borderRadius: width(4),
      padding: 24,
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowSpaceBetween: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      marginBottom: 10,
    },
    center: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoIcon: {
      height: height(24),
      width: width(24),
    },
    space: {
      width: 24,
    },
    icon: {
      width: width(100),
      height: height(100),
      alignSelf: 'center',
      marginTop: height(10),
    },
    footerContainer: {
      position: "absolute",
      bottom: height(20),
      right: 0,
      left: 0,
      alignItems: "center",
      alignSelf: "stretch",
    },
    footerText: {
      textAlign: 'center',
      alignSelf: "stretch",
      lineHeight: width(17),
    },
  });
