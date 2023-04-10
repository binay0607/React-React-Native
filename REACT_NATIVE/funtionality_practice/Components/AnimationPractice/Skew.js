import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Skew = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const showAnimation = () => {};

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box]}></Animated.View>
      <Pressable onPress={showAnimation}>
        <Text style={{fontSize: 18, color: 'black', marginTop: 50}}>
          Skew It
        </Text>
      </Pressable>
    </View>
  );
};

export default Skew;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 200,
    backgroundColor: 'dodgerblue',
  },
});
