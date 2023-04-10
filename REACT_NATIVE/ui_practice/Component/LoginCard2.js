import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import bgImg from '../assets/pngwing.png';
import TakeInput from './TakeInput';
import GradientBtn from '../UI/GradientBtn';
import Icon from 'react-native-vector-icons/FontAwesome';
const LoginCard2 = () => {
  return (
    <View style={styles.inputCardContainer}>
      <View style={styles.loginContainer}>
        <TakeInput />
      </View>
      <Pressable style={styles.btn}>
        <Text style={styles.btntxt}>Login</Text>
      </Pressable>
      <Icon style={styles.icon1} name="user" size={20} />
      <Icon style={styles.icon2} name="eye" size={20} />
      <Text style={styles.forgot}> Forgot Password?</Text>
    </View>
  );
};

export default LoginCard2;

const styles = StyleSheet.create({
  inputCardContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginContainer: {
    height: 230,
    width: '90%',
    borderRadius: 30,
    overflow: 'hidden',
  },
  backgroundImg: {
    width: '95%',
    height: '105%',
    opacity: 0.02,

    position: 'absolute',
  },

  forgot: {
    fontSize: 18,
    marginTop: 45,
    letterSpacing: 1,
  },
  icon1: {
    position: 'absolute',
    top: 61,
    right: 63,
  },
  icon2: {
    position: 'absolute',
    top: 134,
    right: 63,
  },
  btn: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: 'crimson',
    borderRadius: 9,
  },
  btntxt: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 12,
    paddingVertical: 13,
    paddingHorizontal: 25,
  },
});
