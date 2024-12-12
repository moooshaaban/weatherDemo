import {Colors} from '@core/utils';
import {StyleSheet} from 'react-native';

export const style = (colors: Colors) => {
  const {TextTitle} = colors;
  return StyleSheet.create({
    text: {
      color: TextTitle,
    },
    wrapper: {alignItems: 'center'},
  });
};
