import React from 'react';
import FastImage, { FastImageProps, ImageStyle } from 'react-native-fast-image';
import {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { DimensionValue, Image, StyleProp, View } from 'react-native';
import { useStyle } from '@core/hooks';
import { appAssets, AssetsType } from '@core/utils';
interface Props extends FastImageProps {
  blurHash?: string;
  assets?: AssetsType;
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
}

export const AppImage: React.FC<Props> = props => {
  const {
    blurHash,
    style,
    source,
    width,
    borderRadius,
    height,
    assets,
    ...rest
  } = props;
  const fadeAnim = useSharedValue(1);
  const containerStyle = useStyle<StyleProp<ImageStyle>>(() => {
    return {
      width: width || 70,
      height: height || 140,
      borderRadius,
    };
  }, [width, borderRadius, height]);
  const fadeOut = () => {
    fadeAnim.value = withTiming(0, {
      duration: 500,
      easing: Easing.cubic,
    });
  };


  const TempNode = (
    typeof source == 'number' ? Image : FastImage
  ) as typeof FastImage;
  return (
    <View>
      <TempNode
        source={assets ? appAssets[assets] : source}
        onLoadEnd={fadeOut}
        style={[containerStyle, style]}
        {...rest}
      />
    </View>
  );
};
