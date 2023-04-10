import {StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import TakeInput3 from './TakeInput3';
import GradientBtn2 from '../UI/GradientBtn2';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginCard4 = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.loginContainer}>
      <TakeInput3 />
      <View style={styles.optionsContainer}>
        <CheckBox
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          tintColors={{true: '#038fab', false: 'white'}}
        />
        <Text style={styles.remember}>Remember Me.</Text>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
      <Icon style={styles.icon1} name="user" size={22} color="#cfcfcf" />
      <Icon style={styles.icon2} name="eye" size={22} color="#cfcfcf" />
      <GradientBtn2 />
    </View>
  );
};

export default LoginCard4;

const styles = StyleSheet.create({
  loginContainer: {
    position: 'absolute',
    width: '88%',
    backgroundColor: 'white',
    height: 348,
    top: '28%',
    borderRadius: 20,
    elevation: 2,
  },

  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 5,
  },
  forgot: {
    color: '#038fab',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 23,
  },
  remember: {
    color: 'white',
    fontSize: 15,
  },
  icon1: {
    position: 'absolute',
    top: 80,
    right: 47,
  },
  icon2: {
    position: 'absolute',
    top: 163,
    right: 47,
  },
});
