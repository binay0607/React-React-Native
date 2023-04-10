import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const MapScreen = () => {
  const region = {
    latitude: 20.3488845,
    longitude: 85.8075597,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={{flex: 1}} initialRegion={region}></MapView>;
};

export default MapScreen;

const styles = StyleSheet.create({});
