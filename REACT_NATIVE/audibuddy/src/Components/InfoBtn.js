import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
const InfoBtn = () => {
  return (
    <Pressable onPress={handlePress} style={styles.btn}>
      <LinearGradient
        style={styles.btngradient}
        colors={['#0a1f3a', '#038fab']}>
        <Text style={styles.btntxt}>Login</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default InfoBtn;

const styles = StyleSheet.create({
  btn: {
    width: '55%',
    marginTop: 22,
    marginLeft: 73,
  },
  btngradient: {
    borderRadius: 15,
    elevation: 1,
  },
  btntxt: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 12,
    paddingVertical: 15,
    paddingHorizontal: 28,
  },
});
