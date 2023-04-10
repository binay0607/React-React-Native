import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import PlaceList from '../components/PlaceList';
import {useIsFocused} from '@react-navigation/native';
import {Store} from '../store/store';
import {Colors} from '../Util/util';
const AllPlacesScreen = ({route}) => {
  // const isFocused = useIsFocused();
  // const [places, setplaces] = useState([]);
  // useEffect(() => {
  //   if (isFocused && route.params) {
  //     setplaces(prevPlaces => [...prevPlaces, route.params.place]);
  //   }
  // }, [isFocused, route]);
  const storectx = useContext(Store);
  const places = storectx.places_context.places;
  if (places.length === 0) {
    return (
      <View style={styles.fb_container}>
        <Text style={styles.fb_text}>No Favorite Place Added Yet.</Text>
      </View>
    );
  }
  return (
    <View>
      <PlaceList places={places} />
    </View>
  );
};

export default AllPlacesScreen;

const styles = StyleSheet.create({
  fb_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fb_text: {
    color: Colors.primary400,
  },
});
