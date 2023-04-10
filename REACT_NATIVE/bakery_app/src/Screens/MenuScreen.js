import {
  Animated,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {bakeryData} from '../Data/data/bakeryData';
import Categories from '../Components/Categories';
import SearchBar from '../Components/SearchBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../Util/Colors';
import List from '../Components/List';
import CatHeader from '../Components/CatHeader';
import {useDispatch, useSelector} from 'react-redux';
import CartScreen from './CartScreen';
import {cartActions} from '../Store/cart_slice';
const MenuScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [vegSelected, setvegSelected] = useState(false);
  const [nonvegSelected, setnonvegSelected] = useState(false);
  const [searchText, setSearchText] = useState('');

  const cartCount = useSelector(state => state.cart.itemList.length);
  const [idx, setIdx] = useState(0);
  const handlType = type => {
    if (type === 'veg') setvegSelected(!vegSelected);
    else if (type === 'nonveg') setnonvegSelected(!nonvegSelected);
  };
  const handleIdx = newIdx => {
    setIdx(newIdx);
  };
  const handleNavigation = () => {
    navigation.navigate('CartScreen');
  };
  const handleSearchText = text => {
    setSearchText(text);
  };
  let itemList = bakeryData[idx].items;

  if (vegSelected && !nonvegSelected) {
    itemList = itemList.filter(item => item.isVeg === true);
  } else if (!vegSelected && nonvegSelected) {
    itemList = itemList.filter(item => item.isVeg === false);
  }

  itemList = itemList.filter(item =>
    item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
  );
  const value = new Animated.Value(30);
  const changeView = () => {
    value.setValue(0);
    Animated.timing(value, {
      toValue: 30,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    changeView();
  }, [cartCount]);
  const progress = useRef(new Animated.Value(0.5)).current;
  const openModal = () => {
    Animated.spring(progress, {
      toValue: 1,
      useNativeDriver: false,
      duration: 500,
    }).start();
  };
  const closeModal = () => {
    Animated.spring(progress, {
      toValue: 0.5,
      useNativeDriver: false,
      duration: 700,
    }).start();
  };
  return (
    <View style={styles.menu}>
      <View style={styles.header}>
        <Icon name="slack" size={24} color={Colors.primary300} />
        <Text style={styles.headerTxt}> - --Menu-- -</Text>
      </View>
      <SearchBar setSearchText={handleSearchText} />
      <Categories setIdx={handleIdx} />
      <CatHeader cat={bakeryData[idx].category} setType={handlType} />
      <List itemList={itemList} idx={idx} />
      <Pressable onPress={openModal} style={styles.cartContainer}>
        <Text style={styles.cartText}>Cart</Text>
        {cartCount > 0 && (
          <Animated.View style={[styles.count, {height: value}]}>
            <Text style={styles.countText}>{cartCount}</Text>
          </Animated.View>
        )}
      </Pressable>
      <Animated.View
        style={[
          styles.modal,
          {
            opacity: progress,
            bottom: progress.interpolate({
              inputRange: [0.5, 1],
              outputRange: [1000, 0],
            }),
          },
        ]}>
        <CartScreen closeModal={closeModal} />
      </Animated.View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    left: 0,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  headerTxt: {
    color: Colors.primary200,
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartContainer: {
    position: 'absolute',
    height: 45,
    width: 120,
    backgroundColor: Colors.primary300,
    top: 680,
    left: '34%',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 2,
  },
  cartText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 39,
    marginRight: 15,
  },
  count: {
    backgroundColor: Colors.accent100,
    width: 30,
    borderRadius: 25,
    marginBottom: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.primary300,
  },
  countText: {
    color: Colors.primary400,
    fontWeight: 'bold',
    fontSize: 16,
  },
  modal: {
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
