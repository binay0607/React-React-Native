import {StyleSheet, View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../Util/Colors';
const catlog = [
  {icon: 'caret-up', text: 'Pizza'},
  {icon: 'caret-up', text: 'Burger'},
  {icon: 'caret-up', text: 'Sandwich'},
  {icon: 'caret-up', text: 'Rolls'},
  {icon: 'caret-up', text: 'Appetizers'},
  {icon: 'caret-up', text: 'Desserts'},
  {icon: 'caret-up', text: 'Coffee'},
  {icon: 'caret-up', text: 'Drinks'},
];
const Categories = ({setIdx}) => {
  return (
    <View>
      <ScrollView style={styles.container} horizontal={true}>
        {catlog.map((item, index) => {
          return (
            <Pressable
              onPress={setIdx.bind(null, index)}
              key={index}
              style={({pressed}) => [
                styles.catContainer,
                pressed && {backgroundColor: Colors.primary100},
              ]}>
              <Icon
                style={styles.icon}
                name={item.icon}
                size={40}
                color={Colors.primary100}></Icon>
              <Text
                style={{color: Colors.accent300, fontSize: 12, marginTop: 5}}>
                {item.text}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  catContainer: {
    backgroundColor: Colors.accent100,
    height: 75,
    marginHorizontal: 7,
    borderRadius: 12,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  icon: {
    marginHorizontal: 17,
  },
});
