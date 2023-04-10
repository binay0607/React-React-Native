import {StyleSheet, FlatList, View} from 'react-native';
import React from 'react';
import PlaceItem from './PlaceItem';

const PlaceList = ({places}) => {
  // console.log(places);
  return (
    <View>
      <FlatList
        style={styles.list}
        data={places}
        renderItem={itemData => {
          return (
            <PlaceItem
              title={itemData.item.title}
              imgUri={itemData.item.imgUri}
              location={itemData.item.location}
              id={itemData.item.id}
            />
          );
        }}></FlatList>
    </View>
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 4,
  },
});
