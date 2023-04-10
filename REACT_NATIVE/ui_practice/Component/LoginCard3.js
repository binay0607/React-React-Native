import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  TextInput,
  FlatList,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import bgImg from '../assets/pngwing.png';

import Icon from 'react-native-vector-icons/FontAwesome';
import TakeInput2 from './TakeInput2';
const LoginCard3 = () => {
  const grid = new Array(20);
  for (let i = 1; i < 21; i++) {
    grid[i - 1] = i;
  }
  return (
    <View style={styles.inputCardContainer}>
      <FlatList
        style={styles.flatlist}
        data={grid}
        renderItem={({item, index}) => {
          console.log(`styles.grid${index}`);
          let lside = index % 4;
          return (
            <View
              key={index}
              style={[
                styles.grid,
                index === 0 && {
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                  borderTopWidth: 2,
                  borderTopColor: 'white',
                  borderTopLeftRadius: 30,
                },
                (index === 1 || index === 2) && {
                  borderTopWidth: 2,
                  borderTopColor: 'white',
                },
                index === 3 && {
                  borderTopRightRadius: 30,
                  borderTopWidth: 2,
                  borderRightWidth: 2,
                  borderTopColor: 'white',
                  borderRightColor: 'white',
                },
                [4, 8, 12].includes(index) && {
                  borderLeftWidth: 2,
                  borderLeftColor: 'white',
                },
                [7, 11, 15].includes(index) && {
                  borderRightWidth: 2,
                  borderRightColor: 'white',
                },
                index === 16 && {
                  borderLeftWidth: 2,
                  borderLeftColor: 'white',
                  borderBottomWidth: 2,
                  borderBottomColor: 'white',
                  borderBottomLeftRadius: 30,
                },
                index === 19 && {
                  borderRightWidth: 2,
                  borderRightColor: 'white',
                  borderBottomWidth: 2,
                  borderBottomColor: 'white',
                  borderBottomRightRadius: 30,
                },
                index === 17 && {
                  borderTopWidth: 2,
                  borderTopColor: 'white',
                  borderLeftColor: 'white',
                  borderLeftWidth: 2,
                  borderTopLeftRadius: 20,
                },
                index === 18 && {
                  borderTopWidth: 2,
                  borderTopColor: 'white',
                  borderRightColor: 'white',
                  borderRightWidth: 2,
                  borderTopRightRadius: 20,
                },
              ]}></View>
          );
        }}
        numColumns={4}></FlatList>
      <TakeInput2 />
      <Pressable style={styles.btn}>
        <Text style={styles.btntxt}>Login</Text>
      </Pressable>
      <Icon style={styles.icon1} name="user" size={20} />
      <Icon style={styles.icon2} name="eye" size={20} />
      <Text style={styles.forgot}> Forgot Password?</Text>
    </View>
  );
};

export default LoginCard3;

const styles = StyleSheet.create({
  grid: {
    height: 46,
    width: 81,
    zIndex: 10,
  },
  inputCardContainer: {
    width: '100%',
    alignItems: 'center',
  },

  forgot: {
    fontSize: 18,
    marginTop: 45,
    letterSpacing: 1,
  },
  icon1: {
    position: 'absolute',
    top: 53,
    right: 63,
  },
  icon2: {
    position: 'absolute',
    top: 126,
    right: 63,
  },
  btn: {
    position: 'absolute',
    bottom: 45,
    backgroundColor: '#102847',
    borderRadius: 15,
    elevation: 3,
    zIndex: 11,
  },
  btntxt: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 12,
    paddingVertical: 13,
    paddingHorizontal: 28,
  },
});
