import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';
import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
const LogoutScreen = ({navigation}) => {
  // useEffect(() => {
  //   Alert.alert('Are you sure you wanna Logout?', '', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => {
  //         console.log('cancelclicke');
  //         navigation.navigate('StoreScreen');
  //       },
  //     },
  //     {
  //       text: 'Yes',
  //       onPress: () => {
  //         handleClick();
  //       },
  //     },
  //   ]);
  // }, [navigation]);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('userinfoLocal', value);
      console.log('value was stored successfully->', value);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    console.log('btn clicked logout');
    try {
      navigation.replace('LoginScreen');
      storeData('binay');
      dispatch(authActions.loginUser(null));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={['#0a1f3a', '#038fab']}
      locations={[0, 1]}>
      <View style={styles.btnContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Are You Sure You wanna Log Out?</Text>
        </View>
        <Pressable style={styles.btn} onPress={handleClick}>
          <Text style={styles.btnText}> Log Out</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default LogoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 250,
    borderRadius: 20,
    justifyContent: 'center',
    elevation: 2,
  },
  btn: {
    backgroundColor: '#0a1f3a',
    padding: 8,
    borderRadius: 4,
    marginTop: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
  },
  textContainer: {
    width: '70%',
  },
  text: {
    color: '#0a1f3a',
    fontSize: 20,
    textAlign: 'center',
  },
});
