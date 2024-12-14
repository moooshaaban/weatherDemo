import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import React, { FC, useMemo } from 'react';
import { style as innerStyle } from './style';
import { AppText, AppIcon } from '@core/common';
import { IconType, TranslatorText, width } from '@core/utils';
import { useColors } from '@src/core/slices';

interface CustomButtonProps extends TouchableOpacityProps {
    title: TranslatorText
}

export const AppButton: FC<CustomButtonProps> = ({ onPress, title, style, ...rest }) => {
    const colors = useColors();
    const styles = useMemo(() => innerStyle(colors), [colors]);

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[styles.floatingButton, style]}
            {...{ ...rest }}
        >
            <AppIcon
                type={IconType.entypo}
                name="plus"
                color={colors.white}
                size={width(20)}
            />

            <View style={styles.space} />

            <AppText weight="bold" title={title} style={styles.textStyle} />
        </TouchableOpacity>
    );
};
