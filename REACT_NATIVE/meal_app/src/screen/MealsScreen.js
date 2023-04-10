import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {Route} from '@react-navigation/native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import {MEALS} from '../data/dummy-data';
import MealCard from '../components/MealCard';
const MealsScreen = ({route}) => {
  const catid = route.params.categoryId;
  const diplayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catid) >= 0;
  });

  return (
    <View style={styles.MealsScreen}>
      <FlatList
        data={diplayedMeals}
        renderItem={itemData => {
          //  const handlePress=()=>{
          //      navigation.navigate('MealRecipe', {
          //          categoryId: itemData.item.id
          //      })
          //  }
          return (
            <MealCard
              key={itemData.index}
              id={itemData.item.id}
              title={itemData.item.title}
              imageUrl={itemData.item.imageUrl}
              complexity={itemData.item.complexity}
              affordability={itemData.item.affordability}
              duration={itemData.item.duration}
            />
          );
        }}></FlatList>
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  MealsScreen: {
    flex: 1,
    backgroundColor: '#18122B',
  },
});
