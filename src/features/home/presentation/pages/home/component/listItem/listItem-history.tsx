import { Alert, Image, TouchableOpacity, View } from 'react-native';
import React, { FC, useMemo } from 'react';
import { style } from './style';
import { AppText } from '@core/common';
import dayjs from 'dayjs';
import { Weather } from '@core/models';
import { useAppNavigation } from '@core/navigation';
import { useColors } from '@src/core/slices';

interface Props {
  title: string;
  weather: Weather;
}

export const ListItemHistory: FC<Props> = ({ title, weather }) => {
  const colors = useColors();
  const navigation = useAppNavigation();
  const styles = useMemo(() => style(colors), [colors]);

  const icon = `http://openweathermap.org/img/w/${weather?.weather?.[0].icon}.png`;

  const temp = (weather.main?.temp - 273.15).toFixed();

  const date = dayjs.unix(weather?.dt).format('DD.MM.YYYY - HH:mm');

  const onPress = () => {
    Alert.alert("onPressonPressonPressonPress")
    // navigation?.navigate('cityDetailsScreen', {
    //   cityName: weather?.name,
    //   title,
    //   weather,
    // });
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.historyItemContainer}>
      <Image source={{ uri: icon }} style={styles.iconCloud} />
      <View style={styles.space16} />
      <View>
        <AppText variant="textSecondary" size={12} weight="normal">
          {date}
        </AppText>
        <AppText weight="bold" value={`${weather?.weather?.[0].main}, ${temp}°C`} />
      </View>
    </TouchableOpacity>
  );
};
