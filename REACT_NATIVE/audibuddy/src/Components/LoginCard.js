import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import GradientBtn from './GradientBtn';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {authActions} from '../store/auth_slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginCard = () => {
  const [userName, setuserName] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('userinfoLocal', value);
    } catch (e) {
      console.log(error);
    }
  };
  const handleNavigation = async () => {
    try {
      const userInfo = await auth().signInWithEmailAndPassword(
        userName,
        password,
      );
      dispatch(authActions.loginUser(userInfo.user.uid));
      setuserName('');
      setpassword('');
      console.log('user successfully logged in=> ', userInfo.user.uid);
      navigation.navigate('SetPinScreen');
      storeData(userInfo.user.uid);
    } catch (error) {
      setError(true);
    }
  };

  const handleuserName = enteredText => {
    setError(false);
    setuserName(enteredText);
  };
  const handlepassword = enteredText => {
    setpassword(enteredText);
  };
  return (
    <View style={styles.loginContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.bar}></View>
        <TextInput
          value={userName}
          onChangeText={handleuserName}
          selectionColor="#0a1f3a"
          style={styles.input}
          placeholder="UserName"
          placeholderTextColor="#cfcfcf"
        />
        <TextInput
          value={password}
          onChangeText={handlepassword}
          selectionColor="#0a1f3a"
          style={[styles.input, {marginTop: 30}]}
          placeholder="Password"
          placeholderTextColor="#cfcfcf"></TextInput>
        {error && <Text style={styles.fallbackText}>User Doesn't exist!</Text>}
      </View>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <Icon style={styles.icon1} name="user" size={22} color="#cfcfcf" />
      <Pressable style={styles.icon2} onPress={() => {}}>
        <Icon name="eye" size={22} color="#cfcfcf" />
      </Pressable>
      <GradientBtn handleNavigation={handleNavigation} />
    </View>
  );
};

export default LoginCard;

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

  forgot: {
    color: '#038fab',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 23,
    marginTop: 10,
    marginLeft: 157,
  },
  remember: {
    color: 'white',
    fontSize: 15,
  },
  icon1: {
    position: 'absolute',
    top: 80,
    right: 47,
    zIndex: 20,
  },
  icon2: {
    position: 'absolute',
    top: 163,
    right: 47,
    zIndex: 20,
  },
  inputContainer: {
    alignItems: 'center',
    zIndex: 20,
  },
  input: {
    fontSize: 20,
    borderColor: '#cfcfcf',
    borderWidth: 1.7,
    width: '80%',
    marginTop: '15%',
    color: '#0a1f3a',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bar: {
    backgroundColor: '#cfcfcf',
    height: 4,
    width: '30%',
    marginTop: 15,
    borderRadius: 3,
  },
  fallbackText: {
    marginTop: 3,
    color: 'red',
  },
});
