import {StyleSheet, Text, FlatList} from 'react-native';
import React from 'react';
import MenuItem from './MenuItem';
import {Colors} from '../Util/Colors';
const List = ({itemList, idx}) => {
  if (itemList.length === 0) {
    return <Text style={styles.fallback}>Sorry! No results found.</Text>;
  }
  return (
    <FlatList
      style={styles.container}
      data={itemList}
      renderItem={itemData => <MenuItem item={itemData.item} idx={idx} />}
      keyExtractor={item => item.id}
      numColumns={2}
    />
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    marginLeft: 6,
    marginTop: 20,
  },
  fallback: {
    color: Colors.primary300,
    textAlign: 'center',
    fontSize: 16,
    marginTop: '50%',
  },
});
