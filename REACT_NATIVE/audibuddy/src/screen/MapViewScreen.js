import {StyleSheet, Text, Pressable} from 'react-native';
import React, {useState, useEffect, Fragment} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {getDistanceFromLatLonInKm} from '../Util/util';
const MapViewScreen = ({route, navigation}) => {
  const storeId = route.params?.storeId;
  const lat1 = route.params?.lat;
  const lon1 = route.params?.lon;
  const stores = useSelector(state => state.stores.storesInfo);
  const store = stores.find(item => item.id === storeId);
  const [lat, setlat] = useState();
  const [lon, setlon] = useState();
  useEffect(() => {
    setlat(+store.lat);
    setlon(+store.lon);
  }, []);

  const region = {
    latitude: lat,
    longitude: lon,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const handleNavigation = () => {
    navigation.navigate('VerifyUserScreen', {storeId: storeId});
  };
  const distance = getDistanceFromLatLonInKm(lat1, lon1, store.lat, store.lon);
  return (
    <Fragment>
      <MapView style={{flex: 1}} initialRegion={region}>
        <Marker coordinate={region} />
      </MapView>
      <LinearGradient
        style={styles.storeInfoContainer}
        colors={['#0a1f3a', '#038fab']}
        locations={[0, 1]}>
        <Text style={styles.title}>Details</Text>
        <Text style={styles.text}>Store Name: {store.name}</Text>
        <Text style={styles.text}>Store Type: {store.type}</Text>
        <Text style={styles.text}> Store Address: {store.address}</Text>
        <Text style={styles.text}>Audit Scheduling Date: {store.date}</Text>
        <Text style={styles.text}>Distance: {distance} Km</Text>
        <Pressable onPress={handleNavigation} style={styles.btn}>
          <Text style={styles.btntext}>Enter Store</Text>
        </Pressable>
      </LinearGradient>
    </Fragment>
  );
};

export default MapViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storeInfoContainer: {
    postion: 'absolute',
    height: 310,
    width: '100%',
    backgroundColor: '#0a1f3a',
    elevation: 5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: 0,
  },
  title: {
    textAlign: 'center',
    color: '#038fab',
    fontSize: 18,
    marginVertical: 3,
    borderBottomColor: '#038fab',
    borderBottomWidth: 1,
    width: '50%',
    marginLeft: 85,
  },
  text: {
    color: 'white',
    borderBottomColor: '#038fab',
    borderBottomWidth: 1.5,
    padding: 8,
    marginLeft: 8,
    marginVertical: 6,
    fontSize: 16,
  },
  last: {
    marginBottom: 0,
  },
  btn: {
    alignItems: 'center',
    width: '40%',
    marginStart: 105,
    backgroundColor: '#0a1f3a',
    padding: 5,
    borderRadius: 6,
  },
  btntext: {
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 'bold',
  },
});
