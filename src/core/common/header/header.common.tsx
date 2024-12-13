import React, { useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { style } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppText } from '../text';
import { useColors } from '@core/slices';
import { useAppNavigation } from '@core/navigation';
import { AppImage } from '@core/common';
import { AppAssets, TranslatorText } from '@src/core/utils';

interface Props {
  title?: TranslatorText
  hideBack?: boolean;
}

export const AppHeader = ({ hideBack, title }: Props) => {
  const colors = useColors();
  const styles = useMemo(() => style(colors), [colors]);
  const navigation = useAppNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.container]}>
        <View style={[styles.innerContainer, { paddingTop: top }]}>
          <View style={styles.flexContainer}>
            {!hideBack && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backIconContainer}>
                <AppImage source={AppAssets.arrowBackIcon} style={styles.icon} />
              </TouchableOpacity>
            )}
          </View>
          <View style={[styles.flexContainer, styles.titleContainer]}>
            <AppText title={title} variant='white' size={24} />
          </View>
        </View>
      </View>
    </>
  );
};
