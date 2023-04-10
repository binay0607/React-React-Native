import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {Colors} from '../Util/Colors';
import CartItem from '../Components/CartItem';
import CartBottom from '../Components/CartBottom';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRef, useState} from 'react';

const CartScreen = ({closeModal}) => {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.cart.itemList);
  const subtotal = cartItems.reduce(
    (accumulator, curr) => accumulator + curr.totalPrice,
    0,
  );
  const gst = (subtotal * 0.18).toFixed(0);
  const handleNavigation = () => {
    if (cartItems.length === 0) {
      Alert.alert('No item in the cart', ' Add item to proceed', [
        {text: 'OK'},
      ]);
      return;
    }
    closeModal();
    navigation.navigate('SuccessScreen', {total: +subtotal , gst: +gst});
  };
  return (
    <View>
      <View style={styles.header}>
        <Icon name="slack" size={24} color={Colors.accent300} />
        <Text style={styles.headerTxt}> - --Your Cart-- -</Text>
      </View>
      <View style={styles.cartContainer}>
        {cartItems.length === 0 && (
          <Text style={styles.fallback}>
            You have not added anything to your cart!
          </Text>
        )}
        {cartItems.length > 0 && (
          <FlatList
            data={cartItems}
            renderItem={itemData => <CartItem item={itemData.item} />}
            keyExtractor={item => item.id}></FlatList>
        )}
      </View>
      <CartBottom subtotal={subtotal} />
      <View style={{flexDirection: 'row'}}>
        <Pressable
          style={[
            styles.btn,
            {marginLeft: 30, backgroundColor: Colors.accent300},
          ]}
          onPress={() => {
            closeModal();
          }}>
          <Text style={styles.btnText}>Cancel</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={handleNavigation}>
          <Text style={styles.btnText}>Confirm Order</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    color: Colors.accent500,
    fontSize: 23,
    marginLeft: 15,
    marginTop: 25,
  },
  cartContainer: {
    height: 450,
    width: '95%',
    marginLeft: 10,
    marginTop: 10,
    borderTopColor: '#9e9d9d',
    borderBottomColor: '#9e9d9d',
    borderBottomWidth: 1.5,
  },
  btn: {
    backgroundColor: Colors.primary300,
    paddingVertical: 10,
    width: '40%',
    marginLeft: 16,
    borderRadius: 15,
    marginTop: '16%',
    elevation: 2,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  fallback: {
    color: Colors.primary300,
    textAlign: 'center',
    fontSize: 16,
    marginTop: '60%',
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    left: 0,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  headerTxt: {
    color: Colors.accent300,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
