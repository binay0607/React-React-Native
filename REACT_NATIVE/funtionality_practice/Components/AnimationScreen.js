import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  View,
  Easing,
} from 'react-native';
import React, {useState} from 'react';

const AnimationScreen = () => {
  const spinValue = new Animated.Value(0);

  // First set up animation
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 5000,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true, // To make use of native driver for performance
  }).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['-150deg', '0deg'],
  });
  const value = new Animated.Value(100);
  const moveBall = () => {
    value.setValue(0);
    Animated.timing(value, {
      toValue: 100,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            marginLeft: 0,
            backgroundColor: 'red',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          {transform: [{rotate: spin}]},
        ]}
      />

      <Pressable style={{marginTop: 40}} onPress={moveBall}>
        <Text style={{color: 'black'}}>Move Ball</Text>
      </Pressable>
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
