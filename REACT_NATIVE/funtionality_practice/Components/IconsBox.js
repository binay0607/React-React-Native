import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const IconsBox = ({children}) => {
  return (
    <View style={styles.iconContainer}>
      <Text>{children}</Text>
    </View>
  );
};

export default IconsBox;

const styles = StyleSheet.create({
  iconContainer: {
    height: 100,
    width: 100,
    backgroundColor: 'grey',
    borderRadius: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
