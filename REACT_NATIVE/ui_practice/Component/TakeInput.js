import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const TakeInput = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        selectionColor="#2e70d5"
        style={styles.input}
        placeholder="UserName"
      />
      <TextInput
        selectionColor="#2e70d5"
        style={[styles.input, {marginTop: 35}]}
        placeholder="Password"></TextInput>
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
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 1.8,
    width: '80%',
    marginTop: '15%',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
