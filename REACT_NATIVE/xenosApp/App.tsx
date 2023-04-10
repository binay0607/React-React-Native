import React from 'react';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';
import Screen4 from './screens/Screen4';
import Screen5 from './screens/Screen5';
import Screen6 from './screens/Screen6';
import User from './screens/User';
import FriendUser from './screens/FriendUser';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { RootStackParamList } from './screens/RootStackParamsList';
import AddUser from './screens/AddUser';

const Stack = createStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#09020a'},
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="UserInfoScreen"
          component={User}
          options={{title: 'Profile'}}></Stack.Screen>
        <Stack.Screen
          name="FriendUserScreen"
          component={FriendUser}
          options={{title: 'Friend Profile'}}></Stack.Screen>
          <Stack.Screen
          name="AddUserScreen"
          component={AddUser}
          options={{title: 'Search for New Friends'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

