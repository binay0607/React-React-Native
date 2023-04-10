import { StyleSheet, Text, View , Image, ScrollView, Button} from 'react-native'
import React, {useLayoutEffect, useContext} from 'react'
import { MEALS } from '../data/dummy-data';
import { FavoriteContext } from '../store/favorites-context';

const MealRecipeScreen = ({route, navigation}) => {
    const favoriteMealsContext=  useContext(FavoriteContext);
    const mealId= route.params.mealId;
    const selectedMeal= MEALS.find((item)=> item.id===mealId);
    const mealisfav= favoriteMealsContext.ids.includes(mealId);
    const handlefav=()=>{
        if(mealisfav){
            favoriteMealsContext.removeFavorite(mealId);
        }else{
            favoriteMealsContext.addFavorite(mealId);
        }
    }
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: ()=>{
            return <Button title= {mealisfav ? 'UnFav' : 'Fav'} onPress={handlefav} color={mealisfav ? '#18122B': '#913175'} ></Button>
        }
      })
    }, [navigation,handlefav ])

  return (
    <ScrollView style= {styles.MealRecipeScreen}>
    <View style={styles.MealCardContainer}>
    <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
    <Text style={styles.txt}>{selectedMeal.title}</Text>
    </View>
    <View style={styles.details}>
    <Text style={styles.dtxt}>DUR: {selectedMeal.duration}M</Text>
    <Text style={styles.dtxt}>{selectedMeal.complexity.toUpperCase()}</Text>
    <Text style={styles.dtxt}> {selectedMeal.affordability.toUpperCase()}</Text>
    </View> 
    <View >
    <Text style={styles.title}>INGREDIENTS </Text>
    {selectedMeal.ingredients.map((item, index)=>{
        return(
            <Text style={styles.listText } key={index}>{item}</Text>
        )
    })}
    </View>
    <View>
    <Text style={styles.title}>RECIPE</Text>
    {selectedMeal.steps.map((item, index)=>{
        return(
            <Text style={styles.listText }  key={index}>{item}</Text>
        )
    })}
    </View>
    </ScrollView>
  )
}

export default MealRecipeScreen

const styles = StyleSheet.create({
    MealRecipeScreen:{
        flex:1,
        backgroundColor: '#18122B'
    },
    MealCardContainer:{
        alignItems:'center'
    },
    image:{
        width:'90%',
        height:200,
        borderRadius: 8,
        margin: 10,
    },
    txt:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign:'center'
    },details:{
        flexDirection:'row',
        justifyContent: 'center'
    },
    dtxt:{
        marginHorizontal: 4
    },
    title:{
        fontSize: 18,
        fontWeight:'bold',
        borderBottomColor: 'white',
        borderBottomWidth:2,
        color: 'white',
        textAlign:'center',
        margin:8,
        backgroundColor: '#913175',
        borderRadius:4

    },
    listText:{
        textAlign: 'center',
        color:'white',
        margin: 6,
        fontSize:14
    }
})