import { BackHandler, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryCard from '../components/CategoryCard'
const CategoriesScreen = ({navigation}) => {
    
  return (
    <View style= {styles.CategoriesScreen}>
      <FlatList data={CATEGORIES} numColumns={2} renderItem= {(itemData)=>{
            const handlePress=()=>{
                navigation.navigate('MealsOverview', {
                    categoryId: itemData.item.id
                })
            }
            return(<CategoryCard key={itemData.index} title={itemData.item.title} color={itemData.item.color} onPress= {handlePress}/>)
      }}></FlatList>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    CategoriesScreen:{
        flex:1,
        backgroundColor:'#18122B'
    }
})