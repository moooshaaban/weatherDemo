import { Screen } from '@core/navigation';
import { CityDetailsPage, HomePage } from '../../presentation';
import { City } from '@src/core/models';


export type HomeStackParamList = {
  homeScreen: undefined;
  cityDetailsScreen: City
};

export const homeScreens: Screen<HomeStackParamList>[] = [
  { name: 'homeScreen', component: HomePage },
  { name: 'cityDetailsScreen', component: CityDetailsPage },
];
