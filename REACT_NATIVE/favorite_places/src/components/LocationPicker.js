import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import OutlineButton from './OutlineButton';
import {Colors} from '../Util/util';
import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
const LocationPicker = ({sendLocation}) => {
  const navigation = useNavigation();
  let watchID;
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');
  const [isLoading, setisLoading] = useState(false);

  //copies this code from here-> https://aboutreact.com/react-native-geolocation/#:~:text=Code%20Snippet%20to%20use%20React%20Native%20GeoLocation,-Geolocation.&text=getCurrentPosition(%20%2F%2FWill%20give%20you,location%20json%20const%20currentLatitude%20%3D%20JSON.

  const getOneTimeLocation = () => {
    console.log('functoin called');
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('Found Location');

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        //Will give you the location on location change

        setLocationStatus('Found Location');
        console.log(position);

        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };
  useEffect(() => {
    sendLocation({lat: currentLatitude, lng: currentLongitude});
  }, [currentLatitude, currentLongitude]);
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Access Required',
          message: 'This App needs to Access your location',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        //To Check, If Permission is granted
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        setLocationStatus('Permission Denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  async function pickMyLocation() {
    if (locationStatus === 'Found Location') {
      return;
    }
    setisLoading(true);
    await requestLocationPermission();
    // setisLoading(false);
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }
  function pickLocationOnMap() {
    // navigation.navigate('Map');
  }
  let showtext = <Text style={styles.showtext}>No location choosen yet</Text>;
  if (isLoading) {
    showtext = <ActivityIndicator color={Colors.accent100} />;
  }
  if (locationStatus === 'Found Location') {
    showtext = (
      <View>
        <Text style={styles.showtext}>Latitude: {currentLatitude}</Text>
        <Text style={styles.showtext}>Longitude: {currentLongitude}</Text>
      </View>
    );
  }
  return (
    <View>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://www.shutterstock.com/image-vector/small-map-city-260nw-770438665.jpg',
        }}
        resizeMode="cover">
        <View style={styles.locationPreview}>{showtext}</View>
      </ImageBackground>
      <View style={styles.btncontainer}>
        <OutlineButton icon="map-pin" onPress={pickMyLocation}>
          Your Location
        </OutlineButton>
        <OutlineButton icon="map" onPress={pickLocationOnMap}>
          Show on Map
        </OutlineButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  locationPreview: {
    width: '100%',
    height: 150,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: '100%',
    marginVertical: 18,
    borderRadius: 2,
    borderColor: Colors.primary500,
    borderRadius: 5,
  },

  showtext: {
    color: Colors.accent300,
    fontWeight: '600',
    fontSize: 16,
    marginVertical: 4,
  },
});
