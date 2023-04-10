import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LoginCard3 from '../Component/LoginCard3';
const Screen4 = () => {
  return (
    <LinearGradient
      style={styles.Container}
      colors={['#0a1f3a', '#3c9db0', '#75e897']}
      locations={[0, 1, 1]}>
      <View style={styles.topContainer}>
        <Text style={styles.heading}>AudiBuddy</Text>
        <Image
          style={styles.img}
          source={{uri: 'https://cdn.logo.com/hotlink-ok/logo-social.png'}}
        />
        <Text style={styles.subheading}>we help you grow your business.</Text>
      </View>
      <LoginCard3 />
    </LinearGradient>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  topContainer: {
    zIndex: 10,
    alignItems: 'center',
    top: -60,
  },
  heading: {
    marginTop: '40%',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 0,
  },
  subheading: {
    fontSize: 20,
    marginTop: '3%',
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 30,
    opacity: 0.9,
  },
});
