import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../Util/Colors';

const CatHeader = ({cat, setType}) => {
  const [vegSelected, setvegSelected] = useState(false);
  const [nonvegSelected, setnonvegSelected] = useState(false);
 
  const handleVeg = () => {
    setType('veg');
    setvegSelected(!vegSelected);
  };
  const handleNonveg = () => {
    setType('nonveg');
    setnonvegSelected(!nonvegSelected);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.catText}>{cat}</Text>
      <View style={styles.btnContainer}>
        <Pressable
          style={[
            styles.btn,
            vegSelected && {
              backgroundColor: Colors.primary100,
              borderColor: Colors.primary300,
              borderWidth: 2,
            },
          ]}
          onPress={handleVeg}>
          <View style={[styles.indicator, {backgroundColor: '#52db02'}]}></View>
          <Text style={styles.btnText}> Veg</Text>
        </Pressable>
        <Pressable
          style={[
            styles.btn,
            nonvegSelected && {
              backgroundColor: Colors.primary100,
              borderColor: Colors.primary300,
              borderWidth: 2,
            },
          ]}
          onPress={handleNonveg}>
          <View style={[styles.indicator, {backgroundColor: '#ff3d1f'}]}></View>
          <Text style={styles.btnText}> NonVeg</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  catText: {
    color: Colors.primary300,
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btn: {
    height: 36,
    width: 80,
    marginHorizontal: 5,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: Colors.accent100,
  },
  btnText: {
    color: Colors.accent300,
  },
  indicator: {
    height: 13,
    width: 13,
    borderRadius: 10,
  },
});
