import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PinScreen = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const handleText = enteredText => {
    setError(false);
    setPin(enteredText);
  };
  function handlePress() {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userPin');
        console.log('json', jsonValue);
        if (jsonValue === pin) {
          navigation.replace('HomeScreen');
        } else if (jsonValue === null) {
          navigation.replace('HomeScreen');
        } else {
          setError(true);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }
  ///cancel goind back gesture

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        placeholder="Enter your 6 digit pin"
        placeholderTextColor="grey"
        onChangeText={handleText}
      />
      {error && <Text style={styles.fallbackText}> Wrong Pin Entered</Text>}
      <Button
        style={styles.btn}
        title="Enter"
        onPress={handlePress}
        color="red"></Button>
    </View>
  );
};

export default PinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '60%',
    borderBottomColor: 'red',
    borderBottomWidth: 3,
    fontSize: 20,
    color: 'red',
    marginBottom: 10,
  },
  fallbackText: {
    marginTop: 3,
    color: 'red',
  },
});
