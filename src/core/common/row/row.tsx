import {
  View,
  TouchableOpacityProps,
  ViewStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import React, { FC, useMemo } from 'react';
import { useLangIsAr } from '@core/slices/lang.slice';


interface Props extends TouchableOpacityProps {
  style?: ViewStyle | ViewStyle[] | StyleProp<ViewStyle>;
  onPress?: () => void;
}
export const Row: FC<Props> = props => {
  const { style, children, onPress, ...rest } = props;
  const flexDirection = useLangIsAr() ? 'row-reverse' : 'row';
  const ViewContainer = useMemo(
    () => (onPress ? TouchableOpacity : View),
    [onPress],
  ) as typeof TouchableOpacity;
  return (
    <ViewContainer
      onPress={onPress}
      style={[style, { flexDirection }]}
      activeOpacity={0.85}
      {...rest}>
      {children}
    </ViewContainer>
  );
};
