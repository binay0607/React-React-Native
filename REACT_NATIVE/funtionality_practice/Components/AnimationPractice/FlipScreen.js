import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
const FlipScreen = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const [flip, setFlip] = useState(1);
  const animate = () => {
    Animated.timing(progress, {
      toValue: flip,
      duration: 2000,
      useNativeDriver: false,
    }).start();
    setFlip(Math.abs(flip - 1));
  };
  const insideColor = progress.interpolate({
    inputRange: [0, 0.001, 0.5, 0.501, 1],
    outputRange: ['#2B3467', '#2B3467', '#2B3467', '#E96479', '#E96479'],
  });
  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: progress.interpolate({
            inputRange: [0, 0.001, 0.5, 0.501, 1],
            outputRange: [
              '#E96479',
              '#E96479',
              '#E96479',
              '#2B3467',
              '#2B3467',
            ],
          }),
        },
      ]}>
      <Animated.Text
        style={[
          styles.text,
          {
            color: insideColor,
          },
        ]}>
        Hey there!!
      </Animated.Text>
      <Animated.View
        style={[
          styles.circle,
          {
            backgroundColor: progress.interpolate({
              inputRange: [0, 0.001, 0.5, 0.501, 1],
              outputRange: [
                '#2B3467',
                '#2B3467',
                '#2B3467',
                '#E96479',
                '#E96479',
              ],
            }),
            transform: [
              {
                perspective: 400,
              },
              {
                rotateY: progress.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '-90deg', '-180deg'],
                }),
              },
              {
                scale: progress.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 10, 1],
                }),
              },
            ],
          },
        ]}>
        <Icon
          onPress={animate}
          style={{padding: 5, elevation: 2}}
          name="arrow-right"
          size={24}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default FlipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E96479',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  circle: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: '#7DB9B6',
    marginBottom: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 500,
  },
});
