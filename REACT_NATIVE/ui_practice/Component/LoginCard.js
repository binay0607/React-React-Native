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
const LoginCard = () => {
  return (
    <View style={styles.inputCardContainer}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        style={styles.loginContainer}
        colors={['#2e70d5', '#378fc6', '#5bc7b4', '#75e897']}
        locations={[0, 0.3, 0.6, 1]}>
        <Image
          resizeMode="cover"
          style={styles.backgroundImg}
          source={bgImg}></Image>
        <Icon style={styles.icon1} name="user" size={20} />
        <Icon style={styles.icon2} name="eye" size={20} />
        <TakeInput />
      </LinearGradient>
      <GradientBtn />
      <Text style={styles.forgot}> Forgot Password?</Text>
    </View>
  );
};

export default LoginCard;

const styles = StyleSheet.create({
  inputCardContainer: {
    width: '100%',
    alignItems: 'center',
  },
  loginContainer: {
    marginTop: '24%',
    height: 230,
    width: '90%',
    borderRadius: 30,
    elevation: 20,
    overflow: 'hidden',
  },
  backgroundImg: {
    width: '95%',
    height: '105%',
    opacity: 0.02,
    zIndex: 1,
    position: 'absolute',
  },

  forgot: {
    fontSize: 18,
    marginTop: 45,
    letterSpacing: 1,
  },
  icon1: {
    position: 'absolute',
    top: 57,
    right: 45,
  },
  icon2: {
    position: 'absolute',
    top: 133,
    right: 45,
  },
});
