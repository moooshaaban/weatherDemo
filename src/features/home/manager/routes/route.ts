import { Screen } from '@core/navigation';
import { CityDetailsPage, CityHistoryPage, HomePage } from '../../presentation';
import { City, Weather } from '@src/core/models';

interface cityDetailsScreenProps extends City {
  weather?: Weather
}
export type HomeStackParamList = {
  homeScreen: undefined;
  cityDetailsScreen: cityDetailsScreenProps
  cityHistoryScreen: { cityName: string };
};

export const homeScreens: Screen<HomeStackParamList>[] = [
  { name: 'homeScreen', component: HomePage },
  { name: 'cityDetailsScreen', component: CityDetailsPage },
  { name: "cityHistoryScreen", component: CityHistoryPage }
];
