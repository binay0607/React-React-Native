import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../Util/Colors';

const CartBottom = ({subtotal}) => {
  const gst = (subtotal * 0.18).toFixed(0);
  return (
    <View style={styles.container}>
      <View style={[styles.subContainer, {marginTop: 22}]}>
        <Text style={styles.subText}>SubTotal: </Text>
        <Text style={styles.subText}>₹{subtotal}.00</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subText}>Gst (18%) :</Text>
        <Text style={styles.subText}>₹{gst}.00</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Total :</Text>
        <Text style={styles.text}>₹{+subtotal + +gst}.00</Text>
      </View>
    </View>
  );
};

export default CartBottom;

const styles = StyleSheet.create({
  container: {
    width: '93%',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
  },
  subText: {
    color: Colors.accent300,
    fontSize: 18,
  },
  text: {
    marginTop: 5,
    color: Colors.accent500,
    fontWeight: 'bold',
    fontSize: 22,
  },
});
