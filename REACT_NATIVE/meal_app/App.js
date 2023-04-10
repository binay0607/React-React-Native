import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CategoriesScreen from './src/screen/CategoriesScreen';
import MealsScreen from './src/screen/MealsScreen';
import MealRecipeScreen from './src/screen/MealRecipeScreen';
import FavoriteScreen from './src/screen/FavoriteScreen';
import FavoriteContextProvider from './src/store/favorites-context';
const Stack = createNativeStackNavigator();
const Drawer= createDrawerNavigator();

const DrawerNavigator= ()=>{
  return(
    <Drawer.Navigator 
    screenOptions={{ headerStyle: {backgroundColor: '#18122B'}, 
    headerTintColor: 'white',
    drawerContentStyle: {backgroundColor:'#18122B' , paddingTop: 10},
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: 'white',
    drawerActiveBackgroundColor: '#913175',
    }}>
    <Drawer.Screen name='MealsCategories' component={CategoriesScreen} options={{title: 'Meals Categories'}}/>
    <Drawer.Screen name='Favorite' component={FavoriteScreen} options={{title: 'Favorite Meals'}}/>
    </Drawer.Navigator>
  )
}

const App= () => {
  
  return (
    <FavoriteContextProvider>
    <NavigationContainer>
    
      <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#18122B'}, headerTintColor: 'white'}}>
        <Stack.Screen name='Drawer' component={DrawerNavigator} options={{headerShown: false}}/>
        <Stack.Screen name= 'MealsOverview' component={MealsScreen} options={{title: 'Meals Overview'}} />
        <Stack.Screen name= 'MealRecipe' component={MealRecipeScreen} options={{title: 'Meal Recipe'}}/>
      </Stack.Navigator>
  
    </NavigationContainer>
    </FavoriteContextProvider>
  )
};

const styles = StyleSheet.create({
  app:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
