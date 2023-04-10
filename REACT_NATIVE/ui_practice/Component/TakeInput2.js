import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const TakeInput2 = () => {
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

export default TakeInput2;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: 'center',
    position: 'absolute',
    width: '90%',
    zIndex: 30,
  },
  input: {
    fontSize: 20,
    borderBottomColor: '#f5f5f5',
    borderBottomWidth: 1.8,
    width: '80%',
    marginTop: '12%',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  border: {
    height: 100,
    width: 150,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 9,
    top: 160,
    marginTop: '10%',
    backgroundColor: '#3c9db0',
  },
});
