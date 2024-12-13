import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import { useColors } from '@core/slices';
import { height, width } from '@core/utils';

export const AppSpinner = () => {
  const colors = useColors();
  return (
    <View style={{ height: height(260), justifyContent: 'center' }}>
      <ActivityIndicator size={width(30)} color={colors.primary} />
    </View>
  );
};
