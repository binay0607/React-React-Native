import { StyleSheet, Text, ScrollView } from 'react-native'
import React, {useContext} from 'react' 
import { FavoriteContext } from '../store/favorites-context';
import { MEALS } from '../data/dummy-data'
import MealCard from '../components/MealCard';
const FavoriteScreen = () => {
    const favoriteMealsContext=  useContext(FavoriteContext);
    const meals= favoriteMealsContext.ids;

    
  return (
    <ScrollView style={styles.FavoriteScreen}>
    {meals.length===0 ? <Text style={styles.text}>No Favorite Meal Added.</Text> :null}
      {meals.map((item)=>{
        const meal=MEALS.find(meal=> meal.id==item);
        return(<MealCard key={meal.index} id={meal.id} title={meal.title} imageUrl={meal.imageUrl} 
            complexity= {meal.complexity} affordability= {meal.affordability} duration={meal.duration}/>)
      })}
    </ScrollView>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    FavoriteScreen:{
        flex:1,
        backgroundColor: '#18122B',
    },
    text:{
        textAlign: 'center',
        marginTop:290
    }
})