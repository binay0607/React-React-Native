import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useEffect} from 'react';
const SIZE = 100;
const CompleteAnimationGuide = () => {
  const progress = useRef(new Animated.Value(0.5)).current;
  const scale = useRef(new Animated.Value(1)).current;
  console.log(progress);
  useEffect(() => {
    // to run the animation in loop
    Animated.loop(
      // to make sure everything runs in parallel
      Animated.parallel([
        // will execute one after another
        Animated.sequence([
          Animated.timing(progress, {
            toValue: 1,
            useNativeDriver: true,
            duration: 500,
          }),
          Animated.timing(progress, {
            toValue: 0.5,
            useNativeDriver: true,
            duration: 500,
          }),
        ]),
        Animated.sequence([
          // similar to timing we can use spring--> for on physics than time
          Animated.spring(scale, {
            toValue: 2,
            useNativeDriver: true,
            duration: 500,
          }),
          Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
            duration: 500,
          }),
        ]),
      ]),
      {iterations: 1000}, // optional
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            opacity: progress,
            transform: [
              {scale: scale},
              {
                rotate: progress.interpolate({
                  inputRange: [0.5, 1],
                  outputRange: ['180deg', '360deg'],
                }),
              },
            ],
            //basically it depends on opacity so we interpolate on opacity
            borderRadius: progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: [SIZE / 4, SIZE / 2],
            }),
          },
        ]}></Animated.View>
    </View>
  );
};

export default CompleteAnimationGuide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'blue',
  },
});
