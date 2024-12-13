import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getIconType, IconType, Lang, width } from '@core/utils';
import { useColors, useCurrentLangSelector } from '@core/slices';
import { IconProps } from 'react-native-vector-icons/Icon';

export interface Props extends IconProps {
  type?: IconType;
  flip?: Boolean;
}

export const AppIcon: React.FC<Props> = props => {
  const { type, color, flip = true, style, ...rest } = props;

  const VectorIcon = getIconType(type || IconType.custom) as typeof AntDesign;

  const { primary } = useColors();
  const rtl = useCurrentLangSelector() === Lang.ar;

  const flipDirectionStyles = flip && rtl ? { transform: [{ scaleX: -1 }] } : {};

  return (
    <VectorIcon
      color={color || primary}
      style={[style, flipDirectionStyles]}
      {...rest}
    />
  );
};
