import {StyleSheet, Text, View, BackHandler} from 'react-native';
import React from 'react';
import Draggable from 'react-native-draggable';
const Screen6 = () => {
  const handleRelease = () => {
    BackHandler.exitApp();
  };
  return (
    <View style={styles.container}>
      <View style={styles.mid}>
        <Draggable
          x={75}
          y={100}
          renderSize={56}
          renderColor="black"
          renderText="A"
          isCircle
          shouldReverse
          onDragRelease={handleRelease}
        />
      </View>
    </View>
  );
};

export default Screen6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid: {
    height: 300,
    width: 300,
    backgroundColor: 'gold',
    overflow: 'hidden',
  },
});
