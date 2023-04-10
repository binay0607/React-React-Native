import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';
import {StoreContext} from '../store/XXXXstore';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Draggable from 'react-native-draggable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authActions} from '../store/auth_slice';
const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const stores = useSelector(state => state.stores.storesInfo);
  const authData = useSelector(state => state.auth.userInfo);
  const handleRelease = () => {
    BackHandler.exitApp();
  };

  const pending = stores.reduce((acc, curr) => {
    return acc + curr.isPending;
  }, 0);
  // console.log(pending);
  const handleClick = () => {
    navigation.navigate('StoresInfoScreen');
  };
  
  const handleLogout = () => {
    try {
      console.log('logged out');
      navigation.navigate('LoginScreen');
      storeData('binay');
      dispatch(authActions.loginUser(null));
    } catch (error) {
      console.log(error);
    }
  };
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const today = new Date().toString();
  ///cancel goind back gesture
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  }, [navigation]);
  return (
    <LinearGradient
      style={styles.container}
      colors={['#0a1f3a', '#038fab']}
      locations={[0, 1]}>
      <Text style={styles.heading}>AudiBuddy</Text>
      <Text style={styles.subheading}>We help you grow your business.</Text>
      {/*<Button title="LogOut" onPress={handleLogout}></Button>*/}
      <Text style={styles.identityText}>
        Your unique id: {authData?.substring(0, 15)}
      </Text>

      <Text style={styles.date}>{today.substring(0, 16)}</Text>
      <View style={styles.infocontainer}>
        <LinearGradient style={styles.info} colors={['red', '#9e0322']}>
          <Text style={styles.infotxt}>PENDING</Text>
          <Text style={styles.infotxt}>{pending}</Text>
        </LinearGradient>
        <LinearGradient style={styles.info} colors={['limegreen', 'green']}>
          <Text style={styles.infotxt}>COMPLETED</Text>
          <Text style={styles.infotxt}>{stores.length - pending}</Text>
        </LinearGradient>
      </View>
      <View style={styles.textcontainer}>
        <View style={[styles.box, styles.left]}>
          <Text style={styles.text}>Start time</Text>
          <Text style={styles.text}> 08.00 AM</Text>
        </View>
        <View style={[styles.box, styles.right]}>
          <Text style={styles.text}>Total Hour Spent</Text>
          <Text style={styles.text}> 8 HOURS</Text>
        </View>
      </View>
      <View style={styles.btncontainer}>
        <Pressable style={styles.pressContainer} onPress={handleClick}>
          <Icon style={styles.icon2} name="map" size={22} color="red" />
          <Text style={styles.txt}>{'  '}Stores Map View</Text>
        </Pressable>
        <Pressable style={styles.pressContainer} onPress={handleClick}>
          <Icon style={styles.icon2} name="list" size={22} color="limegreen" />
          <Text style={styles.txt}> {'  '}Stores List View</Text>
        </Pressable>
      </View>
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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 0,
    marginTop: 45,
  },
  subheading: {
    fontSize: 18,
    marginTop: 10,
  },
  date: {
    backgroundColor: 'white',
    padding: 8,
    color: '#0a1f3a',
    fontWeight: 'bold',
    borderRadius: 8,
    marginTop: 90,
  },
  infocontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },

  info: {
    borderRadius: 8,
    elevation: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
    minWidth: '40%',
    maxWidth: '43%',
    margin: 4,
  },
  infotxt: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 12,
    paddingVertical: 5,
  },
  textcontainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  box: {
    backgroundColor: '#0a1f3a',
    height: 100,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#a8fc53',
    fontWeight: 'bold',
    fontSize: 16,
  },
  left: {
    borderWidth: 2,
    borderRightWidth: 1,
    borderRightColor: 'white',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  right: {
    borderWidth: 2,
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  btncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '89%',
    marginTop: 30,
  },
  pressContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 4,
    paddingVertical: 12,
    borderRadius: 3,
  },
  txt: {
    fontSize: 16,
    color: 'black',
  },
  swipe: {
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
  identityText: {
    backgroundColor: 'black',
    color: 'white',
  },
});
