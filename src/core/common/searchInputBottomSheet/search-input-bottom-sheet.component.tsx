import { Image, TextInput, View } from 'react-native';
import React, { FC, useMemo, useRef, useState } from 'react';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { style } from './styles';
import { useColors } from '@core/slices';
import { translate } from '@core/utils/translation.util';
import { useFonts } from '@core/slices/theme.slice';
import { AppImage } from '../image';
import { AppAssets } from '@src/core/utils';

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
export const SearchInputBottomSheet: FC<Props> = props => {
  const { searchValue, setSearchValue } = props;

  const [value, setValue] = useState<string>('');

  const colors = useColors();

  const fonts = useFonts();

  const styles = useMemo(() => style(colors), [colors]);

  const ref = useRef<TextInput>(null);

  return (
    <View style={styles.container}>
      <AppImage source={AppAssets.searchIcon} style={styles.icon} />
      <View style={styles.space} />
      <BottomSheetTextInput
        ref={ref as any}
        style={[styles.input, { fontFamily: fonts.fonts.bold }]}
        value={value}
        defaultValue={searchValue}
        placeholder={translate('search_city')}
        placeholderTextColor={colors.textColor}
        onChangeText={value => {
          setValue(value);
          setSearchValue(value);
        }}
      />
    </View>
  );
};
