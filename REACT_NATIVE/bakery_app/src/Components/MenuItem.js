import {
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../Util/Colors';
import {imgArr} from '../Util/Images';
import {useDispatch} from 'react-redux';
import {cartActions} from '../Store/cart_slice';
import {useSelector} from 'react-redux';
import {transform} from '@babel/core';
import CartScreen from '../Screens/CartScreen';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
const MenuItem = ({item, idx}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let itemCount = 0;
  const cartItems = useSelector(state => state.cart.itemList);
  const thisItem = cartItems.filter(previtem => previtem.id === item.id);
  if (thisItem.length !== 0) {
    itemCount = thisItem[0].quantity;
  }
  const handleAdd = () => {
    dispatch(cartActions.addToCart({...item, img: imgArr[idx]}));
  };
  const handleRemove = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };
  const value = new Animated.Value(100);

  useEffect(() => {
    Animated.timing(value, {
      toValue: 0,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, []);
  // const progress = new Animated.Value(0);
  // useEffect(() => {
  //   Animated.timing(progress, {
  //     toValue: 1,
  //     duration: 350,
  //     easing: Easing.linear,
  //     useNativeDriver: true,
  //   }).start();
  // }, []);
  const handleNavigation = () => {
    navigation.push('DetailsScreen', {img: imgArr[idx], item: item});
  };
  return (
    <Animated.View
      style={[
        styles.container,
        {
          marginTop: value,
        },
      ]}>
      <Pressable onPress={handleNavigation} style={styles.imgContainer}>
        <SharedElement
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          id={`item.${item.id}.photo`}>
          <Image
            resizeMode="contain"
            style={styles.img}
            source={imgArr[idx]}></Image>
        </SharedElement>
      </Pressable>

      <View style={styles.infoContainer}>
        <Text style={{color: Colors.primary300, fontSize: 16, marginTop: 2}}>
          {item.name}
        </Text>
        <View style={styles.addContainer}>
          <Text
            style={{color: Colors.accent500, fontSize: 15, fontWeight: 'bold'}}>
            {' '}
            ₹{item.price}
          </Text>
          {itemCount == 0 && (
            <Pressable onPress={handleAdd} style={styles.btn}>
              <Text style={styles.btnText}>Add +</Text>
            </Pressable>
          )}
          {itemCount > 0 && (
            <View style={styles.countContainer}>
              <Pressable onPress={handleRemove} style={styles.press}>
                <Text
                  style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                  -
                </Text>
              </Pressable>
              <Text style={styles.count}>{itemCount}</Text>
              <Pressable onPress={handleAdd} style={styles.press}>
                <Text
                  style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                  +
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
      <View
        style={[
          styles.indicator,
          {borderColor: item.isVeg ? '#52db02' : '#ff3d1f'},
        ]}>
        <View
          style={[
            styles.circle,
            {backgroundColor: item.isVeg ? '#52db02' : '#ff3d1f'},
          ]}></View>
      </View>
    </Animated.View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accent100,
    height: 180,
    width: '45%',
    marginHorizontal: 8,
    marginBottom: 15,
    elevation: 3,
    borderRadius: 5,
    overflow: 'hidden',
  },
  imgContainer: {
    flex: 2.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1.3,
    backgroundColor: 'white',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    paddingLeft: 7,
    paddingHorizontal: 5,
  },
  img: {
    height: '83%',
    width: '83%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  addContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  btn: {
    backgroundColor: Colors.primary200,
    paddingHorizontal: 15,
    paddingVertical: 7.5,
    borderRadius: 15,
  },
  btnText: {
    color: 'white',
  },
  indicator: {
    position: 'absolute',
    height: 20,
    width: 20,
    top: 4,
    left: 4,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  countContainer: {
    backgroundColor: Colors.primary100,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  press: {
    width: 30,
    backgroundColor: Colors.primary300,
    borderRadius: 15,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 5,
  },
});
