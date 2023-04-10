import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Test = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: 100,
          width: 100,
          borderRadius: 100,
          borderWidth: 10,
          borderColor: 'white',
          shadowColor: 'white',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 1,
          shadowRadius: 10,
          elevation: 2,
        }}></View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
