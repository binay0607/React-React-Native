import {View, StyleSheet, Text, Button} from 'react-native';
import React from 'react';
import PlaceForm from '../components/PlaceForm';

const AddPlaceScreen = ({navigation}) => {
  function handlePlace(place) {
    navigation.navigate('AllPlaces', {
      place: place,
    });
  }
  return (
    <View style={styles.container}>
      <PlaceForm sendPlace={handlePlace} />
    </View>
  );
};

export default AddPlaceScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
