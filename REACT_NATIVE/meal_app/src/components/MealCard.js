import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const MealCard = ({
  id,
  title,
  imageUrl,
  affordability,
  duration,
  complexity,
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('MealRecipe', {
      mealId: id,
    });
  };
  return (
    <View style={styles.MealCard}>
      <Pressable onPress={handlePress}>
        <View style={styles.MealCardContainer}>
          <Image style={styles.image} source={{uri: imageUrl}} />
          <Text style={styles.txt}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.dtxt}>DUR: {duration}M</Text>
          <Text style={styles.dtxt}>{complexity.toUpperCase()}</Text>
          <Text style={styles.dtxt}> {affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  MealCard: {
    flex: 1,

    shadowColor: 'white',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
  },
  MealCardContainer: {
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 8,
    margin: 10,
  },
  txt: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dtxt: {
    marginHorizontal: 4,
  },
});
