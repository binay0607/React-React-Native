import React from 'react';

import {Modal, SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpensesScreen from './screens/ManageExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import RecentExpensesScreen from './screens/RecentExpensesScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

import ExpenseContextProvider from './store/expenses-context';
const Stack= createNativeStackNavigator();
const BottomTab= createBottomTabNavigator();

const TabComponent=()=>{
  return(
  <BottomTab.Navigator screenOptions={({ route }) => ({tabBarIcon:({ focused, color, size }) => {
    let iconName;

    if (route.name === 'RecentExpenses') {
       iconName = 'hourglass';
        
    }
    else if (route.name === 'AllExpenses') {
       iconName =  'calendar';
    }
    color= focused? 'red' : 'white'
    // You can return any component that you like here!
    return <Icon name={iconName} size={20} color={color} />
  //  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
  } ,tabBarActiveTintColor: 'red', headerStyle: {backgroundColor: 'black'},headerTintColor:'white', tabBarStyle:{backgroundColor: 'black'}})}>
  <BottomTab.Screen name="AllExpenses"  component={AllExpensesScreen} options={{title:'All Expenses'}}></BottomTab.Screen>
  <BottomTab.Screen name='RecentExpenses' component={RecentExpensesScreen} options={{title:'Recent Expenses'}}></BottomTab.Screen>
  </BottomTab.Navigator>
  )
}
const App= () => {
  

  return (
    <ExpenseContextProvider>
    <NavigationContainer >
    <Stack.Navigator>
    <Stack.Screen name="Home" component={TabComponent} options={{headerShown: false}}></Stack.Screen>
    <Stack.Screen name= "ManageExpenses"  component={ManageExpensesScreen} options={{ title:"Manage Expenses", headerTintColor:'white',headerStyle:{backgroundColor: 'black'}}}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
    </ExpenseContextProvider>
  );
};

const styles = StyleSheet.create({

});

export default App;
