import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import {iteratorSymbol} from 'immer/dist/internal';
import {Colors} from '../Util/Colors';
import {SharedElement} from 'react-navigation-shared-element';
const DetailsScreen = () => {
  const route = useRoute();
  console.log(route.params);
  return (
    <View style={styles.container}>
      <SharedElement
        style={styles.imgContainer}
        id={`item.${route.params.item.id}.photo`}>
        <Image
          resizeMode="contain"
          style={styles.img}
          source={route.params.img}
        />
      </SharedElement>
      <Text
        style={{
          fontSize: 22,
          color: route.params.item.isVeg ? '#52db02' : '#ff3d1f',
          fontWeight: 'bold',
        }}>
        {route.params.item.name}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: Colors.accent300,
          marginTop: 30,
          width: '90%',
          textAlign: 'center',
          borderBottomWidth: 1,
          borderColor: Colors.accent300,
          padding: 5,
          marginBottom: 20,
        }}>
        Ingredients
      </Text>
      <Text style={{color: Colors.accent300, fontSize: 16, margin: 6}}>
        • Lorem ipsum dolor sit amet
      </Text>
      <Text style={{color: Colors.accent300, fontSize: 16, margin: 6}}>
        • Etiam aliquam eros a tempor blandit.
      </Text>
      <Text style={{color: Colors.accent300, fontSize: 16, margin: 6}}>
        • consequat semper justo
      </Text>
      <Text style={{color: Colors.accent300, fontSize: 16, margin: 6}}>
        • sed efficitur neque facilisis ac
      </Text>
      <Text style={{color: Colors.accent300, fontSize: 16, margin: 6}}>
        • tempus libero vel
      </Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    marginTop: 50,
    height: 280,
    width: 280,
  },
  imgContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'gold',
    marginBottom: 20,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
});
