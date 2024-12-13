import { Screen } from '@core/navigation';
import { HomePage } from '../../presentation';


export type HomeStackParamList = {
  homeScreen: undefined;
};

export const homeScreens: Screen<HomeStackParamList>[] = [
  { name: 'homeScreen', component: HomePage },
];
