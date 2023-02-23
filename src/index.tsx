import * as React from 'react';
import { requireNativeComponent, StyleSheet, ViewStyle } from 'react-native';

import type { IMapboxNavigationProps } from './typings';


interface RNMapboxNavigationProps extends IMapboxNavigationProps {
  style: ViewStyle;
}

const MapboxNavigation = (props: IMapboxNavigationProps) => {
  return <RNMapboxNavigation style={styles.container} {...props} />;
};

const RNMapboxNavigation = requireNativeComponent<RNMapboxNavigationProps>('MapboxNavigation');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapboxNavigation;