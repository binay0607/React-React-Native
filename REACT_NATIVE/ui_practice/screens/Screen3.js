import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import LoginCard2 from '../Component/LoginCard2';

const Screen3 = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.topContainer}>
        <Text style={styles.heading}>AudiBuddy</Text>
        <Image
          style={styles.img}
          source={{uri: 'https://cdn.logo.com/hotlink-ok/logo-social.png'}}
        />
        <Text style={styles.subheading}>we help you grow your business.</Text>
      </View>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
      <View style={styles.circle3}></View>
      <View style={styles.circle4}></View>
      <LoginCard2 />
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#61caea',
    opacity: 1,
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
  circle1: {
    backgroundColor: '#4f60d3',
    height: 500,
    width: 500,
    opacity: 0.75,
    borderRadius: 250,
    position: 'absolute',
    top: -160,
    left: -15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle2: {
    backgroundColor: '#4e61d1',
    height: 600,
    width: 600,
    opacity: 0.5,
    borderRadius: 300,
    position: 'absolute',
    left: -420,
    top: -50,
  },
  circle3: {
    backgroundColor: '#51a1e5',
    height: 750,
    width: 750,
    opacity: 0.5,
    borderRadius: 375,
    position: 'absolute',
    top: '60%',
    left: '43%',
  },
  circle4: {
    backgroundColor: '#c0c8ef',
    height: 750,
    width: 750,
    opacity: 0.5,
    borderRadius: 375,
    position: 'absolute',
    top: '90%',
    right: 1,
  },
});
