import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SettingsScreen = () => {
  const handleClick = () => {};
  return (
    <LinearGradient
      style={styles.container}
      colors={['#0a1f3a', '#038fab']}
      locations={[0, 1]}></LinearGradient>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
