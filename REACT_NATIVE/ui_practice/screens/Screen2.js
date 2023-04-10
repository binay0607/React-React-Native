import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';

import GradientText from '../UI/GradientText';
import LoginCard from '../Component/LoginCard';
const Screen2 = () => {
  return (
    <View style={styles.container}>
      <GradientText style={styles.heading}>AudiBuddy</GradientText>
      <Image
        style={styles.img}
        source={{uri: 'https://cdn.logo.com/hotlink-ok/logo-social.png'}}
      />
      <Text style={styles.subheading}>we help you grow your business.</Text>
      <LoginCard />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18122B',
    alignItems: 'center',
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
    color: 'white',
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 30,
  },
});
