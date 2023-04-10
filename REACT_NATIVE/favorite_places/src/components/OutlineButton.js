import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from './IconButton';
import {Colors} from '../Util/util';

const OutlineButton = ({children, onPress, icon}) => {
  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}>
      <IconButton icon={icon} color={Colors.primary300} size={16} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.primary400,
    borderWidth: 2,
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  text: {
    color: Colors.primary300,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.5,
  },
});
