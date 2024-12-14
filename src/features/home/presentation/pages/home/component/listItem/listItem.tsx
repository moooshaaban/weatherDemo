import { TouchableOpacity, View } from 'react-native';
import React, { FC, useMemo } from 'react';
import { useColors } from '@core/slices/theme.slice';
import { style } from './style';
import { AppImage, AppText, AppIcon } from '@core/common';
import { AppAssets, width } from '@core/utils';
import { useAppNavigation } from '@core/navigation';
import { useDispatch } from 'react-redux';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import { removeCity } from '@src/core/slices';

interface Props {
  onPress: () => void;
  title: string;
  cityName: string;
  allowDelete: boolean
}

export const ListItem: FC<Props> = ({
  onPress,
  title,
  cityName,
  allowDelete
}) => {
  const dispatch = useDispatch();
  const colors = useColors();
  const navigation = useAppNavigation();
  const styles = useMemo(() => style(colors), [colors]);

  const onPressInfo = () => {
    navigation.navigate('cityHistoryScreen', { cityName });
  };


  const onPressDelete = () => {
    dispatch(removeCity({ cityName }));
  };

  return (
    <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.container}>
        <View style={styles.row}>
          <AppImage source={AppAssets.locationCityIcon} style={styles.infoIcon} />
          <View style={styles.space} />
          <AppText value={title} weight="bold" />
        </View>

        <View style={styles.row}>
          {allowDelete ? <>
            <TouchableOpacity activeOpacity={0.7} onPress={onPressDelete}>
              <AppIcon name={'delete'} size={width(18)} />
            </TouchableOpacity>
            <View style={{ width: 8 }} />
          </> : <></>}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPressInfo}
            style={styles.container}>
            <AppImage source={AppAssets.infoIcon} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
