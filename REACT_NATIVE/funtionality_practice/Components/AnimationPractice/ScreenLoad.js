import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useReducer, useRef, useState} from 'react';
import Sound from 'react-native-sound';

const arr = new Array(600);
for (let i = 0; i < 600; i++) arr[i] = i;
const ScreenLoad = () => {
  const sound1 = new Sound(require('../../Data/pirates.aac'));
  const startSong = () => {
    sound1.play(() => {
      sound1.release();
    });
  };
  const endSong = () => {
    sound1.stop(() => {
      console.log('stopped');
    });
  };
  const [animatedV, setAnimatedV] = useState(
    arr.map(item => new Animated.Value(0)),
  );
  const animateScreen = () => {
    const animations = arr.map(item => {
      return Animated.timing(animatedV[item], {
        toValue: 1,
        duration: 3000,
        useNativeDriver: false,
      });
    });

    Animated.stagger(5, animations).start();
  };

  useEffect(() => {
    animateScreen();
  }, []);
  const progress = useRef(new Animated.Value(0)).current;
  const handleTouch = index => {
    // const sound1 = new Sound(
    //   require('../../Data/piano.aac'),
    //   (error, sound) => {
    //     if (error) {
    //       alert('error' + error.message);
    //       return;
    //     }
    //     sound1.play(() => {
    //       sound1.release();
    //     });
    //   },
    // );
    Animated.sequence([
      Animated.timing(animatedV[index], {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(animatedV[index], {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const animatedShow = arr.map((item, index) => {
    const color = index % 2 === 0 ? 'dodgerblue' : 'dodgerblue';

    return (
      <Animated.View
        key={index}
        onTouchStart={handleTouch.bind(null, index)}
        style={{
          height: 20,
          width: 22,
          backgroundColor: color,
          opacity: animatedV[index],
          margin: 1,
          transform: [
            {
              scaleX: animatedV[index].interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
              }),
            },
            {
              scaleY: animatedV[index].interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
              }),
            },
          ],
        }}></Animated.View>
    );
  });
  return (
    <View
      onTouchMove={event => {
        const row_number = Math.round(Math.ceil(event.nativeEvent.pageY) / 27);
        const col_number = Math.round(Math.ceil(event.nativeEvent.pageX) / 25);

        const index = row_number * 15 + col_number;
        console.log(row_number, col_number);
        handleTouch(index);
        // if (Math.random() < 0.5) {
        //   handleTouch(index - 1);
        // }
      }}
      onTouchStart={startSong}
      onTouchEnd={endSong}
      style={styles.container}>
      {animatedShow}
    </View>
  );
};

export default ScreenLoad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  modal: {
    position: 'absolute',
  },
  modalText: {
    fontSize: 36,
    color: 'purple',
    fontWeight: 'bold',
    left: '47%',
  },
});
