import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const IconButton = ({icon, size, color, handleNav}) => {
  return (
    <Pressable
      onPress={handleNav}
      style={{marginRight: 8, marginBottom: 0, paddingBottom: 0}}>
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({});
