import React, { FC, Fragment, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { useCurrentLangSelector } from '@core/slices';
import { useColors, useStatusBarSelector } from '@core/slices/theme.slice';
import { StatusBar } from 'react-native';
import { isIos } from '../utils';
import { RootStackParamList, screens } from './types.navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();
export const RootNavigator: FC = () => {
  const lang = useCurrentLangSelector();
  const statusBar = useStatusBarSelector();
  const { background } = useColors();

  useEffect(() => {
    StatusBar.setBarStyle(statusBar.statusBarStyle, true);
    !isIos &&
      StatusBar.setBackgroundColor(statusBar.statusBarBackgroundColor, true);
    !isIos && StatusBar.setTranslucent(statusBar.statusBarTranslucent);
    SystemNavigationBar.setNavigationColor(statusBar.navigationBarColor);
    SystemNavigationBar.setBarMode(
      statusBar.statusBarStyle != 'dark-content' ? 'dark' : 'light',
    );
    SystemNavigationBar.navigationShow();
  }, [
    statusBar.statusBarBackgroundColor,
    statusBar.statusBarStyle,
    statusBar.statusBarTranslucent,
    statusBar.navigationBarColor,
  ]);


  return (
    <Fragment>
      <Stack.Navigator
        initialRouteName={'homeScreen'}
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: background },
        }}>
        {screens.map(({ component, name }) => {
          const Component = component;
          return (
            <Stack.Screen
              key={name}
              name={name}
              children={({ route: { params } }) => (
                <Component key={lang} {...{ ...params }} />
              )}
            />
          );
        })}
      </Stack.Navigator>
    </Fragment>
  );
};
