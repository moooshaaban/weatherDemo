import {View} from 'react-native';
import React, {FC} from 'react';
import {styles} from './styles';
import {width} from '@core/utils';

export const GapW: FC<{w: number}> = ({w}) => {
  return (
    <View
      style={{
        width: width(w),
        height: 1,
      }}
    />
  );
};
export const GapW2: FC = () => {
  return <View style={styles.gapW2} />;
};
export const GapW4: FC = () => {
  return <View style={styles.gapW4} />;
};
export const GapW8: FC = () => {
  return <View style={styles.gapW8} />;
};
export const GapW12: FC = () => {
  return <View style={styles.gapW12} />;
};
export const GapW16: FC = () => {
  return <View style={styles.gapW16} />;
};
export const GapW20: FC = () => {
  return <View style={styles.gapW20} />;
};
export const GapW24: FC = () => {
  return <View style={styles.gapW24} />;
};
export const GapW32: FC = () => {
  return <View style={styles.gapW32} />;
};
export const GapW48: FC = () => {
  return <View style={styles.gapW48} />;
};
export const GapW64: FC = () => {
  return <View style={styles.gapW64} />;
};

export const GapWPerResponsiveHeight2: FC = () => {
  return <View style={styles.gapWPerResponsiveHeight2} />;
};
export const GapWPerResponsiveHeight4: FC = () => {
  return <View style={styles.gapWPerResponsiveHeight4} />;
};
export const GapWPerResponsiveHeight8: FC = () => {
  return <View style={styles.gapWPerResponsiveHeight8} />;
};
export const GapWPerResponsiveHeight12: FC = () => {
  return <View style={styles.gapWPerResponsiveHeight12} />;
};
export const GapWPerResponsiveHeight16: FC = () => {
  return <View style={styles.gapWPerResponsiveHeight16} />;
};
export const GapWPerResponsiveHeight20: FC = () => {
  return <View style={styles.gapWPerResponsiveHeight20} />;
};
export const GapWPerResponsiveHeight24: FC = () => {
  return <View style={styles.gapWPerResponsiveHeight24} />;
};
export const GapWPerResponsiveHeight32: FC = () => {
  return <View style={styles.gapWPerResponsiveHeight32} />;
};
export const GapWPerResponsiveHeight48: FC = () => {
  return <View style={styles.gapWPerResponsiveHeight48} />;
};
export const GapWPerResponsiveHeight64: FC = () => {
  return <View style={styles.gapWPerResponsiveHeight64} />;
};
