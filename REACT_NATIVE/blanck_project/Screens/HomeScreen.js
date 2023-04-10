import {View, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button
        title="go to first"
        onPress={() => {
          navigation.navigate('First');
        }}
        color="crimson"></Button>
    </View>
  );
};

export default HomeScreen;
