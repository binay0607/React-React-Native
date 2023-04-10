import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Animated,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import React, {useRef, useState} from 'react';
const arr = new Array(30);
arr.fill(0);
const uris = [
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/e/ec/All_Might_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200511210525',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/b/ba/Eraser_Head_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200606161947',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/4/47/Present_Mic_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200401121633',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/9/93/Snipe_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200401121956',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/1/1e/Midnight_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200401121928',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/3/32/Cementoss_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200401121847',
  'https://static.wikia.nocookie.net/bokunoheroacademia/images/7/7c/Ectoplasm_Anime_Portrait.png/revision/latest/scale-to-width-down/135?cb=20200401122044',
];
const listItemHeight = 100;
const ListAnimation = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [show, setShow] = useState(0);
  const handleShow = () => {
    if (show === 3) {
      setShow(0);
    } else {
      setShow(show + 1);
    }
  };

  return (
    <LinearGradient
      style={{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
      }}
      colors={['#f5f3dc', '#fa3c32']}
      locations={[0, 1]}>
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
        style={{width: '90%'}}
        data={arr}
        renderItem={({dataItem, index}) => {
          let transformStyle = {
            scale: scrollY.interpolate({
              inputRange: [
                -1,
                0,
                listItemHeight * index,
                listItemHeight * (index + 1),
              ],
              outputRange: [1, 1, 1, 0],
            }),
          };
          if (show == 1)
            transformStyle = {
              translateX: scrollY.interpolate({
                inputRange: [
                  -1,
                  0,
                  listItemHeight * index,
                  listItemHeight * (index + 1),
                ],
                outputRange: [0, 0, 0, 800],
              }),
            };
          if (show == 2)
            transformStyle = {
              translateY: scrollY.interpolate({
                inputRange: [
                  -1,
                  0,
                  listItemHeight * index,
                  listItemHeight * (index + 1),
                ],
                outputRange: [0, 0, 0, 200],
              }),
            };
          if (show == 3)
            transformStyle = {
              rotateX: scrollY.interpolate({
                inputRange: [
                  -1,
                  0,
                  listItemHeight * index,
                  listItemHeight * (index + 1),
                ],
                outputRange: ['0deg', '0deg', '0deg', '180deg'],
              }),
            };

          return (
            <Animated.View
              style={{
                backgroundColor: '#edebeb',
                flexDirection: 'row',
                height: 90,
                marginVertical: 5,
                elevation: 8,
                borderRadius: 3,
                alignItems: 'center',
                opacity: 0.9,
                transform: [
                  transformStyle,

                  // show === 1 &&
                  // show === 2 && ,
                  // show === 3 && ,
                ],
              }}>
              <Image
                style={{width: 80, height: '90%', marginHorizontal: 6}}
                source={{
                  uri: uris[Math.floor(Math.random() * 7)],
                }}
              />
            </Animated.View>
          );
        }}
      />
      <TouchableOpacity
        onPress={handleShow}
        style={{
          position: 'absolute',
          bottom: 50,
          height: 40,
          backgroundColor: 'black',
          borderRadius: 8,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            paddingHorizontal: 20,
          }}>
          Switch
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ListAnimation;

const styles = StyleSheet.create({});
