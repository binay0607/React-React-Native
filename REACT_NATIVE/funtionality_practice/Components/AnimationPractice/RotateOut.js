import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const RotateOut = () => {
  const progress = useRef(new Animated.Value(1)).current;
  const [cardVisible, setcardVisible] = useState(true);
  console.log(progress);
  const showAnimation = () => {
    Animated.sequence([
      Animated.timing(progress, {
        toValue: 0.5,
        useNativeDriver: true,
        duration: 200,
      }),
      Animated.timing(progress, {
        toValue: 0,
        useNativeDriver: true,
        duration: 100,
      }),
    ]).start();
    setcardVisible(false);
  };
  const hideAnimation = () => {
    Animated.sequence([
      Animated.timing(progress, {
        toValue: 0.5,
        useNativeDriver: true,
        duration: 100,
      }),
      Animated.timing(progress, {
        toValue: 1,
        useNativeDriver: true,
        duration: 200,
      }),
    ]).start();
    setcardVisible(true);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            opacity: progress,
            transform: [
              {
                rotate: progress.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['180deg', '180deg', '0deg'],
                }),
              },
              {
                scale: progress.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 0.25, 1],
                }),
              },
            ],
          },
        ]}></Animated.View>
      <Pressable onPress={cardVisible ? showAnimation : hideAnimation}>
        <Text style={{fontSize: 18, color: 'black', marginTop: 50}}>
          {cardVisible ? 'Rotate Out' : 'Rotate In'}
        </Text>
      </Pressable>
    </View>
  );
};

export default RotateOut;

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
