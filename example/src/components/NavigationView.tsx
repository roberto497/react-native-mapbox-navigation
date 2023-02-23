import React from 'react';
import { StyleSheet, View}  from 'react-native';

import MapboxNavigation from 'react-native-mapbox-navigation';
import type { IMapboxNavigationProps } from 'src/typings';

const NavigationView = (props: IMapboxNavigationProps) => {
  const {origin, destination} = props;

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
      <MapboxNavigation
            showsEndOfRouteFeedback={true}
            shouldSimulateRoute={false}
            origin={origin}
            destination={destination}
            hideStatusView
            onError={(event: any) => {
              const {message} = event.nativeEvent;
              console.log(message);
            }}
            onArrive={() => {
              console.log('You have reached your destination');
            }}
            onCancelNavigation={() => {
              console.log('Cancelled navigation event');
            }}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  mapContainer: {
    flex: 1,
  },
});

export default NavigationView;