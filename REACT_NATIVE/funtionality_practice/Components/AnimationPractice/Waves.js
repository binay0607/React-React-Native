import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Waves = () => {
  const progress3 = useRef(new Animated.Value(0)).current;
  const progress2 = useRef(new Animated.Value(0)).current;
  const progress1 = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(progress3, {
          toValue: 1,
          useNativeDriver: true,
          duration: 1500,
        }),
        Animated.timing(progress3, {
          toValue: 0,
          useNativeDriver: true,
          duration: 0,
        }),
      ]),
    ).start();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(progress2, {
            toValue: 1,
            useNativeDriver: true,
            duration: 1500,
          }),
          Animated.timing(progress2, {
            toValue: 0,
            useNativeDriver: true,
            duration: 0,
          }),
        ]),
      ).start();
    }, 400);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(progress1, {
            toValue: 1,
            useNativeDriver: true,
            duration: 1500,
          }),
          Animated.timing(progress1, {
            toValue: 0,
            useNativeDriver: true,
            duration: 0,
          }),
        ]),
      ).start();
    }, 700);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: '#ffe54d',
            opacity: progress3.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.3],
            }),
            transform: [
              {
                scale: progress3.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 3],
                }),
              },
            ],
          },
        ]}></Animated.View>
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: '#ffe54d',
            opacity: progress2.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.3],
            }),
            transform: [
              {
                scale: progress2.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 3],
                }),
              },
            ],
          },
        ]}></Animated.View>
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: '#ffe54d',
            opacity: progress1.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.3],
            }),
            transform: [
              {
                scale: progress1.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 3],
                }),
              },
            ],
          },
        ]}></Animated.View>
      <Animated.View style={[styles.circle, styles.one]}></Animated.View>
    </View>
  );
};

export default Waves;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: '42%',
    left: '36%',
  },
  one: {
    backgroundColor: '#fff3ab',
  },
});
