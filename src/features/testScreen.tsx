import { View, Button, Alert } from 'react-native';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Lang } from '@core/utils';
import {
  RootStackParamList,
  useAppNavigation,
} from '@core/navigation/types.navigation';
import { langConfig } from '@core/translations';
import { useLangIsAr } from '@core/slices/lang.slice';
import { AppText, GapH64 } from '@core/common';

export const TestScreen: FC<RootStackParamList['testScreen']> = () => {
  const dispatch = useDispatch();
  const isAr = useLangIsAr();
  const navigation = useAppNavigation();

  return (
    <View>
      <GapH64 />
      <AppText title={'not_found_error'} variant='primary' weight='900' styleMode='italic' size={16} />
      <AppText title={'not_found_error'} variant='primary' weight='900' size={16} />

      <Button
        title="isAr"
        onPress={() => {
          Alert.alert("test")
          langConfig(isAr ? Lang.en : Lang.ar);
        }}
      />
      {/* <GapH16 /> */}
      {/* <AppText title={'welcomeMessage'} style={{fontWeight: '800'}} /> */}
    </View>
  );
};
