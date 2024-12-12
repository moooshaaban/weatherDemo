import { Appearance } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './root-navigator.navigation';
import { useCurrentLangSelector, useTheme, onSetStatusBar, onSystemModeChange } from '@core/slices';

export const NavigationContainerWrapper = () => {
  const { systemMode, colors } = useTheme();
  const lang = useCurrentLangSelector();
  const dispatch = useDispatch();

  const [SystemCurrentMode, setSystemCurrentMode] = useState(
    Appearance.getColorScheme(),
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (systemMode != colorScheme) {
        setSystemCurrentMode(colorScheme);
        dispatch(
          onSystemModeChange({
            systemMode: colorScheme == 'dark' ? 'dark' : 'light',
            lang,
          }),
        );
      }
    });
    return () => subscription.remove();
  }, [lang]);

  useEffect(() => {
    dispatch(
      onSetStatusBar({
        statusBarBackgroundColor: colors.transparent,
        statusBarStyle: 'dark-content',
        navigationBarColor: colors.background,
        statusBarTranslucent: true,
      }),
    );
  }, [SystemCurrentMode]);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};
