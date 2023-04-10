import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../Util/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({setSearchText}) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#6b6a6a" />
      <TextInput
        style={styles.search}
        placeholder="Search your favorite.."
        placeholderTextColor={Colors.accent300}
        selectionColor={Colors.primary200}
        underlineColorAndroid="transparent"
        onChangeText={enteredText => {
          setSearchText(enteredText);
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    height: 40,
    backgroundColor: Colors.accent100,
    width: '93%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 15,
  },
  search: {
    fontSize: 18,
    color: Colors.primary300,
    marginHorizontal: 5,
  },
});
