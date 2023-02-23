import React, { useEffect } from 'react';
import { SafeAreaView, PermissionsAndroid } from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import NavigationView from './components/NavigationView';

export default function App() {

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Example App',
            message: 'Example App access to your location ',
          },
        );
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
  }, []);


  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationView
        origin={[-46.526918, -23.679043]}
        destination={[-46.527013, -23.666443]}
      />
    </SafeAreaView>
  );
}
