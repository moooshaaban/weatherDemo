import {
    View,
    ViewProps,
} from 'react-native';
import React, { FC, useMemo } from 'react';
import { AppImage } from '../image';
import { AppAssets, height, screenWidth } from '@src/core/utils';
import LinearGradient from 'react-native-linear-gradient';
import { useColors } from '@src/core/slices';
import { style } from './styles';


interface Props extends Pick<ViewProps, 'children'> { }

export const AppContainer: FC<Props> = ({ children }) => {
    const colors = useColors();
    const styles = useMemo(() => style(colors), [colors]);

    return <LinearGradient
        colors={[colors.background, colors.backgroundSecondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}>
        <View style={styles.groupContainer}>
            <AppImage
                source={AppAssets.GroupImage}
                style={{
                    height: height(255),
                    width: screenWidth,
                }}
                resizeMode='stretch'
            />
        </View>
        {children}
    </LinearGradient>
}