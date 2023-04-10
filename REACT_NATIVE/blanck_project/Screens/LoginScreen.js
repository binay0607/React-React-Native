import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LoginCard from '../Components/LoginCard';
const LoginScreen = ({navigation}) => {
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

const styles = StyleSheet.create({});
