import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';

const TakeInput = ({showPassword}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.bar}></View>
      <TextInput
        selectionColor="#0a1f3a"
        style={styles.input}
        placeholder="UserName"
        placeholderTextColor="#cfcfcf"
      />
      <TextInput
        selectionColor="#0a1f3a"
        style={[styles.input, {marginTop: 30}]}
        placeholder="Password"
        placeholderTextColor="#cfcfcf"></TextInput>
    </View>
  );
};

export default TakeInput;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    zIndex: 20,
  },
  input: {
    fontSize: 20,
    borderColor: '#cfcfcf',
    borderWidth: 1.7,
    width: '80%',
    marginTop: '15%',
    color: '#0a1f3a',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  bar: {
    backgroundColor: '#cfcfcf',
    height: 4,
    width: '30%',
    marginTop: 15,
    borderRadius: 3,
  },
});
