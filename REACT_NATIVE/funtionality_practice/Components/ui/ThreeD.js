import {StyleSheet, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';

const ThreeD = () => {
  const [shift, setShift] = useState(0);
  const handlePress = () => {
    setShift(-5);
    setTimeout(() => {
      setShift(0);
    }, 100);
  };
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <View style={styles.offset}></View>
        <Pressable
          onPress={handlePress}
          style={[styles.pushable, {bottom: shift}]}>
          <Text style={styles.pushableText}>Press Me</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ThreeD;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  btnContainer: {
    width: 100,
    height: 50,
  },
  pushable: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#f52c40',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offset: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#b51020',
    borderRadius: 30,
    bottom: -5,
  },
  pushableText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
