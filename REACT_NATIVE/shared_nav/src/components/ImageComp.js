import {StyleSheet, Image, View, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
const ImageComp = ({URL}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.push('DetailScreen', {URL: URL});
  };

  return (
    <Pressable onPress={handleNavigation}>
      <SharedElement id={`_id:${URL}`}>
        <Image
          style={[styles.img]}
          source={{
            uri: URL,
          }}
        />
      </SharedElement>
    </Pressable>
  );
};

export default ImageComp;

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 100,
  },
});
