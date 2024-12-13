import { FC } from 'react';
import {
  NavigationProp,
  ParamListBase,
  StackActionHelpers,
  useNavigation,
} from '@react-navigation/native';
import { homeScreens, HomeStackParamList, TestScreen } from '@features/index';



export interface Screen<T extends ParamListBase> {
  name: keyof T;
  component: FC<any>;
}

export type RootStackParamList = {
  testScreen: undefined;
  testScreen1: { props: any };
} & HomeStackParamList

export const screens: Screen<RootStackParamList>[] = [
  { name: 'testScreen', component: TestScreen },
  { name: 'testScreen1', component: TestScreen },
  ...homeScreens

];
export type RouteName = keyof RootStackParamList;

// Custom hook for accessing navigation prop with additional helper actions.
export const useAppNavigation = () =>
  useNavigation<NavigationProp<RootStackParamList> & HelperActions>();

// Helper type to pick specific actions from StackActionHelpers.
type HelperActions = Pick<
  StackActionHelpers<RootStackParamList>,
  'replace' | 'popToTop'
>;
