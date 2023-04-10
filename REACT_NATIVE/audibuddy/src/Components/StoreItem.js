import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const StoreItem = ({store, lat, lon}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    console.log('store clicked');
    if (!store.isPending) {
      return;
    }
    navigation.navigate('StoreMapScreen', {
      storeId: store.id,
      lat: lat,
      lon: lon,
    });
  };
  return (
    <Pressable
      key={store.id}
      onPress={handleNavigation}
      style={styles.container}>
      <Image
        style={styles.storeImg}
        source={{
          uri: 'https://media.istockphoto.com/id/1252652997/vector/convenience-store-rgb-color-icon-grocery-shop-exterior-small-business-in-retail-duty-free.jpg?s=612x612&w=0&k=20&c=GOzTjsw53poQ2jKvPvuF_jSdXnImKNzUF3nUObC560k=',
        }}
      />
      <View>
        <Text style={[styles.infoText, styles.title]}>{store.name}</Text>
        <Text style={[styles.infoText, styles.type]}>{store.type}</Text>
        <Text style={styles.infoText}>
          <Icon name="map-pin" size={16} color="crimson" /> {store.address}
        </Text>
      </View>
    </Pressable>
  );
};

export default StoreItem;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 6,
    marginHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#0a1f3a',
    padding: 4,
  },
  storeImg: {
    height: 85,
    width: 85,
    borderRadius: 8,
  },
  infoText: {
    color: 'white',
    marginLeft: 18,
    marginVertical: 2,
    fontSize: 16,
  },
  title: {
    fontSize: 18,
  },
  type: {
    fontSize: 14,
    color: 'grey',
  },
});
