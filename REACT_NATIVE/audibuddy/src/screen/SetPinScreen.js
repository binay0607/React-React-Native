import {StyleSheet, TextInput, View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SetPinScreen = ({navigation}) => {
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [error, setError] = useState(false);
  const storeData = async value => {
    try {
      await AsyncStorage.setItem('userPin', value);
      console.log('pin stored ', value);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePress = async () => {
    if (pin === pin2) {
      try {
        setPin('');
        setPin2('');
        storeData(pin);
        navigation.navigate('HomeScreen');
        console.log('navigated');
      } catch (error) {
        console.log(error);
      }
    } else {
      setError(true);
    }
  };
  const handlePin = enteredText => {
    setError(false);
    setPin(enteredText);
  };
  const handlePin2 = enteredText => {
    setPin2(enteredText);
  };

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        placeholder="Enter your 6 digit Pin"
        placeholderTextColor="grey"
        onChangeText={handlePin}
      />
      <TextInput
        keyboardType="number-pad"
        style={styles.input}
        placeholder="Confirm Pin"
        placeholderTextColor="grey"
        onChangeText={handlePin2}
      />
      {error && <Text style={styles.fallbackText}>Pin Doesn't Match</Text>}
      <Button
        style={styles.btn}
        title="Enter"
        onPress={handlePress}
        color="red"></Button>
    </View>
  );
};

export default SetPinScreen;

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
    marginBottom: 20,
  },
  fallbackText: {
    marginTop: 3,
    color: 'red',
  },
});
