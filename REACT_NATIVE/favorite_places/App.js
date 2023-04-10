import React, {useCameraDevices} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllPlacesScreen from './src/screens/AllPlacesScreen';
import AddPlaceScreen from './src/screens/AddPlaceScreen';
import IconButton from './src/components/IconButton';
import {Colors} from './src/Util/util';
import MapScreen from './src/screens/MapScreen';
import StoreProvider from './src/store/store';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: Colors.primary500},
            headerTintColor: Colors.accent300,
            contentStyle: {
              backgroundColor: Colors.accent500,
            },
          }}>
          <Stack.Screen
            name="AllPlaces"
            component={AllPlacesScreen}
            options={({navigation}) => ({
              headerRight: ({tintColor}) => (
                <IconButton
                  icon="plus"
                  color={tintColor}
                  size={22}
                  handleNav={() => {
                    navigation.navigate('AddPlace');
                  }}
                />
              ),
              title: 'Your Favorite Places',
            })}></Stack.Screen>
          <Stack.Screen
            name="AddPlace"
            component={AddPlaceScreen}
            options={{title: 'Add a new place'}}></Stack.Screen>
          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{title: 'Map'}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
