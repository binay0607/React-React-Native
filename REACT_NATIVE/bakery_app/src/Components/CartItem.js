import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {Colors} from '../Util/Colors';
import {useDispatch} from 'react-redux';
import {cartActions} from '../Store/cart_slice';
const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(cartActions.addToCart({...item}));
  };
  const handleRemove = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={item.img}></Image>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Pressable style={styles.indicator}>
          <View style={[styles.circle, {backgroundColor: '#ff3d1f'}]}></View>
          <Text style={styles.indicatorText}> NonVeg</Text>
        </Pressable>
      </View>
      <View style={styles.countContainer}>
        <Pressable onPress={handleRemove}>
          <Text style={styles.btn}>-</Text>
        </Pressable>
        <Text style={styles.count}>{item.quantity}</Text>
        <Pressable onPress={handleAdd}>
          <Text style={styles.btn}>+</Text>
        </Pressable>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}>₹{item.totalPrice}</Text>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    height: 80,
    width: '100%',
    borderBottomColor: '#e3e1e1',
    borderBottomWidth: 2,
  },
  imgContainer: {
    flex: 0.8,
    backgroundColor: '#d1d1d1',
    marginLeft: 3,
    marginVertical: 6,
    borderRadius: 20,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    flex: 1.4,
    justifyContent: 'center',
    marginLeft: 6,
  },
  countContainer: {
    flex: 1.0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceContainer: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: Colors.accent500,
  },
  name: {
    fontSize: 16,
    color: Colors.primary300,
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
  indicator: {
    width: 80,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorText: {
    color: Colors.accent300,
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  btn: {
    color: Colors.primary300,
    fontSize: 28,
    width: 26,
    textAlign: 'center',
  },
  count: {
    color: Colors.accent300,
    fontSize: 24,
    borderBottomWidth: 2,
    borderColor: '#b3b1b1',
    paddingHorizontal: 5,
  },
});
