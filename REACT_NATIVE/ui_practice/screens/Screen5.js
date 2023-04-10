import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LoginCard4 from '../Component/LoginCard4';
const Screen5 = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#0a1f3a', '#038fab']}
      locations={[0, 1]}>
      <Text style={styles.heading}>AudiBuddy</Text>
      <Text style={styles.subheading}>We help you grow your business.</Text>
      <LoginCard4 />
    </LinearGradient>
  );
};

export default Screen5;

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
