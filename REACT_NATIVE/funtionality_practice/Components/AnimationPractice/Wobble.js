import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Wobble = () => {
  const progress = useRef(new Animated.Value(0)).current;
  console.log(progress);
  const showAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(progress, {
          toValue: 0.25,
          useNativeDriver: true,
          duration: 200,
        }),
        Animated.timing(progress, {
          toValue: 0.75,
          useNativeDriver: true,
          duration: 200,
        }),
        Animated.timing(progress, {
          toValue: 1,
          useNativeDriver: true,
          duration: 200,
        }),
      ]),
      {iterations: 3},
    ).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                rotate: progress.interpolate({
                  inputRange: [0, 0.25, 0.75, 1],
                  outputRange: ['0deg', '-20deg', '20deg', '0deg'],
                }),
              },
            ],
          },
        ]}></Animated.View>
      <Pressable onPress={showAnimation}>
        <Text style={{fontSize: 18, color: 'black', marginTop: 50}}>
          Wobble It
        </Text>
      </Pressable>
    </View>
  );
};

export default Wobble;

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
