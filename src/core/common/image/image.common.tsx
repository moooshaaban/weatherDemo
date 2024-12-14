import React from 'react';
import FastImage, { FastImageProps, ImageStyle } from 'react-native-fast-image';
import { DimensionValue, Image, StyleProp, View } from 'react-native';
import { useStyle } from '@core/hooks';
import { appAssets, AssetsType } from '@core/utils';


/**
 * Image Component
 * 
 *This component is designed to handle image rendering with the added
  benefit of auto-completion support. This feature minimizes errors during
   development and significantly accelerates the coding process."
 * 
 */
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
  const containerStyle = useStyle<StyleProp<ImageStyle>>(() => {
    return {
      width: width || 70,
      height: height || 140,
      borderRadius,
    };
  }, [width, borderRadius, height]);

  const TempNode = (
    typeof source == 'number' ? Image : FastImage
  ) as typeof FastImage;
  return (
    <View>
      <TempNode
        source={assets ? appAssets[assets] : source}
        style={[containerStyle, style]}
        {...rest}
      />
    </View>
  );
};
