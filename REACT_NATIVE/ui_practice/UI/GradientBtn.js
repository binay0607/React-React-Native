import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const GradientBtn = () => {
  return (
    <Pressable style={styles.btn}>
      <LinearGradient
        style={styles.btngradient}
        colors={['#ffa142', 'crimson']}>
        <Text style={styles.btntxt}>Login</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default GradientBtn;

const styles = StyleSheet.create({
  btn: {
    position: 'absolute',
    bottom: 40,
  },
  btngradient: {
    borderRadius: 10,
  },
  btntxt: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 12,
    paddingVertical: 13,
    paddingHorizontal: 25,
  },
});
