import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Jello = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const showAnimation = () => {
    Animated.sequence([
      Animated.timing(progress, {
        toValue: 1,
        useNativeDriver: true,
        duration: 400,
      }),
      Animated.timing(progress, {
        toValue: 0,
        useNativeDriver: true,
        duration: 400,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                scaleX: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.8],
                }),
              },
              {
                scaleY: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.2],
                }),
              },
            ],
          },
        ]}></Animated.View>
      <Pressable onPress={showAnimation}>
        <Text style={{fontSize: 18, color: 'black', marginTop: 50}}>
          Jello It
        </Text>
      </Pressable>
    </View>
  );
};

export default Jello;

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
