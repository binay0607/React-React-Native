import {Animated, StyleSheet, PanResponder, View} from 'react-native';
import React, {useRef} from 'react';

const PanResponderPage = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      //   onPanResponderRelease: () => {
      //     pan.extractOffset();
      //   },
    }),
  ).current;
  return (
    <View style={styles.container}>
      <Animated.View
        style={{transform: [{translateX: pan.x}, {translateY: pan.y}]}}
        {...panResponder.panHandlers}>
        <View style={styles.box}></View>
      </Animated.View>
    </View>
  );
};

export default PanResponderPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'gold',
    borderRadius: 15,
  },
});
