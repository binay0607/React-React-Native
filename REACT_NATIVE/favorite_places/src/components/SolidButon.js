import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from './IconButton';
import {Colors} from '../Util/util';

const SolidButton = ({children, onPress}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default SolidButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary400,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 24,
  },
  text: {
    color: Colors.accent300,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.5,
  },
});
