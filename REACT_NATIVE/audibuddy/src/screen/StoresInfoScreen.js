import {
  StyleSheet,
  Text,
  View,
  Button,
  BackHandler,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StoreHeader from '../Components/StoreHeader';
import Draggable from 'react-native-draggable';
import StoreItem from '../Components/StoreItem';
import {useSelector} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import LinearGradient from 'react-native-linear-gradient';

const StoresInfoScreen = ({navigation}) => {
  const handleRelease = () => {
    BackHandler.exitApp();
  };
  let watchID;
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState(false);
  const getOneTimeLocation = () => {
    setLocationStatus(false);
    Geolocation.getCurrentPosition(
      position => {
        setLocationStatus(true);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(false);
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
        setLocationStatus(true);
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        setCurrentLongitude(currentLongitude);
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(false);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };
  useEffect(() => {
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
          getOneTimeLocation();
          subscribeLocationLocation();
        } else {
          setLocationStatus(false);
        }
      } catch (err) {
        console.warn(err);
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);

  const [showPending, setshowPending] = useState(true);
  const showPendingStore = () => {
    setshowPending(true);
  };
  const showCompletedstore = () => {
    setshowPending(false);
  };
  const stores = useSelector(state => state.stores.storesInfo);
  const showArray = stores.filter(item => item.isPending === showPending);
  console.log(setLocationStatus);
  let showbody = (
    <ActivityIndicator
      size={50}
      color="#038fab"
      style={{marginTop: '50%'}}></ActivityIndicator>
  );
  if (locationStatus) {
    showbody = showArray.map(item => {
      return (
        <StoreItem
          store={item}
          key={item.id}
          lat={currentLatitude}
          lon={currentLongitude}
        />
      );
    });
  }
  const handlePress = () => {
    navigation.replace('LoginScreen');
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={['#0a1f3a', '#038fab']}
      locations={[0, 1]}>
      <StoreHeader
        showPending={showPending}
        showCompletedstore={showCompletedstore}
        showPendingStore={showPendingStore}
      />
      {showbody}
      <View style={styles.swipe}>
        <Draggable
          x={1}
          renderSize={40}
          renderColor="#0a1f3a"
          renderText=">"
          isCircle
          shouldReverse
          onDragRelease={handleRelease}
          minY={0}
          maxY={0}
          minX={0}
          maxX={300}
        />
        <Text style={styles.swipetxt}>Swipe to take a break</Text>
      </View>
    </LinearGradient>
  );
};

export default StoresInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  swipe: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  swipetxt: {
    color: 'black',
  },
});
