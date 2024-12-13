import { TouchableOpacity, View } from 'react-native';
import React, { FC, useMemo } from 'react';
import { style } from './style';
import { AppImage, AppText } from '@core/common';
import dayjs from 'dayjs';
import { Weather } from '@core/models';
import { useAppNavigation } from '@core/navigation';
import { useColors } from '@src/core/slices';
import { getTempCelsiusFromKelvin, getWeatherImage } from '@src/core/utils';

interface Props {
  weather: Weather;
}

export const ListItemHistory: FC<Props> = ({ weather }) => {
  const colors = useColors();
  const navigation = useAppNavigation();
  const styles = useMemo(() => style(colors), [colors]);


  const icon = getWeatherImage({ icon: weather?.weather?.[0]?.icon as string })
  const temp = getTempCelsiusFromKelvin({ kelvin: weather?.main?.temp as number })
  const date = dayjs.unix(weather?.dt as number).add(1, 'minute').format('DD.MM.YYYY - HH:mm');

  const onPress = () => {
    navigation?.navigate('cityDetailsScreen', { cityName: weather.name, countryCode: weather.sys.country, weather });
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.historyItemContainer}>
      <AppImage source={{ uri: icon }} style={styles.iconCloud} />
      <View style={styles.space16} />
      <View>
        <AppText variant="textSecondary" size={12} weight="normal" value={date} />
        <AppText weight="bold" value={`${weather?.weather?.[0].main}, ${temp}°C`} />
      </View>
    </TouchableOpacity>
  );
};
