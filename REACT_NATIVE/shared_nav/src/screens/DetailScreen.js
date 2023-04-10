import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
const DetailScreen = () => {
  const route = useRoute();
  const URL = route.params.URL;
  return (
    <View style={styles.container}>
      <SharedElement id={`_id:${URL}`}>
        <Image style={styles.img} source={{uri: URL}} />
      </SharedElement>
      <Text style={styles.txt}>
        This is a character from the famous anime series my hero academia
      </Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    height: 250,
    width: 250,
    marginTop: 50,
  },
  txt: {
    width: '80%',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
    color: 'grey',
  },
});
