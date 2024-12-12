import {View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {height} from '@core/utils';

export const GapH: FC<{h: number}> = ({h}) => {
  return (
    <View
      style={{
        height: height(h),
        width: 1,
      }}
    />
  );
};

export const GapH2: FC = () => {
  return <View style={styles.gapH2} />;
};
export const GapH4: FC = () => {
  return <View style={styles.gapH4} />;
};
export const GapH8: FC = () => {
  return <View style={styles.gapH8} />;
};
export const GapH12: FC = () => {
  return <View style={styles.gapH12} />;
};
export const GapH16: FC = () => {
  return <View style={styles.gapH16} />;
};
export const GapH20: FC = () => {
  return <View style={styles.gapH20} />;
};
export const GapH24: FC = () => {
  return <View style={styles.gapH24} />;
};
export const GapH32: FC = () => {
  return <View style={styles.gapH32} />;
};
export const GapH48: FC = () => {
  return <View style={styles.gapH48} />;
};
export const GapH64: FC = () => {
  return <View style={styles.gapH64} />;
};

export const GapHPerResponsiveWidth2: FC = () => {
  return <View style={styles.gapHPerResponsiveWidth2} />;
};
export const GapHPerResponsiveWidth4: FC = () => {
  return <View style={styles.gapHPerResponsiveWidth4} />;
};
export const GapHPerResponsiveWidth8: FC = () => {
  return <View style={styles.gapHPerResponsiveWidth8} />;
};
export const GapHPerResponsiveWidth12: FC = () => {
  return <View style={styles.gapHPerResponsiveWidth12} />;
};
export const GapHPerResponsiveWidth16: FC = () => {
  return <View style={styles.gapHPerResponsiveWidth16} />;
};
export const GapHPerResponsiveWidth20: FC = () => {
  return <View style={styles.gapHPerResponsiveWidth20} />;
};
export const GapHPerResponsiveWidth24: FC = () => {
  return <View style={styles.gapHPerResponsiveWidth24} />;
};
export const GapHPerResponsiveWidth32: FC = () => {
  return <View style={styles.gapHPerResponsiveWidth32} />;
};
export const GapHPerResponsiveWidth48: FC = () => {
  return <View style={styles.gapHPerResponsiveWidth48} />;
};
export const GapHPerResponsiveWidth64: FC = () => {
  return <View style={styles.gapHPerResponsiveWidth64} />;
};
