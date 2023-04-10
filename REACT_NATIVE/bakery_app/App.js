import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import HomeScreen from './src/Screens/HomeScreen';
import MenuScreen from './src/Screens/MenuScreen';
import CartScreen from './src/Screens/CartScreen';
import SuccessScreen from './src/Screens/SuccessScreen';
import DetailsScreen from './src/Screens/DetailsScreen';
import {Provider} from 'react-redux';
import store from './src/Store';
import 'react-native-gesture-handler';
const Stack = createSharedElementStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="MenuScreen"
            component={MenuScreen}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="CartScreen"
            component={CartScreen}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="SuccessScreen"
            component={SuccessScreen}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{title: 'Details'}}
            sharedElements={(route, otherRoute, showing) => {
              const {URL} = route.params;
              return [
                {id: `item.${route.params.item.id}.photo`, animation: 'move'},
              ];
            }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
