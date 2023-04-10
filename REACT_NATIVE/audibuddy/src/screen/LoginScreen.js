import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginCard from '../Components/LoginCard';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {authActions} from '../store/auth_slice';
const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userinfoLocal');
        console.log(jsonValue, 'hey');
        if (jsonValue === null) {
        } else if (jsonValue !== 'binay') {
          dispatch(authActions.loginUser(jsonValue));
          navigation.navigate('PinScreen');
        }
      } catch (error) {
        console.log(error, 'error in login screen');
      }
    };
    getData();
  }, []);

  return (
    <LinearGradient
      style={styles.container}
      colors={['#0a1f3a', '#038fab']}
      locations={[0, 1]}>
      <Text style={styles.heading}>AudiBuddy</Text>
      <Text style={styles.subheading}>We help you grow your business.</Text>
      <LoginCard />
    </LinearGradient>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'ClimateCrisis-Regular',
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
});
