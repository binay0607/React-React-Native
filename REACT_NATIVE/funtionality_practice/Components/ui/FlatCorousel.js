import {
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Animated,
  Image,
} from 'react-native';
import React, {useRef} from 'react';
import Robot from '../../assets/robot.png';
const {width, height} = Dimensions.get('screen');
const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    key: '3571572',
    title: 'Multi-lateral intermediate moratorium',
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: Robot,
  },
  {
    key: '3571747',
    title: 'Automated radical data-warehouse',
    description:
      'Use the optical SAS system, then you can navigate the auxiliary alarm!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571747.png',
  },
  {
    key: '3571680',
    title: 'Inverse attitude-oriented system engine',
    description:
      'The ADP array is down, compress the online sensor so we can input the HTTP panel!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571680.png',
  },
  {
    key: '3571603',
    title: 'Monitored global data-warehouse',
    description: 'We need to program the open-source IB interface!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571603.png',
  },
];

const BackDrop = ({scrollX}) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, index) => index * width),
    outputRange: bgs,
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFill, {backgroundColor}]}></Animated.View>
  );
};
const Indicator = ({scrollX}) => {
  return (
    <View style={{position: 'absolute', flexDirection: 'row', bottom: 80}}>
      {DATA.map((_, index) => {
        const scale = scrollX.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [0.8, 1, 0.8],
        });
        const opacityA = scrollX.interpolate({
          inputRange: [(index - 1) * width, index * width, (index + 1) * width],
          outputRange: [0.7, 1, 0.7],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={_.key}
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
              backgroundColor: 'white',
              margin: 3,
              opacity: opacityA,
              transform: [{scale: scale}],
            }}></Animated.View>
        );
      })}
    </View>
  );
};
const Square = ({scrollX}) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), width),
    1,
  );
  const rotateAnim = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg'],
  });
  const translateAnim = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -600, 0],
  });
  return (
    <Animated.View
      style={{
        height: height,
        width: height,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: height * 0.64,
        borderRadius: 65,
        transform: [{rotate: rotateAnim}],
      }}></Animated.View>
  );
};
const FlatCorousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <BackDrop scrollX={scrollX} />
      <Indicator scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        style={styles.flatCorousel}
        data={DATA}
        keyExtractor={item => item.key}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        horizontal={true}
        scrollEventThrottle={16}
        pagingEnabled
        renderItem={({item, index}) => {
          return (
            <View
              style={[{alignItems: 'center', width: width, height: height}]}>
              <View style={{flex: 0.5, paddingTop: 60}}>
                <Image
                  source={Robot}
                  style={{
                    width: width / 2,
                    height: width / 2,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View
                style={{
                  flex: 0.5,
                  paddingHorizontal: 10,
                }}>
                <Text style={{fontSize: 24, textAlign: 'center'}}>
                  {item.title}
                </Text>
                <Text>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default FlatCorousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatCorousel: {
    width: '100%',
    height: '100%',
  },
  corouselText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});
